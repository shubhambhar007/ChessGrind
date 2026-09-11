import fs from "node:fs/promises";
import path from "node:path";
import {
  fileURLToPath,
} from "node:url";
import { Chess } from "chess.js";

/*
 * -------------------------------------------------------
 * PATHS
 * -------------------------------------------------------
 *
 * Resolve paths relative to THIS SCRIPT instead of
 * process.cwd().
 *
 * This means both of these now work:
 *
 *   node scripts/import-puzzles.mjs
 *
 * and, from /scripts:
 *
 *   node import-puzzles.mjs
 */

const SCRIPT_FILE =
  fileURLToPath(
    import.meta.url
  );

const SCRIPT_DIR =
  path.dirname(
    SCRIPT_FILE
  );

const PROJECT_ROOT =
  path.resolve(
    SCRIPT_DIR,
    ".."
  );

const OUTPUT_FILE =
  path.join(
    PROJECT_ROOT,
    "data",
    "puzzles.ts"
  );

/*
 * -------------------------------------------------------
 * DATASET
 * -------------------------------------------------------
 */

const DATASET =
  "Lichess/chess-puzzles";

const CONFIG =
  "default";

const SPLIT =
  "train";

const TARGET_PER_DIFFICULTY = 40;

const PAGE_SIZE = 100;

const MAX_REQUESTS = 160;

/*
 * Keeping this fixed gives us approximately
 * reproducible sampling.
 */
const RANDOM_SEED =
  20260911;

/*
 * -------------------------------------------------------
 * TACTICAL THEMES
 * -------------------------------------------------------
 */

const TACTICAL_THEMES =
  new Set([
    "mate",
    "mateIn1",
    "mateIn2",
    "mateIn3",
    "mateIn4",
    "mateIn5",

    "fork",
    "pin",
    "skewer",

    "discoveredAttack",
    "discoveredCheck",
    "doubleCheck",

    "sacrifice",

    "attraction",
    "deflection",
    "clearance",
    "interference",

    "hangingPiece",
    "trappedPiece",

    "promotion",

    "backRankMate",
    "smotheredMate",
    "arabianMate",
    "anastasiaMate",
    "bodenMate",
    "hookMate",
    "doubleBishopMate",

    "exposedKing",
    "capturingDefender",
    "defensiveMove",

    "crushing",
    "advantage",
  ]);

/*
 * -------------------------------------------------------
 * RANDOM
 * -------------------------------------------------------
 */

function createSeededRandom(
  seed
) {
  let state =
    seed >>> 0;

  return function random() {
    state +=
      0x6d2b79f5;

    let value =
      state;

    value =
      Math.imul(
        value ^
          (value >>> 15),
        value | 1
      );

    value ^=
      value +
      Math.imul(
        value ^
          (value >>> 7),
        value | 61
      );

    return (
      (
        value ^
        (value >>> 14)
      ) >>>
      0
    ) / 4294967296;
  };
}

const random =
  createSeededRandom(
    RANDOM_SEED
  );

/*
 * -------------------------------------------------------
 * PUZZLE HELPERS
 * -------------------------------------------------------
 */

function getDifficulty(
  rating
) {
  if (
    rating >= 700 &&
    rating <= 1100
  ) {
    return "easy";
  }

  if (
    rating >= 1101 &&
    rating <= 1600
  ) {
    return "medium";
  }

  if (
    rating >= 1601 &&
    rating <= 2100
  ) {
    return "hard";
  }

  return null;
}

function getSolutionLength(
  moves
) {
  /*
   * Lichess:
   *
   * moves[0] = setup move
   * moves[1] = solver
   * moves[2] = opponent
   * moves[3] = solver
   *
   * Therefore:
   *
   * 4 total moves
   * => 2 solver moves
   */
  return Math.ceil(
    (moves.length - 1) / 2
  );
}

