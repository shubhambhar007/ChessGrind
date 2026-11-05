/*
 * CHESSGRIND ORIGINAL PUZZLES
 *
 * Generated from complete, locally played legal games and verified twice
 * with Stockfish. The generator rejects positions where the non-moving king
 * is attacked, king-capture moves, unstable best moves, and ambiguous answers.
 * No external puzzle database or chess-service account is used.
 *
 * Run: STOCKFISH_PATH=/path/to/stockfish npm run puzzles:generate
 */

export type PuzzleDifficulty = "easy" | "medium" | "hard";

export type Puzzle = {
  id: string;
  fen: string;
  moves: string[];
  rating: number;
  themes: string[];
  difficulty: PuzzleDifficulty;
  solutionLength: number;
  source: "ChessGrind Original";
  verification: { engine: "Stockfish 19"; nodes: number; scoreGap: number };
};

export const puzzles: Puzzle[] = [
  {
    "id": "CG-0001",
    "fen": "r1bqkb1r/ppppppB1/7p/8/8/1P1P4/P1PP1PPP/RN1QKBNR b KQkq - 0 6",
    "moves": [
      "f8g7"
    ],
    "rating": 1476,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 351
    }
  },
  {
    "id": "CG-0002",
    "fen": "r1bqkb1r/p1ppppB1/7p/1p6/8/1P1P4/P1PPBPPP/RN1QK1NR b KQkq - 1 7",
    "moves": [
      "f8g7"
    ],
    "rating": 1307,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 321
    }
  },
  {
    "id": "CG-0003",
    "fen": "r2qkb1r/pbppppB1/7p/1p6/8/1P1P4/P1PPBPPP/RN1QK1NR w KQkq - 2 8",
    "moves": [
      "g7h8"
    ],
    "rating": 1782,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 157
    }
  },
  {
    "id": "CG-0004",
    "fen": "r2q4/p2p1p2/4k2p/7B/3P4/1P1K3b/P1PP1PrP/R2Q2NR b - - 1 16",
    "moves": [
      "h3f5"
    ],
    "rating": 1052,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 672
    }
  },
  {
    "id": "CG-0005",
    "fen": "r2q4/p2p1p2/4k2p/7B/3P4/1P1K2rb/P1PP1P1P/R2Q2NR w - - 2 17",
    "moves": [
      "h2g3"
    ],
    "rating": 1945,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 154
    }
  },
  {
    "id": "CG-0006",
    "fen": "r2q4/p4p2/4k2p/3p3B/3P4/1P1K2Pb/P1PP1P2/R4QNR b - - 1 18",
    "moves": [
      "h3f1"
    ],
    "rating": 887,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 312
    }
  },
  {
    "id": "CG-0007",
    "fen": "r7/p7/4k2p/3p1p2/2qP2B1/1P1K2PR/P1PP1P2/R4QN1 w - - 3 21",
    "moves": [
      "b3c4"
    ],
    "rating": 914,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 498
    }
  },
  {
    "id": "CG-0008",
    "fen": "1r6/p7/7p/3k1p2/3P2B1/3K2PR/P1PP1PQ1/R5N1 b - - 1 23",
    "moves": [
      "d5d6"
    ],
    "rating": 985,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 96021
    }
  },
  {
    "id": "CG-0009",
    "fen": "3r4/p7/3k3R/5p2/3P2B1/3K1PP1/P1PP2Q1/R5N1 b - - 0 25",
    "moves": [
      "d6c7"
    ],
    "rating": 990,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97459
    }
  },
  {
    "id": "CG-0010",
    "fen": "3r4/p2k4/7R/5p2/3P2B1/3K1PP1/P1PP2Q1/R5N1 w - - 1 26",
    "moves": [
      "g4f5"
    ],
    "rating": 1895,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0011",
    "fen": "3r4/p2k4/3R4/5p2/3P2B1/3K1PP1/P1PP2Q1/R5N1 b - - 2 26",
    "moves": [
      "d7d6"
    ],
    "rating": 1483,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 412
    }
  },
  {
    "id": "CG-0012",
    "fen": "3k4/p7/8/5p2/3P2B1/3K1PP1/P1PP2Q1/R5N1 w - - 0 28",
    "moves": [
      "g4f5"
    ],
    "rating": 1050,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97324
    }
  },
  {
    "id": "CG-0013",
    "fen": "r1bqk1nr/pppppp2/n5pp/8/P7/3P1N2/1b1NPPPP/R1BQKB1R w KQkq - 0 7",
    "moves": [
      "c1b2"
    ],
    "rating": 978,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 884
    }
  },
  {
    "id": "CG-0014",
    "fen": "r1bqk1nr/pppp1p2/n3p1pp/8/P7/1Q1P1N2/3NPPPP/1Rb1KB1R w Kkq - 0 9",
    "moves": [
      "b1c1"
    ],
    "rating": 1019,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 633
    }
  },
  {
    "id": "CG-0015",
    "fen": "r1b1k1nr/p7/np2pppp/8/2P5/q4N2/2N1PPPP/2R1KBR1 w k - 2 18",
    "moves": [
      "c2a3"
    ],
    "rating": 1047,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 812
    }
  },
  {
    "id": "CG-0016",
    "fen": "r1b1k1nr/p7/np2pppp/8/2P1P3/q4N2/2N2PPP/2R1KBR1 b k - 0 18",
    "moves": [
      "a3c1"
    ],
    "rating": 882,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 574
    }
  },
  {
    "id": "CG-0017",
    "fen": "r1b1k1nr/p7/np2pp1p/6p1/2P1P3/q4N2/2N2PPP/2R1KBR1 w k - 0 19",
    "moves": [
      "c2a3"
    ],
    "rating": 1026,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 737
    }
  },
  {
    "id": "CG-0018",
    "fen": "r1b1k1nr/p7/np2pp1p/6p1/2P1P3/q4N1P/2N2PP1/2R1KBR1 b k - 0 19",
    "moves": [
      "a3c1"
    ],
    "rating": 1089,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 538
    }
  },
  {
    "id": "CG-0019",
    "fen": "r1b1k1nr/p7/1p2pp1p/6p1/1nP1P3/q4N1P/2N2PP1/2R1KBR1 w k - 1 20",
    "moves": [
      "c2a3"
    ],
    "rating": 975,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 845
    }
  },
  {
    "id": "CG-0020",
    "fen": "r1b1k1nr/p7/1p2pp1p/6p1/1NP1P3/q4N1P/5PP1/2R1KBR1 b k - 0 20",
    "moves": [
      "a3c1"
    ],
    "rating": 1873,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 186
    }
  },
  {
    "id": "CG-0021",
    "fen": "r1b1k1n1/p6r/1p2pp1p/6p1/2P1P3/q4N1P/2N2PP1/2R1KBR1 b - - 2 21",
    "moves": [
      "a3c1"
    ],
    "rating": 981,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 521
    }
  },
  {
    "id": "CG-0022",
    "fen": "r1b1k1n1/p6r/1p2pp1p/6p1/2qNP3/7P/2N2PP1/2R1KBR1 w - - 0 23",
    "moves": [
      "f1c4"
    ],
    "rating": 1078,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 959
    }
  },
  {
    "id": "CG-0023",
    "fen": "1n1qkb1r/1pp1pppp/4N3/8/r1p3n1/7P/P1PPP1P1/R1BQKB1R w KQk - 0 11",
    "moves": [
      "e6d8"
    ],
    "rating": 1065,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 405
    }
  },
  {
    "id": "CG-0024",
    "fen": "1n1qkb1r/1pp1ppNp/8/8/r1p3n1/7P/P1PPP1P1/R1BQKB1R b KQk - 0 11",
    "moves": [
      "f8g7"
    ],
    "rating": 1523,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 284
    }
  },
  {
    "id": "CG-0025",
    "fen": "1n1qk2r/1pp1ppbp/8/8/r1p3n1/7P/P1PPP1P1/R1BQKB1R w KQk - 0 12",
    "moves": [
      "c2c3"
    ],
    "rating": 1515,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 406
    }
  },
  {
    "id": "CG-0026",
    "fen": "1n1qk2r/1pp1ppbp/8/8/r1p3n1/P6P/2PPP1P1/R1BQKB1R b KQk - 0 12",
    "moves": [
      "d8d6"
    ],
    "rating": 936,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98862
    }
  },
  {
    "id": "CG-0027",
    "fen": "1n1q3r/1ppkppbp/8/8/r1p3n1/P6P/2PPP1P1/R1BQKB1R w KQ - 1 13",
    "moves": [
      "c2c3"
    ],
    "rating": 1324,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 419
    }
  },
  {
    "id": "CG-0028",
    "fen": "3kq2r/1pp1R3/n4p2/8/r1p3P1/P7/2PPP1P1/b1BQKB2 w - - 1 18",
    "moves": [
      "e7e8"
    ],
    "rating": 1056,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1019
    }
  },
  {
    "id": "CG-0029",
    "fen": "3k4/1pp4r/n4p2/8/r3q1P1/P1pP4/2P3P1/b1BQKB2 w - - 0 21",
    "moves": [
      "d3e4"
    ],
    "rating": 851,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1263
    }
  },
  {
    "id": "CG-0030",
    "fen": "2bq3r/rppknp2/p3p2p/3p2pn/3P3P/1PK2P1R/P1PQP1P1/R1B2B2 w - - 0 15",
    "moves": [
      "h4g5"
    ],
    "rating": 1503,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 318
    }
  },
  {
    "id": "CG-0031",
    "fen": "2bqr3/rppknp2/p6p/3pp2n/3PP2p/PPKB1P1R/2PQ2P1/R1B5 w - - 0 18",
    "moves": [
      "h3h4"
    ],
    "rating": 1725,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 114
    }
  },
  {
    "id": "CG-0032",
    "fen": "r2qr3/1pp1np2/p2k3p/3Pp2n/3P2bQ/PPKB1P2/2P3P1/R1B4R b - - 0 21",
    "moves": [
      "e7d5"
    ],
    "rating": 1939,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 164
    }
  },
  {
    "id": "CG-0033",
    "fen": "r2qr3/1pp1np2/p2k1n1p/3Pp3/3P2bQ/PPKB1P2/2P3P1/R1B4R w - - 1 22",
    "moves": [
      "h4f6"
    ],
    "rating": 1916,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 130
    }
  },
  {
    "id": "CG-0034",
    "fen": "r2qr3/1pp1np2/3k1n1p/p2Pp1Q1/3P2b1/PPKB1P2/2P3P1/R1B4R w - - 0 23",
    "moves": [
      "g5f6"
    ],
    "rating": 1413,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 444
    }
  },
  {
    "id": "CG-0035",
    "fen": "r2qr3/1p2np2/3k1n1p/p1pPp1Q1/3P2P1/PPKB4/2P3P1/R1B4R w - c6 0 24",
    "moves": [
      "g5f6"
    ],
    "rating": 1783,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 142
    }
  },
  {
    "id": "CG-0036",
    "fen": "r1b1kb2/pp2n1pr/nq2p3/2Pp1p1p/5P2/2N3PN/PPPQP2P/2R1KBBR w Kq - 6 11",
    "moves": [
      "c5b6"
    ],
    "rating": 943,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 137
    }
  },
  {
    "id": "CG-0037",
    "fen": "r1b1kb2/pp2n1pr/nq2p3/2PN1p1p/5P2/6PN/PPPQP2P/2R1KBBR b Kq - 0 11",
    "moves": [
      "b6b2"
    ],
    "rating": 1867,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 139
    }
  },
  {
    "id": "CG-0038",
    "fen": "r1b1kb2/ppN1n1pr/n2qp3/2P2p1p/5P2/6PN/PPPQP2P/2R1KBBR b Kq - 2 12",
    "moves": [
      "d6c7"
    ],
    "rating": 1062,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1121
    }
  },
  {
    "id": "CG-0039",
    "fen": "r1b1kb2/ppn1n1pr/3qp3/2P2p1p/5P2/6PN/PPPQP2P/2R1KBBR w Kq - 0 13",
    "moves": [
      "c5d6"
    ],
    "rating": 947,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 180
    }
  },
  {
    "id": "CG-0040",
    "fen": "r1b1kb2/ppn1n1pr/3qp3/2P2p1p/5P2/6P1/PPPQPN1P/2R1KBBR b Kq - 1 13",
    "moves": [
      "d6d2"
    ],
    "rating": 1041,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 109
    }
  },
  {
    "id": "CG-0041",
    "fen": "r1b1kb2/ppn1n1pr/4p3/2P2p1p/3q1P2/6P1/PPPQPN1P/2R1KBBR w Kq - 2 14",
    "moves": [
      "d2d4"
    ],
    "rating": 912,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 985
    }
  },
  {
    "id": "CG-0042",
    "fen": "r1b1kb2/ppn1n1pr/4p3/2P2p1p/3q1P2/P5P1/1PPQPN1P/2R1KBBR b Kq - 0 14",
    "moves": [
      "d4d2"
    ],
    "rating": 1065,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 232
    }
  },
  {
    "id": "CG-0043",
    "fen": "r1b1kbn1/1p4pr/4p3/p1Pn1p1p/4BP2/P2K2P1/1PP1PN1P/2R3BR b q - 3 18",
    "moves": [
      "f5e4"
    ],
    "rating": 1420,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 263
    }
  },
  {
    "id": "CG-0044",
    "fen": "r1b1kbn1/1p4pr/8/p1Pnpp1p/4BP2/P2K2P1/1PP1PN1P/2R3BR w q - 0 19",
    "moves": [
      "e4d5"
    ],
    "rating": 1000,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 577
    }
  },
  {
    "id": "CG-0045",
    "fen": "r3kb2/1p2n1pr/8/p1P2p1p/b1K1B1P1/2PN1p1P/2P1P3/2R3BR b q - 0 26",
    "moves": [
      "f5e4"
    ],
    "rating": 1761,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 229
    }
  },
  {
    "id": "CG-0046",
    "fen": "r3kb2/1p2n1pr/8/p1P4p/b1K1p1P1/2PNBp1P/2P1P3/2R4R b q - 1 27",
    "moves": [
      "e4d3"
    ],
    "rating": 1952,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 114
    }
  },
  {
    "id": "CG-0047",
    "fen": "2kr1b2/1p4pr/8/p1P2n1p/bNK1p1P1/2P1Bp1P/2P1P3/2R4R w - - 4 29",
    "moves": [
      "g4f5"
    ],
    "rating": 1386,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 344
    }
  },
  {
    "id": "CG-0048",
    "fen": "2kr1b2/1p4pr/8/pbP2n1P/1NK1p3/2P1Bp1P/2P1P3/2R4R w - - 1 30",
    "moves": [
      "c4b5"
    ],
    "rating": 1745,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 144
    }
  },
  {
    "id": "CG-0049",
    "fen": "2kr1b2/1p4pr/8/pKP2n1P/1N2p3/2P1Bp1P/2P1P3/2R4R b - - 0 30",
    "moves": [
      "f5e3"
    ],
    "rating": 1736,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 201
    }
  },
  {
    "id": "CG-0050",
    "fen": "2k2b2/3r2pr/2K5/2P4P/p3p3/2P2p1P/2P1P1R1/3n4 b - - 1 35",
    "moves": [
      "f3g2"
    ],
    "rating": 1402,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 313
    }
  },
  {
    "id": "CG-0051",
    "fen": "2k2b2/2r3p1/1K4R1/2P4r/p3p3/2P2p1P/2P1P3/3n4 b - - 1 37",
    "moves": [
      "f8c5"
    ],
    "rating": 1081,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97882
    }
  },
  {
    "id": "CG-0052",
    "fen": "2k5/2r3p1/3b2R1/1KP4r/p3p3/2P2p1P/2P1P3/3n4 b - - 3 38",
    "moves": [
      "h5c5"
    ],
    "rating": 895,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98210
    }
  },
  {
    "id": "CG-0053",
    "fen": "1rbqkb1r/pp1ppppp/2p5/8/1n2PBB1/3P4/P1P2PPP/RN1QK1NR w KQk - 0 9",
    "moves": [
      "f4b8"
    ],
    "rating": 1808,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 189
    }
  },
  {
    "id": "CG-0054",
    "fen": "1rb1kb1r/ppqppppp/2p5/8/1n2PBB1/3P4/P1P1NPPP/RN1QK2R w KQk - 2 10",
    "moves": [
      "f4c7"
    ],
    "rating": 915,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 214
    }
  },
  {
    "id": "CG-0055",
    "fen": "1rb1kb1r/pp1qpppp/2p5/8/1n2PB2/3P4/P1P1NPPP/RN1QK2R w KQk - 0 11",
    "moves": [
      "f4b8"
    ],
    "rating": 947,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 631
    }
  },
  {
    "id": "CG-0056",
    "fen": "1Bb1kb1r/pp2pppp/2p5/8/1n2P3/3q4/P1P1NPPP/RN1QK2R w KQk - 0 12",
    "moves": [
      "c2d3"
    ],
    "rating": 1035,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 270
    }
  },
  {
    "id": "CG-0057",
    "fen": "1Bb1kb1r/pp2pppp/2p5/8/1n2P3/3Q4/P1P1NPPP/RN2K2R b KQk - 0 12",
    "moves": [
      "b4d3"
    ],
    "rating": 997,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 170
    }
  },
  {
    "id": "CG-0058",
    "fen": "1Bb1kb1r/p3pppp/1pp5/8/1n2P3/N2Q4/P1P1NPPP/R3K2R b KQk - 1 13",
    "moves": [
      "b4d3"
    ],
    "rating": 1034,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 309
    }
  },
  {
    "id": "CG-0059",
    "fen": "1r4k1/4ppb1/pp2b1pQ/2p5/4P1P1/N1N5/R1P2P1P/5RK1 b - - 0 22",
    "moves": [
      "g7h6"
    ],
    "rating": 968,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 244
    }
  },
  {
    "id": "CG-0060",
    "fen": "1r4k1/4pp2/pp2b1pb/2p5/4P1P1/N1N5/R1P2PKP/5R2 b - - 1 23",
    "moves": [
      "e6a2"
    ],
    "rating": 1490,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 261
    }
  },
  {
    "id": "CG-0061",
    "fen": "1r4k1/4pp2/pp2b1p1/1Np5/4P1P1/N7/R1Pb1PKP/5R2 b - - 3 24",
    "moves": [
      "e6a2"
    ],
    "rating": 1485,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 266
    }
  },
  {
    "id": "CG-0062",
    "fen": "1r4k1/8/pp1p2p1/2p2p2/2P1P1b1/N7/R2b1PKP/5R2 w - - 0 27",
    "moves": [
      "a2d2"
    ],
    "rating": 1737,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 212
    }
  },
  {
    "id": "CG-0063",
    "fen": "1r4k1/8/pp1p2p1/2p2p2/2P1P1b1/N7/R2b1PKP/3R4 b - - 1 27",
    "moves": [
      "g4d1"
    ],
    "rating": 1849,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 90
    }
  },
  {
    "id": "CG-0064",
    "fen": "5rk1/8/pp1p2p1/2p2p2/2P1P1b1/N7/R2b1PKP/3R4 w - - 2 28",
    "moves": [
      "d1d2"
    ],
    "rating": 1908,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 211
    }
  },
  {
    "id": "CG-0065",
    "fen": "5rk1/8/pp1p2p1/2p2p2/2P1P3/N4b2/R2b1PKP/R7 w - - 4 29",
    "moves": [
      "g2f3"
    ],
    "rating": 1321,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 280
    }
  },
  {
    "id": "CG-0066",
    "fen": "5rk1/8/pp1p2p1/2p5/2P1Pp2/N4bK1/R2b1P1P/R7 w - - 0 30",
    "moves": [
      "g3f3"
    ],
    "rating": 895,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1217
    }
  },
  {
    "id": "CG-0067",
    "fen": "5rk1/8/pp1p2p1/2p5/2P1Pp1K/N4b2/R2b1P1P/R7 b - - 1 30",
    "moves": [
      "d2c3"
    ],
    "rating": 1492,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 383
    }
  },
  {
    "id": "CG-0068",
    "fen": "5rk1/8/pp1p4/2p3p1/2P1Pp1K/N4b2/R2b1P1P/R7 w - - 0 31",
    "moves": [
      "h4g5"
    ],
    "rating": 1090,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99660
    }
  },
  {
    "id": "CG-0069",
    "fen": "5rk1/8/pp1p4/2p3K1/2P1bp2/N7/R2b1P1P/R7 w - - 0 32",
    "moves": [
      "a2d2"
    ],
    "rating": 1766,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 203
    }
  },
  {
    "id": "CG-0070",
    "fen": "6k1/2r5/p4R1K/2p5/2P2p2/N6P/b4P2/5R2 w - - 3 40",
    "moves": [
      "f1g1"
    ],
    "rating": 908,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98838
    }
  },
  {
    "id": "CG-0071",
    "fen": "rnbqk1nr/pppp2pp/3bp3/5p2/1P3P2/2P2N1P/P2PPKP1/RNBQ1B1R b kq - 2 6",
    "moves": [
      "d6f4"
    ],
    "rating": 1887,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 93
    }
  },
  {
    "id": "CG-0072",
    "fen": "rnbqk2r/ppppn1pp/3bp3/5p2/1P3P1P/2P2N2/P2PPKP1/RNBQ1B1R b kq - 0 7",
    "moves": [
      "d6f4"
    ],
    "rating": 1724,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 141
    }
  },
  {
    "id": "CG-0073",
    "fen": "rnbq1k1r/ppppn1pp/3bp3/5p2/1P3P1P/B1P2N2/P2PPKP1/RN1Q1B1R b - - 2 8",
    "moves": [
      "d6f4"
    ],
    "rating": 1727,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 164
    }
  },
  {
    "id": "CG-0074",
    "fen": "rnbq1k1r/ppppn1pp/4p3/2b2p2/1P3P1P/B1P2N2/P2PPKP1/RN1Q1B1R w - - 3 9",
    "moves": [
      "b4c5"
    ],
    "rating": 863,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 615
    }
  },
  {
    "id": "CG-0075",
    "fen": "rnbqk2r/1p1pn1p1/B1p1p3/2P2p1p/5P1P/B1P1PN2/P2P1KP1/RN1Q3R b - - 0 13",
    "moves": [
      "b8a6"
    ],
    "rating": 1815,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 107
    }
  },
  {
    "id": "CG-0076",
    "fen": "rnbqk3/1p1pn3/B1p1p1pr/1QP2p1p/5P1P/B1P1PN2/P2P1KP1/RN5R b - - 3 15",
    "moves": [
      "c6b5"
    ],
    "rating": 1075,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 876
    }
  },
  {
    "id": "CG-0077",
    "fen": "rnbq1k2/1p1pn3/B1p1p2r/2P1Nppp/1Q3P1P/2P1P3/PB1P1KP1/RN5R b - - 7 19",
    "moves": [
      "b8a6"
    ],
    "rating": 1505,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 268
    }
  },
  {
    "id": "CG-0078",
    "fen": "rnb2k1r/1pqNn3/2p1p3/2P2ppp/1Q3P1P/2P1P3/PB1PBKP1/RN5R b - - 0 21",
    "moves": [
      "b8d7"
    ],
    "rating": 1852,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 181
    }
  },
  {
    "id": "CG-0079",
    "fen": "rnb2k1r/1p1qn3/2p1p3/2P2ppp/3Q1P1P/2P1P3/PB1PBKP1/RN5R b - - 1 22",
    "moves": [
      "d7d4"
    ],
    "rating": 1104,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 364
    }
  },
  {
    "id": "CG-0080",
    "fen": "rnb2k1r/1p2n3/2pqp3/2P2ppp/3Q1P1P/2P1P3/PB1PBKP1/RN5R w - - 2 23",
    "moves": [
      "d4h8"
    ],
    "rating": 1729,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 194
    }
  },
  {
    "id": "CG-0081",
    "fen": "rnb2k1r/1p2n3/B1pqp3/2P2ppp/3Q1P1P/2P1P3/PB1P1KP1/RN5R b - - 3 23",
    "moves": [
      "d6d4"
    ],
    "rating": 973,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 968
    }
  },
  {
    "id": "CG-0082",
    "fen": "rnb4r/1p2nk2/2pqp3/2P2ppp/2BQ1P1P/2P1P3/PB1P1KP1/RN5R b - - 5 24",
    "moves": [
      "d6d4"
    ],
    "rating": 881,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 404
    }
  },
  {
    "id": "CG-0083",
    "fen": "1nb4r/1p2nk2/2pqp3/2P2ppp/2BQ1P1P/2P1P3/rB1P1KP1/RN5R w - - 0 25",
    "moves": [
      "c5d6"
    ],
    "rating": 852,
    "themes": [
      "fork",
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 132
    }
  },
  {
    "id": "CG-0084",
    "fen": "1nb4r/1p2nk2/2pqp3/2P1Qppp/2B2P1P/2P1P3/rB1P1KP1/RN5R b - - 1 25",
    "moves": [
      "d6e5"
    ],
    "rating": 891,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1187
    }
  },
  {
    "id": "CG-0085",
    "fen": "2b4r/1p1nnk2/2pqp3/2P1Qppp/2B2P1P/2P1P3/rB1P1KP1/RN5R w - - 2 26",
    "moves": [
      "e5d6"
    ],
    "rating": 932,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 108
    }
  },
  {
    "id": "CG-0086",
    "fen": "2b4r/1p2nk2/2pQp3/2n2ppp/2B2P1P/2P1P3/rB1P1KP1/RN5R w - - 0 27",
    "moves": [
      "d6c5"
    ],
    "rating": 1734,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 108
    }
  },
  {
    "id": "CG-0087",
    "fen": "2b4r/1Q2nk2/2p1p3/2n2p1p/5PpP/2P1P3/r2P1KP1/RN3B1R w - - 1 30",
    "moves": [
      "b7e7"
    ],
    "rating": 1376,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 263
    }
  },
  {
    "id": "CG-0088",
    "fen": "2b4r/4Qk2/2p1p3/2n2p1p/5PpP/2P1P3/r2P1KP1/RN3B1R b - - 0 30",
    "moves": [
      "f7e7"
    ],
    "rating": 880,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 482
    }
  },
  {
    "id": "CG-0089",
    "fen": "2b4r/4Q3/2p1p1k1/2n2p1p/5PpP/2P1P3/r2P1KP1/RN3B1R w - - 1 31",
    "moves": [
      "a1a2"
    ],
    "rating": 1336,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 291
    }
  },
  {
    "id": "CG-0090",
    "fen": "2b4r/8/2p1Q1k1/2n2p1p/5PpP/2P1P3/r2P1KP1/RN3B1R b - - 0 31",
    "moves": [
      "c8e6"
    ],
    "rating": 1103,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 982
    }
  },
  {
    "id": "CG-0091",
    "fen": "7r/8/2p1b1k1/2n2p1p/5PpP/2P1P3/r2P1KP1/RN3B1R w - - 0 32",
    "moves": [
      "a1a2"
    ],
    "rating": 1536,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 369
    }
  },
  {
    "id": "CG-0092",
    "fen": "7r/8/r1p1b1k1/2n2p1p/5PpP/2PBP1K1/3P2P1/RN5R b - - 3 33",
    "moves": [
      "a6a1"
    ],
    "rating": 1499,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 351
    }
  },
  {
    "id": "CG-0093",
    "fen": "7r/8/r1p1b1k1/5p1p/5PpP/2PnP1K1/3P2P1/RN5R w - - 0 34",
    "moves": [
      "a1a6"
    ],
    "rating": 910,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 832
    }
  },
  {
    "id": "CG-0094",
    "fen": "7r/8/r1p1b1k1/5p1p/R4PpP/2PnP1K1/3P2P1/1N5R b - - 1 34",
    "moves": [
      "a6a4"
    ],
    "rating": 1379,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 267
    }
  },
  {
    "id": "CG-0095",
    "fen": "7r/8/r1p3k1/3b1p1p/R4PpP/2PnP1K1/3P2P1/1N5R w - - 2 35",
    "moves": [
      "a4a6"
    ],
    "rating": 1020,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 615
    }
  },
  {
    "id": "CG-0096",
    "fen": "7r/8/r1p3k1/3b1p1p/R4PpP/N1PnP1K1/3P2P1/7R b - - 3 35",
    "moves": [
      "a6a4"
    ],
    "rating": 1353,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 249
    }
  },
  {
    "id": "CG-0097",
    "fen": "7r/8/r1p3k1/3b1p1p/R4npP/N1P1P1K1/3P2P1/7R w - - 0 36",
    "moves": [
      "a4a6"
    ],
    "rating": 1097,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 736
    }
  },
  {
    "id": "CG-0098",
    "fen": "7r/8/r1p3k1/3b1p1p/5RpP/N1P1P1K1/3P2P1/7R b - - 0 36",
    "moves": [
      "a6a3"
    ],
    "rating": 1317,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 447
    }
  },
  {
    "id": "CG-0099",
    "fen": "7r/8/r1p2k2/1N1b1p1p/5RpP/2P1P1K1/3P2P1/7R b - - 2 37",
    "moves": [
      "c6b5"
    ],
    "rating": 1037,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 555
    }
  },
  {
    "id": "CG-0100",
    "fen": "r1bqkb2/pp1pnp1p/2p2pp1/6Q1/PP6/N2P3N/2PP1PPP/1R2KB1R b Kq - 3 12",
    "moves": [
      "f6g5"
    ],
    "rating": 936,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1278
    }
  },
  {
    "id": "CG-0101",
    "fen": "r1b1kb2/1p2np2/1qp3p1/P2p2Np/P2P4/N7/2PP1PPP/2R1KB1R w Kq - 1 17",
    "moves": [
      "a5b6"
    ],
    "rating": 858,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1319
    }
  },
  {
    "id": "CG-0102",
    "fen": "r1b1kb2/1p3p2/1qp3p1/PB1p1nNp/P2P4/N7/2PP1PPP/2R1K2R w Kq - 3 18",
    "moves": [
      "a5b6"
    ],
    "rating": 1035,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 688
    }
  },
  {
    "id": "CG-0103",
    "fen": "r1b1kb2/1p3p2/1Pp3p1/1B1p1nNp/P2P4/N7/2PP1PPP/2R1K2R b Kq - 0 18",
    "moves": [
      "f8a3"
    ],
    "rating": 1712,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 221
    }
  },
  {
    "id": "CG-0104",
    "fen": "r1b1kb2/1p3p2/1Pp3p1/1B1p2Np/P2P3n/N7/2PP1PPP/2R2K1R b q - 2 19",
    "moves": [
      "f8a3"
    ],
    "rating": 1352,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 245
    }
  },
  {
    "id": "CG-0105",
    "fen": "r1b2b2/1p1k1p2/1Pp3p1/1B1p2Np/P2P3n/N6P/2PP1PP1/2R2K1R b - - 0 20",
    "moves": [
      "f8a3"
    ],
    "rating": 1363,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 328
    }
  },
  {
    "id": "CG-0106",
    "fen": "rnbqk2r/1ppp1p1p/4p2b/1N4p1/3Pn3/4K3/PPP2PPP/R1BQ1BNR w kq - 0 10",
    "moves": [
      "e3e4"
    ],
    "rating": 1537,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 276
    }
  },
  {
    "id": "CG-0107",
    "fen": "1nbq1k1r/N1p4p/1p1pp2b/5pB1/1P1PK3/7Q/P1P2PPP/R4BNR w - - 0 16",
    "moves": [
      "e4d3"
    ],
    "rating": 1382,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 305
    }
  },
  {
    "id": "CG-0108",
    "fen": "1nbq1k1r/N1p4p/1p1pp2b/5pB1/1P1P4/5K1Q/P1P2PPP/R4BNR b - - 1 16",
    "moves": [
      "d8g5"
    ],
    "rating": 1341,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 234
    }
  },
  {
    "id": "CG-0109",
    "fen": "1nbq1k1r/N1p4p/3pp2b/1p3pB1/1P1P4/5K1Q/P1P2PPP/R4BNR w - - 0 17",
    "moves": [
      "h3h6"
    ],
    "rating": 1726,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 190
    }
  },
  {
    "id": "CG-0110",
    "fen": "1nbq2kr/N1p4p/3pp2Q/1p3pB1/1P1P4/5K2/P1P2PPP/R4BNR w - - 1 18",
    "moves": [
      "g5d8"
    ],
    "rating": 1030,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 486
    }
  },
  {
    "id": "CG-0111",
    "fen": "1nbq2k1/N1p1B2r/3pp3/1p6/1P1P1p2/5K2/P1P2PPP/R4BNR w - - 0 20",
    "moves": [
      "e7d8"
    ],
    "rating": 972,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 764
    }
  },
  {
    "id": "CG-0112",
    "fen": "1nNq2k1/2p1B2r/3pp3/1p6/1P1P1p2/5K2/P1P2PPP/R4BNR b - - 0 20",
    "moves": [
      "d8c8"
    ],
    "rating": 1953,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 195
    }
  },
  {
    "id": "CG-0113",
    "fen": "1r1qkbnr/2p1pppp/1pnpb3/P7/B4P2/4P3/P1PP2PP/RNBQK1NR w KQk - 4 8",
    "moves": [
      "a4c6"
    ],
    "rating": 866,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 658
    }
  },
  {
    "id": "CG-0114",
    "fen": "1r1q1bnr/2pkpppp/1Pn1b3/3p3Q/B4P2/4P3/P1PP2PP/RNB1K1NR w KQ - 0 10",
    "moves": [
      "f4f5"
    ],
    "rating": 1306,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 233
    }
  },
  {
    "id": "CG-0115",
    "fen": "3R1bnr/2k1pppp/2n1b3/3p3Q/B4P2/4P3/P1PP2PP/RrB1K1NR w KQ - 1 12",
    "moves": [
      "a1b1"
    ],
    "rating": 1480,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 282
    }
  },
  {
    "id": "CG-0116",
    "fen": "3R1bnr/2k1pQ1p/2n1b3/3p2p1/B4P2/4P3/P1PP2PP/RrB1K1NR w KQ - 0 13",
    "moves": [
      "f7e6"
    ],
    "rating": 880,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98175
    }
  },
  {
    "id": "CG-0117",
    "fen": "1k1n1bnr/4Q2p/4b3/3p2p1/B4P2/4P2N/P1PP2PP/RrB1K2R w KQ - 1 15",
    "moves": [
      "e7d8"
    ],
    "rating": 1739,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0118",
    "fen": "2kn1Qnr/7p/4b3/3p4/B4N2/4P3/P1PP2PP/1RB1K2R b K - 0 17",
    "moves": [
      "e6d7"
    ],
    "rating": 1880,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0119",
    "fen": "2kn1Qnr/8/1R2b3/3p3p/B4N2/4P3/P1PP2PP/2B1K2R b K - 1 18",
    "moves": [
      "g8e7"
    ],
    "rating": 894,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97525
    }
  },
  {
    "id": "CG-0120",
    "fen": "2kn2bQ/8/7n/3p3p/B4N2/4P3/P1PP2PP/1RB1K2R b K - 2 20",
    "moves": [
      "d5d4"
    ],
    "rating": 864,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97233
    }
  },
  {
    "id": "CG-0121",
    "fen": "2kn2bQ/8/8/3p3p/B4Nn1/4P3/P1PP2PP/1RB1K2R w K - 3 21",
    "moves": [
      "h8c3"
    ],
    "rating": 1729,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0122",
    "fen": "2kn2bQ/8/8/3p3p/B5n1/3NP3/P1PP2PP/1RB1K2R b K - 4 21",
    "moves": [
      "g4f6"
    ],
    "rating": 894,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 96991
    }
  },
  {
    "id": "CG-0123",
    "fen": "2kn2bQ/8/8/3p3p/B7/3NP3/P1PP2Pn/1RB1K2R w K - 0 22",
    "moves": [
      "h8c3"
    ],
    "rating": 1907,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0124",
    "fen": "3k2b1/5n2/8/3p4/B7/3NP2Q/P1PP2Pn/1RB1K2R w K - 3 24",
    "moves": [
      "h3d7"
    ],
    "rating": 1040,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 300
    }
  },
  {
    "id": "CG-0125",
    "fen": "3k2b1/5n2/2B5/8/3p4/3NP2Q/P1PP2Pn/1RB1K2R w K - 0 25",
    "moves": [
      "h3d7"
    ],
    "rating": 1029,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 400
    }
  },
  {
    "id": "CG-0126",
    "fen": "B2k2b1/5n2/8/8/3p4/3NP2Q/P1PP2Pn/1RB1K2R b K - 1 25",
    "moves": [
      "f7d6"
    ],
    "rating": 1392,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 231
    }
  },
  {
    "id": "CG-0127",
    "fen": "B2k2b1/5n2/8/8/3p4/3NPn1Q/P1PP2P1/1RB1K2R w K - 2 26",
    "moves": [
      "h3f3"
    ],
    "rating": 998,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 96398
    }
  },
  {
    "id": "CG-0128",
    "fen": "6b1/3k1n2/8/8/7Q/3NpB2/P1PP2P1/1RB1K2R w K - 2 28",
    "moves": [
      "b1b7"
    ],
    "rating": 1929,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0129",
    "fen": "1rbqk1nr/ppp1bpp1/n1Bpp2p/8/P4PPP/N7/1PPPP3/R1BQK1NR b KQk - 2 10",
    "moves": [
      "b7c6"
    ],
    "rating": 923,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 714
    }
  },
  {
    "id": "CG-0130",
    "fen": "1rbqk1nr/p1p2pp1/n1ppp2p/8/P3PPPR/8/1PPP4/RNBQK1N1 b Qk - 0 13",
    "moves": [
      "d8h4"
    ],
    "rating": 959,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 643
    }
  },
  {
    "id": "CG-0131",
    "fen": "1rbqk1n1/p1p2ppr/n1p1p2R/3p4/P3PPP1/8/1PPP4/RNBQK1N1 w Q - 0 15",
    "moves": [
      "h6h7"
    ],
    "rating": 994,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 825
    }
  },
  {
    "id": "CG-0132",
    "fen": "2bqk1n1/p1p2ppr/n1p1p3/3p4/P3PPP1/1r5R/1PPP4/RNBQK1N1 w Q - 2 16",
    "moves": [
      "h3h7"
    ],
    "rating": 994,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 573
    }
  },
  {
    "id": "CG-0133",
    "fen": "2bq1kn1/6pr/nPp1p3/3p1p2/5PP1/8/1PPP1K2/RNBQ2N1 b - - 1 21",
    "moves": [
      "h7h2"
    ],
    "rating": 1933,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 210
    }
  },
  {
    "id": "CG-0134",
    "fen": "2b2k2/6pr/nPp1p2n/3p1p2/5PPq/8/RPPP4/1NBQ1KN1 b - - 5 23",
    "moves": [
      "h6g4"
    ],
    "rating": 1395,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 300
    }
  },
  {
    "id": "CG-0135",
    "fen": "r2qkb1r/pppnpppp/3p3n/8/6b1/7P/PPPPPP1R/RNBQKBN1 w Qkq - 0 6",
    "moves": [
      "h3g4"
    ],
    "rating": 1420,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 474
    }
  },
  {
    "id": "CG-0136",
    "fen": "r2qkb1r/ppp1pppp/3p1n1n/8/6b1/7P/PPPPPPBR/RNBQK1N1 w Qkq - 2 7",
    "moves": [
      "h3g4"
    ],
    "rating": 1333,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 271
    }
  },
  {
    "id": "CG-0137",
    "fen": "r2qkb1r/ppp1pppp/2Bp1n1n/8/6b1/7P/PPPPPP1R/RNBQK1N1 b Qkq - 3 7",
    "moves": [
      "b7c6"
    ],
    "rating": 1714,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 167
    }
  },
  {
    "id": "CG-0138",
    "fen": "r2qkb1r/p1p1pppp/2pp1n1n/8/6b1/7P/PPPPPP1R/RNBQK1N1 w Qkq - 0 8",
    "moves": [
      "h3g4"
    ],
    "rating": 1471,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 473
    }
  },
  {
    "id": "CG-0139",
    "fen": "r3kb1r/p1p1pppp/2pp1n1n/1P6/7P/2N5/1PPPbP1R/R1BQK1N1 b Qkq - 0 11",
    "moves": [
      "e2d1"
    ],
    "rating": 979,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1061
    }
  },
  {
    "id": "CG-0140",
    "fen": "r3kb1r/2p1pppp/2pp1n1n/pP6/4N2P/8/1PPPbP1R/R1BQK1N1 b Qkq - 1 12",
    "moves": [
      "e2d1"
    ],
    "rating": 968,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1304
    }
  },
  {
    "id": "CG-0141",
    "fen": "r3kb2/2p1pp1p/2pp1p1n/pP6/7P/2P5/1P1P1PrR/R1BK2N1 w q - 1 16",
    "moves": [
      "h2g2"
    ],
    "rating": 939,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1175
    }
  },
  {
    "id": "CG-0142",
    "fen": "r2k4/2p1pp1p/3p1p1B/pp1P4/7P/1PP5/5r2/R2K2N1 b - - 0 21",
    "moves": [
      "f2f1"
    ],
    "rating": 1804,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 171
    }
  },
  {
    "id": "CG-0143",
    "fen": "r2k4/2p1pp1p/3p1p1B/pp1P4/7P/1PP2r2/8/R2K2N1 w - - 1 22",
    "moves": [
      "g1f3"
    ],
    "rating": 994,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1108
    }
  },
  {
    "id": "CG-0144",
    "fen": "r1bqk1nr/1p1p3p/2npp3/p4pb1/P6P/2P5/1P1PP1P1/R1BQKBNR w Qkq - 0 12",
    "moves": [
      "h4g5"
    ],
    "rating": 1095,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 554
    }
  },
  {
    "id": "CG-0145",
    "fen": "r1bqk1nr/1p1p3p/2npp3/p4pb1/P1P4P/8/1P1PP1P1/R1BQKBNR b Qkq - 0 12",
    "moves": [
      "g5h4"
    ],
    "rating": 1011,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98933
    }
  },
  {
    "id": "CG-0146",
    "fen": "r1bqk1nr/1p1p3p/2npp3/p5b1/P1P2p1P/8/1P1PP1P1/R1BQKBNR w Qkq - 0 13",
    "moves": [
      "h4g5"
    ],
    "rating": 939,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 660
    }
  },
  {
    "id": "CG-0147",
    "fen": "r1bqk1nr/1p1p3p/2npp3/p5bP/P1P2p2/8/1P1PP1P1/R1BQKBNR b Qkq - 0 13",
    "moves": [
      "g5h4"
    ],
    "rating": 1056,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98926
    }
  },
  {
    "id": "CG-0148",
    "fen": "r1b3nr/1p1p1k1p/3pp3/p3n1bP/P1P2q2/3PP3/1P4P1/R2QKBNR w Q - 0 17",
    "moves": [
      "e3f4"
    ],
    "rating": 980,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1261
    }
  },
  {
    "id": "CG-0149",
    "fen": "r1b4r/1p1p1k1p/3pp2n/p3n1bP/P1PP1q2/4P3/1P4P1/R2QKBNR w Q - 1 18",
    "moves": [
      "e3f4"
    ],
    "rating": 1003,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1317
    }
  },
  {
    "id": "CG-0150",
    "fen": "r1b4r/1p1p1k1p/3pp2n/p3n1bP/P1PPPq2/8/1P4P1/R2QKBNR b Q - 0 18",
    "moves": [
      "f4g3"
    ],
    "rating": 1105,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98862
    }
  },
  {
    "id": "CG-0151",
    "fen": "1rb4r/1p1p1k1p/3pp2n/p3n2P/P1PPP3/4b3/1P3KP1/R2Q2NR w - - 3 21",
    "moves": [
      "f2e3"
    ],
    "rating": 1880,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 197
    }
  },
  {
    "id": "CG-0152",
    "fen": "1rb4r/1p1p1k1p/3pp2n/p6P/P1nPP3/6P1/1P3b2/R2QK1NR w - - 1 23",
    "moves": [
      "e1f2"
    ],
    "rating": 1383,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 297
    }
  },
  {
    "id": "CG-0153",
    "fen": "1rb4r/1p1p1k1p/3pp2n/p6P/P2PP3/6P1/1n6/R2QK1NR b - - 1 24",
    "moves": [
      "b2d1"
    ],
    "rating": 859,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1219
    }
  },
  {
    "id": "CG-0154",
    "fen": "1rb4r/1p1p1k1p/3pp2n/p6P/P2PP3/3n2P1/8/R2QK1NR w - - 2 25",
    "moves": [
      "d1d3"
    ],
    "rating": 1754,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 189
    }
  },
  {
    "id": "CG-0155",
    "fen": "1rb4r/1p5p/3pk3/p2p3P/P2PQ3/6P1/4N2R/R3K3 b - - 1 31",
    "moves": [
      "d5e4"
    ],
    "rating": 1014,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1014
    }
  },
  {
    "id": "CG-0156",
    "fen": "r1b1kb1r/ppp1p1p1/8/2P2p1p/2N2Bn1/8/PPPqPPPP/R3KBNR w KQkq - 8 10",
    "moves": [
      "f4d2"
    ],
    "rating": 1090,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 140
    }
  },
  {
    "id": "CG-0157",
    "fen": "r1b1kb1r/ppp1p1p1/8/2P2p1p/2N5/6B1/PPPKPnPP/R4BNR b kq - 1 11",
    "moves": [
      "f2h1"
    ],
    "rating": 1445,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 455
    }
  },
  {
    "id": "CG-0158",
    "fen": "r1b1kb1r/ppp1p1p1/8/2P4p/2N2p2/6B1/PPPKPnPP/R4BNR w kq - 0 12",
    "moves": [
      "g3f2"
    ],
    "rating": 1465,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 305
    }
  },
  {
    "id": "CG-0159",
    "fen": "r1b1kb1r/ppp1p1p1/8/2P4p/2N2p2/4P1B1/PPPK1nPP/R4BNR b kq - 0 12",
    "moves": [
      "f4g3"
    ],
    "rating": 1822,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0160",
    "fen": "r1b1kb1r/ppp1p1p1/8/2P4p/2N5/4p1B1/PPPK1nPP/R4BNR w kq - 0 13",
    "moves": [
      "d2e3"
    ],
    "rating": 1942,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 213
    }
  },
  {
    "id": "CG-0161",
    "fen": "r1b1kb1r/ppp1p1p1/8/2P4p/2N5/4K1B1/PPP2nPP/R4BNR b kq - 0 13",
    "moves": [
      "f2h1"
    ],
    "rating": 1390,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 246
    }
  },
  {
    "id": "CG-0162",
    "fen": "r1b2br1/ppB1pkp1/1N6/2P4p/8/P3K3/1PP3PP/R4BNn b - - 2 16",
    "moves": [
      "a7b6"
    ],
    "rating": 1505,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 375
    }
  },
  {
    "id": "CG-0163",
    "fen": "r1b2br1/ppB2kp1/1N6/2P1p2p/8/P3K3/1PP3PP/R4BNn w - - 0 17",
    "moves": [
      "f1c4"
    ],
    "rating": 1844,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 165
    }
  },
  {
    "id": "CG-0164",
    "fen": "r1bB1br1/pp3kp1/1N6/2P1p2p/8/P3K3/1PP3PP/R4BNn b - - 1 17",
    "moves": [
      "f8c5"
    ],
    "rating": 1342,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 252
    }
  },
  {
    "id": "CG-0165",
    "fen": "r1bB1br1/pp4p1/1N4k1/2P1p2p/8/P3K3/1PP3PP/3R1BNn b - - 3 18",
    "moves": [
      "f8c5"
    ],
    "rating": 1478,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 278
    }
  },
  {
    "id": "CG-0166",
    "fen": "r2B1br1/pp4p1/1N4k1/2P1p2p/8/P3K2b/1PP3PP/3R1BNn w - - 4 19",
    "moves": [
      "f1d3"
    ],
    "rating": 1528,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 266
    }
  },
  {
    "id": "CG-0167",
    "fen": "r4br1/1p4p1/1p4k1/2P1p1Bp/8/P3K2b/1PP3PP/3R1BNn w - - 0 20",
    "moves": [
      "g1h3"
    ],
    "rating": 1521,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 404
    }
  },
  {
    "id": "CG-0168",
    "fen": "r4br1/1p4p1/1p4k1/2P1p1Bp/8/P3K2N/1PP3PP/3R1B1n b - - 0 20",
    "moves": [
      "f8c5"
    ],
    "rating": 1487,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 455
    }
  },
  {
    "id": "CG-0169",
    "fen": "3r1br1/1p4p1/6k1/1pP1p1Bp/8/P6N/1PPK2PP/3R1B1n w - - 2 22",
    "moves": [
      "g5d8"
    ],
    "rating": 1325,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 319
    }
  },
  {
    "id": "CG-0170",
    "fen": "3r1br1/1p4p1/6k1/1pP1p1Bp/8/P2B3N/1PPK2PP/3R3n b - - 3 22",
    "moves": [
      "d8d3"
    ],
    "rating": 1762,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 212
    }
  },
  {
    "id": "CG-0171",
    "fen": "5br1/1p4p1/6k1/1pP1p1B1/7p/P2K2nN/1PPR2PP/8 w - - 0 25",
    "moves": [
      "h2g3"
    ],
    "rating": 1390,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 235
    }
  },
  {
    "id": "CG-0172",
    "fen": "7r/1p4p1/3b2k1/1pP1p3/7B/P2K2PN/1PPR2P1/8 w - - 1 27",
    "moves": [
      "c5d6"
    ],
    "rating": 1914,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 209
    }
  },
  {
    "id": "CG-0173",
    "fen": "7r/1p4pk/3b4/1pP1p3/7B/P2K2PN/1PP1R1P1/8 w - - 3 28",
    "moves": [
      "c5d6"
    ],
    "rating": 1822,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 189
    }
  },
  {
    "id": "CG-0174",
    "fen": "3B3r/1p4pk/8/1pP5/4R1N1/P2K2b1/1PP3P1/8 b - - 1 31",
    "moves": [
      "h8d8"
    ],
    "rating": 1850,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 185
    }
  },
  {
    "id": "CG-0175",
    "fen": "3B3r/6pk/1P6/1p6/4R1N1/P2K2b1/1PP3P1/8 b - - 0 32",
    "moves": [
      "h8d8"
    ],
    "rating": 1307,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 251
    }
  },
  {
    "id": "CG-0176",
    "fen": "3r4/1P5k/6p1/1p2b3/4R1N1/P1K5/1PP3P1/8 w - - 1 35",
    "moves": [
      "e4e5"
    ],
    "rating": 1822,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 133
    }
  },
  {
    "id": "CG-0177",
    "fen": "3r4/1P5k/6p1/4N3/1p2R3/P1K5/1PP3P1/8 w - - 0 36",
    "moves": [
      "e4b4"
    ],
    "rating": 1897,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 214
    }
  },
  {
    "id": "CG-0178",
    "fen": "3r4/1P5k/6p1/4N3/1K2R3/P7/1PP3P1/8 b - - 0 36",
    "moves": [
      "d8b8"
    ],
    "rating": 1896,
    "themes": [
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 177
    }
  },
  {
    "id": "CG-0179",
    "fen": "8/1P5k/6p1/4N3/1K1rR3/P7/1PP3P1/8 w - - 1 37",
    "moves": [
      "e4d4"
    ],
    "rating": 1094,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98467
    }
  },
  {
    "id": "CG-0180",
    "fen": "rn2kb1r/p2pppp1/b4B2/qp5p/1Pp2P1P/4P3/P1PPK1P1/RN1Q1BNR b kq - 2 10",
    "moves": [
      "a5b4"
    ],
    "rating": 1741,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 90
    }
  },
  {
    "id": "CG-0181",
    "fen": "rn2kb1r/p3ppp1/b2p1B2/qp5p/1Pp2P1P/4P3/P1PPK1P1/RN1Q1BNR w kq - 0 11",
    "moves": [
      "b4a5"
    ],
    "rating": 856,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 90
    }
  },
  {
    "id": "CG-0182",
    "fen": "2r2b2/p2n1ppr/3pk3/Pb5Q/1N1P1P1P/4P3/P1PK2PR/R4BN1 b - - 0 19",
    "moves": [
      "h7h5"
    ],
    "rating": 860,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 135
    }
  },
  {
    "id": "CG-0183",
    "fen": "2r2b1r/p2n1pp1/3pk3/Pb5Q/1NBP1P1P/4P3/P1PK2PR/R5N1 b - - 2 20",
    "moves": [
      "b5c4"
    ],
    "rating": 1508,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 351
    }
  },
  {
    "id": "CG-0184",
    "fen": "5b1r/p2n1pp1/3pk3/Pb5Q/1NrP1P1P/4P3/P1PK2PR/2R3N1 b - - 1 21",
    "moves": [
      "h8h5"
    ],
    "rating": 878,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 748
    }
  },
  {
    "id": "CG-0185",
    "fen": "5b1r/p2n1pp1/3pk3/Pb5Q/1N1P1P1P/4P3/P1RK2PR/6N1 b - - 0 22",
    "moves": [
      "h8h5"
    ],
    "rating": 883,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 550
    }
  },
  {
    "id": "CG-0186",
    "fen": "5b2/p2n1p2/3p2p1/Pb1k1P1r/2RP3P/3NP3/P2K2PR/6N1 b - - 2 25",
    "moves": [
      "d5c4"
    ],
    "rating": 1415,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 242
    }
  },
  {
    "id": "CG-0187",
    "fen": "5b2/p2n1p2/3p4/Pb1k1p1r/2RP1N1P/4P3/P2K2PR/6N1 b - - 1 26",
    "moves": [
      "d5c4"
    ],
    "rating": 899,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99201
    }
  },
  {
    "id": "CG-0188",
    "fen": "5b2/p2n1p2/3p4/Pb3p1r/2kP1N1P/4P3/P2K2PR/6N1 w - - 0 27",
    "moves": [
      "f4h5"
    ],
    "rating": 1492,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 496
    }
  },
  {
    "id": "CG-0189",
    "fen": "5b2/p2n1p2/2bp4/P4p1r/2kP1N1P/4P2N/P2K2PR/8 w - - 2 28",
    "moves": [
      "f4h5"
    ],
    "rating": 1741,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 218
    }
  },
  {
    "id": "CG-0190",
    "fen": "8/p2nbp2/2bp4/P2P1p1r/2k2N1P/4P2N/P2K2PR/8 w - - 1 29",
    "moves": [
      "d5c6"
    ],
    "rating": 1816,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 160
    }
  },
  {
    "id": "CG-0191",
    "fen": "8/p2nbp2/2kp4/P4p1r/4PN1P/7N/P2K2PR/8 w - - 0 31",
    "moves": [
      "f4h5"
    ],
    "rating": 1095,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 520
    }
  },
  {
    "id": "CG-0192",
    "fen": "8/3n1p2/p1kp4/P2N2P1/4p3/8/P1K3PR/8 b - - 1 35",
    "moves": [
      "c6d5"
    ],
    "rating": 1868,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 162
    }
  },
  {
    "id": "CG-0193",
    "fen": "rnbqk1nr/1p1p1p1p/p1p4b/4p1P1/7P/3P4/PPPNP1P1/R1BQKBNR w KQkq - 2 6",
    "moves": [
      "g5h6"
    ],
    "rating": 1106,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 506
    }
  },
  {
    "id": "CG-0194",
    "fen": "rnbqk1nr/1p1p3p/p1p2p1b/4p1P1/P6P/3P4/1PPNP1P1/R1BQKBNR w KQkq - 0 7",
    "moves": [
      "g5h6"
    ],
    "rating": 1438,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 246
    }
  },
  {
    "id": "CG-0195",
    "fen": "rnb1k1nr/1p1p3p/p1p4b/q3p1p1/PP5P/3P3N/2PNP1P1/R1BQKB1R w KQkq - 1 9",
    "moves": [
      "b4a5"
    ],
    "rating": 1089,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 166
    }
  },
  {
    "id": "CG-0196",
    "fen": "rnb1k1nr/1p1p3p/p1p4b/4p1P1/Pq6/3P3N/2PNP1P1/R1BQKB1R w KQkq - 0 10",
    "moves": [
      "g5h6"
    ],
    "rating": 1793,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 183
    }
  },
  {
    "id": "CG-0197",
    "fen": "rnb1k1nr/1p1p3p/p1p4b/4p1P1/Pq6/B2P3N/2PNP1P1/R2QKB1R b KQkq - 1 10",
    "moves": [
      "b4h4"
    ],
    "rating": 1944,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 117
    }
  },
  {
    "id": "CG-0198",
    "fen": "rnb1k1nr/1p1p3p/2p4b/p3p1P1/P6q/B2P4/2PNP1P1/R2QKBNR w KQkq - 2 12",
    "moves": [
      "h1h4"
    ],
    "rating": 1102,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100897
    }
  },
  {
    "id": "CG-0199",
    "fen": "rnb1k1nr/1p1p3p/2p4b/p3p1P1/P6q/B2P2P1/2PNP3/R2QKBNR b KQkq - 0 12",
    "moves": [
      "h4g3"
    ],
    "rating": 918,
    "themes": [
      "mate",
      "mateIn1",
      "capturingDefender",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99766
    }
  },
  {
    "id": "CG-0200",
    "fen": "rnb1k1nr/1p1p3p/2p4b/p5P1/P3p2q/B1PP2P1/3NP3/R2QKBNR b KQkq - 0 13",
    "moves": [
      "h4g3"
    ],
    "rating": 906,
    "themes": [
      "mate",
      "mateIn1",
      "capturingDefender",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99900
    }
  },
  {
    "id": "CG-0201",
    "fen": "rnb1k1nr/1p5p/2p4b/p2p2P1/P3p2q/B1PP2PN/3NP3/R2QKB1R b KQkq - 1 14",
    "moves": [
      "h4g3"
    ],
    "rating": 971,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 853
    }
  },
  {
    "id": "CG-0202",
    "fen": "rnb1k1nr/1p5p/2p4b/p2p2P1/P6q/B1Pp2PN/3NP3/R2QKB1R w KQkq - 0 15",
    "moves": [
      "g3h4"
    ],
    "rating": 1057,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 464
    }
  },
  {
    "id": "CG-0203",
    "fen": "rnb1k1nr/1p5p/2p4b/p1Bp2P1/Pq6/2Pp2PN/3NP3/R2QKB1R w KQkq - 2 16",
    "moves": [
      "c3b4"
    ],
    "rating": 872,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 131
    }
  },
  {
    "id": "CG-0204",
    "fen": "rn4nr/3k3p/1Bp4P/3p4/P2N4/2P3PN/4p3/R2QKB1R w KQ - 0 22",
    "moves": [
      "d1e2"
    ],
    "rating": 1481,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 346
    }
  },
  {
    "id": "CG-0205",
    "fen": "rn4nr/3k3p/1Bp4P/3p4/P2N4/2P3PN/3K4/R2QnB1R w - - 0 23",
    "moves": [
      "d1g4"
    ],
    "rating": 1763,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0206",
    "fen": "rn5r/4n2p/1Bk4P/8/P2P4/6PN/R2K4/3QnB1R w - - 0 26",
    "moves": [
      "d1c1"
    ],
    "rating": 1781,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 122
    }
  },
  {
    "id": "CG-0207",
    "fen": "rn1B3r/4n2p/2k4P/8/P2P4/6PN/R2K4/3QnB1R b - - 1 26",
    "moves": [
      "h8d8"
    ],
    "rating": 1775,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 202
    }
  },
  {
    "id": "CG-0208",
    "fen": "rn1Br3/4n2p/2k4P/8/P2P4/6PN/R2K4/3QnB1R w - - 2 27",
    "moves": [
      "d1c1"
    ],
    "rating": 882,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97890
    }
  },
  {
    "id": "CG-0209",
    "fen": "1n1Br3/4n2p/2k4P/8/r2P4/6PN/R2K4/4QB1R w - - 0 28",
    "moves": [
      "e1e6"
    ],
    "rating": 1544,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 300
    }
  },
  {
    "id": "CG-0210",
    "fen": "1n2r3/4B2p/2k4P/8/r2P4/6PN/R2K4/4QB1R b - - 0 28",
    "moves": [
      "a4a2"
    ],
    "rating": 1024,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 520
    }
  },
  {
    "id": "CG-0211",
    "fen": "1n6/4Q2p/2k4P/8/3P4/r3K1PN/8/5B1R w - - 2 31",
    "moves": [
      "e7a3"
    ],
    "rating": 1716,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 187
    }
  },
  {
    "id": "CG-0212",
    "fen": "1n6/4Q2p/2k4P/8/3P4/r5PN/3K4/5B1R b - - 3 31",
    "moves": [
      "a3g3"
    ],
    "rating": 1807,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 142
    }
  },
  {
    "id": "CG-0213",
    "fen": "r1bqk2r/p1pp1pp1/n6p/1p1Np3/P2P1P2/bP6/2P1P1PP/RNBQKB1R b KQkq - 0 8",
    "moves": [
      "a3c1"
    ],
    "rating": 1789,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 211
    }
  },
  {
    "id": "CG-0214",
    "fen": "r1bqk2r/p1pp2p1/n6p/1p1NPp2/P2P4/bP6/2P1P1PP/RNBQKB1R b KQkq - 0 9",
    "moves": [
      "a3c1"
    ],
    "rating": 1491,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 355
    }
  },
  {
    "id": "CG-0215",
    "fen": "r3kb1r/p1pp2p1/R1b4p/1P1NPp2/3P3q/1P6/2P1P1P1/1NBQKB1R w Kkq - 0 13",
    "moves": [
      "h1h4"
    ],
    "rating": 878,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 540
    }
  },
  {
    "id": "CG-0216",
    "fen": "2r1kb1r/p1pp2p1/4b2R/1P2Pp2/3P1B1R/1P6/2P1P1P1/1N1QKB2 w k - 1 16",
    "moves": [
      "h6h8"
    ],
    "rating": 1549,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 365
    }
  },
  {
    "id": "CG-0217",
    "fen": "2r1kb1r/p1p3p1/4p3/1P2Pp2/3P1B1R/1P6/2P1P1P1/1N1QKB2 w k - 0 17",
    "moves": [
      "h4h8"
    ],
    "rating": 1386,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 338
    }
  },
  {
    "id": "CG-0218",
    "fen": "2r1k2r/p1p3p1/4p3/1P2Pp2/3P1B1R/bP6/2PKP1P1/1N1Q1B2 w k - 2 18",
    "moves": [
      "h4h8"
    ],
    "rating": 1412,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 392
    }
  },
  {
    "id": "CG-0219",
    "fen": "2r1k2r/p1p3p1/4p3/1P2Pp2/3P1B1R/NP6/2PKP1P1/3Q1B2 b k - 0 18",
    "moves": [
      "h8h4"
    ],
    "rating": 1522,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 237
    }
  },
  {
    "id": "CG-0220",
    "fen": "3kr3/6p1/8/1P1pPp2/p4B2/1Pr1P2R/1N1K2P1/3Q1B2 w - - 0 27",
    "moves": [
      "d2c3"
    ],
    "rating": 1080,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97714
    }
  },
  {
    "id": "CG-0221",
    "fen": "3kr3/8/6p1/1P1pPp2/p4B2/1Pr1P3/1N1K2PR/3Q1B2 w - - 0 28",
    "moves": [
      "d2c3"
    ],
    "rating": 859,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97837
    }
  },
  {
    "id": "CG-0222",
    "fen": "3kr3/8/4P1p1/1Prp1p2/p4B2/1P2P3/1N1K2PR/3Q1B2 w - - 1 29",
    "moves": [
      "b2a4"
    ],
    "rating": 1837,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 150
    }
  },
  {
    "id": "CG-0223",
    "fen": "3kr3/8/4P1p1/1r3p2/P2p1B2/4P3/1N1KB1PR/3Q4 w - - 0 31",
    "moves": [
      "e2b5"
    ],
    "rating": 952,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 555
    }
  },
  {
    "id": "CG-0224",
    "fen": "2k5/8/5rp1/1B3p2/P4B2/2KQp3/1N4PR/8 w - - 4 35",
    "moves": [
      "d3d7"
    ],
    "rating": 1080,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0225",
    "fen": "2k1Br2/8/6p1/5p2/P4B2/2KQp3/1N4PR/8 w - - 6 36",
    "moves": [
      "d3d7"
    ],
    "rating": 975,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0226",
    "fen": "2k1Br2/8/6p1/5p2/PK3B2/3Qp3/1N4PR/8 b - - 7 36",
    "moves": [
      "f8f7"
    ],
    "rating": 1845,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0227",
    "fen": "1rbq1b1r/pp1kp1pp/2n4n/2pp4/5P1Q/4K2N/PPPPP3/RNB2B1R b - - 4 12",
    "moves": [
      "h6f5"
    ],
    "rating": 1307,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 383
    }
  },
  {
    "id": "CG-0228",
    "fen": "1r1q1b1r/pp1bk1pp/7n/2pp4/1n3P2/4KN2/PPPPP3/RNB2B1R b - - 3 15",
    "moves": [
      "h6g4"
    ],
    "rating": 874,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98722
    }
  },
  {
    "id": "CG-0229",
    "fen": "1r1q1b1r/p3k1pR/1p6/2pp1b2/1n3P2/4KN2/PPPPP3/RNB2B2 w - - 0 18",
    "moves": [
      "h7h8"
    ],
    "rating": 1470,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 371
    }
  },
  {
    "id": "CG-0230",
    "fen": "1r1q1b1r/p3k1p1/1p6/2p2b2/3N1P2/3PK3/nPP1P2R/RNB2B2 b - - 1 20",
    "moves": [
      "d8d4"
    ],
    "rating": 1791,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 95
    }
  },
  {
    "id": "CG-0231",
    "fen": "1r1q1b1r/p3k1p1/1p6/2p5/3N1P2/3bK3/nPP1P2R/RNB2B2 w - - 0 21",
    "moves": [
      "d4c6"
    ],
    "rating": 920,
    "themes": [
      "fork",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 613
    }
  },
  {
    "id": "CG-0232",
    "fen": "1r1q1b1r/p5p1/1pN1k3/2p5/5P2/3bK3/nPP1P2R/RNB2B2 w - - 2 22",
    "moves": [
      "c6d8"
    ],
    "rating": 1022,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 586
    }
  },
  {
    "id": "CG-0233",
    "fen": "1r1q1b1r/p5p1/1pN1k3/2p2b2/2P2P2/4K3/nP2P2R/RNB2B2 w - - 1 23",
    "moves": [
      "c6d8"
    ],
    "rating": 1081,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 736
    }
  },
  {
    "id": "CG-0234",
    "fen": "1r1q1b1r/p5p1/2N1k3/1pp2b2/2P2P2/4K3/nP1BP2R/RN3B2 w - - 0 24",
    "moves": [
      "c6d8"
    ],
    "rating": 1091,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 556
    }
  },
  {
    "id": "CG-0235",
    "fen": "1N1q1b1r/p5p1/4k3/1pp2b2/2P2P2/4K3/nP1BP2R/RN3B2 b - - 0 24",
    "moves": [
      "d8d4"
    ],
    "rating": 939,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98249
    }
  },
  {
    "id": "CG-0236",
    "fen": "1N1q1b2/p5p1/4k3/1pp2b2/2P2P2/4K3/RP1BP2r/1N3B2 b - - 0 25",
    "moves": [
      "d8d4"
    ],
    "rating": 989,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98525
    }
  },
  {
    "id": "CG-0237",
    "fen": "1N1q1b2/p5p1/3k4/1pp2b2/2P2P2/4K3/RP1BP2r/1N3B2 w - - 1 26",
    "moves": [
      "a2a6"
    ],
    "rating": 1014,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 769
    }
  },
  {
    "id": "CG-0238",
    "fen": "3q1b2/p5p1/N2k4/1pp2b2/2P2P2/4K3/RP1BP2r/1N3B2 b - - 2 26",
    "moves": [
      "d8e7"
    ],
    "rating": 1048,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98289
    }
  },
  {
    "id": "CG-0239",
    "fen": "3q1b2/p5p1/N2k4/1pp2b2/2P2P2/4K2r/RP1BP3/1N3B2 w - - 3 27",
    "moves": [
      "f1h3"
    ],
    "rating": 991,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99147
    }
  },
  {
    "id": "CG-0240",
    "fen": "5b2/p5p1/N2k1q2/1pp2b2/2P2P2/4K2B/RP2P3/1NB5 b - - 2 28",
    "moves": [
      "f6d4"
    ],
    "rating": 970,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98731
    }
  },
  {
    "id": "CG-0241",
    "fen": "5b2/p5p1/N2k4/1pp2b2/2q2P2/7B/1P2PK2/RNB5 b - - 1 30",
    "moves": [
      "c4c1"
    ],
    "rating": 1848,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 106
    }
  },
  {
    "id": "CG-0242",
    "fen": "5b2/p5p1/N7/1ppk1b2/2q2P2/7B/1P2PK2/RNB5 w - - 2 31",
    "moves": [
      "h3f5"
    ],
    "rating": 1332,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 247
    }
  },
  {
    "id": "CG-0243",
    "fen": "5b2/p5p1/N7/1ppk1b2/2q2P2/7B/1P1BPK2/RN6 b - - 3 31",
    "moves": [
      "f5h3"
    ],
    "rating": 1510,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 288
    }
  },
  {
    "id": "CG-0244",
    "fen": "5b2/p5p1/N7/1ppk1b2/5q2/7B/1P1BPK2/RN6 w - - 0 32",
    "moves": [
      "d2f4"
    ],
    "rating": 917,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1186
    }
  },
  {
    "id": "CG-0245",
    "fen": "8/p3b1p1/N7/1ppk1b2/5B2/7B/1P2PK2/RN6 w - - 1 33",
    "moves": [
      "h3f5"
    ],
    "rating": 1709,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 150
    }
  },
  {
    "id": "CG-0246",
    "fen": "r1bqkb1r/1p1p1ppp/4p2n/p1p1n3/5B1P/N2P4/PPP1PPP1/R2QKBNR w KQkq - 2 7",
    "moves": [
      "f4e5"
    ],
    "rating": 1100,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 560
    }
  },
  {
    "id": "CG-0247",
    "fen": "r1b1kb1r/1p1p1ppp/4pq1n/p1p5/2n2B1P/3P4/PPPQPPP1/RN2KBNR w KQkq - 6 9",
    "moves": [
      "d3c4"
    ],
    "rating": 1509,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 371
    }
  },
  {
    "id": "CG-0248",
    "fen": "r1b1kb1r/1p1p1ppp/4pq1n/p1p5/2n2B1P/2PP4/PP1QPPP1/RN2KBNR b KQkq - 0 9",
    "moves": [
      "c4d2"
    ],
    "rating": 852,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 787
    }
  },
  {
    "id": "CG-0249",
    "fen": "2b1kb1r/3p1ppp/rp2pq1n/p1p5/4NB1P/2PP4/PP2PPP1/2KR1BNR b k - 1 12",
    "moves": [
      "f6f4"
    ],
    "rating": 1821,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 221
    }
  },
  {
    "id": "CG-0250",
    "fen": "2b1kb1r/5ppp/rp1ppq1n/p1p5/4NB1P/2PP4/PP2PPP1/2KR1BNR w k - 0 13",
    "moves": [
      "e4f6"
    ],
    "rating": 942,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 644
    }
  },
  {
    "id": "CG-0251",
    "fen": "2bk3r/q3bppp/rB2p2n/p7/1P5P/2PPP3/P2N1PPR/2KR1BN1 b - - 0 20",
    "moves": [
      "a6b6"
    ],
    "rating": 1797,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 105
    }
  },
  {
    "id": "CG-0252",
    "fen": "2bk3r/4bppp/r3p2n/p7/1P5P/2PPqN2/P2N1PPR/2KR1B2 w - - 0 22",
    "moves": [
      "f2e3"
    ],
    "rating": 854,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 664
    }
  },
  {
    "id": "CG-0253",
    "fen": "2bk3r/4bppp/r3p2n/p3N3/1P5P/2PPq3/P2N1PPR/2KR1B2 b - - 1 22",
    "moves": [
      "e3e5"
    ],
    "rating": 1779,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 223
    }
  },
  {
    "id": "CG-0254",
    "fen": "2bk2r1/4bppp/r3p2n/p3N3/1P5P/2PPq3/P2N1PPR/2KR1B2 w - - 2 23",
    "moves": [
      "f2e3"
    ],
    "rating": 877,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 605
    }
  },
  {
    "id": "CG-0255",
    "fen": "2bk2r1/4bppp/r3p2n/p3N3/1P5P/2PPq3/P2N1PPR/2K1RB2 b - - 3 23",
    "moves": [
      "e3e1"
    ],
    "rating": 1359,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 434
    }
  },
  {
    "id": "CG-0256",
    "fen": "2bk2r1/5ppp/r3p2n/4N3/1p5b/2PPP3/P2NB1PR/2K1R3 b - - 0 25",
    "moves": [
      "h4e1"
    ],
    "rating": 1319,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 233
    }
  },
  {
    "id": "CG-0257",
    "fen": "r1bqkb1r/ppppp1pp/n4p1n/8/3PN3/P6P/1PP1PPP1/R1BQKBNR w KQkq - 3 6",
    "moves": [
      "c1h6"
    ],
    "rating": 1890,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 172
    }
  },
  {
    "id": "CG-0258",
    "fen": "r1bqkb1r/pp1pp1pp/n2p1p1n/8/3P4/P6P/1PP1PPP1/R1BQKBNR w KQkq - 0 7",
    "moves": [
      "c1h6"
    ],
    "rating": 1792,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 111
    }
  },
  {
    "id": "CG-0259",
    "fen": "r1bqkb1r/pp1pp1pp/n2p1p1n/6B1/3P4/P6P/1PP1PPP1/R2QKBNR b KQkq - 1 7",
    "moves": [
      "f6g5"
    ],
    "rating": 1387,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 244
    }
  },
  {
    "id": "CG-0260",
    "fen": "r1b1kb1r/pp1pp1pp/n2p1p1n/q5B1/3P4/P6P/1PP1PPP1/R2QKBNR w KQkq - 2 8",
    "moves": [
      "g5d2"
    ],
    "rating": 1318,
    "themes": [
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 328
    }
  },
  {
    "id": "CG-0261",
    "fen": "r1b1kb1r/pp1pp1pp/n2p1p1n/q5B1/3P4/P6P/1PPQPPP1/R3KBNR b KQkq - 3 8",
    "moves": [
      "a5g5"
    ],
    "rating": 1321,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 287
    }
  },
  {
    "id": "CG-0262",
    "fen": "r1b1kb1r/pp1pp1pp/n2p1p1n/2q3B1/3P4/P6P/1PPQPPP1/R3KBNR w KQkq - 4 9",
    "moves": [
      "d4c5"
    ],
    "rating": 1073,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 880
    }
  },
  {
    "id": "CG-0263",
    "fen": "r1b1kb1r/pp1pp1pp/n2p1p1n/2q3B1/3P4/P6P/1PPQPPP1/2R1KBNR b Kkq - 5 9",
    "moves": [
      "c5g5"
    ],
    "rating": 1096,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 557
    }
  },
  {
    "id": "CG-0264",
    "fen": "r1b1kb1r/pp1pp1p1/3p1n1p/q7/PP1PP3/7P/1P1Q1PP1/2RK1BNR b kq - 0 15",
    "moves": [
      "a5a4"
    ],
    "rating": 1537,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 447
    }
  },
  {
    "id": "CG-0265",
    "fen": "r1b1kb1r/pp1pp1p1/q2p1n1p/8/PP1PP3/7P/1P1Q1PP1/2RK1BNR w kq - 1 16",
    "moves": [
      "f1a6"
    ],
    "rating": 1006,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 311
    }
  },
  {
    "id": "CG-0266",
    "fen": "r1R1kb1r/pp1pp1p1/q2p1n1p/8/PP1PP3/7P/1P1Q1PP1/3K1BNR b kq - 0 16",
    "moves": [
      "a8c8"
    ],
    "rating": 1390,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 367
    }
  },
  {
    "id": "CG-0267",
    "fen": "2r1kb1r/pp1pp1p1/q2p1n1p/8/PP1PP3/7P/1P1Q1PP1/3K1BNR w k - 0 17",
    "moves": [
      "f1a6"
    ],
    "rating": 888,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1058
    }
  },
  {
    "id": "CG-0268",
    "fen": "2r1kb1r/pp1pp1p1/q2p1n1Q/8/PP1PP3/7P/1P3PP1/3K1BNR b k - 0 17",
    "moves": [
      "a6f1"
    ],
    "rating": 1786,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 196
    }
  },
  {
    "id": "CG-0269",
    "fen": "4kb1r/pprpp1p1/q2p1n1Q/8/PP1PP3/7P/1P3PP1/3K1BNR w k - 1 18",
    "moves": [
      "h6g6"
    ],
    "rating": 871,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1209
    }
  },
  {
    "id": "CG-0270",
    "fen": "4kb1r/pprpp1p1/q2p4/7n/PP1PP3/7P/1P3PP1/3K1BNR w k - 0 19",
    "moves": [
      "f1a6"
    ],
    "rating": 1091,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 190
    }
  },
  {
    "id": "CG-0271",
    "fen": "4kb1r/pprpp1p1/q2p4/7n/PP1PP3/5P1P/1P4P1/3K1BNR b k - 0 19",
    "moves": [
      "a6f1"
    ],
    "rating": 1530,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 400
    }
  },
  {
    "id": "CG-0272",
    "fen": "4kb1r/p1rpp1p1/qp1p4/7n/PP1PP3/5P1P/1P4P1/3K1BNR w k - 0 20",
    "moves": [
      "f1a6"
    ],
    "rating": 1002,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 303
    }
  },
  {
    "id": "CG-0273",
    "fen": "4kb1r/p1rpp1p1/qp1p4/7n/PP1PP3/5P1P/1P4PR/3K1BN1 b k - 1 20",
    "moves": [
      "a6f1"
    ],
    "rating": 961,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97956
    }
  },
  {
    "id": "CG-0274",
    "fen": "4kb1r/p1rpp1p1/1p1p4/7n/PP1PP3/5P1P/1P1K2PR/5qN1 b k - 1 21",
    "moves": [
      "f1c1"
    ],
    "rating": 1918,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0275",
    "fen": "4kb1r/p1rpp1p1/1p1p4/7n/PP1PP3/5P1P/1P1K2qR/6N1 w k - 0 22",
    "moves": [
      "h2g2"
    ],
    "rating": 1046,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 550
    }
  },
  {
    "id": "CG-0276",
    "fen": "4kb2/2rp2pr/pP1p4/8/1P1pn3/5P2/1P3R2/4K1N1 w - - 1 29",
    "moves": [
      "b6c7"
    ],
    "rating": 1066,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1079
    }
  },
  {
    "id": "CG-0277",
    "fen": "4kb2/2rp2pr/pP1p4/8/1P2n3/3p1P2/1P6/4KRN1 w - - 0 30",
    "moves": [
      "b6c7"
    ],
    "rating": 946,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1319
    }
  },
  {
    "id": "CG-0278",
    "fen": "4Qb2/5npr/p2p2k1/8/1P6/5P2/1P1p4/3K1RN1 w - - 3 35",
    "moves": [
      "e8e6"
    ],
    "rating": 1894,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 209
    }
  },
  {
    "id": "CG-0279",
    "fen": "r1bqkb1r/pppppppp/n7/6N1/1P4n1/7P/P1PPPPP1/R1BQKBNR w KQkq - 7 6",
    "moves": [
      "h3g4"
    ],
    "rating": 1520,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 281
    }
  },
  {
    "id": "CG-0280",
    "fen": "r1bqkb1r/ppp1pppp/n3p3/8/1P4n1/7P/P1PPPPP1/R1BQKBNR w KQkq - 0 7",
    "moves": [
      "h3g4"
    ],
    "rating": 1420,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 345
    }
  },
  {
    "id": "CG-0281",
    "fen": "1rb1kb2/p3pppr/8/1p2p1P1/1p6/P4N2/RBPP1PPR/3QK3 w - - 0 17",
    "moves": [
      "h2h7"
    ],
    "rating": 1725,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 204
    }
  },
  {
    "id": "CG-0282",
    "fen": "1rb1kb2/p3pppr/8/1p2p1P1/1p1N4/P7/RBPP1PPR/3QK3 b - - 1 17",
    "moves": [
      "h7h2"
    ],
    "rating": 1350,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 303
    }
  },
  {
    "id": "CG-0283",
    "fen": "1rb1kb2/p3pppr/8/1p2p1P1/3N4/p7/RBPP1PPR/3QK3 w - - 0 18",
    "moves": [
      "h2h7"
    ],
    "rating": 1328,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 362
    }
  },
  {
    "id": "CG-0284",
    "fen": "r1b1kb2/p3pppR/8/1p2p1P1/3N4/2P5/Rp1P1PP1/2Q1K3 b - - 0 20",
    "moves": [
      "b2c1q"
    ],
    "rating": 934,
    "themes": [
      "promotion",
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 161
    }
  },
  {
    "id": "CG-0285",
    "fen": "r1b1kb2/p3pppR/8/1p2p1P1/3N4/2P5/R2P1PP1/2b1K3 w - - 0 21",
    "moves": [
      "d4b5"
    ],
    "rating": 1774,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 144
    }
  },
  {
    "id": "CG-0286",
    "fen": "4kb2/r3pppR/4b3/1N2p1P1/8/2P5/3P1PP1/2b1K3 w - - 1 23",
    "moves": [
      "b5a7"
    ],
    "rating": 1092,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 557
    }
  },
  {
    "id": "CG-0287",
    "fen": "4kb2/r1N1pppR/4b3/4p1P1/8/2P5/3P1PP1/2b1K3 b - - 2 23",
    "moves": [
      "a7c7"
    ],
    "rating": 1864,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 164
    }
  },
  {
    "id": "CG-0288",
    "fen": "4k3/5pR1/2r1p3/4b1P1/2P3b1/6P1/3P4/2b1K3 b - - 3 35",
    "moves": [
      "e5g7"
    ],
    "rating": 1866,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 185
    }
  },
  {
    "id": "CG-0289",
    "fen": "4k3/2r2pR1/4p3/4b1P1/2P3b1/6P1/3P4/2b1K3 w - - 4 36",
    "moves": [
      "g7g8"
    ],
    "rating": 1905,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 160
    }
  },
  {
    "id": "CG-0290",
    "fen": "4k3/2r2pR1/4p3/4b1P1/2P3b1/6P1/3P4/2b2K2 b - - 5 36",
    "moves": [
      "e5g7"
    ],
    "rating": 1462,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 232
    }
  },
  {
    "id": "CG-0291",
    "fen": "5k2/5R2/4p3/4b1P1/2r3b1/6P1/3P4/2b3K1 b - - 0 38",
    "moves": [
      "f8f7"
    ],
    "rating": 882,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98498
    }
  },
  {
    "id": "CG-0292",
    "fen": "8/5k2/4p1P1/4b3/2r3b1/6P1/3P4/2b3K1 b - - 0 39",
    "moves": [
      "f7g7"
    ],
    "rating": 980,
    "themes": [
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98459
    }
  },
  {
    "id": "CG-0293",
    "fen": "2bqkb1r/rpppp3/p5p1/5pnp/2P2PnP/1PN3KR/P2PP1P1/R1BQ1B2 w k - 0 12",
    "moves": [
      "h4g5"
    ],
    "rating": 1369,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 359
    }
  },
  {
    "id": "CG-0294",
    "fen": "2bqkb1r/rpppp3/p5pn/5pnp/2P1PP1P/1PN3KR/P2P2P1/R1BQ1B2 w k - 1 13",
    "moves": [
      "h4g5"
    ],
    "rating": 1452,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 408
    }
  },
  {
    "id": "CG-0295",
    "fen": "2bqkb1r/rppp4/p5pn/4ppnp/2P1PP1P/1PNP2KR/P5P1/R1BQ1B2 w k - 0 14",
    "moves": [
      "h4g5"
    ],
    "rating": 1321,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 353
    }
  },
  {
    "id": "CG-0296",
    "fen": "r1bqkb1r/1p1p4/p5pn/2p1ppPp/2P1P2P/1PNP2KR/P5P1/1RBQ1B2 w k - 0 16",
    "moves": [
      "g5h6"
    ],
    "rating": 1484,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 337
    }
  },
  {
    "id": "CG-0297",
    "fen": "r1bq3r/1p1pk1b1/p5pn/2p1pPPp/2P4P/PPNP1K1R/6P1/1RBQ1B2 b - - 0 18",
    "moves": [
      "h6f5"
    ],
    "rating": 1061,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 551
    }
  },
  {
    "id": "CG-0298",
    "fen": "2bq3r/rp1pk1b1/p5pn/2p1pPPp/2P4P/PPNP1KR1/6P1/1RBQ1B2 b - - 2 19",
    "moves": [
      "h6f5"
    ],
    "rating": 1066,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 519
    }
  },
  {
    "id": "CG-0299",
    "fen": "2bq3r/rp1pk1b1/p6P/2p1pp1p/2P4P/PPNP1KR1/6P1/1RBQ1B2 b - - 0 20",
    "moves": [
      "g7h6"
    ],
    "rating": 1833,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 161
    }
  },
  {
    "id": "CG-0300",
    "fen": "2bq1r2/r2p2R1/1p2k2P/1ppPpp1p/2P4P/PP3KP1/8/1RBQ1B2 b - - 0 25",
    "moves": [
      "e6d6"
    ],
    "rating": 880,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99049
    }
  },
  {
    "id": "CG-0301",
    "fen": "2bq1r2/r2p2R1/1p3k1P/1ppPpp1p/2P4P/PP3KP1/8/1RBQ1B2 w - - 1 26",
    "moves": [
      "c1g5"
    ],
    "rating": 898,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0302",
    "fen": "1rbqkb1r/1ppppppp/n7/p7/P1B1n2P/2N5/1PPP1PP1/R1BQK1NR w KQk - 2 6",
    "moves": [
      "c3e4"
    ],
    "rating": 1487,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 373
    }
  },
  {
    "id": "CG-0303",
    "fen": "1rbqkb1r/2pppp1p/n5p1/pp6/P1B1nN1P/8/1PPP1PP1/R1BQK1NR w KQk - 0 8",
    "moves": [
      "a4b5"
    ],
    "rating": 1932,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 201
    }
  },
  {
    "id": "CG-0304",
    "fen": "1rbqkb1r/2pppp1p/n5p1/pp5N/P1B1n2P/8/1PPP1PP1/R1BQK1NR b KQk - 1 8",
    "moves": [
      "b5c4"
    ],
    "rating": 1540,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 387
    }
  },
  {
    "id": "CG-0305",
    "fen": "1rbqk2r/2pppp1p/n5pb/p6N/P1p2Q1P/8/1PPP1nP1/R1B1K1NR w KQk - 0 11",
    "moves": [
      "f4h6"
    ],
    "rating": 1332,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 294
    }
  },
  {
    "id": "CG-0306",
    "fen": "1rbqk2r/2pppp1p/n5pb/p6N/P1p2Q1P/3P4/1P1P2PR/R1B1K1N1 b Qk - 0 12",
    "moves": [
      "h6f4"
    ],
    "rating": 945,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 274
    }
  },
  {
    "id": "CG-0307",
    "fen": "2bqk2r/2pppp1p/n5pb/p6N/Prp2Q1P/3P4/1P1P2PR/R1B1K1N1 w Qk - 1 13",
    "moves": [
      "f4h6"
    ],
    "rating": 1925,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 198
    }
  },
  {
    "id": "CG-0308",
    "fen": "2bqk2r/2pppp1p/n5pb/p7/Prp2Q1P/3P2N1/1P1P2PR/R1B1K1N1 b Qk - 2 13",
    "moves": [
      "h6f4"
    ],
    "rating": 1036,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 468
    }
  },
  {
    "id": "CG-0309",
    "fen": "2bqkr2/2pppp1p/n5pb/p7/Prp2Q1P/3P2N1/1P1P2PR/R1B1K1N1 w Q - 3 14",
    "moves": [
      "f4h6"
    ],
    "rating": 1097,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 504
    }
  },
  {
    "id": "CG-0310",
    "fen": "2bqkr2/2pppp1p/n5pb/p7/Prp1NQ1P/3P4/1P1P2PR/R1B1K1N1 b Q - 4 14",
    "moves": [
      "h6f4"
    ],
    "rating": 925,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 300
    }
  },
  {
    "id": "CG-0311",
    "fen": "2bqkr2/2pp1p1p/n5pb/p3p3/Prp1NQ1P/3P4/1P1P2PR/R1B1K1N1 w Q - 0 15",
    "moves": [
      "e4f6"
    ],
    "rating": 1541,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 312
    }
  },
  {
    "id": "CG-0312",
    "fen": "2bqkr2/2pp1p1p/n5pb/p3p1N1/Prp2Q1P/3P4/1P1P2PR/R1B1K1N1 b Q - 1 15",
    "moves": [
      "e5f4"
    ],
    "rating": 999,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 283
    }
  },
  {
    "id": "CG-0313",
    "fen": "2bqkr2/3p1p1p/n5pb/p1p1p1N1/Prp2Q1P/3P4/1P1P2PR/R1B1K1N1 w Q - 0 16",
    "moves": [
      "f4e5"
    ],
    "rating": 1865,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 178
    }
  },
  {
    "id": "CG-0314",
    "fen": "2b1kr2/3p1p1p/n3q1pb/p1p1Q3/Prp4P/3P4/1P1P2PR/R1B1K1N1 w Q - 0 18",
    "moves": [
      "e5e6"
    ],
    "rating": 951,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 112
    }
  },
  {
    "id": "CG-0315",
    "fen": "2bk2r1/5p1p/n3p1p1/p7/PpP4P/R2P3N/6PR/4K3 b - - 1 24",
    "moves": [
      "b4a3"
    ],
    "rating": 1545,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 342
    }
  },
  {
    "id": "CG-0316",
    "fen": "1r2k2r/p1pbn2p/n2p2p1/1p6/2P3P1/3Q4/PP1BBq1P/RN2KN1R w KQk - 0 17",
    "moves": [
      "e1f2"
    ],
    "rating": 963,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 695
    }
  },
  {
    "id": "CG-0317",
    "fen": "r6r/p1pbnk2/n2p2pp/1P6/6P1/N2Q4/PP1BBK1P/R4N1R w - - 1 20",
    "moves": [
      "d3f3"
    ],
    "rating": 1911,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 205
    }
  },
  {
    "id": "CG-0318",
    "fen": "2r3r1/p1p5/n1bp1kpp/8/6P1/N2Q1B2/PP1B1K1P/R2N3R w - - 0 25",
    "moves": [
      "d2c3"
    ],
    "rating": 999,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 541
    }
  },
  {
    "id": "CG-0319",
    "fen": "2r1b1r1/p1p5/n2p1kpp/8/6P1/NP1Q1B2/P2B1K1P/R2N3R w - - 1 26",
    "moves": [
      "d3c3"
    ],
    "rating": 1067,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97512
    }
  },
  {
    "id": "CG-0320",
    "fen": "2r1b1r1/p1p5/n2pk1pp/8/6P1/NPQ2B2/P2B1K1P/R2N3R w - - 3 27",
    "moves": [
      "h1e1"
    ],
    "rating": 1780,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0321",
    "fen": "2r1b2r/p1p5/n2pk1pB/8/6P1/NPQ2B2/P4K1P/R2N3R w - - 1 28",
    "moves": [
      "h1e1"
    ],
    "rating": 1724,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0322",
    "fen": "2r1b2r/p1p5/n3k1pB/3p4/2Q3P1/NP3BK1/P6P/R2N3R b - - 1 29",
    "moves": [
      "d5c4"
    ],
    "rating": 873,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 466
    }
  },
  {
    "id": "CG-0323",
    "fen": "2r1b2r/p1p2k2/6p1/3B4/1nQ3P1/NP4K1/P6P/R1BN3R b - - 0 31",
    "moves": [
      "b4d5"
    ],
    "rating": 1711,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98
    }
  },
  {
    "id": "CG-0324",
    "fen": "2r1b3/p1p2k1r/6p1/1Q1n4/6P1/NP3K2/P6P/R1BN3R b - - 3 33",
    "moves": [
      "e8b5"
    ],
    "rating": 905,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 140
    }
  },
  {
    "id": "CG-0325",
    "fen": "2r1b3/p1p2k2/6p1/1Q1n4/6Pr/NP3K2/P6P/R1BN3R w - - 4 34",
    "moves": [
      "b5d5"
    ],
    "rating": 1369,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 242
    }
  },
  {
    "id": "CG-0326",
    "fen": "rnb2bnr/p2pkppp/3p1q2/2p5/6P1/1P1PP2P/PBP2P2/R2QKBNR b KQ - 2 11",
    "moves": [
      "f6b2"
    ],
    "rating": 1000,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 862
    }
  },
  {
    "id": "CG-0327",
    "fen": "rnb2bnr/p2pkppp/3p4/2p5/3q2P1/1P1PP2P/P1P2P2/2RQKBNR w K - 2 13",
    "moves": [
      "e3d4"
    ],
    "rating": 929,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1374
    }
  },
  {
    "id": "CG-0328",
    "fen": "rnb2bn1/p2p1pp1/3p4/3P3p/2P2kP1/1P5P/P1P4R/2RKrBN1 w - - 2 21",
    "moves": [
      "d1e1"
    ],
    "rating": 1026,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 663
    }
  },
  {
    "id": "CG-0329",
    "fen": "r1b5/pn1pbpp1/3p1n2/3P3k/2P5/1P3N1P/2P1R3/2RK1B2 w - - 2 28",
    "moves": [
      "e2e7"
    ],
    "rating": 865,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 552
    }
  },
  {
    "id": "CG-0330",
    "fen": "rnbqkb1r/p2pp1p1/8/1pp2pN1/2B5/4P1nP/PPPP1PP1/RNB1K2R w KQkq - 2 8",
    "moves": [
      "c4f7"
    ],
    "rating": 1105,
    "themes": [
      "mate",
      "mateIn1",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100813
    }
  },
  {
    "id": "CG-0331",
    "fen": "r1bqkbnr/pp1pp3/n1p2pp1/6Np/8/4P3/PPPPKPPP/RNBQ1B1R b kq - 1 6",
    "moves": [
      "f6g5"
    ],
    "rating": 1009,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 562
    }
  },
  {
    "id": "CG-0332",
    "fen": "rnbqkbnr/pp1pp3/2p2pp1/6Np/3P4/4P3/PPP1KPPP/RNBQ1B1R b kq - 0 7",
    "moves": [
      "f6g5"
    ],
    "rating": 1500,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 466
    }
  },
  {
    "id": "CG-0333",
    "fen": "1nb1kbnr/rp1pp3/2p3p1/7p/PP1q2p1/3KP3/R4PPP/1NBQ1B1R w k - 0 14",
    "moves": [
      "e3d4"
    ],
    "rating": 1025,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 115
    }
  },
  {
    "id": "CG-0334",
    "fen": "1nb1kbnr/3pp3/2p2Bp1/1p6/1r1P2pp/3K4/R1Q2PPP/1N3B1R w k - 0 18",
    "moves": [
      "f6h8"
    ],
    "rating": 1726,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 207
    }
  },
  {
    "id": "CG-0335",
    "fen": "1nb1kbnr/3pB3/2p3p1/1p6/1r1P2pp/3K4/R1Q2PPP/1N3B1R b k - 0 18",
    "moves": [
      "g8e7"
    ],
    "rating": 1535,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 297
    }
  },
  {
    "id": "CG-0336",
    "fen": "1nb2bnr/3pk3/6Q1/2pK4/1p4pp/8/R4PPP/1N3B1R w - - 0 22",
    "moves": [
      "a2e2"
    ],
    "rating": 937,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99225
    }
  },
  {
    "id": "CG-0337",
    "fen": "1nbk1bnr/3p4/6Q1/2pK4/1p4pp/8/4RPPP/1N3B1R w - - 2 23",
    "moves": [
      "g6b6"
    ],
    "rating": 976,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99237
    }
  },
  {
    "id": "CG-0338",
    "fen": "1nbk1bnr/3p4/8/2pK4/1p4Qp/8/4RPPP/1N3B1R b - - 0 23",
    "moves": [
      "g8f6"
    ],
    "rating": 978,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 842
    }
  },
  {
    "id": "CG-0339",
    "fen": "1n1k1bnr/1b1p4/8/2pK4/1p4Qp/8/4RPPP/1N3B1R w - - 1 24",
    "moves": [
      "d5c4"
    ],
    "rating": 860,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 684
    }
  },
  {
    "id": "CG-0340",
    "fen": "1n1k1bnr/3p4/8/2p5/1p4Qp/1K6/4RPbP/1N3B1R b - - 1 25",
    "moves": [
      "g2d5"
    ],
    "rating": 1781,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0341",
    "fen": "1nk2bn1/3pRr2/8/2p5/1p4Qp/1K6/5PBP/1N5R w - - 3 28",
    "moves": [
      "e7f7"
    ],
    "rating": 1777,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 170
    }
  },
  {
    "id": "CG-0342",
    "fen": "1nk2bn1/3p3Q/8/2p5/1p6/1K2r3/5PBP/1N5R w - - 2 30",
    "moves": [
      "f2e3"
    ],
    "rating": 1717,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 187
    }
  },
  {
    "id": "CG-0343",
    "fen": "r1bqkb1r/pp1p1ppp/3pp2n/8/1P5P/3P4/P1n1PPP1/R1BQKBNR w KQkq - 0 9",
    "moves": [
      "d1c2"
    ],
    "rating": 1039,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 900
    }
  },
  {
    "id": "CG-0344",
    "fen": "r1bqk2r/pp1p1ppp/3pp2n/2Q5/1P5b/3P3R/P3PPP1/R1B1KBN1 b Qkq - 1 11",
    "moves": [
      "d6c5"
    ],
    "rating": 1012,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 274
    }
  },
  {
    "id": "CG-0345",
    "fen": "r1b1k2r/pp1p1ppp/3Qp2n/5q2/1P5b/3P3R/P3PPP1/R1B1KBN1 w Qkq - 1 13",
    "moves": [
      "h3h4"
    ],
    "rating": 1057,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 767
    }
  },
  {
    "id": "CG-0346",
    "fen": "r1b1k2r/pp1pQppp/4p2n/5q2/1P5b/3P3R/P3PPP1/R1B1KBN1 b Qkq - 2 13",
    "moves": [
      "h4e7"
    ],
    "rating": 1073,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 241
    }
  },
  {
    "id": "CG-0347",
    "fen": "r1b1k2r/pp1p1ppp/4p2n/5q2/1b6/B2P3R/P3PPP1/R3KBN1 w Qkq - 0 15",
    "moves": [
      "a3b4"
    ],
    "rating": 1380,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 426
    }
  },
  {
    "id": "CG-0348",
    "fen": "r1bk3r/pp3p1p/3pp2p/8/4q3/b2P2P1/P3PP2/1R1K1BN1 w - - 3 20",
    "moves": [
      "d3e4"
    ],
    "rating": 952,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 301
    }
  },
  {
    "id": "CG-0349",
    "fen": "r1bk3r/pp3p1p/3pp2p/8/3q4/b2P1NP1/P3PP2/1R1K1B2 w - - 5 21",
    "moves": [
      "f3d4"
    ],
    "rating": 1103,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 294
    }
  },
  {
    "id": "CG-0350",
    "fen": "r1bk3r/1p3p1p/p2pp3/8/5b1N/1R1P2P1/P3PP2/4KB2 w - - 0 26",
    "moves": [
      "g3f4"
    ],
    "rating": 1722,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 153
    }
  },
  {
    "id": "CG-0351",
    "fen": "r3kbnr/p3ppp1/nqp4p/1N1p4/1P4b1/B2P2PN/P1P1PP1P/R2QKB1R b KQkq - 0 9",
    "moves": [
      "c6b5"
    ],
    "rating": 1807,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 192
    }
  },
  {
    "id": "CG-0352",
    "fen": "r3kbnr/p3ppp1/n1p4p/1q1p4/1P6/B2P2Pb/P1PKPP1P/R2Q1B1R w kq - 0 11",
    "moves": [
      "f1h3"
    ],
    "rating": 1914,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 117
    }
  },
  {
    "id": "CG-0353",
    "fen": "r3kbnr/p3ppp1/n1p4p/1q1p4/1PP5/B2P2Pb/P2KPP1P/R2Q1B1R b kq - 0 11",
    "moves": [
      "d5c4"
    ],
    "rating": 1316,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 241
    }
  },
  {
    "id": "CG-0354",
    "fen": "r3kbnr/p3ppp1/n1p4p/q2p4/1PP5/B2P2Pb/P2KPP1P/R2Q1B1R w kq - 1 12",
    "moves": [
      "b4a5"
    ],
    "rating": 993,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1273
    }
  },
  {
    "id": "CG-0355",
    "fen": "r3kbnr/p3ppp1/n1p4p/q2p4/1PP5/B2P2PB/P2KPP1P/R2Q3R b kq - 0 12",
    "moves": [
      "a5a3"
    ],
    "rating": 1342,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 251
    }
  },
  {
    "id": "CG-0356",
    "fen": "r3kbnr/p2Bppp1/nqp4p/8/2Pp4/3P2P1/P2KPP1P/R1BQ1R2 b kq - 3 16",
    "moves": [
      "e8d7"
    ],
    "rating": 1814,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 196
    }
  },
  {
    "id": "CG-0357",
    "fen": "r4bnr/p2kppp1/2p4p/2n3B1/1q1p4/3P2P1/P1K1PP1P/R2Q1R2 b - - 1 19",
    "moves": [
      "b4c3"
    ],
    "rating": 853,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98119
    }
  },
  {
    "id": "CG-0358",
    "fen": "r4bnr/p2kppp1/2p4p/2n3B1/3p4/1q1P2P1/P1K1PP1P/R2Q1R2 w - - 2 20",
    "moves": [
      "a2b3"
    ],
    "rating": 860,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1375
    }
  },
  {
    "id": "CG-0359",
    "fen": "r4bnr/p2kppp1/2p4p/2n3B1/3p4/1P1P2P1/2K1PP1P/R2Q1R2 b - - 0 20",
    "moves": [
      "h6g5"
    ],
    "rating": 1105,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 556
    }
  },
  {
    "id": "CG-0360",
    "fen": "r4b1r/p2kppp1/2p2n1p/2n3B1/3p4/1P1P2P1/4PP1P/RK1Q1R2 b - - 2 21",
    "moves": [
      "h6g5"
    ],
    "rating": 1349,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 403
    }
  },
  {
    "id": "CG-0361",
    "fen": "r4b1r/p2kppp1/2p1nB1p/8/3p4/1P1P2P1/4PP1P/RK1Q1R2 b - - 0 22",
    "moves": [
      "e7f6"
    ],
    "rating": 1499,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 296
    }
  },
  {
    "id": "CG-0362",
    "fen": "rnbqkb1r/1p1pp3/3p1n1p/5p2/3PN1P1/7P/P3PP2/R2bKBR1 b Qkq - 1 14",
    "moves": [
      "f6e4"
    ],
    "rating": 1059,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98032
    }
  },
  {
    "id": "CG-0363",
    "fen": "1nb1kb1r/1p1p4/3p1pRp/8/3P4/7r/P2K1P2/R3qB2 w k - 2 21",
    "moves": [
      "a1e1"
    ],
    "rating": 907,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 213
    }
  },
  {
    "id": "CG-0364",
    "fen": "r2qkb1r/pbpp1ppp/n3pB2/1p6/1PP5/5P1P/P2PP1P1/RN1QKBNR b KQkq - 0 6",
    "moves": [
      "d8f6"
    ],
    "rating": 987,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 569
    }
  },
  {
    "id": "CG-0365",
    "fen": "r2qk2r/pbpp1ppp/n3pB2/1p6/1bP5/5P1P/P2PP1P1/RN1QKBNR w KQkq - 0 7",
    "moves": [
      "f6d8"
    ],
    "rating": 918,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 917
    }
  },
  {
    "id": "CG-0366",
    "fen": "r2qk2r/pbpp1ppp/n3p3/1p4B1/1bP5/5P1P/P2PP1P1/RN1QKBNR b KQkq - 1 7",
    "moves": [
      "d8g5"
    ],
    "rating": 1718,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 214
    }
  },
  {
    "id": "CG-0367",
    "fen": "r3k2r/p1B2ppp/4p3/3p4/1bp3P1/1n3P1P/P2P4/RN1QKBNR w KQkq - 1 12",
    "moves": [
      "a2b3"
    ],
    "rating": 1740,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 123
    }
  },
  {
    "id": "CG-0368",
    "fen": "rB1r4/R2k1ppp/4p3/3p4/1b4P1/1p3P1P/3PB3/1N1QK1NR b K - 0 15",
    "moves": [
      "a8a7"
    ],
    "rating": 1952,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 224
    }
  },
  {
    "id": "CG-0369",
    "fen": "3rr3/1k3ppp/4p3/3p4/1B4P1/1Q3P1P/3P4/1N2KBNR w K - 3 20",
    "moves": [
      "b4c5"
    ],
    "rating": 1056,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98064
    }
  },
  {
    "id": "CG-0370",
    "fen": "2kr4/4rppp/4p3/3p4/1B4P1/1Q3P1P/3P4/1N2KBNR w K - 7 22",
    "moves": [
      "b4e7"
    ],
    "rating": 1803,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 90
    }
  },
  {
    "id": "CG-0371",
    "fen": "1k1r4/4rppp/B3p3/3p4/1B4P1/1Q3P1P/3P4/1N2K1NR w K - 9 23",
    "moves": [
      "b4e7"
    ],
    "rating": 873,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 500
    }
  },
  {
    "id": "CG-0372",
    "fen": "rn1qkb1r/p1pnppp1/1p6/3p3p/2b3B1/3P1NP1/PPPBPP1P/RN1QK2R b KQkq - 5 8",
    "moves": [
      "h5g4"
    ],
    "rating": 1390,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 421
    }
  },
  {
    "id": "CG-0373",
    "fen": "rn1qkb1r/p1pnppp1/1p6/3p4/2b3p1/3P1NP1/PPPBPP1P/RN1QK2R w KQkq - 0 9",
    "moves": [
      "d3c4"
    ],
    "rating": 1456,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 316
    }
  },
  {
    "id": "CG-0374",
    "fen": "rn1qkb2/p1pnp1pr/1p6/3p1p2/P1b3p1/3P1NP1/1PPBPP1P/RN1QK1R1 w Qq - 0 11",
    "moves": [
      "f3g5"
    ],
    "rating": 1448,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 444
    }
  },
  {
    "id": "CG-0375",
    "fen": "rn1qkb2/p1pnp1pr/1p6/3p1p2/P1P3p1/5NP1/1PPBPP1P/RN1QK1R1 b Qq - 0 11",
    "moves": [
      "g4f3"
    ],
    "rating": 1375,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 375
    }
  },
  {
    "id": "CG-0376",
    "fen": "rn1qkb2/p1pnp1pr/8/1p1p1p2/P1P3p1/5NP1/1PPBPP1P/RN1QK1R1 w Qq - 0 12",
    "moves": [
      "f3g5"
    ],
    "rating": 1350,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 311
    }
  },
  {
    "id": "CG-0377",
    "fen": "rn1qkb2/p1pnp1pr/8/1p1p1p2/P1P3p1/5NP1/1PPBPPRP/RN1QK3 b Qq - 1 12",
    "moves": [
      "g4f3"
    ],
    "rating": 1471,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 418
    }
  },
  {
    "id": "CG-0378",
    "fen": "rn1qkb2/2pnp1pr/8/pP1p1p2/2P3p1/5NP1/1PPBPPRP/RN1QK3 b Qq - 0 13",
    "moves": [
      "g4f3"
    ],
    "rating": 1395,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 343
    }
  },
  {
    "id": "CG-0379",
    "fen": "r2qkb2/2pnp1pr/n7/pP1p1p2/2P3p1/5NP1/1PPBPPRP/RN1QK3 w Qq - 1 14",
    "moves": [
      "f3g5"
    ],
    "rating": 1467,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 232
    }
  },
  {
    "id": "CG-0380",
    "fen": "r2qkb2/2pnp1pr/P7/p2p1p2/2P3p1/5NP1/1PPBPPRP/RN1QK3 b Qq - 0 14",
    "moves": [
      "g4f3"
    ],
    "rating": 1333,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 330
    }
  },
  {
    "id": "CG-0381",
    "fen": "3qkb2/2pnp1p1/r7/p2p1p2/2P2Bpr/6P1/1PP1PPRP/RN1QK3 w Q - 0 17",
    "moves": [
      "g3h4"
    ],
    "rating": 1498,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 334
    }
  },
  {
    "id": "CG-0382",
    "fen": "3q1b2/2p1pk2/rn6/p2Q1pB1/2P3pr/2N2PP1/1PP1P1RP/R3K3 b Q - 0 20",
    "moves": [
      "b6d5"
    ],
    "rating": 1089,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 820
    }
  },
  {
    "id": "CG-0383",
    "fen": "rn1qkb1r/p1pppppp/1p6/1b6/6n1/4P3/PPPP1PPP/RNBQKB1R b KQkq - 0 6",
    "moves": [
      "b5f1"
    ],
    "rating": 975,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 542
    }
  },
  {
    "id": "CG-0384",
    "fen": "r2qkb1r/p2npp1p/1pp5/1b1p2P1/7P/P4Q2/1PPP2P1/RNB1KR2 b Qkq - 0 12",
    "moves": [
      "b5f1"
    ],
    "rating": 1915,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 166
    }
  },
  {
    "id": "CG-0385",
    "fen": "r1bqkb1r/n1pppppp/pp6/7N/2N5/8/PPPPPP1n/R1BQKB1R b KQkq - 1 8",
    "moves": [
      "h2f1"
    ],
    "rating": 1922,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 173
    }
  },
  {
    "id": "CG-0386",
    "fen": "r1bqkb1r/n3pppp/pNp5/3p4/1P3N2/8/PBPPPP2/R2QKn1R w KQk - 0 13",
    "moves": [
      "b6a8"
    ],
    "rating": 1392,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 285
    }
  },
  {
    "id": "CG-0387",
    "fen": "r1b1kb1r/n1q1pppp/pNp5/3p4/1P3N1R/8/PBPPPP2/R2QKn2 w Qk - 2 14",
    "moves": [
      "b6a8"
    ],
    "rating": 1346,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 335
    }
  },
  {
    "id": "CG-0388",
    "fen": "r1b1kb1r/n1q1pppp/pNp5/3p4/1P3N1R/8/PBPPPP2/R2Q1K2 b k - 0 14",
    "moves": [
      "c7b6"
    ],
    "rating": 981,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 589
    }
  },
  {
    "id": "CG-0389",
    "fen": "r1b1kb1r/n1q1pp1p/pNp3p1/3p4/1P3N1R/8/PBPPPP2/R2Q1K2 w k - 0 15",
    "moves": [
      "b6a8"
    ],
    "rating": 1805,
    "themes": [
      "fork",
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 180
    }
  },
  {
    "id": "CG-0390",
    "fen": "r1b1kb1r/n1q1pp1p/pNp3p1/3p4/1P3N1R/8/PBPPPP2/1R1Q1K2 b k - 1 15",
    "moves": [
      "c7b6"
    ],
    "rating": 1364,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 317
    }
  },
  {
    "id": "CG-0391",
    "fen": "r1b1kb1r/n3pp1p/p1p3p1/3p3N/1q5R/8/PBPPPP2/1R1Q1K2 w k - 0 17",
    "moves": [
      "h4b4"
    ],
    "rating": 1108,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 214
    }
  },
  {
    "id": "CG-0392",
    "fen": "r1b1kb1r/n3pp1p/p1p3p1/3p3N/4R3/8/PBPqPP2/1R1Q1K2 w k - 0 18",
    "moves": [
      "h5f6"
    ],
    "rating": 1817,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 165
    }
  },
  {
    "id": "CG-0393",
    "fen": "r1b1kb1r/n3pp1p/p1p3p1/3p3N/4RP2/8/PBPqP3/1R1Q1K2 b k - 0 18",
    "moves": [
      "d2d1"
    ],
    "rating": 1069,
    "themes": [
      "fork",
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 197
    }
  },
  {
    "id": "CG-0394",
    "fen": "r1b1kb1r/n3pp1p/p1p2Bp1/3p3N/4RP2/8/P3P3/1q1Q1K2 w k - 0 20",
    "moves": [
      "d1b1"
    ],
    "rating": 1078,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 147
    }
  },
  {
    "id": "CG-0395",
    "fen": "r1b1kb1r/n3ppBp/p1p3p1/3p3N/4RP2/8/P3P3/1q1Q1K2 b k - 1 20",
    "moves": [
      "b1d1"
    ],
    "rating": 879,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 416
    }
  },
  {
    "id": "CG-0396",
    "fen": "r1b1k2r/n3ppbp/p1p3p1/3p3N/4RP2/8/P3P3/1q1Q1K2 w k - 0 21",
    "moves": [
      "h5g7"
    ],
    "rating": 1753,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 141
    }
  },
  {
    "id": "CG-0397",
    "fen": "r1bk3r/n3ppNp/p1p3p1/3p4/4RP2/8/P3P3/1q1Q1K2 w - - 1 22",
    "moves": [
      "d1b1"
    ],
    "rating": 958,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 354
    }
  },
  {
    "id": "CG-0398",
    "fen": "r1bk3r/n4pNp/p1p3p1/3pp3/P3RP2/8/4P3/1Q3K2 b - - 0 23",
    "moves": [
      "d5e4"
    ],
    "rating": 1761,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 210
    }
  },
  {
    "id": "CG-0399",
    "fen": "r1bk3r/n4pNp/p1p5/4P1p1/P2pR3/8/4P3/1Q3K2 w - - 0 25",
    "moves": [
      "b1b6"
    ],
    "rating": 1736,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 219
    }
  },
  {
    "id": "CG-0400",
    "fen": "r1bk3r/n4pNp/p1p5/4P1p1/P2p3R/8/4P3/1Q3K2 b - - 1 25",
    "moves": [
      "g5h4"
    ],
    "rating": 1100,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 555
    }
  },
  {
    "id": "CG-0401",
    "fen": "r2k3r/n4pNp/p1p5/4P1p1/P2p3R/7b/4P3/1Q3K2 w - - 2 26",
    "moves": [
      "h4h3"
    ],
    "rating": 1101,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 647
    }
  },
  {
    "id": "CG-0402",
    "fen": "r6r/n2k1pNp/p1p5/4P1p1/P2p4/7R/4P3/1Q3K2 w - - 1 27",
    "moves": [
      "b1b7"
    ],
    "rating": 1413,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 346
    }
  },
  {
    "id": "CG-0403",
    "fen": "r6r/n2k1p1p/p1p1N3/4P1p1/P2p4/7R/4P3/1Q3K2 b - - 2 27",
    "moves": [
      "d7e6"
    ],
    "rating": 1825,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 123
    }
  },
  {
    "id": "CG-0404",
    "fen": "3r1r2/n2k1p1p/p1p5/4P1p1/P2p4/7R/4P3/1Q3K2 w - - 0 29",
    "moves": [
      "b1b7"
    ],
    "rating": 1745,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 150
    }
  },
  {
    "id": "CG-0405",
    "fen": "r1bqkb1r/pp1pn1p1/3p4/2n1pp1Q/P7/4P3/1PPP1PPP/R1B1KBNR b KQkq - 0 8",
    "moves": [
      "h8h5"
    ],
    "rating": 892,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1213
    }
  },
  {
    "id": "CG-0406",
    "fen": "r1b1kb2/pp1p2p1/3p2n1/qB2pp2/P7/1P2Pn2/R1PP1PPP/2B1K1R1 w q - 4 15",
    "moves": [
      "g2f3"
    ],
    "rating": 1822,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 160
    }
  },
  {
    "id": "CG-0407",
    "fen": "r1b1kb2/pp1p2p1/3p2n1/1q2pp2/P7/1P2PP2/R1PP1P1P/2B1K1R1 w q - 0 16",
    "moves": [
      "a4b5"
    ],
    "rating": 964,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 646
    }
  },
  {
    "id": "CG-0408",
    "fen": "r1b1kb2/pp1p2p1/3p2n1/4pp2/P7/1q2PP2/2PP1P1P/R1B1K1R1 w q - 0 17",
    "moves": [
      "c2b3"
    ],
    "rating": 1091,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 422
    }
  },
  {
    "id": "CG-0409",
    "fen": "r1b1kb2/pp1p2p1/3p2n1/1q2pp2/P7/4PP2/2PP1P1P/R1B1K2R w q - 2 18",
    "moves": [
      "a4b5"
    ],
    "rating": 1040,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 579
    }
  },
  {
    "id": "CG-0410",
    "fen": "r1b1kb2/pp1p2p1/3p2n1/4pp2/P2P4/4PP2/2P2P1P/RqBK3R w q - 3 20",
    "moves": [
      "a1b1"
    ],
    "rating": 977,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 521
    }
  },
  {
    "id": "CG-0411",
    "fen": "r1b1kb2/p2p2p1/3p4/1p3p2/P4n2/4BP1P/2P1KP2/1RR5 w q - 2 26",
    "moves": [
      "e3f4"
    ],
    "rating": 1106,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 559
    }
  },
  {
    "id": "CG-0412",
    "fen": "r1b1kb2/p2p2p1/3p4/1p3p2/P4B2/5P1P/2P1KP2/1RR5 b q - 0 26",
    "moves": [
      "b5a4"
    ],
    "rating": 1827,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 196
    }
  },
  {
    "id": "CG-0413",
    "fen": "r1b1kb2/p2p2p1/3p4/5p2/p4B2/1R3P1P/2P1KP2/2R5 b q - 1 27",
    "moves": [
      "a4b3"
    ],
    "rating": 1437,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 258
    }
  },
  {
    "id": "CG-0414",
    "fen": "r3kb2/p2p2p1/b2p4/5p2/p4B2/1R2KP1P/2P2P2/2R5 b q - 3 28",
    "moves": [
      "a4b3"
    ],
    "rating": 1820,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 158
    }
  },
  {
    "id": "CG-0415",
    "fen": "r3k3/pb1p2p1/8/2b2p2/8/1P2KP1P/5P2/2R5 w q - 1 32",
    "moves": [
      "c1c5"
    ],
    "rating": 1721,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 202
    }
  },
  {
    "id": "CG-0416",
    "fen": "3rk3/pb4p1/3p4/4Rp2/3K4/1P3P1P/5P2/8 b - - 1 34",
    "moves": [
      "d6e5"
    ],
    "rating": 1752,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 221
    }
  },
  {
    "id": "CG-0417",
    "fen": "rn1qkb1r/p1pppppp/1p5n/8/P4P2/7P/bPPPP1P1/RNBQKBNR w KQkq - 1 6",
    "moves": [
      "a1a2"
    ],
    "rating": 1329,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 338
    }
  },
  {
    "id": "CG-0418",
    "fen": "rn1qkbnr/p1pppppp/1p2N3/8/P4P2/7P/1PbPP1P1/R1BQKB1R w KQkq - 0 9",
    "moves": [
      "d1c2"
    ],
    "rating": 1459,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 248
    }
  },
  {
    "id": "CG-0419",
    "fen": "rn1qkbnr/p1pppppp/1p2N3/8/P4P2/7P/RPbPP1P1/2BQKB1R b Kkq - 1 9",
    "moves": [
      "c2d1"
    ],
    "rating": 1070,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 157
    }
  },
  {
    "id": "CG-0420",
    "fen": "rn1qkbnr/p2ppppp/1p2N3/2p5/P4P2/7P/1PbPP1P1/R1BQKB1R b Kkq - 1 10",
    "moves": [
      "c2d1"
    ],
    "rating": 1071,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 94
    }
  },
  {
    "id": "CG-0421",
    "fen": "rn2kbnr/p2ppppp/1p6/2p5/b3Pq2/7P/1P1P2P1/R1BQKB1R w Kkq - 0 13",
    "moves": [
      "d1a4"
    ],
    "rating": 1772,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 134
    }
  },
  {
    "id": "CG-0422",
    "fen": "4kb1r/4ppQp/rp3n1n/p3p3/2p5/7P/2K3P1/R1B2BR1 b k - 0 25",
    "moves": [
      "f8g7"
    ],
    "rating": 853,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 361
    }
  },
  {
    "id": "CG-0423",
    "fen": "4kb1r/3nppQp/rp5n/p3p3/2p5/7P/2K3P1/R1B2BR1 w k - 1 26",
    "moves": [
      "g7h8"
    ],
    "rating": 1814,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 182
    }
  },
  {
    "id": "CG-0424",
    "fen": "r1bqk2r/pppp2pp/5n2/4pp2/Pn6/1PP5/R2PPPPP/1N1QKBNR w Kkq - 3 7",
    "moves": [
      "c3b4"
    ],
    "rating": 1362,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 484
    }
  },
  {
    "id": "CG-0425",
    "fen": "r1bqk2r/1pQ4p/p2p1n2/4ppp1/PP6/NP2P3/R2P1PPP/4KBNR b Kkq - 0 12",
    "moves": [
      "d8c7"
    ],
    "rating": 972,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1409
    }
  },
  {
    "id": "CG-0426",
    "fen": "r1bqk2r/1pQ4p/p2p4/4ppp1/PPN3n1/1P2P3/R2P1PPP/4KBNR b Kkq - 2 13",
    "moves": [
      "d8c7"
    ],
    "rating": 867,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1559
    }
  },
  {
    "id": "CG-0427",
    "fen": "r2qk2r/1pQb3p/p2p4/4Npp1/PP4n1/1P2P3/R2P1PPP/4KBNR b Kkq - 0 14",
    "moves": [
      "d8c7"
    ],
    "rating": 913,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1118
    }
  },
  {
    "id": "CG-0428",
    "fen": "r1q1k2r/1pQb3p/p2p4/5pp1/PP4n1/1P1NP3/R2P1PPP/4KBNR b Kkq - 2 15",
    "moves": [
      "c8c7"
    ],
    "rating": 872,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1465
    }
  },
  {
    "id": "CG-0429",
    "fen": "r1q1k2r/1Q1b3p/3p4/p4pp1/PP4n1/1P1NP3/R2P1PPP/4KBNR b Kkq - 0 16",
    "moves": [
      "c8b7"
    ],
    "rating": 854,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1488
    }
  },
  {
    "id": "CG-0430",
    "fen": "r1q1k2r/1Q1b3p/3p4/p4pp1/PP6/1P1Nn3/R2P1PPP/4KBNR w Kkq - 0 17",
    "moves": [
      "b7c8"
    ],
    "rating": 1061,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 359
    }
  },
  {
    "id": "CG-0431",
    "fen": "r1q1k2r/3b3p/3p4/pQ3pp1/PP6/1P1Nn3/R2P1PPP/4KBNR b Kkq - 1 17",
    "moves": [
      "d7b5"
    ],
    "rating": 967,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 492
    }
  },
  {
    "id": "CG-0432",
    "fen": "r1q2r2/3b1k1p/3p4/pQ2Npp1/PP6/1P2P3/R4PPP/4KBNR b K - 2 19",
    "moves": [
      "d6e5"
    ],
    "rating": 1847,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 138
    }
  },
  {
    "id": "CG-0433",
    "fen": "r1q2r2/3b1k1p/8/pQ2ppp1/PP6/1P2P3/R4PPP/4KBNR w K - 0 20",
    "moves": [
      "f1c4"
    ],
    "rating": 1901,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 147
    }
  },
  {
    "id": "CG-0434",
    "fen": "r1q2r2/3Q1k1p/8/p3ppp1/PP6/1P2P3/R4PPP/4KBNR b K - 0 20",
    "moves": [
      "c8d7"
    ],
    "rating": 1090,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1187
    }
  },
  {
    "id": "CG-0435",
    "fen": "r1q2rk1/3Q3p/8/p3ppp1/PP6/1P2PN2/R4PPP/4KB1R b K - 2 21",
    "moves": [
      "c8d7"
    ],
    "rating": 898,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 876
    }
  },
  {
    "id": "CG-0436",
    "fen": "r1q2rk1/3Q3p/8/p4pp1/PP2p2P/1P2PN2/R4PP1/4KB1R b K - 0 22",
    "moves": [
      "c8d7"
    ],
    "rating": 1062,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 833
    }
  },
  {
    "id": "CG-0437",
    "fen": "r1q2rk1/3Q3p/8/P4p2/P3p2p/1P2PN2/R4PP1/4KB1R b K - 0 23",
    "moves": [
      "c8d7"
    ],
    "rating": 948,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 896
    }
  },
  {
    "id": "CG-0438",
    "fen": "r1q2rk1/3Q3p/8/P7/P3pp1p/1P2PN2/1R3PP1/4KB1R b K - 1 24",
    "moves": [
      "c8d7"
    ],
    "rating": 896,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1046
    }
  },
  {
    "id": "CG-0439",
    "fen": "r4rk1/2qQ3p/P7/8/P3pp1p/1P2PN2/1R3PP1/4KB1R b K - 0 25",
    "moves": [
      "c7d7"
    ],
    "rating": 919,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 764
    }
  },
  {
    "id": "CG-0440",
    "fen": "r4rk1/3q3p/P7/8/P1B1pp1p/1P2PN2/1R3PP1/4K2R b K - 1 26",
    "moves": [
      "g8h8"
    ],
    "rating": 1340,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 312
    }
  },
  {
    "id": "CG-0441",
    "fen": "r1B4k/7p/P7/P7/7p/1P2pr2/1R3P1R/4K3 b - - 0 31",
    "moves": [
      "a8c8"
    ],
    "rating": 1734,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 178
    }
  },
  {
    "id": "CG-0442",
    "fen": "r1bqkb1r/pppppppp/8/5n2/2BnPP2/P5PP/1PPP4/RNBQK1NR w KQkq - 1 7",
    "moves": [
      "e4f5"
    ],
    "rating": 1388,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 364
    }
  },
  {
    "id": "CG-0443",
    "fen": "r1bqkb1r/pppppppp/8/5n2/4PP2/Pn4PP/1PPP3R/RNBQK1N1 b Qkq - 1 8",
    "moves": [
      "b3a1"
    ],
    "rating": 1757,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 167
    }
  },
  {
    "id": "CG-0444",
    "fen": "r1bqkb1r/p1pppppp/1p6/5n2/4PP2/Pn4PP/1PPP3R/RNBQK1N1 w Qkq - 0 9",
    "moves": [
      "c2b3"
    ],
    "rating": 1402,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 446
    }
  },
  {
    "id": "CG-0445",
    "fen": "r1bqkb1r/p1pppppp/1p6/5n2/2PnPP2/P5PP/1P1P3R/RNBQK1N1 w Qkq - 1 10",
    "moves": [
      "e4f5"
    ],
    "rating": 1457,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 305
    }
  },
  {
    "id": "CG-0446",
    "fen": "r1bqkb1r/p1pppp1p/1p4p1/5n2/2PnPP2/P5PP/RP1P3R/1NBQK1N1 w kq - 0 11",
    "moves": [
      "e4f5"
    ],
    "rating": 1370,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 257
    }
  },
  {
    "id": "CG-0447",
    "fen": "r1bqkb1r/p1pppp1p/1p4p1/5n2/2P1PP2/P5PP/RP1Pn3/1NBQK1NR w kq - 2 12",
    "moves": [
      "g1e2"
    ],
    "rating": 1517,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 420
    }
  },
  {
    "id": "CG-0448",
    "fen": "r2qkb1r/p1pppp1p/bp4p1/5n2/2P1PP2/P5PP/RP1PN3/1NBQK2R w kq - 1 13",
    "moves": [
      "e4f5"
    ],
    "rating": 1936,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 209
    }
  },
  {
    "id": "CG-0449",
    "fen": "r2qkb1r/p1pppp1p/bp4p1/5n2/2P1PPP1/P6P/RP1PN3/1NBQK2R b kq - 0 13",
    "moves": [
      "a6c4"
    ],
    "rating": 1336,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 253
    }
  },
  {
    "id": "CG-0450",
    "fen": "r2qkb1r/p1pppp1p/1p4p1/1b3n2/2P1PPP1/P6P/RP1PN3/1NBQK2R w kq - 1 14",
    "moves": [
      "c4b5"
    ],
    "rating": 1537,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 366
    }
  },
  {
    "id": "CG-0451",
    "fen": "r2qkb1r/p1pppp1p/1p4p1/1b6/2P1PPP1/P3n2P/RPQPN3/1NB1K2R w kq - 3 15",
    "moves": [
      "d2e3"
    ],
    "rating": 1311,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 235
    }
  },
  {
    "id": "CG-0452",
    "fen": "r2qkb1r/p1pppp1p/1p4p1/1b6/2P1PPP1/P3n2P/RPQPNK2/1NB4R b kq - 4 15",
    "moves": [
      "e3c2"
    ],
    "rating": 937,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 591
    }
  },
  {
    "id": "CG-0453",
    "fen": "1r1qkbr1/2ppp2p/pp3pp1/1P6/Pn2PPP1/BP5P/R2PNK2/1N3R2 w - - 0 21",
    "moves": [
      "a3b4"
    ],
    "rating": 1823,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 186
    }
  },
  {
    "id": "CG-0454",
    "fen": "r3kbnr/p1pppp1p/n1b3p1/1q6/R2P1PP1/5N2/1PPBPK1P/1N1Q1B1R b kq - 0 12",
    "moves": [
      "b5a4"
    ],
    "rating": 1538,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 281
    }
  },
  {
    "id": "CG-0455",
    "fen": "r3kbnr/p1pppp1p/n1b3p1/8/R2P1PP1/5N2/1qPBPK1P/1N1Q1B1R w kq - 0 13",
    "moves": [
      "a4a6"
    ],
    "rating": 1482,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 376
    }
  },
  {
    "id": "CG-0456",
    "fen": "r3k1nr/p1pR1p1p/n1bbp1p1/8/5PP1/5N2/2PBPK1P/1N1Q1B1R w kq - 1 16",
    "moves": [
      "d7d6"
    ],
    "rating": 1521,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 245
    }
  },
  {
    "id": "CG-0457",
    "fen": "rn2k1nr/p1pR1p1p/2bbp1p1/8/5PPP/5N2/2PBPK2/1N1Q1BR1 b kq - 2 17",
    "moves": [
      "b8d7"
    ],
    "rating": 1773,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 145
    }
  },
  {
    "id": "CG-0458",
    "fen": "rn2k2r/p1pRnp1p/2bbp1p1/8/5PPP/5N2/2PBPK2/1N1Q1BR1 w kq - 3 18",
    "moves": [
      "d7d6"
    ],
    "rating": 1761,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 94
    }
  },
  {
    "id": "CG-0459",
    "fen": "rn1k3r/p1p1np1p/2b1p1p1/8/5bPP/8/2PBPK1N/1N1Q1BR1 w - - 0 20",
    "moves": [
      "d2f4"
    ],
    "rating": 1813,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 183
    }
  },
  {
    "id": "CG-0460",
    "fen": "rn5B/p1pknp1p/4p1p1/4b3/6PP/8/2P1PK1N/1N3BR1 w - - 1 23",
    "moves": [
      "h8e5"
    ],
    "rating": 1330,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 440
    }
  },
  {
    "id": "CG-0461",
    "fen": "rn1qkb1r/4pn1p/1p3pp1/p1Pp1b2/P1P2P2/6PN/RP2PK1P/1NBQ1BR1 b kq - 0 12",
    "moves": [
      "f5b1"
    ],
    "rating": 1393,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 296
    }
  },
  {
    "id": "CG-0462",
    "fen": "1n1qkb1r/4pn1p/rp3pp1/p1PQ1b2/P1P2P2/6PN/RP2PK1P/1NB2BR1 b k - 0 13",
    "moves": [
      "f5b1"
    ],
    "rating": 1890,
    "themes": [
      "fork",
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 141
    }
  },
  {
    "id": "CG-0463",
    "fen": "1n1qkb1r/r3pn1p/1p3pp1/p1PQ1b2/P1P2P2/6PN/RP2PK1P/1NB2BR1 w k - 1 14",
    "moves": [
      "d5d8"
    ],
    "rating": 967,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 339
    }
  },
  {
    "id": "CG-0464",
    "fen": "1n1qkb1r/r3pn1p/1p1Q1pp1/p1P5/P1P1bP2/6PN/RP2PK1P/1NB2BR1 w k - 3 15",
    "moves": [
      "d6d8"
    ],
    "rating": 873,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 158
    }
  },
  {
    "id": "CG-0465",
    "fen": "1n2kb1r/4rn1p/1P3pp1/p7/P1P1bP2/6PN/RP1qPK1P/1NB2BR1 w k - 1 17",
    "moves": [
      "b1d2"
    ],
    "rating": 972,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 436
    }
  },
  {
    "id": "CG-0466",
    "fen": "1n2kb1r/4rn1p/1P3pp1/p5N1/P1P2P2/6P1/RP1qPK1P/1bB2BR1 w k - 0 18",
    "moves": [
      "c1d2"
    ],
    "rating": 1061,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 376
    }
  },
  {
    "id": "CG-0467",
    "fen": "1n2kb1r/1P2rn1p/5pp1/p7/P1P1NP2/4B1P1/Rq2PK1P/1b3BR1 b k - 0 20",
    "moves": [
      "b1a2"
    ],
    "rating": 1474,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 463
    }
  },
  {
    "id": "CG-0468",
    "fen": "1n2kb1r/1P2rn1p/5pp1/p7/P1P1NP2/4B1P1/q3PK1P/1b3BR1 w k - 0 21",
    "moves": [
      "e4f6"
    ],
    "rating": 1545,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 354
    }
  },
  {
    "id": "CG-0469",
    "fen": "1n2kb1r/1P2rn2/5ppp/p7/P1P1NP1P/4B1P1/q3PK2/1b3BR1 w k - 0 22",
    "moves": [
      "e4f6"
    ],
    "rating": 1742,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 228
    }
  },
  {
    "id": "CG-0470",
    "fen": "1n2kb1r/1P2rn2/5ppp/p7/P1P1NPPP/4B3/4BK2/1b4R1 b k - 0 23",
    "moves": [
      "b1e4"
    ],
    "rating": 1770,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 101
    }
  },
  {
    "id": "CG-0471",
    "fen": "1n2kb1r/1Pr2n2/5ppp/p7/P1P1NPPP/4B3/4BK2/1b4R1 w k - 1 24",
    "moves": [
      "e4f6"
    ],
    "rating": 1788,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 186
    }
  },
  {
    "id": "CG-0472",
    "fen": "1n2k2r/1Pr4N/5ppp/p4bn1/PbP2PPP/4B3/4BKR1/8 w k - 7 27",
    "moves": [
      "h7f6"
    ],
    "rating": 1318,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 276
    }
  },
  {
    "id": "CG-0473",
    "fen": "1n2k2r/1Pr4N/5ppp/p4bP1/PbP3PP/4B3/4BKR1/8 b k - 0 27",
    "moves": [
      "c7h7"
    ],
    "rating": 1896,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 134
    }
  },
  {
    "id": "CG-0474",
    "fen": "4k3/1r5r/n4ppp/p1P2bP1/Pb4PP/4B3/5KR1/5B2 w - - 0 30",
    "moves": [
      "g4f5"
    ],
    "rating": 1744,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 151
    }
  },
  {
    "id": "CG-0475",
    "fen": "4k3/1r2r3/n4ppp/pBP2bP1/Pb4PP/4B1R1/5K2/8 b - - 3 31",
    "moves": [
      "b7b5"
    ],
    "rating": 1737,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 142
    }
  },
  {
    "id": "CG-0476",
    "fen": "4k3/3Br3/n4ppp/p1P2bP1/Pb4PP/4B1R1/5K2/8 b - - 0 32",
    "moves": [
      "f5d7"
    ],
    "rating": 1400,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 255
    }
  },
  {
    "id": "CG-0477",
    "fen": "4k3/4r3/5pp1/p1B3Pp/Pb4bP/6R1/7K/8 w - - 0 36",
    "moves": [
      "c5e7"
    ],
    "rating": 1955,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 118
    }
  },
  {
    "id": "CG-0478",
    "fen": "4k3/8/5Pp1/p1B4p/Pb4bP/6R1/4r3/6K1 b - - 2 37",
    "moves": [
      "b4c5"
    ],
    "rating": 1906,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 171
    }
  },
  {
    "id": "CG-0479",
    "fen": "2b1k3/8/5PR1/p1B4p/Pb5P/8/4r3/6K1 b - - 0 38",
    "moves": [
      "b4c5"
    ],
    "rating": 1778,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 201
    }
  },
  {
    "id": "CG-0480",
    "fen": "rn1qkb1r/1pp1pppp/p6n/3p4/P1P5/2N3P1/1P1PPPb1/R1BQKBNR w KQkq - 1 6",
    "moves": [
      "f1g2"
    ],
    "rating": 1104,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 502
    }
  },
  {
    "id": "CG-0481",
    "fen": "rn1qkb1r/1pp1pppp/p6n/3P4/P7/2N3P1/1P1PPPb1/R1BQKBNR b KQkq - 0 6",
    "moves": [
      "g2h1"
    ],
    "rating": 1472,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 442
    }
  },
  {
    "id": "CG-0482",
    "fen": "rn1qkbr1/1pp1pppp/p6R/3P4/P7/2N2PP1/1P1P1P2/R1BQKBN1 b Qq - 0 8",
    "moves": [
      "g7h6"
    ],
    "rating": 1422,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 323
    }
  },
  {
    "id": "CG-0483",
    "fen": "rn2kbr1/1pp1pppp/p6R/3q4/P7/2N2PP1/RP1P1P2/2BQKBN1 b q - 1 9",
    "moves": [
      "d5e5"
    ],
    "rating": 1539,
    "themes": [
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 256
    }
  },
  {
    "id": "CG-0484",
    "fen": "4kbr1/rp3pp1/B1R5/2p4p/P7/5PP1/RP1P1P2/2BQK1N1 w - - 0 15",
    "moves": [
      "d1e2"
    ],
    "rating": 1028,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97749
    }
  },
  {
    "id": "CG-0485",
    "fen": "4kb1r/rp3pp1/B1R5/2p4p/P7/1P3PP1/R2P1P2/2BQK1N1 w - - 1 16",
    "moves": [
      "d1e2"
    ],
    "rating": 1021,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97541
    }
  },
  {
    "id": "CG-0486",
    "fen": "4kb1r/r4pp1/p1R5/2p4p/P2P4/1P3PP1/R4P2/2BQK1N1 w - - 0 17",
    "moves": [
      "d4c5"
    ],
    "rating": 1498,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 284
    }
  },
  {
    "id": "CG-0487",
    "fen": "4kb1r/r4pp1/R7/2p4p/P2P4/1P3PP1/R4P2/2BQK1N1 b - - 0 17",
    "moves": [
      "a7a6"
    ],
    "rating": 1493,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 361
    }
  },
  {
    "id": "CG-0488",
    "fen": "4kr2/5pp1/R7/1rp5/P2P3b/1P3P2/R2B1P2/3QK1N1 w - - 0 23",
    "moves": [
      "d1e2"
    ],
    "rating": 1559,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 307
    }
  },
  {
    "id": "CG-0489",
    "fen": "4kr2/5pp1/R7/1rp5/P2P3b/1P3P2/R2BQP2/4K1N1 b - - 1 23",
    "moves": [
      "e8d8"
    ],
    "rating": 1402,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 300
    }
  },
  {
    "id": "CG-0490",
    "fen": "3k1r2/5pp1/1R6/1rp5/P2P3b/1P3P2/R2BQP2/4K1N1 b - - 3 24",
    "moves": [
      "b5b6"
    ],
    "rating": 1844,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 180
    }
  },
  {
    "id": "CG-0491",
    "fen": "3k1r2/5pp1/1R3b2/1rp5/P2P4/1P1Q1P2/R2B1P2/4K1N1 b - - 5 25",
    "moves": [
      "f8e8"
    ],
    "rating": 1792,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 128
    }
  },
  {
    "id": "CG-0492",
    "fen": "3k3r/5ppQ/1R3b2/1rp5/P2P4/1P3P2/R2B1P2/4K1N1 b - - 7 26",
    "moves": [
      "h8h7"
    ],
    "rating": 1091,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 155
    }
  },
  {
    "id": "CG-0493",
    "fen": "3k4/5ppr/1R3b2/1rp5/P2P4/1P3P2/R2B1P2/5KN1 b - - 1 27",
    "moves": [
      "b5b6"
    ],
    "rating": 1543,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 274
    }
  },
  {
    "id": "CG-0494",
    "fen": "rn1k1bnr/pb1ppp1p/1q6/2p5/8/BPP2p2/3PP1PP/RN1QKBNR b KQ - 1 9",
    "moves": [
      "f3g2"
    ],
    "rating": 982,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 656
    }
  },
  {
    "id": "CG-0495",
    "fen": "rnbk1bnr/p2ppp1p/1q6/2B5/8/1PP5/3PPKPP/RN1Q1BNR b - - 0 11",
    "moves": [
      "b6c5"
    ],
    "rating": 1020,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 625
    }
  },
  {
    "id": "CG-0496",
    "fen": "rnbk1bnr/p2ppp1p/8/2B5/7q/1PP2N2/3PPKPP/RN1Q1B1R w - - 3 13",
    "moves": [
      "f3h4"
    ],
    "rating": 973,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 558
    }
  },
  {
    "id": "CG-0497",
    "fen": "rnbk2nr/p4p1p/4p3/3p4/R7/1PP2NKP/3PPbP1/1N1Q1B1R w - - 1 18",
    "moves": [
      "g3f2"
    ],
    "rating": 1445,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 304
    }
  },
  {
    "id": "CG-0498",
    "fen": "1n4nr/1b2kR1p/r3p3/p2p4/8/NPP4P/3PPKPN/3Q1B1R b - - 0 22",
    "moves": [
      "e7f7"
    ],
    "rating": 1445,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 291
    }
  },
  {
    "id": "CG-0499",
    "fen": "r1bqkb1r/ppp1pppp/n7/3p4/PP6/2N2Nn1/2PPPP1P/R1BQKB1R w KQkq - 0 6",
    "moves": [
      "h2g3"
    ],
    "rating": 1889,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 136
    }
  },
  {
    "id": "CG-0500",
    "fen": "r1bqkb1r/ppp1pppp/n7/3p4/PP5N/2N3n1/2PPPP1P/R1BQKB1R b KQkq - 1 6",
    "moves": [
      "g3h1"
    ],
    "rating": 1434,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 318
    }
  },
  {
    "id": "CG-0501",
    "fen": "rnbqkb1r/ppp1pppp/8/P2p4/1P5N/2N3n1/2PPPP1P/R1BQKB1R b KQkq - 0 7",
    "moves": [
      "g3h1"
    ],
    "rating": 1427,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 313
    }
  },
  {
    "id": "CG-0502",
    "fen": "rnbqkb1r/ppp1pppp/8/P2p1N2/1P6/2N3n1/2PPPP1P/R1BQKB2 w Qkq - 2 9",
    "moves": [
      "f5g3"
    ],
    "rating": 1535,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 261
    }
  },
  {
    "id": "CG-0503",
    "fen": "rnbqkb1r/ppp1ppp1/8/P2p3p/1P1nPP2/2N5/2P4P/R1BQKB2 w Qkq - 0 12",
    "moves": [
      "d1d4"
    ],
    "rating": 1922,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 102
    }
  },
  {
    "id": "CG-0504",
    "fen": "rnbqkb1r/ppp1ppp1/8/P6p/1P1QpP2/2N5/2P1B2P/R1B1K3 b Qkq - 0 13",
    "moves": [
      "d8d4"
    ],
    "rating": 1022,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 468
    }
  },
  {
    "id": "CG-0505",
    "fen": "rn1k1b2/ppp1pppr/8/P6p/1P2pPB1/2N5/2P4P/R1B1K3 b Q - 0 16",
    "moves": [
      "h5g4"
    ],
    "rating": 1920,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 147
    }
  },
  {
    "id": "CG-0506",
    "fen": "r2k1b2/pppnpppr/8/P6p/1P2pP2/2N2B2/2P4P/R1B1K3 b Q - 2 17",
    "moves": [
      "e4f3"
    ],
    "rating": 1833,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 138
    }
  },
  {
    "id": "CG-0507",
    "fen": "r2k1b2/pp1n1ppr/2p5/P3P2p/1P2p3/5B2/N1P4P/R1B1K3 b Q - 1 19",
    "moves": [
      "e4f3"
    ],
    "rating": 1796,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 178
    }
  },
  {
    "id": "CG-0508",
    "fen": "r2k1b2/pp3ppr/2p5/P3n2p/1P2p3/5B2/N1P4P/R1B1K3 w Q - 0 20",
    "moves": [
      "f3e4"
    ],
    "rating": 1865,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 104
    }
  },
  {
    "id": "CG-0509",
    "fen": "r2k4/pp3ppr/2p5/P3n2p/1b6/5p2/N1P4P/R1B1K3 w - - 0 22",
    "moves": [
      "a2b4"
    ],
    "rating": 1878,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 135
    }
  },
  {
    "id": "CG-0510",
    "fen": "r7/ppk2ppr/N1p3n1/P6p/R7/5p2/2PB3P/3K4 b - - 6 26",
    "moves": [
      "b7a6"
    ],
    "rating": 1953,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 142
    }
  },
  {
    "id": "CG-0511",
    "fen": "r7/pp3ppr/N1pk4/P6p/5n2/5p2/R1P4P/3K4 b - - 1 28",
    "moves": [
      "f3f2"
    ],
    "rating": 1489,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 465
    }
  },
  {
    "id": "CG-0512",
    "fen": "r7/p4ppr/p1pk4/P6p/5n2/5p2/R1P4P/2K5 b - - 1 29",
    "moves": [
      "f3f2"
    ],
    "rating": 1321,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 465
    }
  },
  {
    "id": "CG-0513",
    "fen": "r7/p3kppr/p1p5/P6p/5n2/5p2/1RP4P/2K5 b - - 3 30",
    "moves": [
      "f3f2"
    ],
    "rating": 1392,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 396
    }
  },
  {
    "id": "CG-0514",
    "fen": "1R4rr/p1k2pp1/2p5/P7/7p/5p2/1KP1n2P/8 b - - 1 36",
    "moves": [
      "g8b8"
    ],
    "rating": 955,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98064
    }
  },
  {
    "id": "CG-0515",
    "fen": "r1bqkbnr/ppp1p1p1/2p4p/5p2/4P3/N7/PPPP1PPP/R1BQKB1R w KQkq - 0 6",
    "moves": [
      "d1h5"
    ],
    "rating": 1027,
    "themes": [
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 596
    }
  },
  {
    "id": "CG-0516",
    "fen": "r2qkbnr/pppbp1p1/2p4p/5p2/4P3/N2B4/PPPP1PPP/R1BQK2R w KQkq - 2 7",
    "moves": [
      "d1h5"
    ],
    "rating": 1013,
    "themes": [
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99455
    }
  },
  {
    "id": "CG-0517",
    "fen": "r2qkbnr/pppbp3/2p4p/1B3pp1/4P3/N7/PPPP1PPP/R1BQK2R w KQkq - 0 8",
    "moves": [
      "d1h5"
    ],
    "rating": 865,
    "themes": [
      "mate",
      "mateIn1",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99749
    }
  },
  {
    "id": "CG-0518",
    "fen": "r2qkbnr/pppbp3/2p4p/1B3pp1/4P3/N4P2/PPPP2PP/R1BQK2R b KQkq - 0 8",
    "moves": [
      "c6b5"
    ],
    "rating": 1104,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 650
    }
  },
  {
    "id": "CG-0519",
    "fen": "r2qkbnr/pppbp3/2p4p/1B6/4P1p1/N7/PPPP2PP/R1BQ1K1R b kq - 1 10",
    "moves": [
      "c6b5"
    ],
    "rating": 1439,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 230
    }
  },
  {
    "id": "CG-0520",
    "fen": "r2qkbnr/1ppbp3/2p4p/1p6/3PP1p1/N4Q2/PPP3PP/R1B2K1R b kq - 1 12",
    "moves": [
      "g4f3"
    ],
    "rating": 989,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 296
    }
  },
  {
    "id": "CG-0521",
    "fen": "r1b1kbnr/1pp1p3/2p4p/1p6/3qP1p1/N1Q5/PPP3PP/R1B2K1R w kq - 0 14",
    "moves": [
      "c3d4"
    ],
    "rating": 921,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1324
    }
  },
  {
    "id": "CG-0522",
    "fen": "r1b1kbnr/1pp5/2p1p2p/1p6/3QP1p1/N7/PPP3PP/R1B2K1R w kq - 0 15",
    "moves": [
      "d4h8"
    ],
    "rating": 1813,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 107
    }
  },
  {
    "id": "CG-0523",
    "fen": "2b3nQ/r1p1k3/1pp1p2p/1p4B1/4P1pP/b7/PPP1K1P1/1R5R b - - 4 20",
    "moves": [
      "h6g5"
    ],
    "rating": 1003,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98415
    }
  },
  {
    "id": "CG-0524",
    "fen": "2b4Q/r1p1k3/1pp1pn1p/1p4B1/4P1pP/P7/P1P1K1P1/1R5R b - - 0 21",
    "moves": [
      "h6g5"
    ],
    "rating": 1902,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 181
    }
  },
  {
    "id": "CG-0525",
    "fen": "4Q3/r1p5/bppkpn2/1p4p1/4P1pP/P2K4/P1P3P1/1R1R4 b - - 5 24",
    "moves": [
      "f6e8"
    ],
    "rating": 968,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 957
    }
  },
  {
    "id": "CG-0526",
    "fen": "r3Q3/2p5/bppkpn2/1p4P1/4P1p1/P2K4/P1P3P1/1R1R4 b - - 0 25",
    "moves": [
      "f6e8"
    ],
    "rating": 1067,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 371
    }
  },
  {
    "id": "CG-0527",
    "fen": "r3Q3/2p5/bppk1n2/1p2p1P1/4P1p1/P2K4/P1P3P1/1R1R4 w - - 0 26",
    "moves": [
      "e8a8"
    ],
    "rating": 1818,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 176
    }
  },
  {
    "id": "CG-0528",
    "fen": "Q7/2pk4/bpp2n2/1p2p1P1/4P1p1/P2K4/P1P3P1/1R1R4 w - - 1 27",
    "moves": [
      "g5f6"
    ],
    "rating": 1461,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 488
    }
  },
  {
    "id": "CG-0529",
    "fen": "8/1Qpk4/bpp2n2/1p2p1P1/4P1p1/P2K4/P1P3P1/1R1R4 b - - 2 27",
    "moves": [
      "a6b7"
    ],
    "rating": 858,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 291
    }
  },
  {
    "id": "CG-0530",
    "fen": "8/1bp1k3/1pp2n2/1p2p1P1/1R2P1p1/P2K4/P1P3P1/3R4 w - - 2 29",
    "moves": [
      "g5f6"
    ],
    "rating": 1796,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 146
    }
  },
  {
    "id": "CG-0531",
    "fen": "8/1bp1k3/1p3n2/1pp1p1P1/4P1p1/P2K4/PRP3P1/3R4 w - - 0 30",
    "moves": [
      "g5f6"
    ],
    "rating": 1498,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 306
    }
  },
  {
    "id": "CG-0532",
    "fen": "8/1bp1k3/1p3n2/1pp1p1P1/4P1p1/P1K5/PRP3P1/3R4 b - - 1 30",
    "moves": [
      "f6e4"
    ],
    "rating": 1427,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 386
    }
  },
  {
    "id": "CG-0533",
    "fen": "8/1bp1k3/1p6/2pnp1P1/1PK1P1p1/8/PRP3P1/3R4 b - - 2 32",
    "moves": [
      "d5e3"
    ],
    "rating": 963,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 662
    }
  },
  {
    "id": "CG-0534",
    "fen": "8/2p1k3/bp6/2pnp1P1/1PK1P1p1/8/PRP3P1/3R4 w - - 3 33",
    "moves": [
      "c4d5"
    ],
    "rating": 1466,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 384
    }
  },
  {
    "id": "CG-0535",
    "fen": "r3k2r/ppp2pbp/n6Q/2qpP2n/7P/NR6/PPP1PPP1/R3KBN1 b Qkq - 0 11",
    "moves": [
      "g7h6"
    ],
    "rating": 915,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 874
    }
  },
  {
    "id": "CG-0536",
    "fen": "r3k2r/pp3pbp/nR6/2ppP2Q/7P/N7/PPP1PPP1/R3KBN1 b Qkq - 0 13",
    "moves": [
      "a7b6"
    ],
    "rating": 1403,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 242
    }
  },
  {
    "id": "CG-0537",
    "fen": "r3k2r/pp2bQ1p/R7/2ppP3/7P/N7/PPP1PPP1/R3KBN1 b Qkq - 0 15",
    "moves": [
      "e8f7"
    ],
    "rating": 983,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1087
    }
  },
  {
    "id": "CG-0538",
    "fen": "r4k1r/p3b2p/p3P3/2pp4/2N4P/6P1/PPP1PP2/R3KBN1 b Q - 1 18",
    "moves": [
      "d5c4"
    ],
    "rating": 1840,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 154
    }
  },
  {
    "id": "CG-0539",
    "fen": "r3k2r/p3b2p/p3P3/2pp4/2N4P/6P1/PPP1PP2/R2K1BN1 b - - 3 19",
    "moves": [
      "d5c4"
    ],
    "rating": 1778,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 217
    }
  },
  {
    "id": "CG-0540",
    "fen": "r3k2r/p6p/p3P3/2pp4/2N4b/6P1/PPP1PP2/R2K1BN1 w - - 0 20",
    "moves": [
      "c4d6"
    ],
    "rating": 1742,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 126
    }
  },
  {
    "id": "CG-0541",
    "fen": "r3k2r/p6p/p3P3/2pp4/2N4P/8/PPP1PP2/R2K1BN1 b - - 0 20",
    "moves": [
      "d5c4"
    ],
    "rating": 1820,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 212
    }
  },
  {
    "id": "CG-0542",
    "fen": "1rbqkb1r/Np1ppppp/n1p5/8/5Pn1/4P3/PPPP2PP/R1BQKBNR w KQk - 1 6",
    "moves": [
      "d1g4"
    ],
    "rating": 1306,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 358
    }
  },
  {
    "id": "CG-0543",
    "fen": "r1Nqkb1r/1p1ppppp/n1p5/1B6/5P2/4P3/PPPP2Pn/R1BQK1NR w KQk - 0 8",
    "moves": [
      "b5a6"
    ],
    "rating": 1717,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 107
    }
  },
  {
    "id": "CG-0544",
    "fen": "r1Nqkb1r/1p1p1ppp/B1p5/4p3/5P2/4P3/PPPPN1Pn/R1BQK2R b KQk - 1 9",
    "moves": [
      "d8h4"
    ],
    "rating": 1832,
    "themes": [
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 139
    }
  },
  {
    "id": "CG-0545",
    "fen": "r1N1kb1r/1p1p1ppp/B1p5/4p3/5P1q/4P3/PPPPN1Pn/R1BQK2R w KQk - 2 10",
    "moves": [
      "g2g3"
    ],
    "rating": 1005,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 877
    }
  },
  {
    "id": "CG-0546",
    "fen": "r1N1kb1r/1p1p1ppp/B1p5/4p3/5P1q/4P1N1/PPPP2Pn/R1BQK2R b KQk - 3 10",
    "moves": [
      "h4g3"
    ],
    "rating": 1437,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 333
    }
  },
  {
    "id": "CG-0547",
    "fen": "r1N1kb1r/1p3ppp/2p5/3pp3/2B2P1q/4P1N1/PPPP2Pn/R1BQK2R b KQk - 1 11",
    "moves": [
      "h4g3"
    ],
    "rating": 1394,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 466
    }
  },
  {
    "id": "CG-0548",
    "fen": "r1N1k2r/1p3ppp/2p5/3pp3/1b3P1q/4P1N1/PPPP2Pn/R1BQKB1R b KQk - 3 12",
    "moves": [
      "h4g3"
    ],
    "rating": 1322,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 272
    }
  },
  {
    "id": "CG-0549",
    "fen": "r1N1k2r/1p3ppp/2p5/b2pp3/5P1q/4P1N1/PPPP2Pn/R1BQKB1R w KQk - 4 13",
    "moves": [
      "c8d6"
    ],
    "rating": 1106,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 501
    }
  },
  {
    "id": "CG-0550",
    "fen": "r1N1k2r/1p3ppp/2p5/b2pP3/7q/4P1N1/PPPP2Pn/R1BQKB1R b KQk - 0 13",
    "moves": [
      "h4g3"
    ],
    "rating": 1724,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 162
    }
  },
  {
    "id": "CG-0551",
    "fen": "4k2r/1p3p1p/r1p3p1/N2pP3/8/1P2P1N1/PP1PQ1PR/R1B1KB2 b Q - 2 19",
    "moves": [
      "a6a5"
    ],
    "rating": 1718,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 125
    }
  },
  {
    "id": "CG-0552",
    "fen": "7r/1p2kp1p/r1p3p1/N2pPN2/8/1P2P3/PP1PQ1PR/R1B1KB2 b Q - 4 20",
    "moves": [
      "g6f5"
    ],
    "rating": 1955,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 102
    }
  },
  {
    "id": "CG-0553",
    "fen": "5k1r/5p2/1rN5/1p1pPp1p/6P1/1P2P2R/PP1PQ3/R1B1KB2 w Q - 0 26",
    "moves": [
      "g4f5"
    ],
    "rating": 1941,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 196
    }
  },
  {
    "id": "CG-0554",
    "fen": "5k2/2r2p1r/8/1Q1pPp1p/6P1/PP2P3/1P1P4/R1B1KB1R w Q - 1 29",
    "moves": [
      "b5b8"
    ],
    "rating": 1937,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 205
    }
  },
  {
    "id": "CG-0555",
    "fen": "5k2/2r2p1r/8/2QpPp1p/6P1/PP2P3/1P1P4/R1B1KB1R b Q - 2 29",
    "moves": [
      "c7c5"
    ],
    "rating": 949,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 690
    }
  },
  {
    "id": "CG-0556",
    "fen": "r1bqkb1r/p1pppppp/5nN1/1p6/3P4/2N5/nPP1PPPP/R1BQKB1R w KQkq - 0 6",
    "moves": [
      "g6h8"
    ],
    "rating": 1504,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 365
    }
  },
  {
    "id": "CG-0557",
    "fen": "r1bqkb1r/p1pppppp/6N1/1N6/3Pn3/8/nPP1PPPP/R1BQKB1R w KQkq - 1 7",
    "moves": [
      "g6h8"
    ],
    "rating": 1425,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 267
    }
  },
  {
    "id": "CG-0558",
    "fen": "r1bqkb1r/p1pppppp/6N1/1N6/3Pn3/8/nPPQPPPP/R1B1KB1R b KQkq - 2 7",
    "moves": [
      "e4d2"
    ],
    "rating": 917,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 533
    }
  },
  {
    "id": "CG-0559",
    "fen": "r1bqkN1r/2pppppp/p7/1N6/3Pn3/8/nPPQPPPP/R1B1KB1R b KQkq - 0 8",
    "moves": [
      "e4d2"
    ],
    "rating": 1036,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 232
    }
  },
  {
    "id": "CG-0560",
    "fen": "r1bqk2r/3ppppN/p2p4/8/3P4/8/nPPQPnPP/R1B1KB1R b KQkq - 0 10",
    "moves": [
      "f2h1"
    ],
    "rating": 1383,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 487
    }
  },
  {
    "id": "CG-0561",
    "fen": "r1bqk2r/3p1ppN/p2pp3/8/3P4/8/nPPQPnPP/R1B1KB1R w KQkq - 0 11",
    "moves": [
      "e1f2"
    ],
    "rating": 958,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 552
    }
  },
  {
    "id": "CG-0562",
    "fen": "r1bqk2r/3p1ppN/p2pp3/8/3P4/8/RPPQPnPP/2B1KB1R b Kkq - 0 11",
    "moves": [
      "f2h1"
    ],
    "rating": 1315,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 447
    }
  },
  {
    "id": "CG-0563",
    "fen": "r1bqk2r/3p1ppN/p3p3/3p4/3P4/8/RPPQPnPP/2B1KB1R w Kkq - 0 12",
    "moves": [
      "e1f2"
    ],
    "rating": 994,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 539
    }
  },
  {
    "id": "CG-0564",
    "fen": "r1bqk2r/3p1ppN/p3p3/3p4/3P4/2Q5/RPP1PnPP/2B1KB1R b Kkq - 1 12",
    "moves": [
      "f2h1"
    ],
    "rating": 1741,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 180
    }
  },
  {
    "id": "CG-0565",
    "fen": "r1b1k3/3p1p2/R3pq1r/3p2p1/3P4/2Q5/1PP1P1PP/4KB1R b q - 0 17",
    "moves": [
      "c8a6"
    ],
    "rating": 961,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 660
    }
  },
  {
    "id": "CG-0566",
    "fen": "R1b1k3/3p1p2/4p2r/3p2p1/3q4/2Q5/1PP1P1PP/4KB1R b - - 0 18",
    "moves": [
      "d4c3"
    ],
    "rating": 994,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 176
    }
  },
  {
    "id": "CG-0567",
    "fen": "R1b1k3/3p1p2/2Q1p2r/3p2p1/6q1/8/1PP1P1PP/4KB1R b - - 2 19",
    "moves": [
      "d7c6"
    ],
    "rating": 990,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1340
    }
  },
  {
    "id": "CG-0568",
    "fen": "R1b1k3/3p1p2/2Q1p2r/3p2p1/8/8/1PP1B1PP/4K2R b - - 0 20",
    "moves": [
      "d7c6"
    ],
    "rating": 1036,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 715
    }
  },
  {
    "id": "CG-0569",
    "fen": "R1b1k3/3p1p2/4p3/3p2pB/r7/2Q5/1PP3PP/4K2R b - - 4 22",
    "moves": [
      "a4a8"
    ],
    "rating": 1426,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 337
    }
  },
  {
    "id": "CG-0570",
    "fen": "2b1k3/3p1p2/4p3/3p2pB/8/2Q4P/1PPK2P1/r6R b - - 2 24",
    "moves": [
      "a1h1"
    ],
    "rating": 1928,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 120
    }
  },
  {
    "id": "CG-0571",
    "fen": "2Q2k2/5p2/b2pp3/3p2pB/6P1/7P/1PPK4/R7 b - - 1 27",
    "moves": [
      "a6c8"
    ],
    "rating": 1062,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 769
    }
  },
  {
    "id": "CG-0572",
    "fen": "2b5/3R4/3pp3/3pk1pB/6P1/7P/1PPK4/8 b - - 2 31",
    "moves": [
      "c8d7"
    ],
    "rating": 945,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 795
    }
  },
  {
    "id": "CG-0573",
    "fen": "8/3b4/4R3/3p2pB/3k2P1/7P/1PPK4/8 b - - 0 34",
    "moves": [
      "d7e6"
    ],
    "rating": 1423,
    "themes": [
      "hangingPiece",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 315
    }
  },
  {
    "id": "CG-0574",
    "fen": "rnbqkb1r/2pppppp/8/pP6/N7/5P2/PP1PP1Pn/R1BQKBNR w KQkq a6 0 6",
    "moves": [
      "h1h2"
    ],
    "rating": 870,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 552
    }
  },
  {
    "id": "CG-0575",
    "fen": "rnbqkb1r/2pppppp/P7/8/N7/5P2/PP1PP1Pn/R1BQKBNR b KQkq - 0 6",
    "moves": [
      "h2f1"
    ],
    "rating": 1381,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 308
    }
  },
  {
    "id": "CG-0576",
    "fen": "rn1qkb1r/2pppppp/b7/8/N7/5P2/PP1PP1Pn/R1BQKBNR w KQkq - 0 7",
    "moves": [
      "h1h2"
    ],
    "rating": 888,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 541
    }
  },
  {
    "id": "CG-0577",
    "fen": "rn1qkb1r/2pppppp/b7/8/N7/5P2/PPQPP1Pn/R1B1KBNR b KQkq - 1 7",
    "moves": [
      "h2f1"
    ],
    "rating": 1531,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 353
    }
  },
  {
    "id": "CG-0578",
    "fen": "rn1qkbr1/2pppppp/b1Q5/8/N7/P4P2/1P1nP1P1/R1B1K1NR w KQq - 0 10",
    "moves": [
      "c6a8"
    ],
    "rating": 1875,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 224
    }
  },
  {
    "id": "CG-0579",
    "fen": "Qn1qkbr1/3ppppp/b1p5/8/N7/P4P2/1P1nP1P1/R1B1K1NR w KQ - 0 11",
    "moves": [
      "c1d2"
    ],
    "rating": 1750,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 131
    }
  },
  {
    "id": "CG-0580",
    "fen": "1n1qkbr1/3ppppp/Q1p5/8/N7/P4P2/RP2P1P1/2B1KnNR b K - 2 12",
    "moves": [
      "b8a6"
    ],
    "rating": 946,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 929
    }
  },
  {
    "id": "CG-0581",
    "fen": "3qkbr1/3ppppp/n1p5/8/N7/P4P2/RP2P1P1/2B1KnNR w K - 0 13",
    "moves": [
      "e1f1"
    ],
    "rating": 1804,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 108
    }
  },
  {
    "id": "CG-0582",
    "fen": "5br1/3pk1pp/n1p5/q3pP2/N7/P4P2/RP2P3/2B2KNR b - - 0 17",
    "moves": [
      "a5a4"
    ],
    "rating": 1419,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 312
    }
  },
  {
    "id": "CG-0583",
    "fen": "1n3br1/3p3p/2pk2pB/q3pP2/N4P2/P7/RP2P3/5KNR b - - 1 20",
    "moves": [
      "a5a4"
    ],
    "rating": 1740,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 104
    }
  },
  {
    "id": "CG-0584",
    "fen": "1n3Br1/3p3p/2pk2p1/q3pP2/N4P2/P6R/RP2P3/5KN1 b - - 0 22",
    "moves": [
      "g8f8"
    ],
    "rating": 1320,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 317
    }
  },
  {
    "id": "CG-0585",
    "fen": "1n3r2/3p3p/2pk2p1/4pP2/Nq3P2/PPR5/R3P3/5KN1 b - - 2 24",
    "moves": [
      "b4f4"
    ],
    "rating": 1894,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 173
    }
  },
  {
    "id": "CG-0586",
    "fen": "1n3r2/3p3p/2pk2p1/4pP2/q4P2/PPR5/3RP3/5KN1 b - - 1 25",
    "moves": [
      "a4d4"
    ],
    "rating": 1089,
    "themes": [
      "fork",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 538
    }
  },
  {
    "id": "CG-0587",
    "fen": "1n3r2/3p3p/2pk2p1/4pP2/3R1P2/PPR5/4P3/5KN1 b - - 0 26",
    "moves": [
      "e5d4"
    ],
    "rating": 859,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 734
    }
  },
  {
    "id": "CG-0588",
    "fen": "1n3r2/3p3p/2pk2p1/5P2/P2p1P2/1PR5/4P3/5KN1 b - - 0 27",
    "moves": [
      "d4c3"
    ],
    "rating": 1480,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 476
    }
  },
  {
    "id": "CG-0589",
    "fen": "1nbqk1nr/rppp1p1p/B7/p5N1/4Pp1P/6P1/PPPN4/R1BQK2R b KQk - 0 11",
    "moves": [
      "a7a6"
    ],
    "rating": 1509,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 263
    }
  },
  {
    "id": "CG-0590",
    "fen": "rnbqk1nr/1ppp3p/8/p4pN1/P3P2P/3B2p1/1PPN4/R1BQK2R w KQk - 0 14",
    "moves": [
      "d1h5"
    ],
    "rating": 896,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98629
    }
  },
  {
    "id": "CG-0591",
    "fen": "rnbqk1nr/1ppp3p/8/p5N1/P1B1p2P/6p1/1PPN4/R1BQK2R w KQk - 0 15",
    "moves": [
      "d1h5"
    ],
    "rating": 1108,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98483
    }
  },
  {
    "id": "CG-0592",
    "fen": "rnb1k1nr/1ppp3p/8/p5q1/P1B1p2P/6p1/1PPN4/R1BQK1R1 w Qk - 0 16",
    "moves": [
      "h4g5"
    ],
    "rating": 895,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 202
    }
  },
  {
    "id": "CG-0593",
    "fen": "rnk3nr/2p4p/p7/p2Q2P1/b3N3/6p1/1PP5/R1B2KR1 w - - 1 22",
    "moves": [
      "a1a4"
    ],
    "rating": 1937,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0594",
    "fen": "rnk3nr/2pQ3p/p7/p5P1/b3N3/6p1/1PP5/R1B2KR1 b - - 2 22",
    "moves": [
      "a4d7"
    ],
    "rating": 892,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 410
    }
  },
  {
    "id": "CG-0595",
    "fen": "1n4n1/r1p1k1Br/p5P1/p6p/4N3/R7/1PP5/R3K3 w - - 1 32",
    "moves": [
      "g6h7"
    ],
    "rating": 1415,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 406
    }
  },
  {
    "id": "CG-0596",
    "fen": "1n4n1/r1p1k1Br/p5P1/p6p/4N3/4R3/1PP5/R3K3 b - - 2 32",
    "moves": [
      "h7g7"
    ],
    "rating": 913,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 860
    }
  },
  {
    "id": "CG-0597",
    "fen": "1n4n1/1rp1k2r/p4BP1/p6p/4N3/4R3/1PP5/R3K3 b - - 4 33",
    "moves": [
      "g8f6"
    ],
    "rating": 1428,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 496
    }
  },
  {
    "id": "CG-0598",
    "fen": "1n6/1rp1k2r/p2N1nP1/p6p/8/4R3/1PP5/R3K3 b - - 1 34",
    "moves": [
      "e7d6"
    ],
    "rating": 948,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 890
    }
  },
  {
    "id": "CG-0599",
    "fen": "1n6/1rpn3r/p3k1P1/p6p/8/2PR4/1P6/R3K3 w - - 1 37",
    "moves": [
      "g6h7"
    ],
    "rating": 940,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 806
    }
  },
  {
    "id": "CG-0600",
    "fen": "rq2kbnr/5pp1/p1n2p2/1pBp1B1p/7P/1P4P1/P1PPPP2/R2QKR2 b Qkq - 0 13",
    "moves": [
      "f8c5"
    ],
    "rating": 1487,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 271
    }
  },
  {
    "id": "CG-0601",
    "fen": "r3kbnr/5pp1/p1n2p2/1pBp1B1p/7P/1P4q1/P1PPPP2/R2QKR2 w Qkq - 0 14",
    "moves": [
      "f2g3"
    ],
    "rating": 997,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 550
    }
  },
  {
    "id": "CG-0602",
    "fen": "r3kbnr/5pp1/p1nB1p2/1p1p1B1p/7P/1P4q1/P1PPPP2/R2QKR2 b Qkq - 1 14",
    "moves": [
      "g3d6"
    ],
    "rating": 1453,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 270
    }
  },
  {
    "id": "CG-0603",
    "fen": "r3kbnr/5pp1/p1nB1pq1/1p1p1B1p/7P/1P6/P1PPPP2/R2QKR2 w Qkq - 2 15",
    "moves": [
      "f5g6"
    ],
    "rating": 1073,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1092
    }
  },
  {
    "id": "CG-0604",
    "fen": "r3kbnr/5pp1/p1nB1pq1/1p1p1B1p/4P2P/1P6/P1PP1P2/R2QKR2 b Qkq - 0 15",
    "moves": [
      "g6g2"
    ],
    "rating": 1850,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 205
    }
  },
  {
    "id": "CG-0605",
    "fen": "r3kbnr/5pp1/p1nB1p2/1p1p1B1p/4P2P/1P4q1/P1PP1P2/R2QKR2 w Qkq - 1 16",
    "moves": [
      "d6g3"
    ],
    "rating": 934,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 205
    }
  },
  {
    "id": "CG-0606",
    "fen": "rB2kbnr/5pp1/p1n2p2/1p1p1B1p/4P2P/1P4q1/P1PP1P2/R2QKR2 b Qkq - 2 16",
    "moves": [
      "g3b8"
    ],
    "rating": 1438,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 245
    }
  },
  {
    "id": "CG-0607",
    "fen": "1r2kbnr/5pp1/p1n2p2/1p1p1B1p/4P2P/1P4q1/P1PP1P2/R2QKR2 w Qk - 0 17",
    "moves": [
      "f2g3"
    ],
    "rating": 998,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 547
    }
  },
  {
    "id": "CG-0608",
    "fen": "1r2kbnr/5ppB/p1n2p2/1p1p3p/4P2P/1q6/P1PP1P2/R2QKR2 w Qk - 0 18",
    "moves": [
      "a2b3"
    ],
    "rating": 991,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 297
    }
  },
  {
    "id": "CG-0609",
    "fen": "1r3bBr/4kpp1/p1n2p2/1p1p3p/4P2P/1q6/P1PP1P2/R2QKR2 w Q - 1 19",
    "moves": [
      "a2b3"
    ],
    "rating": 960,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 110
    }
  },
  {
    "id": "CG-0610",
    "fen": "1r3b2/4kBp1/p1n2p1r/1p1p3p/4P2P/1P6/2PP1P2/R2QKR2 b Q - 0 20",
    "moves": [
      "e7f7"
    ],
    "rating": 1810,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 127
    }
  },
  {
    "id": "CG-0611",
    "fen": "1r6/4bkp1/5pr1/1pR4p/7P/1P3p2/2PP4/3QKR2 b - - 3 25",
    "moves": [
      "f3f2"
    ],
    "rating": 1749,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 212
    }
  },
  {
    "id": "CG-0612",
    "fen": "1r6/4bkp1/5p1r/1pR4p/7P/1P3R2/2PP4/3QK3 b - - 0 26",
    "moves": [
      "e7c5"
    ],
    "rating": 1457,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 275
    }
  },
  {
    "id": "CG-0613",
    "fen": "r2qkbnr/pp2ppp1/8/7p/2pnpPb1/BPP4N/P3P1PP/1R1QKB1R w Kkq - 0 10",
    "moves": [
      "d1d4"
    ],
    "rating": 897,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 527
    }
  },
  {
    "id": "CG-0614",
    "fen": "r2qkbnr/pp2ppp1/8/7p/2pPpPb1/BP5N/P3P1PP/1R1QKB1R b Kkq - 0 10",
    "moves": [
      "d8a5"
    ],
    "rating": 1553,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 243
    }
  },
  {
    "id": "CG-0615",
    "fen": "rq2kbnr/pR2pppb/8/7p/2PPpP2/B7/P3P1PP/3QKBNR b Kkq - 0 13",
    "moves": [
      "b8b7"
    ],
    "rating": 1032,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1252
    }
  },
  {
    "id": "CG-0616",
    "fen": "rq2kbnr/pR2ppp1/6b1/7p/2PPpP2/B7/P3P1PP/3QKBNR w Kkq - 1 14",
    "moves": [
      "d1a4"
    ],
    "rating": 931,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98975
    }
  },
  {
    "id": "CG-0617",
    "fen": "1r2kbnr/3q1ppb/4p3/7p/2PPpP1P/7R/P1K1P1P1/2BQ1BN1 b k - 1 19",
    "moves": [
      "e4e3"
    ],
    "rating": 973,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 97989
    }
  },
  {
    "id": "CG-0618",
    "fen": "1r2kbnr/5ppb/4p3/7p/2PqpP1P/7R/P1K1P1P1/2BQ1BN1 w k - 0 20",
    "moves": [
      "d1d4"
    ],
    "rating": 983,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 977
    }
  },
  {
    "id": "CG-0619",
    "fen": "1r2kbnr/5ppb/4p3/7p/2PqpP1P/7R/P1KBP1P1/3Q1BN1 b k - 1 20",
    "moves": [
      "d4b2"
    ],
    "rating": 1069,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0620",
    "fen": "1r2kbnr/5ppb/4p3/7p/2P1pP1P/7R/P1KqP1P1/3Q1BN1 w k - 0 21",
    "moves": [
      "c2d2"
    ],
    "rating": 929,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 595
    }
  },
  {
    "id": "CG-0621",
    "fen": "1r2kbnr/5ppb/4p3/7p/2P2P1P/4p2R/P2KP1P1/3Q1BN1 w k - 0 22",
    "moves": [
      "h3e3"
    ],
    "rating": 1451,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 375
    }
  },
  {
    "id": "CG-0622",
    "fen": "1r2k1nr/5ppb/3bR3/7p/2P2P1P/8/P2KP1P1/3Q1BN1 b k - 0 23",
    "moves": [
      "f7e6"
    ],
    "rating": 1034,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 681
    }
  },
  {
    "id": "CG-0623",
    "fen": "1r2k2r/4nppb/3bR3/7p/2P2P1P/8/P2KP1P1/3Q1BN1 w k - 1 24",
    "moves": [
      "d1a4"
    ],
    "rating": 1790,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 120
    }
  },
  {
    "id": "CG-0624",
    "fen": "1r2k2r/4nppb/3bR3/7p/2P2P1P/8/P3P1P1/3QKBN1 b k - 2 24",
    "moves": [
      "d6b4"
    ],
    "rating": 1360,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 266
    }
  },
  {
    "id": "CG-0625",
    "fen": "1r2k2r/4Rpp1/3b4/7p/2P1bP1P/8/P3P1P1/3QKBN1 b k - 0 25",
    "moves": [
      "d6e7"
    ],
    "rating": 1828,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 133
    }
  },
  {
    "id": "CG-0626",
    "fen": "4k2r/4b1Q1/5p2/7p/1rP1bP1P/8/P3P1P1/4KBN1 w k - 0 28",
    "moves": [
      "g7h8"
    ],
    "rating": 1385,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 337
    }
  },
  {
    "id": "CG-0627",
    "fen": "r1bqkbr1/pppp1ppp/n7/1N2p2n/8/1P2P3/P1PPBPPP/R1BQK1NR w KQq - 2 6",
    "moves": [
      "e2h5"
    ],
    "rating": 1467,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 415
    }
  },
  {
    "id": "CG-0628",
    "fen": "1rbqkbr1/p2p1ppp/n5Q1/1p1pp2B/8/1P2P3/P1PP1PPP/R1B1K1NR w KQ - 2 10",
    "moves": [
      "g6f7"
    ],
    "rating": 888,
    "themes": [
      "mate",
      "mateIn1",
      "capturingDefender",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99464
    }
  },
  {
    "id": "CG-0629",
    "fen": "1rb1kbr1/p2pqppp/n7/1p1pp2B/8/1P1QP3/P1PP1PPP/R1B1K1NR w KQ - 4 11",
    "moves": [
      "d3h7"
    ],
    "rating": 1474,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 362
    }
  },
  {
    "id": "CG-0630",
    "fen": "1rb1kbr1/p2pqBpp/n7/1p1pp3/8/1P1QP3/P1PP1PPP/R1B1K1NR b KQ - 0 11",
    "moves": [
      "e7f7"
    ],
    "rating": 1454,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 309
    }
  },
  {
    "id": "CG-0631",
    "fen": "1rbk1br1/p2pqBpp/n7/1p1pp3/8/1P1QP3/P1PP1PPP/R1B1K1NR w KQ - 1 12",
    "moves": [
      "f7g8"
    ],
    "rating": 1365,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 291
    }
  },
  {
    "id": "CG-0632",
    "fen": "1rbk1br1/p2p1Bpp/4q3/1p2Q3/1n6/1P2P3/P1PP1PPP/R1B1K1NR w KQ - 1 14",
    "moves": [
      "f7e6"
    ],
    "rating": 957,
    "themes": [
      "fork",
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 188
    }
  },
  {
    "id": "CG-0633",
    "fen": "1rbk1br1/p2p1Bpp/4q3/1p2Q3/8/PP2P3/2nPKPPP/R1B3NR b - - 1 15",
    "moves": [
      "e6e5"
    ],
    "rating": 941,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 459
    }
  },
  {
    "id": "CG-0634",
    "fen": "rnbqkb1r/1ppppppp/8/p7/P7/6P1/1PPPPn1P/RNBQK1NR w KQkq - 0 6",
    "moves": [
      "e1f2"
    ],
    "rating": 1391,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 463
    }
  },
  {
    "id": "CG-0635",
    "fen": "rnb1kb1r/1pqpp1pp/5p2/2p5/Pp6/2P3PP/1R1PP3/1NBQK1Nn b kq - 4 12",
    "moves": [
      "c7g3"
    ],
    "rating": 1017,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98544
    }
  },
  {
    "id": "CG-0636",
    "fen": "rnb1kbr1/3p2pp/5p2/1qp1pn2/P1R5/1p2P3/1B1P1K2/1N1Q2N1 w q - 1 23",
    "moves": [
      "a4b5"
    ],
    "rating": 1025,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 774
    }
  },
  {
    "id": "CG-0637",
    "fen": "1nb1kbr1/3p2pp/5p2/rqp1pn2/P7/1p2P3/1B1P1K2/1NRQ2N1 w - - 3 24",
    "moves": [
      "a4b5"
    ],
    "rating": 1010,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 765
    }
  },
  {
    "id": "CG-0638",
    "fen": "1nb1kbr1/3p2pp/5p1n/rqp1p3/P7/1p1PP3/1B3K2/1NRQ2N1 w - - 1 25",
    "moves": [
      "a4b5"
    ],
    "rating": 1009,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 891
    }
  },
  {
    "id": "CG-0639",
    "fen": "rnbqkbnr/3ppp1p/ppp3p1/4B3/1P6/3P3N/P1P1PPPP/RN1QKB1R w KQkq - 2 7",
    "moves": [
      "e5h8"
    ],
    "rating": 1502,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 395
    }
  },
  {
    "id": "CG-0640",
    "fen": "1nb1kbnB/r2pp2p/p1p2pp1/qp6/1P2P3/3P3N/P1P1BPPP/RN1QK2R w KQ - 2 11",
    "moves": [
      "b4a5"
    ],
    "rating": 1039,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 168
    }
  },
  {
    "id": "CG-0641",
    "fen": "1nb1kbnB/3rp2p/p4p2/1Rp3p1/4P3/3P3N/P1P2PPP/2KQ1R2 b - - 0 17",
    "moves": [
      "a6b5"
    ],
    "rating": 1817,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 201
    }
  },
  {
    "id": "CG-0642",
    "fen": "1nb1kbn1/3rp1B1/5p1p/1pp3p1/4P3/3P3N/P1P2PPP/1K1Q1R2 b - - 1 19",
    "moves": [
      "f8g7"
    ],
    "rating": 1802,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 182
    }
  },
  {
    "id": "CG-0643",
    "fen": "4kbn1/3rp3/2n2B1p/1ppb2p1/4P3/3P4/P1P2PPP/1K1Q1RN1 w - - 3 22",
    "moves": [
      "e4d5"
    ],
    "rating": 1956,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 141
    }
  },
  {
    "id": "CG-0644",
    "fen": "4kbn1/3rp3/2n2B1p/1ppb2pQ/4P3/3P4/P1P2PPP/1K3RN1 b - - 4 22",
    "moves": [
      "d5f7"
    ],
    "rating": 979,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 650
    }
  },
  {
    "id": "CG-0645",
    "fen": "4kbn1/3rpb2/2n4p/1pp3BQ/4P3/3P4/P1P2PPP/1K3RN1 b - - 0 23",
    "moves": [
      "f7h5"
    ],
    "rating": 863,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1104
    }
  },
  {
    "id": "CG-0646",
    "fen": "4kbn1/3rpb2/2n3Q1/1pp3p1/4P3/3P4/P1P2PPP/1K3RN1 b - - 1 24",
    "moves": [
      "f7g6"
    ],
    "rating": 1067,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1294
    }
  },
  {
    "id": "CG-0647",
    "fen": "4kbn1/3r1b2/4p3/1p1n2Q1/2p1P3/3P4/PKP1NPPP/5R2 w - - 2 28",
    "moves": [
      "e4d5"
    ],
    "rating": 1944,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 197
    }
  },
  {
    "id": "CG-0648",
    "fen": "3rkbn1/5b2/4p3/1p1n4/2p1P3/3P2Q1/PKP1NPPP/5R2 w - - 4 29",
    "moves": [
      "e4d5"
    ],
    "rating": 1719,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 101
    }
  },
  {
    "id": "CG-0649",
    "fen": "3rkbn1/5b2/4p3/1p1nP3/8/2Pp2Q1/PK2NPPP/5R2 b - - 0 30",
    "moves": [
      "d3e2"
    ],
    "rating": 1101,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 538
    }
  },
  {
    "id": "CG-0650",
    "fen": "3rk1n1/5bb1/4p3/1p1nP3/8/2Pp3Q/PK2NPPP/5R2 b - - 2 31",
    "moves": [
      "d3e2"
    ],
    "rating": 1345,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 294
    }
  },
  {
    "id": "CG-0651",
    "fen": "3rk1n1/5b2/4pb2/1p1nP3/8/2Pp3Q/PK2NPPP/5R2 w - - 3 32",
    "moves": [
      "h3d3"
    ],
    "rating": 1845,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 213
    }
  },
  {
    "id": "CG-0652",
    "fen": "3rk1n1/5b2/4pb2/1p1nP3/8/P1Pp3Q/1K2NPPP/5R2 b - - 0 32",
    "moves": [
      "d3e2"
    ],
    "rating": 1457,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 450
    }
  },
  {
    "id": "CG-0653",
    "fen": "3rk1n1/5b2/4Q3/1p1nb3/8/P1Pp4/1K2NPPP/5R2 b - - 0 33",
    "moves": [
      "f7e6"
    ],
    "rating": 1031,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1215
    }
  },
  {
    "id": "CG-0654",
    "fen": "rnbqk2r/p1pp1ppp/4p3/1p2B3/3P2n1/b6N/PPP1PPPP/R2QKB1R w KQkq - 0 6",
    "moves": [
      "b2a3"
    ],
    "rating": 1526,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 364
    }
  },
  {
    "id": "CG-0655",
    "fen": "rnbqk2r/p1Bp1ppp/4p3/1p6/3P4/b6N/PPP1PnPP/R2QKB1R w KQkq - 0 7",
    "moves": [
      "e1f2"
    ],
    "rating": 1781,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 131
    }
  },
  {
    "id": "CG-0656",
    "fen": "rnbBk2r/p2p1ppp/4p3/1p6/3P4/b6N/PPP1PnPP/R2QKB1R b KQkq - 0 7",
    "moves": [
      "f2d1"
    ],
    "rating": 928,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 996
    }
  },
  {
    "id": "CG-0657",
    "fen": "rnbBk2r/p2p1ppp/4p3/1p6/3P4/b6N/PPP1P1PP/1R1nKB1R b Kkq - 1 8",
    "moves": [
      "d1b2"
    ],
    "rating": 1918,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 106
    }
  },
  {
    "id": "CG-0658",
    "fen": "r1b2k1r/p2p1ppp/1Bn1p3/1p6/3P4/1P5N/P1P1P1PP/2bRKB1R b K - 2 11",
    "moves": [
      "a7b6"
    ],
    "rating": 1858,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 188
    }
  },
  {
    "id": "CG-0659",
    "fen": "r1b1k2r/p2p1ppp/1Bn1p3/1p6/3P4/1P5N/P1P1P1PP/2R1KB1R b K - 0 12",
    "moves": [
      "a7b6"
    ],
    "rating": 1033,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 515
    }
  },
  {
    "id": "CG-0660",
    "fen": "r1b1k2r/p2p1ppp/1B2p3/1p6/3n4/1P5N/P1P1P1PP/2R1KB1R w K - 0 13",
    "moves": [
      "b6d4"
    ],
    "rating": 1390,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 233
    }
  },
  {
    "id": "CG-0661",
    "fen": "r1bBk2r/p2p1ppp/4p3/1p6/3n4/1P5N/P1P1P1PP/2R1KB1R b K - 1 13",
    "moves": [
      "e8d8"
    ],
    "rating": 1075,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 508
    }
  },
  {
    "id": "CG-0662",
    "fen": "r1bBk2r/p2p1ppp/4p3/1p6/8/1n6/P1P1PNPP/2R1KB1R b K - 1 14",
    "moves": [
      "b3c1"
    ],
    "rating": 1085,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 860
    }
  },
  {
    "id": "CG-0663",
    "fen": "r1b1kr2/3p1ppp/4p3/pp6/2P1N3/B7/P3P1PP/2n1KB1R b K - 0 18",
    "moves": [
      "c1a2"
    ],
    "rating": 1793,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 160
    }
  },
  {
    "id": "CG-0664",
    "fen": "2b1kr2/r2p1ppp/4p3/pp6/2P1N3/B7/P3P1PP/2n1KB1R w K - 1 19",
    "moves": [
      "e4d6"
    ],
    "rating": 1440,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 277
    }
  },
  {
    "id": "CG-0665",
    "fen": "2b1kB2/r2p1ppp/4p3/pp6/2P1N3/8/P3P1PP/2n1KB1R b K - 0 19",
    "moves": [
      "e8f8"
    ],
    "rating": 1483,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 235
    }
  },
  {
    "id": "CG-0666",
    "fen": "2bk1B2/r2p1ppp/4p3/pP6/4N3/3n4/P3P1PP/4KB1R w K - 1 21",
    "moves": [
      "e2d3"
    ],
    "rating": 1771,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 186
    }
  },
  {
    "id": "CG-0667",
    "fen": "rn1qkb1r/ppp1Nppp/7n/3p1b2/8/PP6/2PPPPPP/R1BQKBNR w KQkq - 1 6",
    "moves": [
      "e7f5"
    ],
    "rating": 905,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 557
    }
  },
  {
    "id": "CG-0668",
    "fen": "rn1qkb1r/pp2Nppp/7n/2pp1b2/8/PP5N/2PPPPPP/R1BQKB1R w KQkq - 0 7",
    "moves": [
      "e7f5"
    ],
    "rating": 925,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 714
    }
  },
  {
    "id": "CG-0669",
    "fen": "rn1qkb1r/pp3ppp/6Nn/2pp4/4b3/PP5N/2PPPPPP/R1BQKB1R w KQkq - 2 8",
    "moves": [
      "g6h8"
    ],
    "rating": 1370,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 301
    }
  },
  {
    "id": "CG-0670",
    "fen": "rn2kb1N/pp3ppp/4q2n/2pp4/8/PP5N/2PPPPbP/R1BQKB1R w Qq - 0 11",
    "moves": [
      "f1g2"
    ],
    "rating": 1770,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 211
    }
  },
  {
    "id": "CG-0671",
    "fen": "rn2kb2/pp3ppp/4q1Nn/2pp4/8/PP5N/2PPPPbP/R1BQKB1R b Qq - 1 11",
    "moves": [
      "g2h1"
    ],
    "rating": 1944,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 202
    }
  },
  {
    "id": "CG-0672",
    "fen": "rn2kb2/pp3ppp/6Nn/2pp4/8/PP5q/2PPPPbP/R1BQKB1R w Qq - 0 12",
    "moves": [
      "g6f4"
    ],
    "rating": 1300,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 482
    }
  },
  {
    "id": "CG-0673",
    "fen": "rn2kb2/pp3ppp/6Nn/2pp4/8/PP5q/2PPPPBP/R1BQK2R b Qq - 0 12",
    "moves": [
      "h3g2"
    ],
    "rating": 855,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1108
    }
  },
  {
    "id": "CG-0674",
    "fen": "rn2kb2/pp3ppp/7n/2pp4/7N/PP6/2PPPPqP/R1BQK2R w Qq - 0 14",
    "moves": [
      "h4g2"
    ],
    "rating": 1003,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 777
    }
  },
  {
    "id": "CG-0675",
    "fen": "rn2kb2/pp3ppp/7n/2pp4/5P1N/PP6/2PPP1qP/R1BQK2R b Qq - 0 14",
    "moves": [
      "g2h1"
    ],
    "rating": 962,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1014
    }
  },
  {
    "id": "CG-0676",
    "fen": "rn2kb2/p4ppp/7n/1ppp4/5P1N/PP6/2PPPK1P/R1BQ3q w q - 0 16",
    "moves": [
      "d1h1"
    ],
    "rating": 1104,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1588
    }
  },
  {
    "id": "CG-0677",
    "fen": "5r2/p2k1ppp/n2n4/1ppp1Q2/8/PP6/R1PPPK1P/2B5 b - - 3 24",
    "moves": [
      "d6f5"
    ],
    "rating": 1011,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1418
    }
  },
  {
    "id": "CG-0678",
    "fen": "5r2/p3kppp/n2n4/1ppp1Q2/8/PP6/R1PPP2P/2B2K2 b - - 5 25",
    "moves": [
      "d6f5"
    ],
    "rating": 970,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1424
    }
  },
  {
    "id": "CG-0679",
    "fen": "1r6/p3kppp/n2n4/1ppp1Q2/P7/1P6/R1PPP2P/2B2K2 b - - 0 26",
    "moves": [
      "d6f5"
    ],
    "rating": 898,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 929
    }
  },
  {
    "id": "CG-0680",
    "fen": "1r6/pn1Qkppp/n7/1ppp4/P7/1P6/R1PPP2P/2B2K2 b - - 2 27",
    "moves": [
      "e7d7"
    ],
    "rating": 1101,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1543
    }
  },
  {
    "id": "CG-0681",
    "fen": "1r6/pn1k2pp/n7/1ppp1p2/P7/1P6/2PPP2P/R1B2K2 w - - 0 29",
    "moves": [
      "a4b5"
    ],
    "rating": 1779,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0682",
    "fen": "5r2/pn1k2pp/n7/1ppp1p2/P1P5/1P6/3PP2P/R1B2K2 w - - 1 30",
    "moves": [
      "a4b5"
    ],
    "rating": 1336,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 349
    }
  },
  {
    "id": "CG-0683",
    "fen": "8/pn1k1rpp/n7/1ppp1p2/P1P5/1P6/1B1PP2P/R4K2 w - - 3 31",
    "moves": [
      "a4b5"
    ],
    "rating": 1922,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 227
    }
  },
  {
    "id": "CG-0684",
    "fen": "r2qkbnr/pbpppp1p/1pB5/6p1/1n5P/P5P1/1PPPPP2/RNBQK1NR w KQkq - 5 6",
    "moves": [
      "c6b7"
    ],
    "rating": 1025,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 708
    }
  },
  {
    "id": "CG-0685",
    "fen": "r2qkbnr/pbpBpp1p/1p6/6p1/1n5P/P5P1/1PPPPP2/RNBQK1NR b KQkq - 0 6",
    "moves": [
      "d8d7"
    ],
    "rating": 1553,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 231
    }
  },
  {
    "id": "CG-0686",
    "fen": "r2q1bnr/pbpkpp1p/1p6/6p1/1P5P/6P1/1PPPPP2/RNBQK1NR b KQ - 0 7",
    "moves": [
      "b7h1"
    ],
    "rating": 973,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 545
    }
  },
  {
    "id": "CG-0687",
    "fen": "r2q1bnr/pbpkp2p/1p6/5pP1/1P6/6P1/1PPPPP2/RNBQK1NR b KQ - 0 8",
    "moves": [
      "b7h1"
    ],
    "rating": 899,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 678
    }
  },
  {
    "id": "CG-0688",
    "fen": "r2qkbnr/pbp1p2p/1p6/5pP1/1P6/2N3P1/1PPPPP2/R1BQK1NR b KQ - 2 9",
    "moves": [
      "b7h1"
    ],
    "rating": 1090,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 555
    }
  },
  {
    "id": "CG-0689",
    "fen": "r3kbnr/pbp1p2p/1p6/1N3pP1/1P6/3q2P1/1PPPPP2/R1BQK1NR b KQ - 4 10",
    "moves": [
      "d3b5"
    ],
    "rating": 1557,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 246
    }
  },
  {
    "id": "CG-0690",
    "fen": "r3kbnr/pbp1p2p/1p6/1N3pP1/1Pq4R/6P1/1PPPPP2/R1BQK1N1 b Q - 6 11",
    "moves": [
      "c4b5"
    ],
    "rating": 1067,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 575
    }
  },
  {
    "id": "CG-0691",
    "fen": "r3kbnr/pbp1p2p/1p6/1N3pP1/1P5R/6P1/1PqPPP2/R1BQK1N1 w Q - 0 12",
    "moves": [
      "d1c2"
    ],
    "rating": 907,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 355
    }
  },
  {
    "id": "CG-0692",
    "fen": "r3kbnr/pbp1p2p/1p6/1N3pP1/1P2P2R/6P1/1PqP1P2/R1BQK1N1 b Q - 0 12",
    "moves": [
      "c2d1"
    ],
    "rating": 921,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 197
    }
  },
  {
    "id": "CG-0693",
    "fen": "r3kbnr/pbp1p2p/1p6/1N4P1/1P2Pp1R/6P1/1PqP1P2/R1BQK1N1 w Q - 0 13",
    "moves": [
      "d1c2"
    ],
    "rating": 908,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 440
    }
  },
  {
    "id": "CG-0694",
    "fen": "r5n1/R1p1pk1r/1p4bb/1N4PQ/1P3p2/6P1/1P1P1P2/2B1K1N1 b - - 0 19",
    "moves": [
      "g6h5"
    ],
    "rating": 943,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 295
    }
  },
  {
    "id": "CG-0695",
    "fen": "r5n1/R1p1p2r/1p2k1bb/1N4PQ/1P3p2/6P1/1P1P1P2/2B1K1N1 w - - 1 20",
    "moves": [
      "h5g6"
    ],
    "rating": 871,
    "themes": [
      "fork",
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 638
    }
  },
  {
    "id": "CG-0696",
    "fen": "r5n1/R1p1p2r/1p2k1bb/6PQ/1P1N1p2/6P1/1P1P1P2/2B1K1N1 b - - 2 20",
    "moves": [
      "e6f7"
    ],
    "rating": 938,
    "themes": [
      "fork",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 653
    }
  },
  {
    "id": "CG-0697",
    "fen": "r5n1/R1p1p2r/1p4bb/3k2PQ/1P1N1p2/6P1/1P1P1P2/2B1K1N1 w - - 3 21",
    "moves": [
      "h5g6"
    ],
    "rating": 1447,
    "themes": [
      "fork",
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 414
    }
  },
  {
    "id": "CG-0698",
    "fen": "r5n1/2p1p2r/1p4bb/3k2PQ/1P1N1p2/R5P1/1P1P1P2/2B1K1N1 b - - 4 21",
    "moves": [
      "g6h5"
    ],
    "rating": 1036,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 892
    }
  },
  {
    "id": "CG-0699",
    "fen": "r5n1/4p2r/1pp3bb/3k2PQ/1P1N1p2/R5P1/1P1P1P2/2B1K1N1 w - - 0 22",
    "moves": [
      "h5g6"
    ],
    "rating": 1751,
    "themes": [
      "fork",
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 140
    }
  },
  {
    "id": "CG-0700",
    "fen": "r5n1/4p2r/1pp3bb/3k2PQ/1P1N1p2/5RP1/1P1P1P2/2B1K1N1 b - - 1 22",
    "moves": [
      "g6h5"
    ],
    "rating": 935,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1335
    }
  },
  {
    "id": "CG-0701",
    "fen": "5bn1/4p2r/rpp5/3k1NPQ/1PR5/6P1/1P1P1P2/2B1K1N1 b - - 2 25",
    "moves": [
      "h7h5"
    ],
    "rating": 949,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 506
    }
  },
  {
    "id": "CG-0702",
    "fen": "5bn1/4pr2/rpp5/3k1NPQ/1PR5/6P1/1P1P1P2/2B1K1N1 w - - 3 26",
    "moves": [
      "h5f7"
    ],
    "rating": 975,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98243
    }
  },
  {
    "id": "CG-0703",
    "fen": "5bn1/4pr2/rpp5/3k1NPQ/1PR5/6P1/1P1PNP2/2B1K3 b - - 4 26",
    "moves": [
      "f7f5"
    ],
    "rating": 1777,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 212
    }
  },
  {
    "id": "CG-0704",
    "fen": "5b2/4pr2/rpp2n2/3k1NPQ/1PR5/6P1/1P1PNP2/2B1K3 w - - 5 27",
    "moves": [
      "h5f7"
    ],
    "rating": 885,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1565
    }
  },
  {
    "id": "CG-0705",
    "fen": "5b2/4pQ2/rpp2n2/3k1NP1/1PR5/6P1/1P1PNP2/2B1K3 b - - 0 27",
    "moves": [
      "d5e5"
    ],
    "rating": 1475,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 400
    }
  },
  {
    "id": "CG-0706",
    "fen": "8/4Q3/rpp5/4kNP1/1PR3n1/6P1/1P1PNP2/2B1K3 b - - 0 29",
    "moves": [
      "e5f5"
    ],
    "rating": 1773,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0707",
    "fen": "rnbqkb1r/1p1ppp1p/7n/p1p3p1/5PP1/2PP3P/PP1BP3/RN1QKBNR w KQkq - 2 7",
    "moves": [
      "f4g5"
    ],
    "rating": 1776,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 116
    }
  },
  {
    "id": "CG-0708",
    "fen": "rnbqkb1r/1p1ppp1p/7n/2p3P1/p5P1/2PP3P/PP1BP3/RN1QKBNR w KQkq - 0 8",
    "moves": [
      "g5h6"
    ],
    "rating": 1418,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 289
    }
  },
  {
    "id": "CG-0709",
    "fen": "rnbqkb1r/1p1ppp1p/7n/6P1/p1p3P1/2PPP2P/PP1B4/RN1QKBNR w KQkq - 0 9",
    "moves": [
      "g5h6"
    ],
    "rating": 1752,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 207
    }
  },
  {
    "id": "CG-0710",
    "fen": "rnbqkb1r/1p1ppp1p/7n/6P1/Q1p3P1/2PPP2P/PP1B4/RN2KBNR b KQkq - 0 9",
    "moves": [
      "a8a4"
    ],
    "rating": 1023,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1352
    }
  },
  {
    "id": "CG-0711",
    "fen": "1nbqkb1r/1p1ppp1p/8/6P1/2p1P1n1/2PP3P/rP1BB3/RN3KNR w k - 0 13",
    "moves": [
      "a1a2"
    ],
    "rating": 1309,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 387
    }
  },
  {
    "id": "CG-0712",
    "fen": "1nbqkb1r/1p1ppp1p/8/6P1/2p1P1P1/2PP4/rP1BB3/RN3KNR b k - 0 13",
    "moves": [
      "a2a1"
    ],
    "rating": 1353,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 282
    }
  },
  {
    "id": "CG-0713",
    "fen": "1nbqkb1r/1p1ppp1p/8/6PR/4P1P1/2P5/rP1BK3/RN4N1 b k - 0 15",
    "moves": [
      "a2a1"
    ],
    "rating": 1947,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 216
    }
  },
  {
    "id": "CG-0714",
    "fen": "1nb1kb1r/1pqppp1p/8/6PR/4P1P1/1PP5/r2BK3/RN4N1 b k - 0 16",
    "moves": [
      "a2a1"
    ],
    "rating": 1926,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 174
    }
  },
  {
    "id": "CG-0715",
    "fen": "1nb1kb1r/1p1ppp1p/8/2q3PR/4P1P1/1PP1K3/3r4/RN4N1 w k - 2 18",
    "moves": [
      "e3d2"
    ],
    "rating": 974,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98809
    }
  },
  {
    "id": "CG-0716",
    "fen": "1nb1kb1r/1p1ppp2/Rq5p/6PR/4P1P1/1PP5/3K4/1N4N1 w k - 2 20",
    "moves": [
      "a6b6"
    ],
    "rating": 970,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 843
    }
  },
  {
    "id": "CG-0717",
    "fen": "1nb1kb1r/1p1ppp2/7p/q5PR/4P1P1/1PP5/R2K4/1N4N1 w k - 4 21",
    "moves": [
      "a2a5"
    ],
    "rating": 850,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1072
    }
  },
  {
    "id": "CG-0718",
    "fen": "1nb1kb1r/3ppp2/1p5p/q5P1/4P1PR/1PP5/R2K4/1N4N1 w k - 0 22",
    "moves": [
      "a2a5"
    ],
    "rating": 1024,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 326
    }
  },
  {
    "id": "CG-0719",
    "fen": "1nb1kb1r/3ppp2/1p5p/q5P1/4P1PR/1PP2N2/R2K4/1N6 b k - 1 22",
    "moves": [
      "a5a2"
    ],
    "rating": 1852,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 203
    }
  },
  {
    "id": "CG-0720",
    "fen": "1nb1kb1r/3ppp2/1p5p/6q1/4P1PR/1PP2N2/R2K4/1N6 w k - 0 23",
    "moves": [
      "f3g5"
    ],
    "rating": 923,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 923
    }
  },
  {
    "id": "CG-0721",
    "fen": "1nb1kb1r/3ppp2/1p5p/8/4P1qR/1PPK1N2/R7/1N6 w k - 0 24",
    "moves": [
      "h4g4"
    ],
    "rating": 1010,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 872
    }
  },
  {
    "id": "CG-0722",
    "fen": "2b1kb1r/3ppp2/1p5p/8/1n2P1R1/1PPK1N2/7R/1N6 w k - 3 26",
    "moves": [
      "c3b4"
    ],
    "rating": 1523,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 498
    }
  },
  {
    "id": "CG-0723",
    "fen": "5b1r/5k2/b2ppp1R/1p6/1P1NP1R1/NP6/8/3K4 b - - 0 32",
    "moves": [
      "h8h6"
    ],
    "rating": 1948,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 205
    }
  },
  {
    "id": "CG-0724",
    "fen": "5b1r/4k3/b2ppp1R/1p6/1P1NP1R1/NP6/8/3K4 w - - 1 33",
    "moves": [
      "h6h8"
    ],
    "rating": 1879,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 124
    }
  },
  {
    "id": "CG-0725",
    "fen": "r3kb1r/ppp1p1pp/5n2/8/4p3/N1Pq2PR/P1PP1P2/R1BQ1KN1 w kq - 1 10",
    "moves": [
      "c2d3"
    ],
    "rating": 887,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 632
    }
  },
  {
    "id": "CG-0726",
    "fen": "r3kb1r/p1p1p1pp/1p3n2/8/4p3/N1Pq2PR/P1PP1PK1/R1BQ2N1 w kq - 0 11",
    "moves": [
      "c2d3"
    ],
    "rating": 1064,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 259
    }
  },
  {
    "id": "CG-0727",
    "fen": "3rkb1r/p1p1p1pp/1p3n2/8/4p3/2Pq2PR/P1PP1PK1/RNBQ2N1 w k - 2 12",
    "moves": [
      "c2d3"
    ],
    "rating": 931,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 299
    }
  },
  {
    "id": "CG-0728",
    "fen": "3rkb1r/p1p1p1pp/1p3n2/8/4p3/2q3PR/P1PP1PK1/RNB1Q1N1 w k - 0 13",
    "moves": [
      "b1c3"
    ],
    "rating": 1061,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 104
    }
  },
  {
    "id": "CG-0729",
    "fen": "3rkb1r/p1p1p1pp/1p3n2/8/4pP2/2q3PR/P1PP2K1/RNB1Q1N1 b k f3 0 13",
    "moves": [
      "c3a1"
    ],
    "rating": 1304,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 362
    }
  },
  {
    "id": "CG-0730",
    "fen": "4kb1r/p1p1p1pp/1p3n2/8/4pP2/2q3PR/P1PQ2K1/RNB3N1 b k - 0 14",
    "moves": [
      "c3a1"
    ],
    "rating": 1485,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 263
    }
  },
  {
    "id": "CG-0731",
    "fen": "4kb1r/p1p1p1pp/1p3n2/8/4pP2/6PR/P1PQ4/qNB3NK b k - 1 15",
    "moves": [
      "a1b1"
    ],
    "rating": 1454,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 303
    }
  },
  {
    "id": "CG-0732",
    "fen": "4kb1r/p1p1p1pp/1p3n2/7R/4pP2/6P1/P1PQ4/1qB3NK b k - 1 16",
    "moves": [
      "f6h5"
    ],
    "rating": 1958,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 181
    }
  },
  {
    "id": "CG-0733",
    "fen": "4kb1r/p1p1pqpp/1p6/7R/4pPn1/6P1/2P4K/2BQ2N1 w k - 4 19",
    "moves": [
      "d1g4"
    ],
    "rating": 905,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1318
    }
  },
  {
    "id": "CG-0734",
    "fen": "4kb1r/p1p1pqpp/1p6/7R/4pPn1/6PK/2P5/2BQ2N1 b k - 5 19",
    "moves": [
      "f7h5"
    ],
    "rating": 1036,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98625
    }
  },
  {
    "id": "CG-0735",
    "fen": "4kb1r/p1p1pq1p/1p6/6pR/4pPn1/6PK/2P5/2BQ2N1 w k - 0 20",
    "moves": [
      "d1g4"
    ],
    "rating": 1479,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 328
    }
  },
  {
    "id": "CG-0736",
    "fen": "4kb1r/p1p1pq1p/1p6/6pR/4pPn1/4B1PK/2P5/3Q2N1 b k - 1 20",
    "moves": [
      "f7h5"
    ],
    "rating": 981,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 715
    }
  },
  {
    "id": "CG-0737",
    "fen": "4kb1r/p1p1p2p/1p3q2/6pR/4pPn1/4B1PK/2P5/3Q2N1 w k - 2 21",
    "moves": [
      "d1g4"
    ],
    "rating": 1478,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 344
    }
  },
  {
    "id": "CG-0738",
    "fen": "4kb1r/p1p1p2p/1p3q2/6pR/3QpP2/4n1PK/2P5/6N1 w k - 0 22",
    "moves": [
      "d4e3"
    ],
    "rating": 1485,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 233
    }
  },
  {
    "id": "CG-0739",
    "fen": "4kb1r/p1p1p2p/1p3Q2/6pR/4pP2/4n1PK/2P5/6N1 b k - 0 22",
    "moves": [
      "g5g4"
    ],
    "rating": 1713,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 91
    }
  },
  {
    "id": "CG-0740",
    "fen": "r2qkbnr/pp2pppp/2p5/3p1b2/N6P/Pn1P4/1PP1PPP1/R1BQKBNR w KQkq - 1 7",
    "moves": [
      "c2b3"
    ],
    "rating": 978,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 625
    }
  },
  {
    "id": "CG-0741",
    "fen": "r2qkb1r/1p2pppp/pNp2n2/3p4/2P4P/Pn1PP2R/1P3PP1/R1BQKBN1 b Qkq - 0 10",
    "moves": [
      "d8b6"
    ],
    "rating": 1037,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 524
    }
  },
  {
    "id": "CG-0742",
    "fen": "r2qkb1r/1p2pppp/pNp5/3p4/2P3nP/Pn1PP2R/1P3PP1/R1BQKBN1 w Qkq - 1 11",
    "moves": [
      "d1b3"
    ],
    "rating": 1871,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 227
    }
  },
  {
    "id": "CG-0743",
    "fen": "r2qkb1r/1p2pppp/pNp5/3P4/6nP/Pn1PP2R/1P3PP1/R1BQKBN1 b Qkq - 0 11",
    "moves": [
      "d8b6"
    ],
    "rating": 1074,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 821
    }
  },
  {
    "id": "CG-0744",
    "fen": "r2qkb1r/1p2pppp/pNp5/3P4/6nP/P2PP2R/1P3PP1/R1nQKBN1 w Qkq - 0 12",
    "moves": [
      "b6a8"
    ],
    "rating": 1428,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 318
    }
  },
  {
    "id": "CG-0745",
    "fen": "r2qkb1r/1p2pppp/pNp5/3P4/6nP/P2PP2R/1P2BPP1/R1nQK1N1 b Qkq - 1 12",
    "moves": [
      "c1e2"
    ],
    "rating": 1556,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 283
    }
  },
  {
    "id": "CG-0746",
    "fen": "r3kb1r/1p2pppp/pqp5/3P4/6nP/P2PP2R/1P2BPP1/R1nQK1N1 w Qkq - 0 13",
    "moves": [
      "a1c1"
    ],
    "rating": 1779,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 115
    }
  },
  {
    "id": "CG-0747",
    "fen": "r3kb1r/1p2pppp/p1p5/3P4/1q4nP/P2PPP1R/1P2B1P1/R1nQK1N1 w Qkq - 1 14",
    "moves": [
      "a3b4"
    ],
    "rating": 900,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1376
    }
  },
  {
    "id": "CG-0748",
    "fen": "1r1k1b1r/4ppR1/1p6/P2p3p/Q6P/3PPP2/1P4P1/2R1K1N1 w - - 0 23",
    "moves": [
      "a4c6"
    ],
    "rating": 1030,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98275
    }
  },
  {
    "id": "CG-0749",
    "fen": "1r1k1b1r/4ppR1/1p6/P2p3p/1Q5P/3PPP2/1P4P1/2R1K1N1 b - - 1 23",
    "moves": [
      "f8g7"
    ],
    "rating": 1762,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 139
    }
  },
  {
    "id": "CG-0750",
    "fen": "1r3r2/4kp2/1p6/P2p3p/4P2P/2PP1P2/3K2P1/2R3N1 b - - 0 27",
    "moves": [
      "b6a5"
    ],
    "rating": 1875,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 154
    }
  },
  {
    "id": "CG-0751",
    "fen": "r1bqk2r/pppp1pbp/4p1pP/8/PP6/B2PP2P/3PBP2/RN1QK1NR b KQk - 0 10",
    "moves": [
      "g7a1"
    ],
    "rating": 1407,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 333
    }
  },
  {
    "id": "CG-0752",
    "fen": "r1bqk2r/pp1p1pbp/4p1pP/2p5/PP6/BQ1PP2P/3PBP2/RN2K1NR b KQk - 1 11",
    "moves": [
      "g7a1"
    ],
    "rating": 1474,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 306
    }
  },
  {
    "id": "CG-0753",
    "fen": "r1b4r/pp1p1k1p/6p1/2p2pb1/PP6/B2Pq2P/2KPB3/RN4NR w - - 0 19",
    "moves": [
      "d2e3"
    ],
    "rating": 1077,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 940
    }
  },
  {
    "id": "CG-0754",
    "fen": "r1b4r/pp1p1k1p/6p1/2P2pb1/P7/B2P3P/2KqB3/RN4NR w - - 0 20",
    "moves": [
      "b1d2"
    ],
    "rating": 928,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1393
    }
  },
  {
    "id": "CG-0755",
    "fen": "r1b2b1r/1p3k2/p5N1/2Pp3p/P4p2/BK1P3P/4B3/2R2N1R b - - 0 26",
    "moves": [
      "f7g6"
    ],
    "rating": 1554,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 232
    }
  },
  {
    "id": "CG-0756",
    "fen": "r1b2b1r/1p6/p5k1/2Pp3p/P1R2p2/BK1P3P/4B3/5N1R b - - 1 27",
    "moves": [
      "d5c4"
    ],
    "rating": 1019,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 690
    }
  },
  {
    "id": "CG-0757",
    "fen": "r1b2b1r/1p6/6k1/p1Pp3p/P1R2p2/BK1P3P/4B3/5N1R w - - 0 28",
    "moves": [
      "c4f4"
    ],
    "rating": 1879,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 111
    }
  },
  {
    "id": "CG-0758",
    "fen": "r1b2b1r/1p6/6k1/p1Pp3p/P1R2p2/1K1P3P/1B2B3/5N1R b - - 1 28",
    "moves": [
      "d5c4"
    ],
    "rating": 877,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 760
    }
  },
  {
    "id": "CG-0759",
    "fen": "r1b2b1r/1p5k/8/p1Pp4/P1R2p1p/1K1P3P/1B2B3/5NR1 w - - 2 30",
    "moves": [
      "c4f4"
    ],
    "rating": 1474,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 404
    }
  },
  {
    "id": "CG-0760",
    "fen": "r1b2b1r/1p5k/8/p1Pp4/PR3p1p/1K1P3P/1B2B3/5NR1 b - - 3 30",
    "moves": [
      "a5b4"
    ],
    "rating": 1004,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 557
    }
  },
  {
    "id": "CG-0761",
    "fen": "1rb2b1r/1p5k/8/p1Pp4/PR3p1p/1K1P3P/1B2B3/5NR1 w - - 4 31",
    "moves": [
      "b4f4"
    ],
    "rating": 1518,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 300
    }
  },
  {
    "id": "CG-0762",
    "fen": "1rb2b1r/1p5k/8/p1Pp4/PR3p1p/1K1P1B1P/1B6/5NR1 b - - 5 31",
    "moves": [
      "a5b4"
    ],
    "rating": 951,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 629
    }
  },
  {
    "id": "CG-0763",
    "fen": "r1b2b1r/1p5k/8/2Pp4/Pp3p1p/1K1P1B1P/8/2B2NR1 w - - 2 33",
    "moves": [
      "f3d5"
    ],
    "rating": 1876,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 154
    }
  },
  {
    "id": "CG-0764",
    "fen": "2b2b1r/1p5k/8/2Pp4/rp3p1p/1K1P3P/8/2B2NRB w - - 0 34",
    "moves": [
      "b3a4"
    ],
    "rating": 1756,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 196
    }
  },
  {
    "id": "CG-0765",
    "fen": "5b1r/1p5k/8/2Pp4/Kp3p1p/3PB2b/8/5NRB b - - 1 35",
    "moves": [
      "f4e3"
    ],
    "rating": 1435,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 422
    }
  },
  {
    "id": "CG-0766",
    "fen": "r1bqk1nr/p1pppp1N/1p6/4P3/1n3b2/P7/1PPP1PPP/RNBQKB1R w KQkq - 1 7",
    "moves": [
      "a3b4"
    ],
    "rating": 1555,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 284
    }
  },
  {
    "id": "CG-0767",
    "fen": "r1bqk1nr/p1pppp2/1p6/4P1N1/5b2/P7/1PnP1PPP/RNBQKB1R w KQkq - 0 8",
    "moves": [
      "d1c2"
    ],
    "rating": 924,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 613
    }
  },
  {
    "id": "CG-0768",
    "fen": "r1bqk1nr/p1pppp2/1p6/4P1N1/5b2/P7/1PQP1PPP/RNB1KB1R b KQkq - 0 8",
    "moves": [
      "f4g5"
    ],
    "rating": 881,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 572
    }
  },
  {
    "id": "CG-0769",
    "fen": "r1bqk1nr/p1ppp3/1p3p2/4P1N1/8/P7/1PQB1PPP/RN2KB1R w KQkq - 0 10",
    "moves": [
      "c2g6"
    ],
    "rating": 883,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98514
    }
  },
  {
    "id": "CG-0770",
    "fen": "1rbqk1nr/p1ppp3/Bp6/4P1p1/7P/P7/1P1B1PP1/RN1QK2R b KQk - 2 12",
    "moves": [
      "c8a6"
    ],
    "rating": 1541,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 348
    }
  },
  {
    "id": "CG-0771",
    "fen": "1r1qk1nr/p1ppp3/bp6/4P1pQ/7P/P7/1P1B1PP1/RN2K2R b KQk - 1 13",
    "moves": [
      "h8h5"
    ],
    "rating": 964,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1728
    }
  },
  {
    "id": "CG-0772",
    "fen": "1rq1k1n1/p1ppp3/bp2P3/6p1/6Pr/P7/1P1B1P2/RN2K2R w KQ - 0 16",
    "moves": [
      "h1h4"
    ],
    "rating": 1956,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 219
    }
  },
  {
    "id": "CG-0773",
    "fen": "1rq1k1n1/p1ppp3/bp2P3/6p1/6Pr/P7/1P3P2/RNB1K2R b KQ - 1 16",
    "moves": [
      "h4h1"
    ],
    "rating": 1346,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 446
    }
  },
  {
    "id": "CG-0774",
    "fen": "1rq1k1n1/p1p1p3/bp2p3/6p1/1P4P1/P3K3/R4r2/1NB5 b - - 1 20",
    "moves": [
      "f2a2"
    ],
    "rating": 1709,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 172
    }
  },
  {
    "id": "CG-0775",
    "fen": "1r1qk1n1/p1p1pr2/bp2p3/6p1/1P4P1/P3K3/1R1B4/1N6 b - - 5 22",
    "moves": [
      "d8d3"
    ],
    "rating": 868,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0776",
    "fen": "1r2k1n1/p1p1p3/1p2p3/6B1/1P3rP1/P3K3/4R3/1N6 b - - 2 28",
    "moves": [
      "f4g4"
    ],
    "rating": 1814,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 96
    }
  },
  {
    "id": "CG-0777",
    "fen": "r3k3/2p1p3/1p2p3/p7/1P3Bn1/P4K2/3R4/1N6 w - - 0 33",
    "moves": [
      "f3g4"
    ],
    "rating": 1468,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 302
    }
  },
  {
    "id": "CG-0778",
    "fen": "r7/2B1pk2/4p3/p7/6n1/P4K2/3R4/1N6 w - - 0 35",
    "moves": [
      "f3g4"
    ],
    "rating": 1525,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 262
    }
  },
  {
    "id": "CG-0779",
    "fen": "r7/2B1pk2/4p3/p7/6n1/P4K2/7R/1N6 b - - 1 35",
    "moves": [
      "g4h2"
    ],
    "rating": 1531,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 239
    }
  },
  {
    "id": "CG-0780",
    "fen": "r7/2B1pk2/4p3/p3n3/8/P4K2/7R/1N6 w - - 2 36",
    "moves": [
      "c7e5"
    ],
    "rating": 1442,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 358
    }
  },
  {
    "id": "CG-0781",
    "fen": "rnbqkb1r/pp1ppppp/2p5/7n/6PN/2NP4/PPP1PP1P/R1BQKB1R w KQkq - 1 6",
    "moves": [
      "g4h5"
    ],
    "rating": 1457,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 417
    }
  },
  {
    "id": "CG-0782",
    "fen": "rnbqkb1r/pp2pppp/2pp4/7n/6PN/2NP4/PPP1PP1P/R1BQKBR1 w Qkq - 0 7",
    "moves": [
      "g4h5"
    ],
    "rating": 937,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 587
    }
  },
  {
    "id": "CG-0783",
    "fen": "r3kb1r/p2qpppp/n1pp4/1N3P1n/7P/3P4/PPP1PP2/1RBQKBR1 b kq - 0 11",
    "moves": [
      "c6b5"
    ],
    "rating": 1456,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 371
    }
  },
  {
    "id": "CG-0784",
    "fen": "r3kb1r/p1q1pppp/n1pp4/1N3P1n/7P/3P4/PPP1PP2/1RBQKBR1 w kq - 1 12",
    "moves": [
      "b5c7"
    ],
    "rating": 857,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 568
    }
  },
  {
    "id": "CG-0785",
    "fen": "1r2kb1r/p1q1ppRp/n1pp4/1N3P1n/7P/3P4/PPP1PP2/1RBQKB2 w k - 1 13",
    "moves": [
      "b5c7"
    ],
    "rating": 950,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 253
    }
  },
  {
    "id": "CG-0786",
    "fen": "1r2kb1r/p1q1ppRp/2pp4/1N3P1n/1n5P/3P4/P1P1PP2/1RBQKB2 w k - 0 14",
    "moves": [
      "b5c7"
    ],
    "rating": 1028,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 773
    }
  },
  {
    "id": "CG-0787",
    "fen": "1r2kb1r/p1q1ppRp/2pp4/1N3P1n/Pn5P/3P4/2P1PP2/1RBQKB2 b k - 0 14",
    "moves": [
      "c6b5"
    ],
    "rating": 1933,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 186
    }
  },
  {
    "id": "CG-0788",
    "fen": "3rkb1r/pq2pp1p/3p4/5PRn/pR5P/B2P4/2P1PP2/3QKB2 w k - 4 18",
    "moves": [
      "b4b7"
    ],
    "rating": 860,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 501
    }
  },
  {
    "id": "CG-0789",
    "fen": "3rkb1r/1q2pp1p/3p4/p4P1n/pR5P/B2P4/2P1PPR1/3QKB2 w k - 0 19",
    "moves": [
      "b4b7"
    ],
    "rating": 932,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 787
    }
  },
  {
    "id": "CG-0790",
    "fen": "3rkb1r/1q2pp1p/3p4/p4P1n/pR5P/B1PP4/4PPR1/3QKB2 b k - 0 19",
    "moves": [
      "a5b4"
    ],
    "rating": 1087,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 658
    }
  },
  {
    "id": "CG-0791",
    "fen": "3rkb1r/4pp1p/3p4/p4P1n/pR5P/B1PP4/4PPq1/3QKB2 w k - 0 20",
    "moves": [
      "d1a4"
    ],
    "rating": 987,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98974
    }
  },
  {
    "id": "CG-0792",
    "fen": "3rk2r/4pp1p/3p3b/p4P1n/R6P/B1PP4/4PPq1/3QKB2 w k - 1 21",
    "moves": [
      "f1g2"
    ],
    "rating": 1049,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 999
    }
  },
  {
    "id": "CG-0793",
    "fen": "3r1k1r/4pp1p/3p3b/p4P1n/Q4R1P/B1PP1q2/4PP2/4KB2 w - - 5 23",
    "moves": [
      "f4f3"
    ],
    "rating": 912,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 452
    }
  },
  {
    "id": "CG-0794",
    "fen": "3r1k1r/4pp1p/3B3b/p4P1n/Q4R1P/2PP1q2/4PP2/4KB2 b - - 0 23",
    "moves": [
      "f3b7"
    ],
    "rating": 1377,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 306
    }
  },
  {
    "id": "CG-0795",
    "fen": "7Q/4ppkp/3r1n1b/p7/3R3P/2PPPq2/5P2/4KB2 b - - 0 29",
    "moves": [
      "g7h8"
    ],
    "rating": 942,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 664
    }
  },
  {
    "id": "CG-0796",
    "fen": "7k/4pp1p/3r1n1b/p7/3R3P/2PPPq2/5PB1/4K3 b - - 1 30",
    "moves": [
      "f3g2"
    ],
    "rating": 1870,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 101
    }
  },
  {
    "id": "CG-0797",
    "fen": "7k/4pp1p/5n1b/p7/3r3P/2PPPq2/5PB1/4K3 w - - 0 31",
    "moves": [
      "g2f3"
    ],
    "rating": 1022,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 328
    }
  },
  {
    "id": "CG-0798",
    "fen": "r1bqkbnr/NppppN1p/p7/8/2n5/8/PPPPPPPP/R1BQKB1R b KQkq - 0 6",
    "moves": [
      "e8f7"
    ],
    "rating": 1500,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 343
    }
  },
  {
    "id": "CG-0799",
    "fen": "1rbqkbnr/Npppp2p/p7/4N3/2n5/8/PPPPPPPP/R1BQKB1R b KQk - 2 7",
    "moves": [
      "c4e5"
    ],
    "rating": 868,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 724
    }
  },
  {
    "id": "CG-0800",
    "fen": "1rbqkbnr/Nppp1N1p/p3p3/8/2n5/8/PPPPPPPP/R1BQKB1R b KQk - 1 8",
    "moves": [
      "e8f7"
    ],
    "rating": 1493,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 451
    }
  },
  {
    "id": "CG-0801",
    "fen": "1rbqkbnr/N1pp1N1p/pp2p3/8/2n5/8/PPPPPPPP/R1BQKB1R w KQk - 0 9",
    "moves": [
      "f7d8"
    ],
    "rating": 922,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 333
    }
  },
  {
    "id": "CG-0802",
    "fen": "1rb1k1nN/N1p1q2p/4p3/1p6/4P3/4bP2/P1PP2PP/2BQK2R b K - 0 16",
    "moves": [
      "e3a7"
    ],
    "rating": 1384,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 455
    }
  },
  {
    "id": "CG-0803",
    "fen": "1rb1k1nN/N1p1q3/4p2p/1p6/P3P3/4bP2/2PP2PP/2BQK2R b K - 0 17",
    "moves": [
      "e3a7"
    ],
    "rating": 987,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 666
    }
  },
  {
    "id": "CG-0804",
    "fen": "1rb1k1nN/N1p5/4p2p/1p6/P3P2q/4bP2/2PP2PP/2BQK2R w K - 1 18",
    "moves": [
      "g2g3"
    ],
    "rating": 918,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1132
    }
  },
  {
    "id": "CG-0805",
    "fen": "1rb1k1nN/N1p5/4p2p/1p6/P3P2q/4bP2/2PP2PP/2BQ1K1R b - - 2 18",
    "moves": [
      "h4f2"
    ],
    "rating": 974,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99252
    }
  },
  {
    "id": "CG-0806",
    "fen": "1rb1k1nN/N1p5/4p2p/1p6/P3P2q/5P2/2Pb2PP/2B1QK1R b - - 1 19",
    "moves": [
      "h4e1"
    ],
    "rating": 875,
    "themes": [
      "mate",
      "mateIn1",
      "hangingPiece",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98997
    }
  },
  {
    "id": "CG-0807",
    "fen": "r1bqkbnr/pppp1p1p/8/4p1p1/5P2/N6N/PP1PP1PP/R1BQKB1R w KQkq - 0 6",
    "moves": [
      "f4e5"
    ],
    "rating": 1777,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 156
    }
  },
  {
    "id": "CG-0808",
    "fen": "r1bqk2r/pppp1p1p/7n/4P1N1/6P1/P7/P2PP2P/R1BQKB1R b KQkq - 0 9",
    "moves": [
      "d8g5"
    ],
    "rating": 852,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 601
    }
  },
  {
    "id": "CG-0809",
    "fen": "r1bq1r1k/p1pp1p1p/1p5n/4P1N1/Q2P2P1/P7/P3P2P/R1B1KB1R w KQ - 2 12",
    "moves": [
      "a4c2"
    ],
    "rating": 1475,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 488
    }
  },
  {
    "id": "CG-0810",
    "fen": "r1b2r1k/p1ppqp1N/1p2P2n/8/Q2P2P1/P7/P3P2P/R1B1KB1R b KQ - 0 13",
    "moves": [
      "e7h4"
    ],
    "rating": 1869,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0811",
    "fen": "Qrb2r1k/2pp1p1N/1p2q2n/8/3P2P1/P7/PB2P2P/R3KB1R b KQ - 1 16",
    "moves": [
      "b8a8"
    ],
    "rating": 898,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 351
    }
  },
  {
    "id": "CG-0812",
    "fen": "1rb2r1k/2pp1p1N/1p2q3/8/3PQ1n1/P7/PB2P2P/R3KB1R b KQ - 1 17",
    "moves": [
      "e6e4"
    ],
    "rating": 1070,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1322
    }
  },
  {
    "id": "CG-0813",
    "fen": "1rb2r1k/2pp1p1N/1p6/8/3Pq1n1/P7/PB2P2P/R2K1B1R b - - 1 18",
    "moves": [
      "e4h1"
    ],
    "rating": 1818,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 111
    }
  },
  {
    "id": "CG-0814",
    "fen": "1rb2r2/2pp1p1k/1p6/3Pn3/4q2P/P7/PB2P3/R2K1B1R b - - 0 20",
    "moves": [
      "e4h1"
    ],
    "rating": 1892,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 126
    }
  },
  {
    "id": "CG-0815",
    "fen": "1rb2r2/2pp1p1k/1p6/3Pn3/7P/P3P3/PB6/R2K1B1q b - - 0 21",
    "moves": [
      "h1f1"
    ],
    "rating": 1531,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 417
    }
  },
  {
    "id": "CG-0816",
    "fen": "1rb2r2/2pp1p2/1p4k1/3P4/2n1q2P/P3P3/PB1K4/R4B2 w - - 5 24",
    "moves": [
      "f1c4"
    ],
    "rating": 1451,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 336
    }
  },
  {
    "id": "CG-0817",
    "fen": "1rb2r2/2pp1p2/1p4k1/3P4/2n1q2P/P3P3/PB2K3/R4B2 b - - 6 24",
    "moves": [
      "e4e3"
    ],
    "rating": 998,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98440
    }
  },
  {
    "id": "CG-0818",
    "fen": "r1b2r2/2pp1p2/1p4k1/3P4/P1n4P/3KP3/PB6/R2q1B2 w - - 1 27",
    "moves": [
      "a1d1"
    ],
    "rating": 868,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98781
    }
  },
  {
    "id": "CG-0819",
    "fen": "r1b2r2/2pp1p2/1p4k1/3P4/P1n4P/3KP3/PB6/3R1B2 b - - 0 27",
    "moves": [
      "c4b2"
    ],
    "rating": 1374,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 265
    }
  },
  {
    "id": "CG-0820",
    "fen": "r4r2/1bpp1p2/1p4k1/3P4/P1n1P2P/3K4/PB6/3R1B2 b - - 0 28",
    "moves": [
      "c4b2"
    ],
    "rating": 1487,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 278
    }
  },
  {
    "id": "CG-0821",
    "fen": "r4r2/1bpp1p2/1p4k1/3Pn3/P3P2P/3K4/PB6/3R1B2 w - - 1 29",
    "moves": [
      "b2e5"
    ],
    "rating": 1476,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 258
    }
  },
  {
    "id": "CG-0822",
    "fen": "b4r2/2pp1p2/1p4k1/3rB3/P3P2P/3K4/P7/R4B2 w - - 0 32",
    "moves": [
      "e4d5"
    ],
    "rating": 1065,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 891
    }
  },
  {
    "id": "CG-0823",
    "fen": "rnbqk2r/pppp1ppp/3b4/1N2P3/P5P1/7N/1nPPP2P/1RB1KB1R w Kkq - 1 9",
    "moves": [
      "e5d6"
    ],
    "rating": 1413,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 404
    }
  },
  {
    "id": "CG-0824",
    "fen": "rnbqk2r/pppp1ppp/3N4/4P3/P5P1/7N/1nPPP2P/1RB1KB1R b Kkq - 0 9",
    "moves": [
      "c7d6"
    ],
    "rating": 1303,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 301
    }
  },
  {
    "id": "CG-0825",
    "fen": "rnbqk2r/pp1p1ppp/3p4/4P3/P5P1/8/1nPPP2P/1RB1KBNR b Kkq - 1 10",
    "moves": [
      "d8h4"
    ],
    "rating": 921,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98996
    }
  },
  {
    "id": "CG-0826",
    "fen": "2b1k2r/rn1p1p1p/pp1p1q2/4P1p1/P1P3P1/4P3/1R1PB2P/B3K1NR w Kk - 6 18",
    "moves": [
      "e5f6"
    ],
    "rating": 1092,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1221
    }
  },
  {
    "id": "CG-0827",
    "fen": "2b1k2r/rn1p1p1p/pp1p4/4q1p1/P1PP2P1/4P3/1R2B2P/B3K1NR w Kk - 0 19",
    "moves": [
      "d4e5"
    ],
    "rating": 970,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1196
    }
  },
  {
    "id": "CG-0828",
    "fen": "2b2rk1/rn1p1p1p/p5R1/4p1p1/P1P3P1/4P3/4B2P/B3K1NR b K - 1 21",
    "moves": [
      "f7g6"
    ],
    "rating": 1839,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 150
    }
  },
  {
    "id": "CG-0829",
    "fen": "2b2r1k/rn1p1p1p/p5R1/4p1p1/P1P3P1/4P3/4B2P/B3K1NR w K - 2 22",
    "moves": [
      "a1e5"
    ],
    "rating": 1827,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 110
    }
  },
  {
    "id": "CG-0830",
    "fen": "2b2r1k/rn1p1p1p/R7/4p1p1/P1P3P1/4P3/4B2P/B3K1NR b K - 0 22",
    "moves": [
      "a7a6"
    ],
    "rating": 993,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 697
    }
  },
  {
    "id": "CG-0831",
    "fen": "2b2r1k/rn1p3p/R4p2/4p1p1/P1P3P1/4P3/4B2P/B3K1NR w K - 0 23",
    "moves": [
      "a6a7"
    ],
    "rating": 987,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 557
    }
  },
  {
    "id": "CG-0832",
    "fen": "2b2r1k/rn1p3p/R4p2/4B1p1/P1P3P1/4P3/4B2P/4K1NR b K - 0 23",
    "moves": [
      "a7a6"
    ],
    "rating": 1073,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 972
    }
  },
  {
    "id": "CG-0833",
    "fen": "2b4k/rn1p1r1p/R4p2/6p1/P1PB2P1/4P3/4B2P/4K1NR b K - 2 24",
    "moves": [
      "a7a6"
    ],
    "rating": 1030,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 674
    }
  },
  {
    "id": "CG-0834",
    "fen": "r1bq1bnr/p1pnpppp/1p1pk3/8/4P1P1/6NP/PPPP1P2/RNBQKB1R w KQ - 2 6",
    "moves": [
      "f1c4"
    ],
    "rating": 1790,
    "themes": [
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0835",
    "fen": "r1bq1bnr/p1pnp1pp/1p1pk3/5p2/4P1P1/6NP/PPPPBP2/RNBQK2R w KQ - 0 7",
    "moves": [
      "e2c4"
    ],
    "rating": 1025,
    "themes": [
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98522
    }
  },
  {
    "id": "CG-0836",
    "fen": "r1bq1bnr/p1pnp1pp/1p1pk3/5p2/4P1P1/1P4NP/P1PPBP2/RNBQK2R b KQ - 0 7",
    "moves": [
      "f5e4"
    ],
    "rating": 1730,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 197
    }
  },
  {
    "id": "CG-0837",
    "fen": "r1bq1bnr/p3pk1p/1p1p4/2p2Pp1/PPn1P3/6NP/2PP1P2/RNBQK2R w KQ g6 0 12",
    "moves": [
      "d1h5"
    ],
    "rating": 1505,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 378
    }
  },
  {
    "id": "CG-0838",
    "fen": "r2q1bnr/pb2pk1p/1p1p4/2p2Pp1/PPn1P3/7P/2PP1P2/RNBQKN1R w KQ - 2 13",
    "moves": [
      "d1h5"
    ],
    "rating": 1366,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 310
    }
  },
  {
    "id": "CG-0839",
    "fen": "r2q2nr/pb2pk1p/1p1p3b/5Pp1/P1nPP3/1p4NP/2P1KP2/RNBQ3R w - - 0 16",
    "moves": [
      "c2b3"
    ],
    "rating": 1555,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 378
    }
  },
  {
    "id": "CG-0840",
    "fen": "r2q2nr/pb2pk1p/1p1p3b/5Pp1/P2PP2P/1pP1n1N1/4KP2/RNBQ3R b - - 0 17",
    "moves": [
      "e3d1"
    ],
    "rating": 985,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 585
    }
  },
  {
    "id": "CG-0841",
    "fen": "r5nr/pb2pk1p/1p1p3b/1q3Pp1/P2PP2P/1pP1P1N1/4K3/RNBQ3R w - - 1 19",
    "moves": [
      "a4b5"
    ],
    "rating": 1078,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 911
    }
  },
  {
    "id": "CG-0842",
    "fen": "r5nr/1b2pk1p/Qp1p3b/5P2/P2PP2p/1pP1P1N1/4K3/RNB4R b - - 0 21",
    "moves": [
      "b7a6"
    ],
    "rating": 1088,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 524
    }
  },
  {
    "id": "CG-0843",
    "fen": "5rnr/1b2pk1p/Qp1p3b/5P2/P2PP2p/BpP1P1N1/4K3/RN5R b - - 2 22",
    "moves": [
      "b7a6"
    ],
    "rating": 916,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1076
    }
  },
  {
    "id": "CG-0844",
    "fen": "1r4nr/5k1p/1p1Bp2b/1b3P2/P2PP3/1pP1P1p1/R5K1/1N5R b - - 4 27",
    "moves": [
      "b3a2"
    ],
    "rating": 1775,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 153
    }
  },
  {
    "id": "CG-0845",
    "fen": "1r4nr/5k1p/1p1Bp2b/5P2/b2PP3/1pP1P1p1/R5K1/1N5R w - - 0 28",
    "moves": [
      "a2a4"
    ],
    "rating": 1352,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 458
    }
  },
  {
    "id": "CG-0846",
    "fen": "R5nr/1r3k2/1p1Bp3/5P1p/3PP3/1pP1b1p1/6K1/1N5R w - - 0 31",
    "moves": [
      "f5e6"
    ],
    "rating": 1734,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 116
    }
  },
  {
    "id": "CG-0847",
    "fen": "1B3Rnr/1r4k1/1p2p3/5P1p/3PP3/1pP1b1p1/6K1/1N5R b - - 3 32",
    "moves": [
      "g7f8"
    ],
    "rating": 876,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 577
    }
  },
  {
    "id": "CG-0848",
    "fen": "1B3Rnr/5rk1/1p2P3/7p/3PP3/1pP1b1p1/6K1/1N5R b - - 0 33",
    "moves": [
      "f7f8"
    ],
    "rating": 1007,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 565
    }
  },
  {
    "id": "CG-0849",
    "fen": "1B3Rnr/5rk1/1p2P3/3P3p/4Pb2/1pP3p1/6K1/1N5R b - - 0 34",
    "moves": [
      "f7f8"
    ],
    "rating": 852,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 583
    }
  },
  {
    "id": "CG-0850",
    "fen": "1B3Rnr/5rk1/1p2P3/3P4/4Pb1p/1pP3p1/6K1/1N5R w - - 0 35",
    "moves": [
      "f8f7"
    ],
    "rating": 1722,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 149
    }
  },
  {
    "id": "CG-0851",
    "fen": "1B3Rnr/5rk1/1p2P3/3P4/4Pb1p/1pP2Kp1/8/1N5R b - - 1 35",
    "moves": [
      "f7f8"
    ],
    "rating": 1735,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0852",
    "fen": "1B3Rnr/5r2/1p2P1k1/3P4/4Pb1p/1pP2Kp1/8/1N5R w - - 2 36",
    "moves": [
      "e6f7"
    ],
    "rating": 1324,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 435
    }
  },
  {
    "id": "CG-0853",
    "fen": "5Rnr/5r2/1p2P1k1/3P4/4PB1p/1pP2Kp1/8/1N5R b - - 0 36",
    "moves": [
      "f7f8"
    ],
    "rating": 1482,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 403
    }
  },
  {
    "id": "CG-0854",
    "fen": "rnbqk2r/pp1p1pbp/2pp2pn/8/7P/1P4P1/PBPPPP2/R2QKBNR w KQkq - 2 8",
    "moves": [
      "b2g7"
    ],
    "rating": 951,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1440
    }
  },
  {
    "id": "CG-0855",
    "fen": "rnbqk2r/pp1p1pbp/2pp2pn/8/1P5P/6P1/PBPPPP2/R2QKBNR b KQkq - 0 8",
    "moves": [
      "g7b2"
    ],
    "rating": 1338,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 274
    }
  },
  {
    "id": "CG-0856",
    "fen": "rnbqk2r/1p1p1pbp/2pp2pn/p7/1P5P/6P1/PBPPPP2/R2QKBNR w KQkq - 0 9",
    "moves": [
      "b2g7"
    ],
    "rating": 1095,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1440
    }
  },
  {
    "id": "CG-0857",
    "fen": "rnbqk2r/1p1p1pbp/2pp2pn/p7/1P3P1P/6P1/PBPPP3/R2QKBNR b KQkq - 0 9",
    "moves": [
      "g7b2"
    ],
    "rating": 1805,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 223
    }
  },
  {
    "id": "CG-0858",
    "fen": "r1bqk2r/1p1p1pbp/n1pp2pn/p7/1P3P1P/6P1/PBPPP3/R2QKBNR w KQkq - 1 10",
    "moves": [
      "b2g7"
    ],
    "rating": 1055,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1297
    }
  },
  {
    "id": "CG-0859",
    "fen": "r1bqk2r/1p1p1pbp/n1pp2pn/p7/PP3P1P/6P1/1BPPP3/R2QKBNR b KQkq - 0 10",
    "moves": [
      "g7b2"
    ],
    "rating": 1909,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 222
    }
  },
  {
    "id": "CG-0860",
    "fen": "r1bq1k1r/1p1p1pbp/n1pp1B1n/p5p1/PP3P1P/6P1/2PPP3/R2QKBNR w KQ - 0 12",
    "moves": [
      "f6d8"
    ],
    "rating": 884,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 981
    }
  },
  {
    "id": "CG-0861",
    "fen": "r1bq1k1r/1p1p1pBp/n1pp3n/p5p1/PP3P1P/6P1/2PPP3/R2QKBNR b KQ - 0 12",
    "moves": [
      "f8g7"
    ],
    "rating": 1092,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 961
    }
  },
  {
    "id": "CG-0862",
    "fen": "r1b4r/1pqp1pkp/n1pp1n2/p5PP/PPP5/6P1/3PP2R/R2QKBN1 w Q - 1 17",
    "moves": [
      "g5f6"
    ],
    "rating": 1826,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 108
    }
  },
  {
    "id": "CG-0863",
    "fen": "r1b1k1r1/1pqp1p2/n1pp1P1p/P6P/P1P3P1/8/3PP2R/RQ2KBN1 w Q - 3 21",
    "moves": [
      "b1e4"
    ],
    "rating": 1905,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0864",
    "fen": "rnb1k1r1/1pqp1p2/2pp1P1p/P6P/P1P3P1/7N/3PP2R/RQ2KB2 w Q - 5 22",
    "moves": [
      "b1e4"
    ],
    "rating": 1725,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0865",
    "fen": "rnb1k3/1pqp1p2/2pp1P1p/P6P/P1P3r1/7N/3PPR2/RQ2KB2 w Q - 0 23",
    "moves": [
      "b1h7"
    ],
    "rating": 873,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98715
    }
  },
  {
    "id": "CG-0866",
    "fen": "rnb3k1/1pqp1p2/2pp1P1p/P6P/P1P3r1/7N/1R1PPR2/1Q2KB2 w - - 4 25",
    "moves": [
      "b1f5"
    ],
    "rating": 887,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 518
    }
  },
  {
    "id": "CG-0867",
    "fen": "1nb3k1/2qp1p2/2pp1P1p/rp5P/P1P3r1/4PR1N/1R1P4/1Q2KB2 w - - 0 27",
    "moves": [
      "b1f5"
    ],
    "rating": 1378,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 354
    }
  },
  {
    "id": "CG-0868",
    "fen": "1nb3k1/2qp1p2/r1pp1P1p/1P5P/P5r1/4PR1N/1R1P4/1Q2KB2 w - - 1 28",
    "moves": [
      "b5a6"
    ],
    "rating": 1433,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 261
    }
  },
  {
    "id": "CG-0869",
    "fen": "1nb3k1/1q1p1p2/r1pp1P1p/1P5P/P5r1/4P2N/1R1P1R2/1Q2KB2 w - - 3 29",
    "moves": [
      "b5a6"
    ],
    "rating": 1836,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 214
    }
  },
  {
    "id": "CG-0870",
    "fen": "1nb3k1/1q1p1p2/r1pp1P1p/1P5P/P5r1/4P2N/2RP1R2/1Q2KB2 b - - 4 29",
    "moves": [
      "a6a4"
    ],
    "rating": 1878,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0871",
    "fen": "rnbk1b1r/ppNq1ppp/4p3/7n/1P6/8/P1PPPPPP/R2QKBNR w KQ - 1 7",
    "moves": [
      "c7a8"
    ],
    "rating": 1057,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 684
    }
  },
  {
    "id": "CG-0872",
    "fen": "rnbk1b1r/ppN2ppp/4p3/7n/1P6/8/P1PqPPPP/1R1QKBNR w K - 0 8",
    "moves": [
      "d1d2"
    ],
    "rating": 974,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 146
    }
  },
  {
    "id": "CG-0873",
    "fen": "rnbk1b1r/ppN2ppp/4p3/7n/1P6/8/P1PQPPPP/1R2KBNR b K - 0 8",
    "moves": [
      "d8c7"
    ],
    "rating": 1422,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 326
    }
  },
  {
    "id": "CG-0874",
    "fen": "r1b2b1r/1pN1k1pp/p3p3/6pn/1P1P4/P6N/4PPPP/1R2KB1R w K - 0 14",
    "moves": [
      "c7a8"
    ],
    "rating": 1824,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 188
    }
  },
  {
    "id": "CG-0875",
    "fen": "r1b2b1r/1p2k1pp/p3p3/1N4pn/1P1P4/P6N/4PPPP/1R2KB1R b K - 1 14",
    "moves": [
      "a6b5"
    ],
    "rating": 1373,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 386
    }
  },
  {
    "id": "CG-0876",
    "fen": "2b2b1r/1p2k1pp/4p3/1pr3pn/1P1P4/5P2/3KP1PP/1R3BNR w - - 4 18",
    "moves": [
      "b4c5"
    ],
    "rating": 1712,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 127
    }
  },
  {
    "id": "CG-0877",
    "fen": "2bk1b1r/6pp/1p2p3/1pP3pn/1P2P3/3K1P2/6PP/1R3BNR b - - 2 20",
    "moves": [
      "b6c5"
    ],
    "rating": 1847,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 128
    }
  },
  {
    "id": "CG-0878",
    "fen": "3k1b1r/6pp/1p2p3/1pP3p1/1P2bn2/5P2/6PP/1R2KBNR w - - 0 23",
    "moves": [
      "f3e4"
    ],
    "rating": 1092,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 566
    }
  },
  {
    "id": "CG-0879",
    "fen": "3k1b1r/6pp/1pP1p3/1p4p1/1P2bn2/5P2/6PP/1R2KBNR b - - 0 23",
    "moves": [
      "e4b1"
    ],
    "rating": 1324,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 317
    }
  },
  {
    "id": "CG-0880",
    "fen": "3k3r/6pp/1pP1p3/1p4p1/1b2bn2/5P2/6PP/1R2KBNR w - - 0 24",
    "moves": [
      "b1b4"
    ],
    "rating": 948,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1247
    }
  },
  {
    "id": "CG-0881",
    "fen": "3k3r/6pp/1pP1p3/1pb3p1/4bn2/5P2/6PP/1R2KBNR b - - 3 25",
    "moves": [
      "e4b1"
    ],
    "rating": 1914,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 113
    }
  },
  {
    "id": "CG-0882",
    "fen": "3k3r/6pp/1pP1p3/1p4p1/4bn2/5P2/5bPP/1R2KBNR w - - 4 26",
    "moves": [
      "e1f2"
    ],
    "rating": 926,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 507
    }
  },
  {
    "id": "CG-0883",
    "fen": "3k3r/6pp/1pP1p3/1p4p1/4bn2/5P2/5KPP/1R3BNR b - - 0 26",
    "moves": [
      "e4b1"
    ],
    "rating": 1018,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 763
    }
  },
  {
    "id": "CG-0884",
    "fen": "3k3r/6pp/1pb1p3/1B4p1/7P/5P2/6K1/6NR w - - 0 30",
    "moves": [
      "b5c6"
    ],
    "rating": 1070,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 620
    }
  },
  {
    "id": "CG-0885",
    "fen": "3k3r/6pp/1pb1p3/1B4P1/8/5P2/6K1/6NR b - - 0 30",
    "moves": [
      "c6b5"
    ],
    "rating": 1075,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 535
    }
  },
  {
    "id": "CG-0886",
    "fen": "rnb3nr/ppppbkpp/4pq2/5p2/8/2PP1N2/PP2PPPP/R1BQKB1R w KQ - 1 7",
    "moves": [
      "c1g5"
    ],
    "rating": 1411,
    "themes": [
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 429
    }
  },
  {
    "id": "CG-0887",
    "fen": "rnb3nr/ppppb1pp/4p1k1/5p2/6P1/1QqP4/PP1NPP1P/R1B1KB1R b KQ - 1 9",
    "moves": [
      "c3b3"
    ],
    "rating": 1072,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 122
    }
  },
  {
    "id": "CG-0888",
    "fen": "rnb3nr/ppppb1pp/4p1k1/qQ3p2/6P1/3P4/PP1NPP1P/R1B1KB1R b KQ - 3 10",
    "moves": [
      "a5b5"
    ],
    "rating": 867,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 317
    }
  },
  {
    "id": "CG-0889",
    "fen": "rnb4r/ppp3pp/1Q2p1k1/3p1p2/1b6/1N1P4/PP2PP1R/R1B1KB2 w Q - 1 15",
    "moves": [
      "b6b4"
    ],
    "rating": 854,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1620
    }
  },
  {
    "id": "CG-0890",
    "fen": "rnb4r/p1p3pp/4p1k1/1p1p1p2/1Q6/1N1P4/PP2PP1R/R1B1KB2 w Q - 0 16",
    "moves": [
      "b4e7"
    ],
    "rating": 920,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98396
    }
  },
  {
    "id": "CG-0891",
    "fen": "rn5r/p1p3pp/b3p1k1/1p1p1p2/1Q3P2/1N1P4/PP2P2R/R1B1KB2 w Q - 1 17",
    "moves": [
      "b4e7"
    ],
    "rating": 1065,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98277
    }
  },
  {
    "id": "CG-0892",
    "fen": "rn5r/p1p2k1p/b3p2p/1p1p1p2/5P2/1NQP4/PP2P3/R1B1KB2 w Q - 2 19",
    "moves": [
      "c3h8"
    ],
    "rating": 1734,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 229
    }
  },
  {
    "id": "CG-0893",
    "fen": "r5kr/p1p4p/4p2p/1bnp1p2/5P2/PN1P4/1P1KP3/R1B2B2 w - - 0 23",
    "moves": [
      "b3c5"
    ],
    "rating": 850,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 546
    }
  },
  {
    "id": "CG-0894",
    "fen": "r5kr/p1p4p/4p2p/1bnp1p2/5P2/PN1P4/1P1KP1B1/R1B5 b - - 1 23",
    "moves": [
      "c5b3"
    ],
    "rating": 1057,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 511
    }
  },
  {
    "id": "CG-0895",
    "fen": "r6r/pnp4p/4pk1p/1b1p4/4pP2/PN1P4/1P1KB3/R1B5 w - - 4 27",
    "moves": [
      "d3e4"
    ],
    "rating": 1735,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 148
    }
  },
  {
    "id": "CG-0896",
    "fen": "r6r/pnp4p/4pk1p/3p4/b3PP2/PN6/1P2B3/R1B1K3 b - - 2 28",
    "moves": [
      "a4b3"
    ],
    "rating": 1704,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 161
    }
  },
  {
    "id": "CG-0897",
    "fen": "r6r/pn5p/2p1pk1p/3p1P2/b3P3/PN6/1P2B3/R1B1K3 b - - 0 29",
    "moves": [
      "a4b3"
    ],
    "rating": 1900,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 148
    }
  },
  {
    "id": "CG-0898",
    "fen": "rnbq3r/ppppkpbp/4p1p1/8/P6P/3P1N2/1PP1PnP1/RNBQKB1R w KQ - 0 8",
    "moves": [
      "e1f2"
    ],
    "rating": 908,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 555
    }
  },
  {
    "id": "CG-0899",
    "fen": "rnbq3r/1pppkpbp/p3p1p1/7P/P7/3P1N2/1PP1PnP1/RNBQKB1R w KQ - 0 9",
    "moves": [
      "e1f2"
    ],
    "rating": 1010,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 661
    }
  },
  {
    "id": "CG-0900",
    "fen": "rnbq1r2/1pppkpbp/p7/3p3p/P2N4/3P4/1PP1P1PR/R1BnKB2 w Q - 0 13",
    "moves": [
      "d4f5"
    ],
    "rating": 1723,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 192
    }
  },
  {
    "id": "CG-0901",
    "fen": "rnbq2r1/1ppp1pbp/p1Nk4/3p3p/P7/3P4/1PP1P1PR/R1BK1B2 w - - 3 15",
    "moves": [
      "c6d8"
    ],
    "rating": 909,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 265
    }
  },
  {
    "id": "CG-0902",
    "fen": "rnbq2r1/1ppp2bp/p1Nk4/3p1p1p/P7/3P4/1PPBP1PR/R2K1B2 w - - 0 16",
    "moves": [
      "c6d8"
    ],
    "rating": 904,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 374
    }
  },
  {
    "id": "CG-0903",
    "fen": "rnbq4/1ppp3p/5b2/pNkp1prR/P7/R2P4/1PP1P1P1/3K1B2 b - - 0 20",
    "moves": [
      "g5h5"
    ],
    "rating": 1866,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 169
    }
  },
  {
    "id": "CG-0904",
    "fen": "rnbq4/Nppp3R/8/p2p1p2/Pk6/2bP4/4P1B1/2K5 b - - 1 26",
    "moves": [
      "d8g5"
    ],
    "rating": 1798,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 223
    }
  },
  {
    "id": "CG-0905",
    "fen": "1nbq4/rp1R4/2p5/p2p1p2/Pk6/2bP4/4P1B1/2K5 w - - 0 28",
    "moves": [
      "d7d8"
    ],
    "rating": 937,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 756
    }
  },
  {
    "id": "CG-0906",
    "fen": "1nbq4/rp5R/2p5/p2p1p2/Pk6/2bP4/4P1B1/2K5 b - - 1 28",
    "moves": [
      "d8g5"
    ],
    "rating": 879,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 801
    }
  },
  {
    "id": "CG-0907",
    "fen": "2b5/rp6/n1p4b/p2p1pq1/Pk6/3P4/1K2P3/7B w - - 2 32",
    "moves": [
      "e2e3"
    ],
    "rating": 1793,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100
    }
  },
  {
    "id": "CG-0908",
    "fen": "1nbqkb1r/1pppppp1/3r4/pN5p/5N2/6P1/PPPPPPP1/R1BQKB1R w KQk - 4 8",
    "moves": [
      "b5d6"
    ],
    "rating": 1884,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 106
    }
  },
  {
    "id": "CG-0909",
    "fen": "1nbqkbr1/1pppp1p1/3rp3/p4N1p/8/6P1/PPPPPPP1/R1BQKB1R b KQ - 1 10",
    "moves": [
      "e6f5"
    ],
    "rating": 851,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 697
    }
  },
  {
    "id": "CG-0910",
    "fen": "1nbqkbr1/1p1pp1p1/3rp3/p1p2N1p/8/6P1/PPPPPPP1/R1BQKB1R w KQ - 0 11",
    "moves": [
      "f5d6"
    ],
    "rating": 1383,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 353
    }
  },
  {
    "id": "CG-0911",
    "fen": "1nb1kbr1/1pqpp1p1/r3p3/p1p4p/7N/2P2PP1/PP1PP1P1/R1BQKB1R b KQ - 0 13",
    "moves": [
      "c7g3"
    ],
    "rating": 971,
    "themes": [
      "mate",
      "mateIn1",
      "capturingDefender",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99808
    }
  },
  {
    "id": "CG-0912",
    "fen": "r1bq2nr/ppppkp2/2n4p/2b1p1p1/P7/1NN3P1/RPPPPP1P/2BQKB1R w K - 0 8",
    "moves": [
      "b3c5"
    ],
    "rating": 1932,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 192
    }
  },
  {
    "id": "CG-0913",
    "fen": "r1bq2nr/pNppk3/2n2p1p/4p1p1/P7/2N3P1/RPPPPP1P/2BQKB1R b K - 0 9",
    "moves": [
      "c8b7"
    ],
    "rating": 1307,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 498
    }
  },
  {
    "id": "CG-0914",
    "fen": "r1bq2nr/1Nppk3/2n2p1p/p3p1p1/P7/2N3P1/RPPPPP1P/2BQKBR1 b - - 1 10",
    "moves": [
      "c8b7"
    ],
    "rating": 1358,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 489
    }
  },
  {
    "id": "CG-0915",
    "fen": "r2q2nr/2ppk3/5p1p/p2Np1p1/P2n4/5bP1/RPPPP1BP/2BQK1R1 b - - 1 13",
    "moves": [
      "f3d5"
    ],
    "rating": 1395,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 317
    }
  },
  {
    "id": "CG-0916",
    "fen": "r2qk1nr/2Np4/5p1p/p3p1p1/P2n4/5bP1/RPPPP1BP/2BQK1R1 b - - 0 14",
    "moves": [
      "d8c7"
    ],
    "rating": 1724,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 151
    }
  },
  {
    "id": "CG-0917",
    "fen": "r3k1nr/2qp4/5p1p/p3p1p1/P2n4/5bP1/RPPPP1BP/2BQK1R1 w - - 0 15",
    "moves": [
      "g2f3"
    ],
    "rating": 1883,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 224
    }
  },
  {
    "id": "CG-0918",
    "fen": "r3k1nr/2qp4/5p1p/p3p1p1/PP1n4/5bP1/R1PPP1BP/2BQK1R1 b - - 0 15",
    "moves": [
      "f3e2"
    ],
    "rating": 1842,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 141
    }
  },
  {
    "id": "CG-0919",
    "fen": "r2k2nr/2qp4/5p1p/p3p1p1/PP1nP3/5bP1/R1PP2BP/2BQK1R1 b - - 0 16",
    "moves": [
      "f3d1"
    ],
    "rating": 862,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 288
    }
  },
  {
    "id": "CG-0920",
    "fen": "rq1k2nr/3p4/5p1p/p3p1p1/PP2P3/6P1/R1nP2BP/2B1K1R1 w - - 0 19",
    "moves": [
      "a2c2"
    ],
    "rating": 1930,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 122
    }
  },
  {
    "id": "CG-0921",
    "fen": "6nr/3pk3/5pqp/1B2p1p1/Rp2P3/4K1PP/R2B4/8 b - - 2 28",
    "moves": [
      "f6f5"
    ],
    "rating": 1440,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 282
    }
  },
  {
    "id": "CG-0922",
    "fen": "6nr/3pk3/5p1p/1B2p1p1/Rp2q3/4K1PP/R2B4/8 w - - 0 29",
    "moves": [
      "e3e4"
    ],
    "rating": 1041,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1231
    }
  },
  {
    "id": "CG-0923",
    "fen": "6nr/3Bk3/8/4Kp1p/Rp3p2/6PP/R7/8 b - - 0 32",
    "moves": [
      "e7d7"
    ],
    "rating": 1796,
    "themes": [
      "capturingDefender",
      "advantage",
      "endgame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 137
    }
  },
  {
    "id": "CG-0924",
    "fen": "rnbqk3/p1pp1ppr/1p3n2/4p2p/Pb4Q1/1PN1P3/2PP1PPP/R1B1KBNR w KQq - 0 8",
    "moves": [
      "g4b4"
    ],
    "rating": 934,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 651
    }
  },
  {
    "id": "CG-0925",
    "fen": "rnbqk1n1/p1pp1ppr/1p6/4p2p/Pb4Q1/1PN1P3/2PPBPPP/R1B1K1NR w KQq - 2 9",
    "moves": [
      "g4b4"
    ],
    "rating": 1704,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 93
    }
  },
  {
    "id": "CG-0926",
    "fen": "rnbqk1n1/p1pp1ppr/1p6/4p2p/Pb3PQ1/1PN1P3/2PPB1PP/R1B1K1NR b KQq - 0 9",
    "moves": [
      "h5g4"
    ],
    "rating": 1090,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 581
    }
  },
  {
    "id": "CG-0927",
    "fen": "rnb1k1n1/p1pp1ppr/1p6/4p1q1/Pb3Pp1/1PNBP3/2PP2PP/R1B1K1NR w KQq - 2 11",
    "moves": [
      "f4g5"
    ],
    "rating": 860,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 666
    }
  },
  {
    "id": "CG-0928",
    "fen": "rnb1k3/p1pp1ppr/1p3n2/4p1q1/Pb3PpP/1PNBP3/2PP2P1/R1B1K1NR w KQq - 1 12",
    "moves": [
      "f4g5"
    ],
    "rating": 974,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 679
    }
  },
  {
    "id": "CG-0929",
    "fen": "rnb1k3/p1pp1ppr/1p3n2/4p1P1/Pb4pP/1PNBP3/2PP2P1/R1B1K1NR b KQq - 0 12",
    "moves": [
      "b4c3"
    ],
    "rating": 1731,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 206
    }
  },
  {
    "id": "CG-0930",
    "fen": "rnb5/p1pp1ppr/1p3k2/4p3/Pb4pP/1PNBP2R/2PP2P1/R1B1K1N1 b Q - 1 14",
    "moves": [
      "b4c3"
    ],
    "rating": 1378,
    "themes": [
      "fork",
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 285
    }
  },
  {
    "id": "CG-0931",
    "fen": "rnb5/3p1ppr/1pp2kB1/p3p3/Pb4pP/1PN1P2R/2PP2P1/R1B1K1N1 w Q - 0 16",
    "moves": [
      "g6h7"
    ],
    "rating": 1369,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 464
    }
  },
  {
    "id": "CG-0932",
    "fen": "rnb5/3p1ppB/1pp2k2/4p3/Pp5P/2b1P2P/2PP4/R1BK2N1 b - - 0 19",
    "moves": [
      "c3a1"
    ],
    "rating": 942,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 668
    }
  },
  {
    "id": "CG-0933",
    "fen": "rnb5/3p1ppB/1p3k2/2p1p3/Pp5P/2b1PN1P/2PP4/R1BK4 b - - 1 20",
    "moves": [
      "c3a1"
    ],
    "rating": 1819,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 110
    }
  },
  {
    "id": "CG-0934",
    "fen": "2b5/3p1ppB/Rp2k3/2p1p3/1p5P/4PN1P/2P5/3KB3 b - - 0 24",
    "moves": [
      "c8a6"
    ],
    "rating": 1879,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 208
    }
  },
  {
    "id": "CG-0935",
    "fen": "8/1b1p1ppB/Rp2k3/2p1p3/1p2P2P/5N1P/2P5/3KB3 b - - 0 25",
    "moves": [
      "b7a6"
    ],
    "rating": 1939,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 177
    }
  },
  {
    "id": "CG-0936",
    "fen": "8/1b1pkppB/Rp6/2p1p3/1pP1P2P/5N1P/8/3KB3 b - c3 0 26",
    "moves": [
      "b7a6"
    ],
    "rating": 1359,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 235
    }
  },
  {
    "id": "CG-0937",
    "fen": "rnbqkbnr/1p2pp2/p2p2p1/2p4p/P2N1PP1/2N5/1PPPP2P/R1BQKB1R b KQkq - 0 6",
    "moves": [
      "c5d4"
    ],
    "rating": 1823,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98
    }
  },
  {
    "id": "CG-0938",
    "fen": "rnbqkbnr/1p3p2/p2pP1p1/7p/P2p2P1/2N5/1PPPP2P/R1BQKB1R b KQkq - 0 8",
    "moves": [
      "d8h4"
    ],
    "rating": 1007,
    "themes": [
      "mate",
      "mateIn1",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98959
    }
  },
  {
    "id": "CG-0939",
    "fen": "rn1qkbnr/1pp1pNpp/p7/3p4/8/N1P3P1/PPbPPPBP/R1BQK2R b KQkq - 0 7",
    "moves": [
      "c2d1"
    ],
    "rating": 892,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 152
    }
  },
  {
    "id": "CG-0940",
    "fen": "1r1qkbnr/1ppnpNpp/p7/3p4/Q7/N1P3P1/PP1PPPBP/R1B1K2R b KQk - 2 9",
    "moves": [
      "e8f7"
    ],
    "rating": 1450,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 364
    }
  },
  {
    "id": "CG-0941",
    "fen": "1r1k1bnr/1p1n2p1/Q6p/2pBp3/4P3/N1P3P1/PP1P1P1P/R1B1K2R b KQ - 0 13",
    "moves": [
      "b7a6"
    ],
    "rating": 1082,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 330
    }
  },
  {
    "id": "CG-0942",
    "fen": "1r1qkbnr/ppp1pp1p/3pb3/6p1/3n4/N2P1N1P/PPPBPPP1/2RQKB1R w Kk - 4 7",
    "moves": [
      "f3d4"
    ],
    "rating": 951,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 542
    }
  },
  {
    "id": "CG-0943",
    "fen": "1r1qkbnr/ppp1pp1p/3pb3/6p1/3n3N/N2P3P/PPPBPPP1/2RQKB1R b Kk - 5 7",
    "moves": [
      "g5h4"
    ],
    "rating": 984,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 579
    }
  },
  {
    "id": "CG-0944",
    "fen": "1r1qkbnr/ppp1pp1p/3pb3/6p1/7N/N2PB2P/PPP1nPP1/2RQKB1R b Kk - 1 8",
    "moves": [
      "e2c1"
    ],
    "rating": 1556,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 418
    }
  },
  {
    "id": "CG-0945",
    "fen": "1r1qkbnr/ppp1pp1p/3p4/6p1/7N/N2PB2R/PPP1nPP1/2RQKB2 b k - 0 9",
    "moves": [
      "e2c1"
    ],
    "rating": 1882,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 223
    }
  },
  {
    "id": "CG-0946",
    "fen": "1r1qkbnr/ppp1pp1p/3p4/8/6Pp/N2PB2R/PPP1nP2/2RQKB2 b k g3 0 10",
    "moves": [
      "e2c1"
    ],
    "rating": 966,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 734
    }
  },
  {
    "id": "CG-0947",
    "fen": "1r1q1bnr/pppkpp1p/3p4/8/5PPp/N2PB2R/PPP1n3/2RQKB2 b - - 0 11",
    "moves": [
      "e2c1"
    ],
    "rating": 1308,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 287
    }
  },
  {
    "id": "CG-0948",
    "fen": "1r3bnr/pppqpp1p/3pk3/8/5PPp/N2PB2R/PPP1Q3/2R1KB2 w - - 1 13",
    "moves": [
      "e3d4"
    ],
    "rating": 1009,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98558
    }
  },
  {
    "id": "CG-0949",
    "fen": "1r3bnr/pppqpp1p/3pk3/8/5PPp/N2P3R/PPP1QB2/2R1KB2 b - - 2 13",
    "moves": [
      "e6f6"
    ],
    "rating": 961,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98827
    }
  },
  {
    "id": "CG-0950",
    "fen": "1r3bnr/pppqpp1p/3p1k2/8/5PPp/N2P3R/PPP1QB2/2R1KB2 w - - 3 14",
    "moves": [
      "f2d4"
    ],
    "rating": 1506,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 239
    }
  },
  {
    "id": "CG-0951",
    "fen": "1rq2bnr/ppp1pp1p/3p1k2/8/5PPR/N2P4/PPP1QB2/2R1KB2 w - - 1 15",
    "moves": [
      "f2d4"
    ],
    "rating": 1926,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 179
    }
  },
  {
    "id": "CG-0952",
    "fen": "1r3bnr/pppqpp1p/3p1k2/4Q3/5PPR/NP1P4/P1P2B2/2R1KB2 b - - 2 16",
    "moves": [
      "d6e5"
    ],
    "rating": 886,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 100452
    }
  },
  {
    "id": "CG-0953",
    "fen": "1r3bnr/pppqpp1p/3p2k1/4Q3/5PPR/NP1P4/P1P2B2/2R1KB2 w - - 3 17",
    "moves": [
      "e5g5"
    ],
    "rating": 1100,
    "themes": [
      "mate",
      "mateIn1",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 200
    }
  },
  {
    "id": "CG-0954",
    "fen": "1r3bnr/pppqpp1p/3p2k1/4Q3/5PP1/NP1P4/P1P2B2/2R1KB1R b - - 4 17",
    "moves": [
      "d6e5"
    ],
    "rating": 1058,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1308
    }
  },
  {
    "id": "CG-0955",
    "fen": "1r3bnr/ppp1pp1p/3p2k1/4Q3/5Pq1/NP1P4/P1P2B2/2R1KB1R w - - 0 18",
    "moves": [
      "f4f5"
    ],
    "rating": 979,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 98729
    }
  },
  {
    "id": "CG-0956",
    "fen": "1r3bnr/ppp1pp1R/3p2k1/4Q3/5Pq1/NP1P4/P1P2B2/2R1KB2 b - - 0 18",
    "moves": [
      "d6e5"
    ],
    "rating": 958,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 106
    }
  },
  {
    "id": "CG-0957",
    "fen": "1r3bnr/ppp2p1R/3pp1k1/4Q3/5Pq1/NP1P4/P1P2B2/2R1KB2 w - - 0 19",
    "moves": [
      "e5h8"
    ],
    "rating": 863,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 560
    }
  },
  {
    "id": "CG-0958",
    "fen": "1r4nr/ppp2p2/3pp1kb/4Q3/5Pq1/NP1P4/P1P2B2/2R1KB2 w - - 0 20",
    "moves": [
      "e5h8"
    ],
    "rating": 1498,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 402
    }
  },
  {
    "id": "CG-0959",
    "fen": "1r5r/ppp2p2/2npp1kb/8/5Pq1/NP1P4/PQP1BB2/2R1K3 w - - 4 22",
    "moves": [
      "e2g4"
    ],
    "rating": 1053,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1180
    }
  },
  {
    "id": "CG-0960",
    "fen": "1r5r/ppp2p2/2npp1kb/1N6/5Pq1/1P1P4/PQP1BB2/2R1K3 b - - 5 22",
    "moves": [
      "g4f4"
    ],
    "rating": 1954,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 153
    }
  },
  {
    "id": "CG-0961",
    "fen": "1r5r/1pp2p2/p1npp1kb/1N6/5Pq1/1P1P4/PQP1BB2/2R1K3 w - - 0 23",
    "moves": [
      "e2g4"
    ],
    "rating": 944,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1065
    }
  },
  {
    "id": "CG-0962",
    "fen": "1r5r/1pp2p2/p1npp1kb/1N6/5Pq1/1P1P4/PQP2B2/2RBK3 b - - 1 23",
    "moves": [
      "g4f4"
    ],
    "rating": 1822,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 155
    }
  },
  {
    "id": "CG-0963",
    "fen": "1r5r/1pp2p2/p1npp1kb/1N6/5P2/1P1P4/PQP2B2/2RK4 b - - 0 24",
    "moves": [
      "h6f4"
    ],
    "rating": 1807,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 150
    }
  },
  {
    "id": "CG-0964",
    "fen": "1r3r2/1pp2p2/p1nppQkb/1N6/5P2/1P1P4/P1P2B2/2RK4 b - - 2 25",
    "moves": [
      "g6f6"
    ],
    "rating": 1053,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1564
    }
  },
  {
    "id": "CG-0965",
    "fen": "rn2kbr1/p2bpp1p/7n/q1pP2p1/8/PP4P1/3BPP1P/R2QKNNR w KQq - 0 15",
    "moves": [
      "d2a5"
    ],
    "rating": 960,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 967
    }
  },
  {
    "id": "CG-0966",
    "fen": "rn2kbnr/4pp1p/p7/2pb2p1/4P3/PPB3P1/3K1P1P/2RQ1NNR w q - 0 20",
    "moves": [
      "e4d5"
    ],
    "rating": 1951,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 177
    }
  },
  {
    "id": "CG-0967",
    "fen": "rn2kbnr/4pp1p/p7/2p3p1/4P3/PbB3P1/5P1P/2RQKNNR w q - 0 22",
    "moves": [
      "d1b3"
    ],
    "rating": 1442,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 237
    }
  },
  {
    "id": "CG-0968",
    "fen": "rn1qkb1r/2pppppp/1p5n/p7/1P3N2/B1P5/b2PPPPP/RNQ1KB1R w KQkq - 0 8",
    "moves": [
      "a1a2"
    ],
    "rating": 1311,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 455
    }
  },
  {
    "id": "CG-0969",
    "fen": "1n1qkb1r/2pp1ppp/rp5n/P3p3/R4N1P/2P5/1BbPPPP1/2Q1KB1R w Kk - 1 12",
    "moves": [
      "c1c2"
    ],
    "rating": 1465,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 310
    }
  },
  {
    "id": "CG-0970",
    "fen": "1n1qkb1r/2pp1ppp/rp5n/P3p3/R4N1P/2P5/1BbPPPPR/2Q1KB2 b k - 2 12",
    "moves": [
      "c2a4"
    ],
    "rating": 1520,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 382
    }
  },
  {
    "id": "CG-0971",
    "fen": "1n1qkb1r/2pp1ppp/rp5n/P3p3/R4N1P/2P5/1B1PPPPR/2QK1B2 b k - 0 13",
    "moves": [
      "e5f4"
    ],
    "rating": 1888,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 120
    }
  },
  {
    "id": "CG-0972",
    "fen": "1n2kb1r/2pp1ppp/rp5n/P3p3/R4N1q/2P5/1B1PPPPR/2QK1B2 w k - 0 14",
    "moves": [
      "h2h4"
    ],
    "rating": 1066,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 469
    }
  },
  {
    "id": "CG-0973",
    "fen": "1n1k1b1r/2p2ppp/rP1p3n/4p3/R4N2/2P1P3/1B1P1PPR/2QK1B2 b - - 0 17",
    "moves": [
      "a6a4"
    ],
    "rating": 1722,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 173
    }
  },
  {
    "id": "CG-0974",
    "fen": "1nk2b1r/2p2ppp/rP1p2Nn/4p3/R7/2P1P3/1B1P1PPR/2QK1B2 b - - 2 18",
    "moves": [
      "a6a4"
    ],
    "rating": 1702,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 131
    }
  },
  {
    "id": "CG-0975",
    "fen": "1nk2b1r/r1p2ppp/1P1p2Nn/4p3/R7/2P1P3/1B1P1PPR/2QK1B2 w - - 3 19",
    "moves": [
      "b6a7"
    ],
    "rating": 1490,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 311
    }
  },
  {
    "id": "CG-0976",
    "fen": "1nk2b1r/r1p2ppp/1P1p2Nn/4p3/R3P3/2P5/1B1P1PPR/2QK1B2 b - - 0 19",
    "moves": [
      "a7a4"
    ],
    "rating": 1842,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 225
    }
  },
  {
    "id": "CG-0977",
    "fen": "1n1k1b1r/r1p2ppp/1P1p2Nn/4p3/R3P3/2P5/1B1P1PPR/2QK1B2 w - - 1 20",
    "moves": [
      "b6a7"
    ],
    "rating": 1054,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 623
    }
  },
  {
    "id": "CG-0978",
    "fen": "1n1k1b1r/r1p2ppp/1P1p2Nn/R3p3/4P3/2P5/1B1P1PPR/2QK1B2 b - - 2 20",
    "moves": [
      "a7a5"
    ],
    "rating": 1729,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 180
    }
  },
  {
    "id": "CG-0979",
    "fen": "1Qk4r/4bppp/3p2NR/r3p3/4P3/2P5/1B1P1PP1/2QK1B2 b - - 0 23",
    "moves": [
      "c8b8"
    ],
    "rating": 1012,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1380
    }
  },
  {
    "id": "CG-0980",
    "fen": "1k4r1/r3b2p/B2p3N/8/4P3/2P5/1B1P1PP1/2QK4 w - - 5 29",
    "moves": [
      "h6g8"
    ],
    "rating": 1755,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 147
    }
  },
  {
    "id": "CG-0981",
    "fen": "1rbqkb1r/1p1npppp/8/Q1pp4/P5P1/BP2P2P/2P2PB1/RN2K1NR w KQk - 1 12",
    "moves": [
      "a5d8"
    ],
    "rating": 966,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 115
    }
  },
  {
    "id": "CG-0982",
    "fen": "1rbqkb1r/1p1npppp/8/Q1Bp4/P5P1/1P2P2P/2P2PB1/RN2K1NR b KQk - 0 12",
    "moves": [
      "d8a5"
    ],
    "rating": 1019,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1033
    }
  },
  {
    "id": "CG-0983",
    "fen": "1rbqkb1r/1p1n1ppp/8/Q1Bpp3/P5PP/1P2P3/2P2PB1/RN2K1NR b KQk - 0 13",
    "moves": [
      "d8a5"
    ],
    "rating": 1098,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 858
    }
  },
  {
    "id": "CG-0984",
    "fen": "1rbqkb1r/1p3ppp/8/Q1npp3/P5PP/1P2P3/2P2PB1/RN2K1NR w KQk - 0 14",
    "moves": [
      "a5d8"
    ],
    "rating": 896,
    "themes": [
      "hangingPiece",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 223
    }
  },
  {
    "id": "CG-0985",
    "fen": "1rb1kb1r/1Q3ppp/8/3qp3/P5PP/1n2P3/2P2P2/RN2K1NR b KQk - 0 16",
    "moves": [
      "c8b7"
    ],
    "rating": 1038,
    "themes": [
      "fork",
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 118
    }
  },
  {
    "id": "CG-0986",
    "fen": "1rb1kb1r/1Q4pp/8/3qpp2/P5PP/1n2P3/2P2P2/RN2K1NR w KQk - 0 17",
    "moves": [
      "b7d5"
    ],
    "rating": 1047,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 531
    }
  },
  {
    "id": "CG-0987",
    "fen": "1rQ1kb1r/6pp/8/3qpp2/P5PP/1n2P3/2P2P2/RN2K1NR b KQk - 0 17",
    "moves": [
      "b8c8"
    ],
    "rating": 1048,
    "themes": [
      "fork",
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1147
    }
  },
  {
    "id": "CG-0988",
    "fen": "5r1r/4k1pp/8/4pp2/P5PP/1n1qP2N/2P2P2/RN2K2R w KQ - 0 20",
    "moves": [
      "c2d3"
    ],
    "rating": 1009,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 789
    }
  },
  {
    "id": "CG-0989",
    "fen": "5r1r/4k1pp/8/4pp2/P5PP/1P2P2N/5P2/Rq2K2R w KQ - 0 21",
    "moves": [
      "a1b1"
    ],
    "rating": 915,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 1650
    }
  },
  {
    "id": "CG-0990",
    "fen": "5r1r/5kpp/8/P7/5PpP/1P5N/8/1R2K2R w K - 0 25",
    "moves": [
      "h3g5"
    ],
    "rating": 1873,
    "themes": [
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 155
    }
  },
  {
    "id": "CG-0991",
    "fen": "r1bq1b1r/ppp1pk1p/3p1Bp1/4np2/8/1P3PP1/P1PPP2P/RN1QKBNR w KQ - 1 8",
    "moves": [
      "f6h8"
    ],
    "rating": 1891,
    "themes": [
      "hangingPiece",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 189
    }
  },
  {
    "id": "CG-0992",
    "fen": "r1bq1b1r/pp3n1p/3k4/2pP1pp1/PP6/4RPP1/2PPK2P/1N1Q1BNR w - c6 0 16",
    "moves": [
      "b4c5"
    ],
    "rating": 1305,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 307
    }
  },
  {
    "id": "CG-0993",
    "fen": "r1bq1b1r/pp3n1p/3k4/2pP1pp1/PPP5/4RPP1/3PK2P/1N1Q1BNR b - - 0 16",
    "moves": [
      "c5b4"
    ],
    "rating": 1826,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 153
    }
  },
  {
    "id": "CG-0994",
    "fen": "r2q1b1r/pp1b1n1p/3k4/2pP1pp1/PPP5/4RPP1/3PK2P/1N1Q1BNR w - - 1 17",
    "moves": [
      "b4c5"
    ],
    "rating": 1375,
    "themes": [
      "capturingDefender",
      "exposedKing",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 236
    }
  },
  {
    "id": "CG-0995",
    "fen": "r2q1b1r/pp1b1n1p/8/3P1pp1/P2k4/4RPP1/7P/1N1QKBNR b - - 1 20",
    "moves": [
      "d4c5"
    ],
    "rating": 985,
    "themes": [
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 99724
    }
  },
  {
    "id": "CG-0996",
    "fen": "r3kb1r/ppp1npp1/B3b3/3qP3/5B2/1Q2P1P1/PP3P1P/RN2K1NR b KQkq - 0 11",
    "moves": [
      "d5h1"
    ],
    "rating": 1788,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "hard",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 225
    }
  },
  {
    "id": "CG-0997",
    "fen": "r3kb1r/pBp1npp1/2b5/4P3/5B2/2KQP1P1/PP3P1P/RN4NR b kq - 2 16",
    "moves": [
      "c6b7"
    ],
    "rating": 1466,
    "themes": [
      "capturingDefender",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 281
    }
  },
  {
    "id": "CG-0998",
    "fen": "r3kb1r/pbp1npp1/8/1Q2P3/5B2/2K1P1P1/PP3P1P/RN4NR b kq - 1 17",
    "moves": [
      "b7c6"
    ],
    "rating": 1354,
    "themes": [
      "fork",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "medium",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 273
    }
  },
  {
    "id": "CG-0999",
    "fen": "r1Q1kb1r/p1p3p1/5p2/4P3/1P1n1B2/2K1P1P1/P4P1P/RN4NR b kq - 1 20",
    "moves": [
      "a8c8"
    ],
    "rating": 921,
    "themes": [
      "hangingPiece",
      "advantage",
      "middlegame",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 430
    }
  },
  {
    "id": "CG-1000",
    "fen": "r1bqkb1r/1p1pp1pp/p6n/n1p2p2/PPN5/8/RBPPPPPP/1N1QKB1R b Kkq - 5 7",
    "moves": [
      "a5c4"
    ],
    "rating": 1004,
    "themes": [
      "capturingDefender",
      "advantage",
      "opening",
      "engineVerified",
      "short"
    ],
    "difficulty": "easy",
    "solutionLength": 1,
    "source": "ChessGrind Original",
    "verification": {
      "engine": "Stockfish 19",
      "nodes": 30000,
      "scoreGap": 709
    }
  }
];
