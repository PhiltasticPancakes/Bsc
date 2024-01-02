import { GameState } from "../Frontend/Components/PlayingBoard/PlayingBoard";
import { getAllTileTypes } from "./TileTypes";
import { TokenGrid, TileGrid, TileTypeName, MoveDescription, GridPosition, Tile, Token, TileType } from "./types";

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
    for (let j = 0; j < cols; j++){
      grid[i][j] = { gridPosition: { row: i, col: j }, tileTypeName: TileTypeName.Blank };
    }
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

export const setTileAtPosition = (G: GameState, pos: GridPosition, tile: Tile) => {
  G.board.tiles[pos.row][pos.col] = tile;
}

export const setTokenAtPosition = (G: GameState, pos: GridPosition, token: Token) => {
  G.board.tokens[pos.row][pos.col] = token;
}

export const getTokenAtPosition = (G: GameState, pos: GridPosition): Token | null => {
  return G.board.tokens[pos.row][pos.col];
}

export const getTileAtPosition = (G: GameState, pos: GridPosition): Tile => {
  return G.board.tiles[pos.row][pos.col];
}

export const getTileTypeByName = (name: TileTypeName): TileType => {
  const allTileTypes = getAllTileTypes();
  for(let i = 0; i < allTileTypes.length; i++) {
  }
  return getAllTileTypes().find(tt => tt.name == name)!;
}