function parseThemes(
  value
) {
  if (
    Array.isArray(value)
  ) {
    return value
      .map(String)
      .filter(Boolean);
  }

  if (
    typeof value ===
    "string"
  ) {
    return value
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  return [];
}

function parseMoves(
  value
) {
  if (
    typeof value !==
    "string"
  ) {
    return [];
  }

  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function hasTacticalTheme(
  themes
) {
  return themes.some(
    (theme) =>
      TACTICAL_THEMES.has(
        theme
      )
  );
}

function getMateInNumber(
  themes
) {
  const theme =
    themes.find(
      (value) =>
        /^mateIn\d+$/i.test(
          value
        )
    );

  if (!theme) {
    return null;
  }

  const match =
    theme.match(/\d+/);

  if (!match) {
    return null;
  }

  return Number(
    match[0]
  );
}

/*
 * -------------------------------------------------------
 * CHESS VALIDATION
 * -------------------------------------------------------
 */

function applyUciMove(
  game,
  uci
) {
  if (
    typeof uci !==
      "string" ||
    uci.length < 4
  ) {
    return null;
  }

  const from =
    uci.slice(0, 2);

  const to =
    uci.slice(2, 4);

  const promotion =
    uci.length > 4
      ? uci[4]
      : undefined;

  try {
    if (promotion) {
      return game.move({
        from,
        to,
        promotion,
      });
    }

    return game.move({
      from,
      to,
    });
  } catch {
    return null;
  }
}

function validatePuzzle(
  puzzle
) {
  const errors = [];

  /*
   * Basic shape.
   */
  if (!puzzle.id) {
    errors.push(
      "missing puzzle ID"
    );
  }

  if (!puzzle.fen) {
    errors.push(
      "missing FEN"
    );
  }

  if (
    !Array.isArray(
      puzzle.moves
    ) ||
    puzzle.moves.length <
      2
  ) {
    errors.push(
      "not enough moves"
    );
  }

  if (
    errors.length > 0
  ) {
    return {
      valid: false,
      errors,
    };
  }

  /*
   * FEN validation.
   */
  let game;

  try {
    game =
      new Chess(
        puzzle.fen
      );
  } catch {
    errors.push(
      "invalid FEN"
    );

    return {
      valid: false,
      errors,
    };
  }

  /*
   * Validate EVERY move in the
   * stored Lichess line.
   */
  for (
    let index = 0;
    index <
    puzzle.moves.length;
    index++
  ) {
    const uci =
      puzzle.moves[index];

    const result =
      applyUciMove(
        game,
        uci
      );

    if (!result) {
      errors.push(
        `illegal move ${uci} at index ${index}`
      );

      return {
        valid: false,
        errors,
      };
    }

    /*
     * The setup move should not
     * immediately end the game,
     * otherwise the user never
     * gets a turn.
     */
    if (
      index === 0 &&
      game.isGameOver()
    ) {
      errors.push(
        "game ends after setup move"
      );

      return {
        valid: false,
        errors,
      };
    }
  }

  /*
   * Mate puzzles should actually
   * finish in checkmate.
   */
  const hasMateTheme =
    puzzle.themes.includes(
      "mate"
    ) ||
    puzzle.themes.some(
      (theme) =>
        /^mateIn\d+$/i.test(
          theme
        )
    );

  if (
    hasMateTheme &&
    !game.isCheckmate()
  ) {
    errors.push(
      "mate puzzle does not end in checkmate"
    );
  }

  /*
   * mateInN should agree with
   * number of solver moves.
   */
  const mateIn =
    getMateInNumber(
      puzzle.themes
    );

  if (
    mateIn !== null &&
    mateIn !==
      puzzle.solutionLength
  ) {
    errors.push(
      `mateIn${mateIn} does not match solution length ${puzzle.solutionLength}`
    );
  }

  return {
    valid:
      errors.length ===
      0,

    errors,
  };
}

/*
 * -------------------------------------------------------
 * QUALITY FILTER
 * -------------------------------------------------------
 */

function isGoodPuzzle(
  row
) {
  if (!row) {
    return false;
  }

  const rating =
    Number(row.Rating);

  const popularity =
    Number(
      row.Popularity
    );

  const nbPlays =
    Number(row.NbPlays);

  const ratingDeviation =
    Number(
      row.RatingDeviation
    );

  const difficulty =
    getDifficulty(
      rating
    );

  if (!difficulty) {
    return false;
  }

  /*
   * Strong community approval.
   */
  if (
    !Number.isFinite(
      popularity
    ) ||
    popularity < 85
  ) {
    return false;
  }

  /*
   * Avoid puzzles with almost no
   * solving history.
   */
  if (
    !Number.isFinite(
      nbPlays
    ) ||
    nbPlays < 100
  ) {
    return false;
  }

  /*
   * Avoid wildly uncertain ratings.
   */
  if (
    Number.isFinite(
      ratingDeviation
    ) &&
    ratingDeviation > 130
  ) {
    return false;
  }

  if (
    !row.FEN ||
    !row.Moves ||
    !row.PuzzleId
  ) {
    return false;
  }

  const moves =
    parseMoves(
      row.Moves
    );

  const solutionLength =
    getSolutionLength(
      moves
    );

  /*
   * Keep MVP puzzles short.
   */
  if (
    solutionLength < 1 ||
    solutionLength > 3
  ) {
    return false;
  }

  const themes =
    parseThemes(
      row.Themes
    );

  if (
    themes.includes(
      "veryLong"
    )
  ) {
    return false;
  }

  if (
    !hasTacticalTheme(
      themes
    )
  ) {
    return false;
  }

  return true;
}

/*
 * -------------------------------------------------------
 * NORMALIZATION
 * -------------------------------------------------------
 */

function normalizeGameUrl(
  row
) {
  /*
   * Current Lichess dataset usually
   * exposes GameUrl directly.
   */
  if (
    typeof row.GameUrl ===
      "string" &&
    row.GameUrl
  ) {
    return row.GameUrl;
  }

  /*
   * Fallback in case another mirror
   * exposes only a game ID.
   */
  if (
    typeof row.GameId ===
      "string" &&
    row.GameId
  ) {
    return `https://lichess.org/${row.GameId}`;
  }

  return "";
}

function normalizePuzzle(
  row
) {
  const rating =
    Number(row.Rating);

  const moves =
    parseMoves(
      row.Moves
    );

  const themes =
    parseThemes(
      row.Themes
    );

  return {
    id:
      String(
        row.PuzzleId
      ),

    fen:
      String(
        row.FEN
      ),

    moves,

    rating,

    ratingDeviation:
      Number(
        row.RatingDeviation
      ),

    popularity:
      Number(
        row.Popularity
      ),

    nbPlays:
      Number(
        row.NbPlays
      ),

    themes,

    gameUrl:
      normalizeGameUrl(
        row
      ),

    difficulty:
      getDifficulty(
        rating
      ),

    solutionLength:
      getSolutionLength(
        moves
      ),
  };
}

/*
 * -------------------------------------------------------
 * FETCHING
 * -------------------------------------------------------
 */

async function fetchRows(
  offset,
  length
) {
  const url =
    new URL(
      "https://datasets-server.huggingface.co/rows"
    );

  url.searchParams.set(
    "dataset",
    DATASET
  );

  url.searchParams.set(
    "config",
    CONFIG
  );

  url.searchParams.set(
    "split",
    SPLIT
  );

  url.searchParams.set(
    "offset",
    String(offset)
  );

  url.searchParams.set(
    "length",
    String(length)
  );

  let lastError;

  for (
    let attempt = 1;
    attempt <= 4;
    attempt++
  ) {
    try {
      const response =
        await fetch(url);

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status} ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      lastError =
        error;

      console.log(
        `Request failed (${attempt}/4). Retrying...`
      );

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            attempt * 1000
          )
      );
    }
  }

  throw lastError;
}

