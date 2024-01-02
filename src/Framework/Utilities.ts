import { TokenGrid, TileGrid, MovementDescription } from "./types";

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

