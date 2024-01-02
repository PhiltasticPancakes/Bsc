import { PlayerID } from "boardgame.io";

export type MoveDescription = {
    playerID: PlayerID;
    from: GridPosition;
    to: GridPosition;
}


export type Token = {playerID: PlayerID}


export type Board = { tokens: TokenGrid, tiles: TileGrid }

export type GridPosition = {
    row: number;
    col: number;
};

export type BoardItem = Tile | Token;

export type Tile = {
    movementDescription: MovementDescription;
}

export type TileGrid = (Tile)[][];

export type TokenGrid = (Token | null)[][];

export type WinCondition = ZoneControl;

export type ZoneControl = { zone: GridPosition[] };

export type GameDefinition = {
    gameName: string;
    initialBoard: Board;
    playerCount: number;
    winCondition: WinCondition;
    moveCount?: number;
}

export type SaveImplementation = (gameName: string, game: GameDefinition) => void;

export enum MovementDescription {
    Knight = "knight",
    Rook = "rook",
    Bishop = "bishop",
    King = "king",
    Queen = "queen",
    None = "none"
  }