/*
 * -------------------------------------------------------
 * SHUFFLING
 * -------------------------------------------------------
 */

function shuffle(
  array
) {
  const result =
    [...array];

  for (
    let index =
      result.length - 1;
    index > 0;
    index--
  ) {
    const swapIndex =
      Math.floor(
        random() *
          (index + 1)
      );

    [
      result[index],
      result[swapIndex],
    ] = [
      result[swapIndex],
      result[index],
    ];
  }

  return result;
}

function interleaveBuckets(
  buckets
) {
  const easy =
    shuffle(
      buckets.easy
    );

  const medium =
    shuffle(
      buckets.medium
    );

  const hard =
    shuffle(
      buckets.hard
    );

  const output = [];

  for (
    let index = 0;
    index <
    TARGET_PER_DIFFICULTY;
    index++
  ) {
    output.push(
      easy[index],
      medium[index],
      hard[index]
    );
  }

  return output;
}

/*
 * -------------------------------------------------------
 * FINAL COLLECTION VALIDATION
 * -------------------------------------------------------
 */

function validateCollection(
  puzzles
) {
  const errors = [];

  const ids =
    new Set();

  for (
    const puzzle of
    puzzles
  ) {
    if (
      ids.has(
        puzzle.id
      )
    ) {
      errors.push(
        `${puzzle.id}: duplicate ID`
      );
    }

    ids.add(
      puzzle.id
    );

    const validation =
      validatePuzzle(
        puzzle
      );

    if (
      !validation.valid
    ) {
      for (
        const error of
        validation.errors
      ) {
        errors.push(
          `${puzzle.id}: ${error}`
        );
      }
    }
  }

  return errors;
}

