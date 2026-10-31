// Generated deterministically by scripts/generate-opening-drills.mjs.
// Every line is replay-validated with chess.js and uses no external puzzle source.

export type OpeningSide = "white" | "black";

export type OpeningDrill = {
  id: string;
  opening: string;
  openingSlug: string;
  variation: string;
  side: OpeningSide;
  fen: string;
  moves: string[];
  sanMoves: string[];
  idea: string;
  commonMistake: string;
  source: "ChessGrind Original";
};

export const openingDrills: OpeningDrill[] = [
  {
    "id": "CG-OPEN-001",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    "moves": [
      "f8c5",
      "c2c3",
      "g8f6",
      "d2d4",
      "e5d4",
      "c3d4"
    ],
    "sanMoves": [
      "Bc5",
      "c3",
      "Nf6",
      "d4",
      "exd4",
      "cxd4"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-002",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "white",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    "moves": [
      "c2c3",
      "g8f6",
      "d2d4",
      "e5d4",
      "c3d4",
      "c5b4"
    ],
    "sanMoves": [
      "c3",
      "Nf6",
      "d4",
      "exd4",
      "cxd4",
      "Bb4+"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-003",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    "moves": [
      "d2d3",
      "f8c5",
      "e1g1",
      "d7d6",
      "c2c3",
      "e8g8"
    ],
    "sanMoves": [
      "d3",
      "Bc5",
      "O-O",
      "d6",
      "c3",
      "O-O"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-004",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
    "moves": [
      "g8f6",
      "d2d4",
      "e5d4",
      "c3d4",
      "c5b4",
      "c1d2"
    ],
    "sanMoves": [
      "Nf6",
      "d4",
      "exd4",
      "cxd4",
      "Bb4+",
      "Bd2"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-005",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    "moves": [
      "f8c5",
      "e1g1",
      "d7d6",
      "c2c3",
      "e8g8",
      "f1e1"
    ],
    "sanMoves": [
      "Bc5",
      "O-O",
      "d6",
      "c3",
      "O-O",
      "Re1"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-006",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
    "moves": [
      "c5b4",
      "c2c3",
      "b4a5",
      "d2d4",
      "e5d4",
      "e1g1"
    ],
    "sanMoves": [
      "Bxb4",
      "c3",
      "Ba5",
      "d4",
      "exd4",
      "O-O"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-007",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 4",
    "side": "black",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
    "moves": [
      "d7d5",
      "e4d5",
      "c6a5",
      "c4b5",
      "c7c6",
      "d5c6"
    ],
    "sanMoves": [
      "d5",
      "exd5",
      "Na5",
      "Bb5+",
      "c6",
      "dxc6"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-008",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 5",
    "side": "black",
    "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    "moves": [
      "g8f6",
      "b1c3",
      "d7d6",
      "c1g5",
      "h7h6",
      "g5h4"
    ],
    "sanMoves": [
      "Nf6",
      "Nc3",
      "d6",
      "Bg5",
      "h6",
      "Bh4"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-009",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "white",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
    "moves": [
      "d2d4",
      "e5d4",
      "c3d4",
      "c5b4",
      "c1d2",
      "b4d2"
    ],
    "sanMoves": [
      "d4",
      "exd4",
      "cxd4",
      "Bb4+",
      "Bd2",
      "Bxd2+"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-010",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
    "moves": [
      "e1g1",
      "d7d6",
      "c2c3",
      "e8g8",
      "f1e1",
      "a7a6"
    ],
    "sanMoves": [
      "O-O",
      "d6",
      "c3",
      "O-O",
      "Re1",
      "a6"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-011",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
    "moves": [
      "c2c3",
      "b4a5",
      "d2d4",
      "e5d4",
      "e1g1",
      "d7d6"
    ],
    "sanMoves": [
      "c3",
      "Ba5",
      "d4",
      "exd4",
      "O-O",
      "d6"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-012",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 4",
    "side": "white",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    "moves": [
      "e4d5",
      "c6a5",
      "c4b5",
      "c7c6",
      "d5c6",
      "b7c6"
    ],
    "sanMoves": [
      "exd5",
      "Na5",
      "Bb5+",
      "c6",
      "dxc6",
      "bxc6"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-013",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    "moves": [
      "e5d4",
      "c3d4",
      "c5b4",
      "c1d2",
      "b4d2",
      "b1d2"
    ],
    "sanMoves": [
      "exd4",
      "cxd4",
      "Bb4+",
      "Bd2",
      "Bxd2+",
      "Nbxd2"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-014",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 2 5",
    "moves": [
      "d7d6",
      "c2c3",
      "e8g8",
      "f1e1",
      "a7a6",
      "c4b3"
    ],
    "sanMoves": [
      "d6",
      "c3",
      "O-O",
      "Re1",
      "a6",
      "Bb3"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-015",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq - 0 5",
    "moves": [
      "b4a5",
      "d2d4",
      "e5d4",
      "e1g1",
      "d7d6",
      "c3d4"
    ],
    "sanMoves": [
      "Ba5",
      "d4",
      "exd4",
      "O-O",
      "d6",
      "cxd4"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-016",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 4",
    "side": "black",
    "fen": "r1bqkb1r/ppp2ppp/2n2n2/3Pp1N1/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    "moves": [
      "c6a5",
      "c4b5",
      "c7c6",
      "d5c6",
      "b7c6",
      "b5e2"
    ],
    "sanMoves": [
      "Na5",
      "Bb5+",
      "c6",
      "dxc6",
      "bxc6",
      "Be2"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-017",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 5",
    "side": "black",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 2 5",
    "moves": [
      "d7d6",
      "c1g5",
      "h7h6",
      "g5h4",
      "g7g5",
      "h4g3"
    ],
    "sanMoves": [
      "d6",
      "Bg5",
      "h6",
      "Bh4",
      "g5",
      "Bg3"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-018",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "white",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6",
    "moves": [
      "c3d4",
      "c5b4",
      "c1d2",
      "b4d2",
      "b1d2",
      "d7d5"
    ],
    "sanMoves": [
      "cxd4",
      "Bb4+",
      "Bd2",
      "Bxd2+",
      "Nbxd2",
      "d5"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-019",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w kq - 0 6",
    "moves": [
      "c2c3",
      "e8g8",
      "f1e1",
      "a7a6",
      "c4b3",
      "c5a7"
    ],
    "sanMoves": [
      "c3",
      "O-O",
      "Re1",
      "a6",
      "Bb3",
      "Ba7"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-020",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    "moves": [
      "d2d4",
      "e5d4",
      "e1g1",
      "d7d6",
      "c3d4",
      "a5b6"
    ],
    "sanMoves": [
      "d4",
      "exd4",
      "O-O",
      "d6",
      "cxd4",
      "Bb6"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-021",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 4",
    "side": "white",
    "fen": "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
    "moves": [
      "c4b5",
      "c7c6",
      "d5c6",
      "b7c6",
      "b5e2",
      "h7h6"
    ],
    "sanMoves": [
      "Bb5+",
      "c6",
      "dxc6",
      "bxc6",
      "Be2",
      "h6"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-022",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 5",
    "side": "white",
    "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6",
    "moves": [
      "c1g5",
      "h7h6",
      "g5h4",
      "g7g5",
      "h4g3",
      "c8g4"
    ],
    "sanMoves": [
      "Bg5",
      "h6",
      "Bh4",
      "g5",
      "Bg3",
      "Bg4"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-023",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq - 0 6",
    "moves": [
      "c5b4",
      "c1d2",
      "b4d2",
      "b1d2",
      "d7d5",
      "e4d5"
    ],
    "sanMoves": [
      "Bb4+",
      "Bd2",
      "Bxd2+",
      "Nbxd2",
      "d5",
      "exd5"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-024",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b kq - 0 6",
    "moves": [
      "e8g8",
      "f1e1",
      "a7a6",
      "c4b3",
      "c5a7",
      "b1d2"
    ],
    "sanMoves": [
      "O-O",
      "Re1",
      "a6",
      "Bb3",
      "Ba7",
      "Nbd2"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-025",
    "opening": "Italian Game",
    "openingSlug": "italian-game",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqk1nr/pppp1ppp/2n5/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R b KQkq - 0 6",
    "moves": [
      "e5d4",
      "e1g1",
      "d7d6",
      "c3d4",
      "a5b6",
      "b1c3"
    ],
    "sanMoves": [
      "exd4",
      "O-O",
      "d6",
      "cxd4",
      "Bb6",
      "Nc3"
    ],
    "idea": "Develop quickly, fight for d4, and castle before starting an attack.",
    "commonMistake": "Do not launch a kingside attack while your centre and king are unfinished.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-026",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    "moves": [
      "a7a6",
      "b5a4",
      "g8f6",
      "e1g1",
      "f8e7",
      "f1e1"
    ],
    "sanMoves": [
      "a6",
      "Ba4",
      "Nf6",
      "O-O",
      "Be7",
      "Re1"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-027",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "white",
    "fen": "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    "moves": [
      "b5a4",
      "g8f6",
      "e1g1",
      "f8e7",
      "f1e1",
      "b7b5"
    ],
    "sanMoves": [
      "Ba4",
      "Nf6",
      "O-O",
      "Be7",
      "Re1",
      "b5"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-028",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    "moves": [
      "e1g1",
      "f6e4",
      "d2d4",
      "e4d6",
      "b5c6",
      "d7c6"
    ],
    "sanMoves": [
      "O-O",
      "Nxe4",
      "d4",
      "Nd6",
      "Bxc6",
      "dxc6"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-029",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 4",
    "side": "white",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    "moves": [
      "d2d3",
      "f5e4",
      "d3e4",
      "g8f6",
      "e1g1",
      "d7d6"
    ],
    "sanMoves": [
      "d3",
      "fxe4",
      "dxe4",
      "Nf6",
      "O-O",
      "d6"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-030",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
    "moves": [
      "g8f6",
      "e1g1",
      "f8e7",
      "f1e1",
      "b7b5",
      "a4b3"
    ],
    "sanMoves": [
      "Nf6",
      "O-O",
      "Be7",
      "Re1",
      "b5",
      "Bb3"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-031",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",
    "moves": [
      "f6e4",
      "d2d4",
      "e4d6",
      "b5c6",
      "d7c6",
      "d4e5"
    ],
    "sanMoves": [
      "Nxe4",
      "d4",
      "Nd6",
      "Bxc6",
      "dxc6",
      "dxe5"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-032",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    "moves": [
      "d7c6",
      "e1g1",
      "f7f6",
      "d2d4",
      "e5d4",
      "f3d4"
    ],
    "sanMoves": [
      "dxc6",
      "O-O",
      "f6",
      "d4",
      "exd4",
      "Nxd4"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-033",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 4",
    "side": "black",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    "moves": [
      "f5e4",
      "d3e4",
      "g8f6",
      "e1g1",
      "d7d6",
      "b1c3"
    ],
    "sanMoves": [
      "fxe4",
      "dxe4",
      "Nf6",
      "O-O",
      "d6",
      "Nc3"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-034",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "white",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    "moves": [
      "e1g1",
      "f8e7",
      "f1e1",
      "b7b5",
      "a4b3",
      "d7d6"
    ],
    "sanMoves": [
      "O-O",
      "Be7",
      "Re1",
      "b5",
      "Bb3",
      "d6"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-035",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
    "moves": [
      "d2d4",
      "e4d6",
      "b5c6",
      "d7c6",
      "d4e5",
      "d6f5"
    ],
    "sanMoves": [
      "d4",
      "Nd6",
      "Bxc6",
      "dxc6",
      "dxe5",
      "Nf5"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-036",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    "moves": [
      "e1g1",
      "f7f6",
      "d2d4",
      "e5d4",
      "f3d4",
      "c6c5"
    ],
    "sanMoves": [
      "O-O",
      "f6",
      "d4",
      "exd4",
      "Nxd4",
      "c5"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-037",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 4",
    "side": "white",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2p3/4p3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    "moves": [
      "d3e4",
      "g8f6",
      "e1g1",
      "d7d6",
      "b1c3",
      "f8e7"
    ],
    "sanMoves": [
      "dxe4",
      "Nf6",
      "O-O",
      "d6",
      "Nc3",
      "Be7"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-038",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 5",
    "side": "white",
    "fen": "r1bqkbnr/2pp1ppp/p1n5/1p2p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    "moves": [
      "a4b3",
      "c6a5",
      "e1g1",
      "d7d6",
      "d2d4",
      "e5d4"
    ],
    "sanMoves": [
      "Bb3",
      "Na5",
      "O-O",
      "d6",
      "d4",
      "exd4"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-039",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5",
    "moves": [
      "f8e7",
      "f1e1",
      "b7b5",
      "a4b3",
      "d7d6",
      "c2c3"
    ],
    "sanMoves": [
      "Be7",
      "Re1",
      "b5",
      "Bb3",
      "d6",
      "c3"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-040",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqkb1r/pppp1ppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 5",
    "moves": [
      "e4d6",
      "b5c6",
      "d7c6",
      "d4e5",
      "d6f5",
      "d1d8"
    ],
    "sanMoves": [
      "Nd6",
      "Bxc6",
      "dxc6",
      "dxe5",
      "Nf5",
      "Qxd8+"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-041",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 1 5",
    "moves": [
      "f7f6",
      "d2d4",
      "e5d4",
      "f3d4",
      "c6c5",
      "d4b3"
    ],
    "sanMoves": [
      "f6",
      "d4",
      "exd4",
      "Nxd4",
      "c5",
      "Nb3"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-042",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 4",
    "side": "black",
    "fen": "r1bqkbnr/pppp2pp/2n5/1B2p3/4P3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    "moves": [
      "g8f6",
      "e1g1",
      "d7d6",
      "b1c3",
      "f8e7",
      "f1e1"
    ],
    "sanMoves": [
      "Nf6",
      "O-O",
      "d6",
      "Nc3",
      "Be7",
      "Re1"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-043",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 5",
    "side": "black",
    "fen": "r1bqkbnr/2pp1ppp/p1n5/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R b KQkq - 1 5",
    "moves": [
      "c6a5",
      "e1g1",
      "d7d6",
      "d2d4",
      "e5d4",
      "f3d4"
    ],
    "sanMoves": [
      "Na5",
      "O-O",
      "d6",
      "d4",
      "exd4",
      "Nxd4"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-044",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "white",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6",
    "moves": [
      "f1e1",
      "b7b5",
      "a4b3",
      "d7d6",
      "c2c3",
      "e8g8"
    ],
    "sanMoves": [
      "Re1",
      "b5",
      "Bb3",
      "d6",
      "c3",
      "O-O"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-045",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 6",
    "moves": [
      "b5c6",
      "d7c6",
      "d4e5",
      "d6f5",
      "d1d8",
      "e8d8"
    ],
    "sanMoves": [
      "Bxc6",
      "dxc6",
      "dxe5",
      "Nf5",
      "Qxd8+",
      "Kxd8"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-046",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    "moves": [
      "d2d4",
      "e5d4",
      "f3d4",
      "c6c5",
      "d4b3",
      "d8d1"
    ],
    "sanMoves": [
      "d4",
      "exd4",
      "Nxd4",
      "c5",
      "Nb3",
      "Qxd1"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-047",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 4",
    "side": "white",
    "fen": "r1bqkb1r/pppp2pp/2n2n2/1B2p3/4P3/5N2/PPP2PPP/RNBQK2R w KQkq - 1 6",
    "moves": [
      "e1g1",
      "d7d6",
      "b1c3",
      "f8e7",
      "f1e1",
      "e8g8"
    ],
    "sanMoves": [
      "O-O",
      "d6",
      "Nc3",
      "Be7",
      "Re1",
      "O-O"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-048",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 5",
    "side": "white",
    "fen": "r1bqkbnr/2pp1ppp/p7/np2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 2 6",
    "moves": [
      "e1g1",
      "d7d6",
      "d2d4",
      "e5d4",
      "f3d4",
      "c7c5"
    ],
    "sanMoves": [
      "O-O",
      "d6",
      "d4",
      "exd4",
      "Nxd4",
      "c5"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-049",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 1",
    "side": "black",
    "fen": "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 5 6",
    "moves": [
      "b7b5",
      "a4b3",
      "d7d6",
      "c2c3",
      "e8g8",
      "h2h3"
    ],
    "sanMoves": [
      "b5",
      "Bb3",
      "d6",
      "c3",
      "O-O",
      "h3"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-050",
    "opening": "Ruy López",
    "openingSlug": "ruy-lopez",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqkb1r/pppp1ppp/2Bn4/4p3/3P4/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
    "moves": [
      "d7c6",
      "d4e5",
      "d6f5",
      "d1d8",
      "e8d8",
      "b1c3"
    ],
    "sanMoves": [
      "dxc6",
      "dxe5",
      "Nf5",
      "Qxd8+",
      "Kxd8",
      "Nc3"
    ],
    "idea": "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    "commonMistake": "The pin on the c6-knight does not win the e5-pawn immediately.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-051",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    "moves": [
      "e7e6",
      "b1c3",
      "g8f6",
      "c1g5",
      "f8e7",
      "e2e3"
    ],
    "sanMoves": [
      "e6",
      "Nc3",
      "Nf6",
      "Bg5",
      "Be7",
      "e3"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-052",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 5",
    "side": "black",
    "fen": "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    "moves": [
      "e7e6",
      "g1f3",
      "d7d5",
      "b1c3",
      "f8e7",
      "c1g5"
    ],
    "sanMoves": [
      "e6",
      "Nf3",
      "d5",
      "Nc3",
      "Be7",
      "Bg5"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-053",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "b1c3",
      "g8f6",
      "c1g5",
      "f8e7",
      "e2e3",
      "e8g8"
    ],
    "sanMoves": [
      "Nc3",
      "Nf6",
      "Bg5",
      "Be7",
      "e3",
      "O-O"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-054",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "g1f3",
      "g8f6",
      "b1c3",
      "d5c4",
      "a2a4",
      "c8f5"
    ],
    "sanMoves": [
      "Nf3",
      "Nf6",
      "Nc3",
      "dxc4",
      "a4",
      "Bf5"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-055",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "e2e4",
      "e7e5",
      "g1f3",
      "e5d4",
      "f1c4",
      "b8c6"
    ],
    "sanMoves": [
      "e4",
      "e5",
      "Nf3",
      "exd4",
      "Bxc4",
      "Nc6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-056",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 5",
    "side": "white",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "g1f3",
      "d7d5",
      "b1c3",
      "f8e7",
      "c1g5",
      "e8g8"
    ],
    "sanMoves": [
      "Nf3",
      "d5",
      "Nc3",
      "Be7",
      "Bg5",
      "O-O"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-057",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "g8f6",
      "c1g5",
      "f8e7",
      "e2e3",
      "e8g8",
      "g1f3"
    ],
    "sanMoves": [
      "Nf6",
      "Bg5",
      "Be7",
      "e3",
      "O-O",
      "Nf3"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-058",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    "moves": [
      "g8f6",
      "b1c3",
      "d5c4",
      "a2a4",
      "c8f5",
      "e2e3"
    ],
    "sanMoves": [
      "Nf6",
      "Nc3",
      "dxc4",
      "a4",
      "Bf5",
      "e3"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-059",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "e7e5",
      "g1f3",
      "e5d4",
      "f1c4",
      "b8c6",
      "e1g1"
    ],
    "sanMoves": [
      "e5",
      "Nf3",
      "exd4",
      "Bxc4",
      "Nc6",
      "O-O"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-060",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 5",
    "side": "black",
    "fen": "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    "moves": [
      "d7d5",
      "b1c3",
      "f8e7",
      "c1g5",
      "e8g8",
      "e2e3"
    ],
    "sanMoves": [
      "d5",
      "Nc3",
      "Be7",
      "Bg5",
      "O-O",
      "e3"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-061",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "c1g5",
      "f8e7",
      "e2e3",
      "e8g8",
      "g1f3",
      "h7h6"
    ],
    "sanMoves": [
      "Bg5",
      "Be7",
      "e3",
      "O-O",
      "Nf3",
      "h6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-062",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    "moves": [
      "b1c3",
      "d5c4",
      "a2a4",
      "c8f5",
      "e2e3",
      "e7e6"
    ],
    "sanMoves": [
      "Nc3",
      "dxc4",
      "a4",
      "Bf5",
      "e3",
      "e6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-063",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    "moves": [
      "g1f3",
      "e5d4",
      "f1c4",
      "b8c6",
      "e1g1",
      "c8e6"
    ],
    "sanMoves": [
      "Nf3",
      "exd4",
      "Bxc4",
      "Nc6",
      "O-O",
      "Be6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-064",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 5",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    "moves": [
      "b1c3",
      "f8e7",
      "c1g5",
      "e8g8",
      "e2e3",
      "h7h6"
    ],
    "sanMoves": [
      "Nc3",
      "Be7",
      "Bg5",
      "O-O",
      "e3",
      "h6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-065",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
    "moves": [
      "f8e7",
      "e2e3",
      "e8g8",
      "g1f3",
      "h7h6",
      "g5h4"
    ],
    "sanMoves": [
      "Be7",
      "e3",
      "O-O",
      "Nf3",
      "h6",
      "Bh4"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-066",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
    "moves": [
      "d5c4",
      "a2a4",
      "c8f5",
      "e2e3",
      "e7e6",
      "f1c4"
    ],
    "sanMoves": [
      "dxc4",
      "a4",
      "Bf5",
      "e3",
      "e6",
      "Bxc4"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-067",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/8/4p3/2pPP3/5N2/PP3PPP/RNBQKB1R b KQkq - 1 4",
    "moves": [
      "e5d4",
      "f1c4",
      "b8c6",
      "e1g1",
      "c8e6",
      "c4e6"
    ],
    "sanMoves": [
      "exd4",
      "Bxc4",
      "Nc6",
      "O-O",
      "Be6",
      "Bxe6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-068",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "e6d5",
      "c1g5",
      "c7c6",
      "e2e3",
      "c8f5",
      "d1f3"
    ],
    "sanMoves": [
      "exd5",
      "Bg5",
      "c6",
      "e3",
      "Bf5",
      "Qf3"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-069",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 5",
    "side": "black",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 1 4",
    "moves": [
      "f8e7",
      "c1g5",
      "e8g8",
      "e2e3",
      "h7h6",
      "g5h4"
    ],
    "sanMoves": [
      "Be7",
      "Bg5",
      "O-O",
      "e3",
      "h6",
      "Bh4"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-070",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
    "moves": [
      "e2e3",
      "e8g8",
      "g1f3",
      "h7h6",
      "g5h4",
      "b7b6"
    ],
    "sanMoves": [
      "e3",
      "O-O",
      "Nf3",
      "h6",
      "Bh4",
      "b6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-071",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    "moves": [
      "a2a4",
      "c8f5",
      "e2e3",
      "e7e6",
      "f1c4",
      "f8b4"
    ],
    "sanMoves": [
      "a4",
      "Bf5",
      "e3",
      "e6",
      "Bxc4",
      "Bb4"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-072",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkbnr/ppp2ppp/8/8/2ppP3/5N2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    "moves": [
      "f1c4",
      "b8c6",
      "e1g1",
      "c8e6",
      "c4e6",
      "f7e6"
    ],
    "sanMoves": [
      "Bxc4",
      "Nc6",
      "O-O",
      "Be6",
      "Bxe6",
      "fxe6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-073",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
    "moves": [
      "c1g5",
      "c7c6",
      "e2e3",
      "c8f5",
      "d1f3",
      "f5g6"
    ],
    "sanMoves": [
      "Bg5",
      "c6",
      "e3",
      "Bf5",
      "Qf3",
      "Bg6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-074",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 5",
    "side": "white",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 5",
    "moves": [
      "c1g5",
      "e8g8",
      "e2e3",
      "h7h6",
      "g5h4",
      "b7b6"
    ],
    "sanMoves": [
      "Bg5",
      "O-O",
      "e3",
      "h6",
      "Bh4",
      "b6"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-075",
    "opening": "Queen's Gambit",
    "openingSlug": "queens-gambit",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 5",
    "moves": [
      "e8g8",
      "g1f3",
      "h7h6",
      "g5h4",
      "b7b6",
      "c4d5"
    ],
    "sanMoves": [
      "O-O",
      "Nf3",
      "h6",
      "Bh4",
      "b6",
      "cxd5"
    ],
    "idea": "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    "commonMistake": "Do not rush to recover the c4-pawn if development gives you more.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-076",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
    "moves": [
      "e7e6",
      "e2e3",
      "f8d6",
      "f4g3",
      "e8g8",
      "f1d3"
    ],
    "sanMoves": [
      "e6",
      "e3",
      "Bd6",
      "Bg3",
      "O-O",
      "Bd3"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-077",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
    "moves": [
      "f8g7",
      "e2e3",
      "e8g8",
      "f1e2",
      "d7d6",
      "h2h3"
    ],
    "sanMoves": [
      "Bg7",
      "e3",
      "O-O",
      "Be2",
      "d6",
      "h3"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-078",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkb1r/ppppp1pp/5n2/5p2/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
    "moves": [
      "e7e6",
      "e2e3",
      "b7b6",
      "f1d3",
      "c8b7",
      "b1d2"
    ],
    "sanMoves": [
      "e6",
      "e3",
      "b6",
      "Bd3",
      "Bb7",
      "Nbd2"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-079",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 0 4",
    "moves": [
      "e2e3",
      "f8d6",
      "f4g3",
      "e8g8",
      "f1d3",
      "c7c5"
    ],
    "sanMoves": [
      "e3",
      "Bd6",
      "Bg3",
      "O-O",
      "Bd3",
      "c5"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-080",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqk2r/ppppppbp/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 2 4",
    "moves": [
      "e2e3",
      "e8g8",
      "f1e2",
      "d7d6",
      "h2h3",
      "b8d7"
    ],
    "sanMoves": [
      "e3",
      "O-O",
      "Be2",
      "d6",
      "h3",
      "Nbd7"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-081",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 0 4",
    "moves": [
      "e2e3",
      "b8c6",
      "c2c3",
      "d8b6",
      "d1b3",
      "c5c4"
    ],
    "sanMoves": [
      "e3",
      "Nc6",
      "c3",
      "Qb6",
      "Qb3",
      "c4"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-082",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbqkb1r/pppp2pp/4pn2/5p2/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq - 0 4",
    "moves": [
      "e2e3",
      "b7b6",
      "f1d3",
      "c8b7",
      "b1d2",
      "f8e7"
    ],
    "sanMoves": [
      "e3",
      "b6",
      "Bd3",
      "Bb7",
      "Nbd2",
      "Be7"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-083",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3P1B2/4PN2/PPP2PPP/RN1QKB1R b KQkq - 0 4",
    "moves": [
      "f8d6",
      "f4g3",
      "e8g8",
      "f1d3",
      "c7c5",
      "c2c3"
    ],
    "sanMoves": [
      "Bd6",
      "Bg3",
      "O-O",
      "Bd3",
      "c5",
      "c3"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-084",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqk2r/ppppppbp/5np1/8/3P1B2/4PN2/PPP2PPP/RN1QKB1R b KQkq - 0 4",
    "moves": [
      "e8g8",
      "f1e2",
      "d7d6",
      "h2h3",
      "b8d7",
      "e1g1"
    ],
    "sanMoves": [
      "O-O",
      "Be2",
      "d6",
      "h3",
      "Nbd7",
      "O-O"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-085",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/4PN2/PPP2PPP/RN1QKB1R b KQkq - 0 4",
    "moves": [
      "b8c6",
      "c2c3",
      "d8b6",
      "d1b3",
      "c5c4",
      "b3b6"
    ],
    "sanMoves": [
      "Nc6",
      "c3",
      "Qb6",
      "Qb3",
      "c4",
      "Qxb6"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-086",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkb1r/pppp2pp/4pn2/5p2/3P1B2/4PN2/PPP2PPP/RN1QKB1R b KQkq - 0 4",
    "moves": [
      "b7b6",
      "f1d3",
      "c8b7",
      "b1d2",
      "f8e7",
      "e1g1"
    ],
    "sanMoves": [
      "b6",
      "Bd3",
      "Bb7",
      "Nbd2",
      "Be7",
      "O-O"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-087",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqk2r/ppp2ppp/3bpn2/3p4/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 1 5",
    "moves": [
      "f4g3",
      "e8g8",
      "f1d3",
      "c7c5",
      "c2c3",
      "b8c6"
    ],
    "sanMoves": [
      "Bg3",
      "O-O",
      "Bd3",
      "c5",
      "c3",
      "Nc6"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-088",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbq1rk1/ppppppbp/5np1/8/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQ - 1 5",
    "moves": [
      "f1e2",
      "d7d6",
      "h2h3",
      "b8d7",
      "e1g1",
      "d8e8"
    ],
    "sanMoves": [
      "Be2",
      "d6",
      "h3",
      "Nbd7",
      "O-O",
      "Qe8"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-089",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 1 5",
    "moves": [
      "c2c3",
      "d8b6",
      "d1b3",
      "c5c4",
      "b3b6",
      "a7b6"
    ],
    "sanMoves": [
      "c3",
      "Qb6",
      "Qb3",
      "c4",
      "Qxb6",
      "axb6"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-090",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbqkb1r/p1pp2pp/1p2pn2/5p2/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq - 0 5",
    "moves": [
      "f1d3",
      "c8b7",
      "b1d2",
      "f8e7",
      "e1g1",
      "e8g8"
    ],
    "sanMoves": [
      "Bd3",
      "Bb7",
      "Nbd2",
      "Be7",
      "O-O",
      "O-O"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-091",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqk2r/ppp2ppp/3bpn2/3p4/3P4/4PNB1/PPP2PPP/RN1QKB1R b KQkq - 2 5",
    "moves": [
      "e8g8",
      "f1d3",
      "c7c5",
      "c2c3",
      "b8c6",
      "b1d2"
    ],
    "sanMoves": [
      "O-O",
      "Bd3",
      "c5",
      "c3",
      "Nc6",
      "Nbd2"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-092",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbq1rk1/ppppppbp/5np1/8/3P1B2/4PN2/PPP1BPPP/RN1QK2R b KQ - 2 5",
    "moves": [
      "d7d6",
      "h2h3",
      "b8d7",
      "e1g1",
      "d8e8",
      "f4h2"
    ],
    "sanMoves": [
      "d6",
      "h3",
      "Nbd7",
      "O-O",
      "Qe8",
      "Bh2"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-093",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/2P1PN2/PP3PPP/RN1QKB1R b KQkq - 0 5",
    "moves": [
      "d8b6",
      "d1b3",
      "c5c4",
      "b3b6",
      "a7b6",
      "b1d2"
    ],
    "sanMoves": [
      "Qb6",
      "Qb3",
      "c4",
      "Qxb6",
      "axb6",
      "Nbd2"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-094",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkb1r/p1pp2pp/1p2pn2/5p2/3P1B2/3BPN2/PPP2PPP/RN1QK2R b KQkq - 1 5",
    "moves": [
      "c8b7",
      "b1d2",
      "f8e7",
      "e1g1",
      "e8g8",
      "c2c3"
    ],
    "sanMoves": [
      "Bb7",
      "Nbd2",
      "Be7",
      "O-O",
      "O-O",
      "c3"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-095",
    "opening": "London System",
    "openingSlug": "london-system",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbq1rk1/ppp2ppp/3bpn2/3p4/3P4/4PNB1/PPP2PPP/RN1QKB1R w KQ - 3 6",
    "moves": [
      "f1d3",
      "c7c5",
      "c2c3",
      "b8c6",
      "b1d2",
      "b7b6"
    ],
    "sanMoves": [
      "Bd3",
      "c5",
      "c3",
      "Nc6",
      "Nbd2",
      "b6"
    ],
    "idea": "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    "commonMistake": "The London setup is a structure, not a reason to play the same moves on autopilot.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-096",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    "moves": [
      "g1f3",
      "d7d6",
      "d2d4",
      "c5d4",
      "f3d4",
      "g8f6"
    ],
    "sanMoves": [
      "Nf3",
      "d6",
      "d4",
      "cxd4",
      "Nxd4",
      "Nf6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-097",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    "moves": [
      "d7d6",
      "d2d4",
      "c5d4",
      "f3d4",
      "g8f6",
      "b1c3"
    ],
    "sanMoves": [
      "d6",
      "d4",
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-098",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 5",
    "side": "black",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    "moves": [
      "b8c6",
      "f2f4",
      "g7g6",
      "g1f3",
      "f8g7",
      "f1b5"
    ],
    "sanMoves": [
      "Nc6",
      "f4",
      "g6",
      "Nf3",
      "Bg7",
      "Bb5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-099",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 6",
    "side": "black",
    "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    "moves": [
      "g8f6",
      "e4e5",
      "f6d5",
      "d2d4",
      "c5d4",
      "g1f3"
    ],
    "sanMoves": [
      "Nf6",
      "e5",
      "Nd5",
      "d4",
      "cxd4",
      "Nf3"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-100",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    "moves": [
      "d2d4",
      "c5d4",
      "f3d4",
      "g8f6",
      "b1c3",
      "a7a6"
    ],
    "sanMoves": [
      "d4",
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "a6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-101",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    "moves": [
      "d2d4",
      "c5d4",
      "f3d4",
      "g8f6",
      "b1c3",
      "e7e5"
    ],
    "sanMoves": [
      "d4",
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "e5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-102",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    "moves": [
      "d2d4",
      "c5d4",
      "f3d4",
      "b8c6",
      "b1c3",
      "d8c7"
    ],
    "sanMoves": [
      "d4",
      "cxd4",
      "Nxd4",
      "Nc6",
      "Nc3",
      "Qc7"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-103",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 5",
    "side": "white",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
    "moves": [
      "f2f4",
      "g7g6",
      "g1f3",
      "f8g7",
      "f1b5",
      "c6d4"
    ],
    "sanMoves": [
      "f4",
      "g6",
      "Nf3",
      "Bg7",
      "Bb5",
      "Nd4"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-104",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 6",
    "side": "white",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 3",
    "moves": [
      "e4e5",
      "f6d5",
      "d2d4",
      "c5d4",
      "g1f3",
      "b8c6"
    ],
    "sanMoves": [
      "e5",
      "Nd5",
      "d4",
      "cxd4",
      "Nf3",
      "Nc6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-105",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    "moves": [
      "c5d4",
      "f3d4",
      "g8f6",
      "b1c3",
      "a7a6",
      "c1e3"
    ],
    "sanMoves": [
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "a6",
      "Be3"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-106",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    "moves": [
      "c5d4",
      "f3d4",
      "g8f6",
      "b1c3",
      "e7e5",
      "d4b5"
    ],
    "sanMoves": [
      "cxd4",
      "Nxd4",
      "Nf6",
      "Nc3",
      "e5",
      "Ndb5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-107",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    "moves": [
      "c5d4",
      "f3d4",
      "b8c6",
      "b1c3",
      "d8c7",
      "c1e3"
    ],
    "sanMoves": [
      "cxd4",
      "Nxd4",
      "Nc6",
      "Nc3",
      "Qc7",
      "Be3"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-108",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 5",
    "side": "black",
    "fen": "r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    "moves": [
      "g7g6",
      "g1f3",
      "f8g7",
      "f1b5",
      "c6d4",
      "e1g1"
    ],
    "sanMoves": [
      "g6",
      "Nf3",
      "Bg7",
      "Bb5",
      "Nd4",
      "O-O"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-109",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 6",
    "side": "black",
    "fen": "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "f6d5",
      "d2d4",
      "c5d4",
      "g1f3",
      "b8c6",
      "c3d4"
    ],
    "sanMoves": [
      "Nd5",
      "d4",
      "cxd4",
      "Nf3",
      "Nc6",
      "cxd4"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-110",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    "moves": [
      "f3d4",
      "g8f6",
      "b1c3",
      "a7a6",
      "c1e3",
      "e7e5"
    ],
    "sanMoves": [
      "Nxd4",
      "Nf6",
      "Nc3",
      "a6",
      "Be3",
      "e5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-111",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    "moves": [
      "f3d4",
      "g8f6",
      "b1c3",
      "e7e5",
      "d4b5",
      "d7d6"
    ],
    "sanMoves": [
      "Nxd4",
      "Nf6",
      "Nc3",
      "e5",
      "Ndb5",
      "d6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-112",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    "moves": [
      "f3d4",
      "b8c6",
      "b1c3",
      "d8c7",
      "c1e3",
      "g8f6"
    ],
    "sanMoves": [
      "Nxd4",
      "Nc6",
      "Nc3",
      "Qc7",
      "Be3",
      "Nf6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-113",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 5",
    "side": "white",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
    "moves": [
      "g1f3",
      "f8g7",
      "f1b5",
      "c6d4",
      "e1g1",
      "d4b5"
    ],
    "sanMoves": [
      "Nf3",
      "Bg7",
      "Bb5",
      "Nd4",
      "O-O",
      "Nxb5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-114",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 6",
    "side": "white",
    "fen": "rnbqkb1r/pp1ppppp/8/2pnP3/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 4",
    "moves": [
      "d2d4",
      "c5d4",
      "g1f3",
      "b8c6",
      "c3d4",
      "d7d6"
    ],
    "sanMoves": [
      "d4",
      "cxd4",
      "Nf3",
      "Nc6",
      "cxd4",
      "d6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-115",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    "moves": [
      "g8f6",
      "b1c3",
      "a7a6",
      "c1e3",
      "e7e5",
      "d4b3"
    ],
    "sanMoves": [
      "Nf6",
      "Nc3",
      "a6",
      "Be3",
      "e5",
      "Nb3"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-116",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 2",
    "side": "black",
    "fen": "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    "moves": [
      "g8f6",
      "b1c3",
      "e7e5",
      "d4b5",
      "d7d6",
      "c1g5"
    ],
    "sanMoves": [
      "Nf6",
      "Nc3",
      "e5",
      "Ndb5",
      "d6",
      "Bg5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-117",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    "moves": [
      "b8c6",
      "b1c3",
      "d8c7",
      "c1e3",
      "g8f6",
      "d1d2"
    ],
    "sanMoves": [
      "Nc6",
      "Nc3",
      "Qc7",
      "Be3",
      "Nf6",
      "Qd2"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-118",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 5",
    "side": "black",
    "fen": "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
    "moves": [
      "f8g7",
      "f1b5",
      "c6d4",
      "e1g1",
      "d4b5",
      "c3b5"
    ],
    "sanMoves": [
      "Bg7",
      "Bb5",
      "Nd4",
      "O-O",
      "Nxb5",
      "Nxb5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-119",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 6",
    "side": "black",
    "fen": "rnbqkb1r/pp1ppppp/8/2pnP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
    "moves": [
      "c5d4",
      "g1f3",
      "b8c6",
      "c3d4",
      "d7d6",
      "f1c4"
    ],
    "sanMoves": [
      "cxd4",
      "Nf3",
      "Nc6",
      "cxd4",
      "d6",
      "Bc4"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-120",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    "moves": [
      "b1c3",
      "a7a6",
      "c1e3",
      "e7e5",
      "d4b3",
      "c8e6"
    ],
    "sanMoves": [
      "Nc3",
      "a6",
      "Be3",
      "e5",
      "Nb3",
      "Be6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-121",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    "moves": [
      "b1c3",
      "e7e5",
      "d4b5",
      "d7d6",
      "c1g5",
      "a7a6"
    ],
    "sanMoves": [
      "Nc3",
      "e5",
      "Ndb5",
      "d6",
      "Bg5",
      "a6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-122",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    "moves": [
      "b1c3",
      "d8c7",
      "c1e3",
      "g8f6",
      "d1d2",
      "f8b4"
    ],
    "sanMoves": [
      "Nc3",
      "Qc7",
      "Be3",
      "Nf6",
      "Qd2",
      "Bb4"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-123",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 5",
    "side": "white",
    "fen": "r1bqk1nr/pp1pppbp/2n3p1/2p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5",
    "moves": [
      "f1b5",
      "c6d4",
      "e1g1",
      "d4b5",
      "c3b5",
      "d7d6"
    ],
    "sanMoves": [
      "Bb5",
      "Nd4",
      "O-O",
      "Nxb5",
      "Nxb5",
      "d6"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-124",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 6",
    "side": "white",
    "fen": "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR w KQkq - 0 5",
    "moves": [
      "g1f3",
      "b8c6",
      "c3d4",
      "d7d6",
      "f1c4",
      "d6e5"
    ],
    "sanMoves": [
      "Nf3",
      "Nc6",
      "cxd4",
      "d6",
      "Bc4",
      "dxe5"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-125",
    "opening": "Sicilian Defense",
    "openingSlug": "sicilian-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
    "moves": [
      "a7a6",
      "c1e3",
      "e7e5",
      "d4b3",
      "c8e6",
      "f2f3"
    ],
    "sanMoves": [
      "a6",
      "Be3",
      "e5",
      "Nb3",
      "Be6",
      "f3"
    ],
    "idea": "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    "commonMistake": "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-126",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    "moves": [
      "d2d4",
      "d7d5",
      "b1c3",
      "g8f6",
      "e4e5",
      "f6d7"
    ],
    "sanMoves": [
      "d4",
      "d5",
      "Nc3",
      "Nf6",
      "e5",
      "Nfd7"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-127",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    "moves": [
      "d7d5",
      "b1c3",
      "g8f6",
      "e4e5",
      "f6d7",
      "f2f4"
    ],
    "sanMoves": [
      "d5",
      "Nc3",
      "Nf6",
      "e5",
      "Nfd7",
      "f4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-128",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "b1c3",
      "g8f6",
      "e4e5",
      "f6d7",
      "f2f4",
      "c7c5"
    ],
    "sanMoves": [
      "Nc3",
      "Nf6",
      "e5",
      "Nfd7",
      "f4",
      "c5"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-129",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "g8f6",
      "e4e5",
      "f6d7",
      "f2f4",
      "c7c5",
      "g1f3"
    ],
    "sanMoves": [
      "Nf6",
      "e5",
      "Nfd7",
      "f4",
      "c5",
      "Nf3"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-130",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "c7c5",
      "c2c3",
      "b8c6",
      "g1f3",
      "d8b6",
      "f1d3"
    ],
    "sanMoves": [
      "c5",
      "c3",
      "Nc6",
      "Nf3",
      "Qb6",
      "Bd3"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-131",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "g8f6",
      "e4e5",
      "f6d7",
      "f1d3",
      "c7c5",
      "c2c3"
    ],
    "sanMoves": [
      "Nf6",
      "e5",
      "Nfd7",
      "Bd3",
      "c5",
      "c3"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-132",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "e6d5",
      "g1f3",
      "g8f6",
      "f1d3",
      "f8d6",
      "e1g1"
    ],
    "sanMoves": [
      "exd5",
      "Nf3",
      "Nf6",
      "Bd3",
      "Bd6",
      "O-O"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-133",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "e4e5",
      "f6d7",
      "f2f4",
      "c7c5",
      "g1f3",
      "b8c6"
    ],
    "sanMoves": [
      "e5",
      "Nfd7",
      "f4",
      "c5",
      "Nf3",
      "Nc6"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-134",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    "moves": [
      "c2c3",
      "b8c6",
      "g1f3",
      "d8b6",
      "f1d3",
      "c5d4"
    ],
    "sanMoves": [
      "c3",
      "Nc6",
      "Nf3",
      "Qb6",
      "Bd3",
      "cxd4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-135",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "e4e5",
      "f6d7",
      "f1d3",
      "c7c5",
      "c2c3",
      "b8c6"
    ],
    "sanMoves": [
      "e5",
      "Nfd7",
      "Bd3",
      "c5",
      "c3",
      "Nc6"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-136",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    "moves": [
      "g1f3",
      "g8f6",
      "f1d3",
      "f8d6",
      "e1g1",
      "e8g8"
    ],
    "sanMoves": [
      "Nf3",
      "Nf6",
      "Bd3",
      "Bd6",
      "O-O",
      "O-O"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-137",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "f6d7",
      "f2f4",
      "c7c5",
      "g1f3",
      "b8c6",
      "c1e3"
    ],
    "sanMoves": [
      "Nfd7",
      "f4",
      "c5",
      "Nf3",
      "Nc6",
      "Be3"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-138",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4",
    "moves": [
      "b8c6",
      "g1f3",
      "d8b6",
      "f1d3",
      "c5d4",
      "c3d4"
    ],
    "sanMoves": [
      "Nc6",
      "Nf3",
      "Qb6",
      "Bd3",
      "cxd4",
      "cxd4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-139",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/8/PPPN1PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "f6d7",
      "f1d3",
      "c7c5",
      "c2c3",
      "b8c6",
      "g1e2"
    ],
    "sanMoves": [
      "Nfd7",
      "Bd3",
      "c5",
      "c3",
      "Nc6",
      "Ne2"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-140",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkbnr/ppp2ppp/8/3p4/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    "moves": [
      "g8f6",
      "f1d3",
      "f8d6",
      "e1g1",
      "e8g8",
      "c1g5"
    ],
    "sanMoves": [
      "Nf6",
      "Bd3",
      "Bd6",
      "O-O",
      "O-O",
      "Bg5"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-141",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    "moves": [
      "f2f4",
      "c7c5",
      "g1f3",
      "b8c6",
      "c1e3",
      "c5d4"
    ],
    "sanMoves": [
      "f4",
      "c5",
      "Nf3",
      "Nc6",
      "Be3",
      "cxd4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-142",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 2",
    "side": "white",
    "fen": "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq - 1 5",
    "moves": [
      "g1f3",
      "d8b6",
      "f1d3",
      "c5d4",
      "c3d4",
      "c8d7"
    ],
    "sanMoves": [
      "Nf3",
      "Qb6",
      "Bd3",
      "cxd4",
      "cxd4",
      "Bd7"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-143",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/8/PPPN1PPP/R1BQKBNR w KQkq - 1 5",
    "moves": [
      "f1d3",
      "c7c5",
      "c2c3",
      "b8c6",
      "g1e2",
      "c5d4"
    ],
    "sanMoves": [
      "Bd3",
      "c5",
      "c3",
      "Nc6",
      "Ne2",
      "cxd4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-144",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 5",
    "moves": [
      "f1d3",
      "f8d6",
      "e1g1",
      "e8g8",
      "c1g5",
      "c8g4"
    ],
    "sanMoves": [
      "Bd3",
      "Bd6",
      "O-O",
      "O-O",
      "Bg5",
      "Bg4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-145",
    "opening": "French Defense",
    "openingSlug": "french-defense",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 5",
    "moves": [
      "c7c5",
      "g1f3",
      "b8c6",
      "c1e3",
      "c5d4",
      "f3d4"
    ],
    "sanMoves": [
      "c5",
      "Nf3",
      "Nc6",
      "Be3",
      "cxd4",
      "Nxd4"
    ],
    "idea": "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    "commonMistake": "Do not leave the c8-bishop buried without preparing a pawn break.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-146",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    "moves": [
      "d2d4",
      "d7d5",
      "b1c3",
      "d5e4",
      "c3e4",
      "c8f5"
    ],
    "sanMoves": [
      "d4",
      "d5",
      "Nc3",
      "dxe4",
      "Nxe4",
      "Bf5"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-147",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    "moves": [
      "d7d5",
      "b1c3",
      "d5e4",
      "c3e4",
      "c8f5",
      "e4g3"
    ],
    "sanMoves": [
      "d5",
      "Nc3",
      "dxe4",
      "Nxe4",
      "Bf5",
      "Ng3"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-148",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "b1c3",
      "d5e4",
      "c3e4",
      "c8f5",
      "e4g3",
      "f5g6"
    ],
    "sanMoves": [
      "Nc3",
      "dxe4",
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-149",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "d5e4",
      "c3e4",
      "c8f5",
      "e4g3",
      "f5g6",
      "h2h4"
    ],
    "sanMoves": [
      "dxe4",
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6",
      "h4"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-150",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "c8f5",
      "g1f3",
      "e7e6",
      "f1e2",
      "c6c5",
      "c1e3"
    ],
    "sanMoves": [
      "Bf5",
      "Nf3",
      "e6",
      "Be2",
      "c5",
      "Be3"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-151",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "c6d5",
      "f1d3",
      "b8c6",
      "c2c3",
      "g8f6",
      "c1f4"
    ],
    "sanMoves": [
      "cxd5",
      "Bd3",
      "Nc6",
      "c3",
      "Nf6",
      "Bf4"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-152",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "d5e4",
      "d2e4",
      "c8f5",
      "e4g3",
      "f5g6",
      "g1e2"
    ],
    "sanMoves": [
      "dxe4",
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6",
      "N1e2"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-153",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    "moves": [
      "c3e4",
      "c8f5",
      "e4g3",
      "f5g6",
      "h2h4",
      "h7h6"
    ],
    "sanMoves": [
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6",
      "h4",
      "h6"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-154",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 2",
    "side": "white",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    "moves": [
      "g1f3",
      "e7e6",
      "f1e2",
      "c6c5",
      "c1e3",
      "c5d4"
    ],
    "sanMoves": [
      "Nf3",
      "e6",
      "Be2",
      "c5",
      "Be3",
      "cxd4"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-155",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    "moves": [
      "f1d3",
      "b8c6",
      "c2c3",
      "g8f6",
      "c1f4",
      "c8g4"
    ],
    "sanMoves": [
      "Bd3",
      "Nc6",
      "c3",
      "Nf6",
      "Bf4",
      "Bg4"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-156",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/3Pp3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 4",
    "moves": [
      "d2e4",
      "c8f5",
      "e4g3",
      "f5g6",
      "g1e2",
      "e7e6"
    ],
    "sanMoves": [
      "Nxe4",
      "Bf5",
      "Ng3",
      "Bg6",
      "N1e2",
      "e6"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-157",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "c8f5",
      "e4g3",
      "f5g6",
      "h2h4",
      "h7h6",
      "g1f3"
    ],
    "sanMoves": [
      "Bf5",
      "Ng3",
      "Bg6",
      "h4",
      "h6",
      "Nf3"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-158",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 2",
    "side": "black",
    "fen": "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 4",
    "moves": [
      "e7e6",
      "f1e2",
      "c6c5",
      "c1e3",
      "c5d4",
      "f3d4"
    ],
    "sanMoves": [
      "e6",
      "Be2",
      "c5",
      "Be3",
      "cxd4",
      "Nxd4"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-159",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkbnr/pp2pppp/8/3p4/3P4/3B4/PPP2PPP/RNBQK1NR b KQkq - 1 4",
    "moves": [
      "b8c6",
      "c2c3",
      "g8f6",
      "c1f4",
      "c8g4",
      "d1b3"
    ],
    "sanMoves": [
      "Nc6",
      "c3",
      "Nf6",
      "Bf4",
      "Bg4",
      "Qb3"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-160",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "white",
    "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    "moves": [
      "e4g3",
      "f5g6",
      "h2h4",
      "h7h6",
      "g1f3",
      "b8d7"
    ],
    "sanMoves": [
      "Ng3",
      "Bg6",
      "h4",
      "h6",
      "Nf3",
      "Nd7"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-161",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 2",
    "side": "white",
    "fen": "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    "moves": [
      "f1e2",
      "c6c5",
      "c1e3",
      "c5d4",
      "f3d4",
      "g8e7"
    ],
    "sanMoves": [
      "Be2",
      "c5",
      "Be3",
      "cxd4",
      "Nxd4",
      "Ne7"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-162",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 3",
    "side": "white",
    "fen": "r1bqkbnr/pp2pppp/2n5/3p4/3P4/3B4/PPP2PPP/RNBQK1NR w KQkq - 2 5",
    "moves": [
      "c2c3",
      "g8f6",
      "c1f4",
      "c8g4",
      "d1b3",
      "d8d7"
    ],
    "sanMoves": [
      "c3",
      "Nf6",
      "Bf4",
      "Bg4",
      "Qb3",
      "Qd7"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-163",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 1",
    "side": "black",
    "fen": "rn1qkbnr/pp2pppp/2p5/5b2/3P4/6N1/PPP2PPP/R1BQKBNR b KQkq - 2 5",
    "moves": [
      "f5g6",
      "h2h4",
      "h7h6",
      "g1f3",
      "b8d7",
      "h4h5"
    ],
    "sanMoves": [
      "Bg6",
      "h4",
      "h6",
      "Nf3",
      "Nd7",
      "h5"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-164",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 2",
    "side": "black",
    "fen": "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP1BPPP/RNBQK2R b KQkq - 1 5",
    "moves": [
      "c6c5",
      "c1e3",
      "c5d4",
      "f3d4",
      "g8e7",
      "e1g1"
    ],
    "sanMoves": [
      "c5",
      "Be3",
      "cxd4",
      "Nxd4",
      "Ne7",
      "O-O"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-165",
    "opening": "Caro-Kann Defense",
    "openingSlug": "caro-kann",
    "variation": "Line 3",
    "side": "black",
    "fen": "r1bqkbnr/pp2pppp/2n5/3p4/3P4/2PB4/PP3PPP/RNBQK1NR b KQkq - 0 5",
    "moves": [
      "g8f6",
      "c1f4",
      "c8g4",
      "d1b3",
      "d8d7",
      "b1d2"
    ],
    "sanMoves": [
      "Nf6",
      "Bf4",
      "Bg4",
      "Qb3",
      "Qd7",
      "Nd2"
    ],
    "idea": "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    "commonMistake": "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-166",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "b1c3",
      "f8g7",
      "e2e4",
      "d7d6",
      "g1f3",
      "e8g8"
    ],
    "sanMoves": [
      "Nc3",
      "Bg7",
      "e4",
      "d6",
      "Nf3",
      "O-O"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-167",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "f8g7",
      "e2e4",
      "d7d6",
      "g1f3",
      "e8g8",
      "f1e2"
    ],
    "sanMoves": [
      "Bg7",
      "e4",
      "d6",
      "Nf3",
      "O-O",
      "Be2"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-168",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqkb1r/pppppp1p/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    "moves": [
      "f8g7",
      "g2g3",
      "e8g8",
      "f1g2",
      "d7d6",
      "e1g1"
    ],
    "sanMoves": [
      "Bg7",
      "g3",
      "O-O",
      "Bg2",
      "d6",
      "O-O"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-169",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "e2e4",
      "d7d6",
      "g1f3",
      "e8g8",
      "f1e2",
      "e7e5"
    ],
    "sanMoves": [
      "e4",
      "d6",
      "Nf3",
      "O-O",
      "Be2",
      "e5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-170",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    "moves": [
      "g2g3",
      "e8g8",
      "f1g2",
      "d7d6",
      "e1g1",
      "b8d7"
    ],
    "sanMoves": [
      "g3",
      "O-O",
      "Bg2",
      "d6",
      "O-O",
      "Nbd7"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-171",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "d7d6",
      "g1f3",
      "e8g8",
      "f1e2",
      "e7e5",
      "e1g1"
    ],
    "sanMoves": [
      "d6",
      "Nf3",
      "O-O",
      "Be2",
      "e5",
      "O-O"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-172",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbqk2r/ppppppbp/5np1/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq - 0 4",
    "moves": [
      "e8g8",
      "f1g2",
      "d7d6",
      "e1g1",
      "b8d7",
      "b1c3"
    ],
    "sanMoves": [
      "O-O",
      "Bg2",
      "d6",
      "O-O",
      "Nbd7",
      "Nc3"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-173",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
    "moves": [
      "g1f3",
      "e8g8",
      "f1e2",
      "e7e5",
      "e1g1",
      "b8c6"
    ],
    "sanMoves": [
      "Nf3",
      "O-O",
      "Be2",
      "e5",
      "O-O",
      "Nc6"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-174",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbq1rk1/ppppppbp/5np1/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQ - 1 5",
    "moves": [
      "f1g2",
      "d7d6",
      "e1g1",
      "b8d7",
      "b1c3",
      "e7e5"
    ],
    "sanMoves": [
      "Bg2",
      "d6",
      "O-O",
      "Nbd7",
      "Nc3",
      "e5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-175",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 1 5",
    "moves": [
      "e8g8",
      "f1e2",
      "e7e5",
      "e1g1",
      "b8c6",
      "d4d5"
    ],
    "sanMoves": [
      "O-O",
      "Be2",
      "e5",
      "O-O",
      "Nc6",
      "d5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-176",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq - 0 5",
    "moves": [
      "e8g8",
      "c1e3",
      "e7e5",
      "d4d5",
      "c7c6",
      "d1d2"
    ],
    "sanMoves": [
      "O-O",
      "Be3",
      "e5",
      "d5",
      "c6",
      "Qd2"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-177",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbq1rk1/ppppppbp/5np1/8/2PP4/5NP1/PP2PPBP/RNBQK2R b KQ - 2 5",
    "moves": [
      "d7d6",
      "e1g1",
      "b8d7",
      "b1c3",
      "e7e5",
      "e2e4"
    ],
    "sanMoves": [
      "d6",
      "O-O",
      "Nbd7",
      "Nc3",
      "e5",
      "e4"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-178",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq - 1 5",
    "moves": [
      "e8g8",
      "c1g5",
      "b8a6",
      "d1d2",
      "e7e5",
      "d4d5"
    ],
    "sanMoves": [
      "O-O",
      "Bg5",
      "Na6",
      "Qd2",
      "e5",
      "d5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-179",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 2 6",
    "moves": [
      "f1e2",
      "e7e5",
      "e1g1",
      "b8c6",
      "d4d5",
      "c6e7"
    ],
    "sanMoves": [
      "Be2",
      "e5",
      "O-O",
      "Nc6",
      "d5",
      "Ne7"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-180",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR w KQ - 1 6",
    "moves": [
      "c1e3",
      "e7e5",
      "d4d5",
      "c7c6",
      "d1d2",
      "c6d5"
    ],
    "sanMoves": [
      "Be3",
      "e5",
      "d5",
      "c6",
      "Qd2",
      "cxd5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-181",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/5NP1/PP2PPBP/RNBQK2R w KQ - 0 6",
    "moves": [
      "e1g1",
      "b8d7",
      "b1c3",
      "e7e5",
      "e2e4",
      "c7c6"
    ],
    "sanMoves": [
      "O-O",
      "Nbd7",
      "Nc3",
      "e5",
      "e4",
      "c6"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-182",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR w KQ - 2 6",
    "moves": [
      "c1g5",
      "b8a6",
      "d1d2",
      "e7e5",
      "d4d5",
      "a6c5"
    ],
    "sanMoves": [
      "Bg5",
      "Na6",
      "Qd2",
      "e5",
      "d5",
      "Nc5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-183",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ - 3 6",
    "moves": [
      "e7e5",
      "e1g1",
      "b8c6",
      "d4d5",
      "c6e7",
      "f3e1"
    ],
    "sanMoves": [
      "e5",
      "O-O",
      "Nc6",
      "d5",
      "Ne7",
      "Ne1"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-184",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR b KQ - 2 6",
    "moves": [
      "e7e5",
      "d4d5",
      "c7c6",
      "d1d2",
      "c6d5",
      "c4d5"
    ],
    "sanMoves": [
      "e5",
      "d5",
      "c6",
      "Qd2",
      "cxd5",
      "cxd5"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-185",
    "opening": "King's Indian Defense",
    "openingSlug": "kings-indian",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnbq1rk1/ppp1ppbp/3p1np1/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b - - 1 6",
    "moves": [
      "b8d7",
      "b1c3",
      "e7e5",
      "e2e4",
      "c7c6",
      "h2h3"
    ],
    "sanMoves": [
      "Nbd7",
      "Nc3",
      "e5",
      "e4",
      "c6",
      "h3"
    ],
    "idea": "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    "commonMistake": "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-186",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    "moves": [
      "e4d5",
      "d8d5",
      "b1c3",
      "d5d8",
      "d2d4",
      "g8f6"
    ],
    "sanMoves": [
      "exd5",
      "Qxd5",
      "Nc3",
      "Qd8",
      "d4",
      "Nf6"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-187",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
    "moves": [
      "d8d5",
      "b1c3",
      "d5d8",
      "d2d4",
      "g8f6",
      "g1f3"
    ],
    "sanMoves": [
      "Qxd5",
      "Nc3",
      "Qd8",
      "d4",
      "Nf6",
      "Nf3"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-188",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
    "moves": [
      "b1c3",
      "d5d8",
      "d2d4",
      "g8f6",
      "g1f3",
      "c7c6"
    ],
    "sanMoves": [
      "Nc3",
      "Qd8",
      "d4",
      "Nf6",
      "Nf3",
      "c6"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-189",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
    "moves": [
      "d2d4",
      "f6d5",
      "g1f3",
      "g7g6",
      "c2c4",
      "d5b6"
    ],
    "sanMoves": [
      "d4",
      "Nxd5",
      "Nf3",
      "g6",
      "c4",
      "Nb6"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-190",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 3",
    "moves": [
      "d5d8",
      "d2d4",
      "g8f6",
      "g1f3",
      "c7c6",
      "f1c4"
    ],
    "sanMoves": [
      "Qd8",
      "d4",
      "Nf6",
      "Nf3",
      "c6",
      "Bc4"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-191",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkb1r/ppp1pppp/5n2/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    "moves": [
      "f6d5",
      "g1f3",
      "g7g6",
      "c2c4",
      "d5b6",
      "b1c3"
    ],
    "sanMoves": [
      "Nxd5",
      "Nf3",
      "g6",
      "c4",
      "Nb6",
      "Nc3"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-192",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkbnr/ppp1pppp/8/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "d2d4",
      "g8f6",
      "g1f3",
      "c7c6",
      "f1c4",
      "c8f5"
    ],
    "sanMoves": [
      "d4",
      "Nf6",
      "Nf3",
      "c6",
      "Bc4",
      "Bf5"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-193",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 2",
    "side": "white",
    "fen": "rnbqkb1r/ppp1pppp/8/3n4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    "moves": [
      "g1f3",
      "g7g6",
      "c2c4",
      "d5b6",
      "b1c3",
      "f8g7"
    ],
    "sanMoves": [
      "Nf3",
      "g6",
      "c4",
      "Nb6",
      "Nc3",
      "Bg7"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-194",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 3",
    "side": "white",
    "fen": "rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "d2d4",
      "g8f6",
      "g1f3",
      "c7c6",
      "f3e5",
      "c8e6"
    ],
    "sanMoves": [
      "d4",
      "Nf6",
      "Nf3",
      "c6",
      "Ne5",
      "Be6"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-195",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 4",
    "side": "white",
    "fen": "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
    "moves": [
      "d2d4",
      "g8f6",
      "g1f3",
      "c7c6",
      "f1c4",
      "c8f5"
    ],
    "sanMoves": [
      "d4",
      "Nf6",
      "Nf3",
      "c6",
      "Bc4",
      "Bf5"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-196",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "black",
    "fen": "rnbqkbnr/ppp1pppp/8/8/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "g8f6",
      "g1f3",
      "c7c6",
      "f1c4",
      "c8f5",
      "e1g1"
    ],
    "sanMoves": [
      "Nf6",
      "Nf3",
      "c6",
      "Bc4",
      "Bf5",
      "O-O"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-197",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 2",
    "side": "black",
    "fen": "rnbqkb1r/ppp1pppp/8/3n4/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    "moves": [
      "g7g6",
      "c2c4",
      "d5b6",
      "b1c3",
      "f8g7",
      "c1e3"
    ],
    "sanMoves": [
      "g6",
      "c4",
      "Nb6",
      "Nc3",
      "Bg7",
      "Be3"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-198",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 3",
    "side": "black",
    "fen": "rnb1kbnr/ppp1pppp/3q4/8/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "g8f6",
      "g1f3",
      "c7c6",
      "f3e5",
      "c8e6",
      "c1f4"
    ],
    "sanMoves": [
      "Nf6",
      "Nf3",
      "c6",
      "Ne5",
      "Be6",
      "Bf4"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-199",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 4",
    "side": "black",
    "fen": "rnb1kbnr/ppp1pppp/8/q7/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    "moves": [
      "g8f6",
      "g1f3",
      "c7c6",
      "f1c4",
      "c8f5",
      "c1d2"
    ],
    "sanMoves": [
      "Nf6",
      "Nf3",
      "c6",
      "Bc4",
      "Bf5",
      "Bd2"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  },
  {
    "id": "CG-OPEN-200",
    "opening": "Scandinavian Defense",
    "openingSlug": "scandinavian",
    "variation": "Line 1",
    "side": "white",
    "fen": "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    "moves": [
      "g1f3",
      "c7c6",
      "f1c4",
      "c8f5",
      "e1g1",
      "e7e6"
    ],
    "sanMoves": [
      "Nf3",
      "c6",
      "Bc4",
      "Bf5",
      "O-O",
      "e6"
    ],
    "idea": "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    "commonMistake": "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    "source": "ChessGrind Original"
  }
];
