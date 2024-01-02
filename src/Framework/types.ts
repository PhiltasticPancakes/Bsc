export type MoveDescription = {
    playerID: playerID;
    from: GridPosition;
    to: GridPosition;
}


export type Token = playerID
export type playerID = string;


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

export enum MovementDescription {
    Knight = "knight",
    Rook = "rook",
    Bishop = "bishop",
    King = "king",
    Queen = "queen",
    None = "none"
  }