/*
 * -------------------------------------------------------
 * TYPESCRIPT OUTPUT
 * -------------------------------------------------------
 */

function buildTypescriptFile(
  puzzles
) {
  const serialized =
    JSON.stringify(
      puzzles,
      null,
      2
    );

  return `/*
 * AUTO-GENERATED FILE.
 *
 * Generated by:
 *   node scripts/import-puzzles.mjs
 *
 * Source:
 *   Lichess Chess Puzzle Database
 *
 * Every puzzle in this file was validated with chess.js
 * before being written.
 *
 * Do not manually edit puzzle entries here.
 */

export type PuzzleDifficulty =
  | "easy"
  | "medium"
  | "hard";

export type Puzzle = {
  id: string;

  /*
   * Position BEFORE the opponent's
   * setup move.
   */
  fen: string;

  /*
   * Lichess puzzle format:
   *
   * moves[0] = opponent/setup move
   * moves[1] = solver move
   * moves[2] = opponent response
   * moves[3] = solver move
   * ...
   *
   * Moves use UCI notation.
   *
   * Promotion example:
   * a7a8q
   */
  moves: string[];

  rating: number;
  ratingDeviation: number;

  popularity: number;
  nbPlays: number;

  themes: string[];

  gameUrl: string;

  difficulty:
    PuzzleDifficulty;

  /*
   * Number of moves made by the solver,
   * excluding opponent responses.
   */
  solutionLength: number;
};

export const puzzles: Puzzle[] =
${serialized};
`;
}

/*
 * -------------------------------------------------------
 * MAIN
 * -------------------------------------------------------
 */

