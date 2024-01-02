import { TokenGrid, TileGrid, MovementDescription, MoveDescription, GridPosition } from "./types";

// This function is used to create an empty grid of tokens
export function createTokenGrid(rows: number, cols: number): TokenGrid {
    const grid: TokenGrid = Array.from(Array(rows), () => new Array(cols));
    for (let i = 0; i < rows; i++) {
        grid[i].fill(null);
    }
    return grid;
};

// This function is used to create an empty grid of tiles
export function createTileGrid(rows: number, cols: number): TileGrid {
    const grid: TileGrid = Array.from(Array(rows), () => new Array(cols));
    for (let i = 0; i < rows; i++) {
        grid[i].fill({ movementDescription: MovementDescription.None });
    }
    return grid;
};

export const isMoveInOptions = (move: MoveDescription, options: MoveDescription[]) => {
    return options.some(md => compareMoveOptions(md, move));
  }
  
  export const compareMoveOptions = (move1: MoveDescription, move2: MoveDescription): boolean => {
    return (compareGridPositions(move1.from, move2.from) && compareGridPositions(move1.to, move2.to))
  }
  
  export const compareGridPositions = (pos1: GridPosition, pos2: GridPosition): boolean => {
    return pos1.row == pos2.row && pos1.col == pos2.col;
  }