async function main() {
  console.log("");

  console.log(
    "♞ ChessGrind Puzzle Importer"
  );

  console.log(
    "────────────────────────────────"
  );

  console.log(
    "Checking Lichess dataset..."
  );

  const initial =
    await fetchRows(
      0,
      1
    );

  const totalRows =
    Number(
      initial.num_rows_total
    );

  if (
    !Number.isFinite(
      totalRows
    ) ||
    totalRows < 1
  ) {
    throw new Error(
      "Could not determine dataset size."
    );
  }

  console.log(
    `Dataset contains ${totalRows.toLocaleString()} puzzles.`
  );

  console.log("");

  const buckets = {
    easy: [],
    medium: [],
    hard: [],
  };

  const seenIds =
    new Set();

  let requests = 0;

  let qualityRejected = 0;

  let validationRejected = 0;

  const validationExamples = [];

  while (
    (
      buckets.easy.length <
        TARGET_PER_DIFFICULTY ||
      buckets.medium.length <
        TARGET_PER_DIFFICULTY ||
      buckets.hard.length <
        TARGET_PER_DIFFICULTY
    ) &&
    requests <
      MAX_REQUESTS
  ) {
    requests++;

    const maxOffset =
      Math.max(
        0,
        totalRows -
          PAGE_SIZE
      );

    const offset =
      Math.floor(
        random() *
          maxOffset
      );

    console.log(
      `Sampling ${requests}/${MAX_REQUESTS} — row ${offset.toLocaleString()}`
    );

    const data =
      await fetchRows(
        offset,
        PAGE_SIZE
      );

    const rows =
      Array.isArray(
        data.rows
      )
        ? data.rows
        : [];

    for (
      const item of rows
    ) {
      const row =
        item.row;

      if (
        !isGoodPuzzle(
          row
        )
      ) {
        qualityRejected++;

        continue;
      }

      const puzzle =
        normalizePuzzle(
          row
        );

      if (
        seenIds.has(
          puzzle.id
        )
      ) {
        continue;
      }

      /*
       * Validate before accepting the
       * puzzle into a bucket.
       */
      const validation =
        validatePuzzle(
          puzzle
        );

      if (
        !validation.valid
      ) {
        validationRejected++;

        if (
          validationExamples.length <
          5
        ) {
          validationExamples.push(
            {
              id:
                puzzle.id,

              errors:
                validation.errors,
            }
          );
        }

        continue;
      }

      const difficulty =
        puzzle.difficulty;

      if (!difficulty) {
        continue;
      }

      if (
        buckets[
          difficulty
        ].length >=
        TARGET_PER_DIFFICULTY
      ) {
        continue;
      }

      seenIds.add(
        puzzle.id
      );

      buckets[
        difficulty
      ].push(
        puzzle
      );
    }

    console.log(
      [
        `  Easy ${buckets.easy.length}/${TARGET_PER_DIFFICULTY}`,
        `Medium ${buckets.medium.length}/${TARGET_PER_DIFFICULTY}`,
        `Hard ${buckets.hard.length}/${TARGET_PER_DIFFICULTY}`,
      ].join(
        " · "
      )
    );
  }

  const incomplete =
    Object.entries(
      buckets
    ).filter(
      ([, values]) =>
        values.length <
        TARGET_PER_DIFFICULTY
    );

  if (
    incomplete.length >
    0
  ) {
    console.log("");

    console.log(
      "Could not fill every difficulty bucket."
    );

    console.log(
      `Easy: ${buckets.easy.length}`
    );

    console.log(
      `Medium: ${buckets.medium.length}`
    );

    console.log(
      `Hard: ${buckets.hard.length}`
    );

    console.log("");

    console.log(
      "Try running again or increase MAX_REQUESTS."
    );

    process.exit(1);
  }

  const finalPuzzles =
    interleaveBuckets(
      buckets
    );

  /*
   * One final defensive validation
   * of the complete collection.
   */
  console.log("");

  console.log(
    "Running final collection validation..."
  );

  const collectionErrors =
    validateCollection(
      finalPuzzles
    );

  if (
    collectionErrors.length >
    0
  ) {
    console.error("");

    console.error(
      "❌ Final validation failed."
    );

    for (
      const error of
      collectionErrors.slice(
        0,
        20
      )
    ) {
      console.error(
        `  ${error}`
      );
    }

    process.exit(1);
  }

  const output =
    buildTypescriptFile(
      finalPuzzles
    );

  await fs.mkdir(
    path.dirname(
      OUTPUT_FILE
    ),
    {
      recursive: true,
    }
  );

  await fs.writeFile(
    OUTPUT_FILE,
    output,
    "utf8"
  );

  console.log("");

  console.log(
    "────────────────────────────────"
  );

  console.log(
    `✓ Generated ${finalPuzzles.length} validated puzzles`
  );

  console.log(
    `✓ ${TARGET_PER_DIFFICULTY} easy`
  );

  console.log(
    `✓ ${TARGET_PER_DIFFICULTY} medium`
  );

  console.log(
    `✓ ${TARGET_PER_DIFFICULTY} hard`
  );

  console.log(
    "✓ Every FEN parsed successfully"
  );

  console.log(
    "✓ Every setup move is legal"
  );

  console.log(
    "✓ Every solution move is legal"
  );

  console.log(
    "✓ Mate puzzles verified"
  );

  console.log(
    "✓ No duplicate IDs"
  );

  console.log("");

  console.log(
    `Quality-filter rejects: ${qualityRejected}`
  );

  console.log(
    `Chess-validation rejects: ${validationRejected}`
  );

  if (
    validationExamples.length >
    0
  ) {
    console.log("");

    console.log(
      "Example rejected puzzles:"
    );

    for (
      const example of
      validationExamples
    ) {
      console.log(
        `  ${example.id}: ${example.errors.join(", ")}`
      );
    }
  }

  console.log("");

  console.log(
    `✓ Written to:`
  );

  console.log(
    `  ${OUTPUT_FILE}`
  );

  console.log("");
}

main().catch(
  (error) => {
    console.error("");

    console.error(
      "❌ Import failed:"
    );

    console.error(
      error
    );

    process.exit(1);
  }
);
