import { GridPosition, TileState } from "./Board";

export type MovementPattern = (pos: GridPosition, grid: TileState[][]) => GridPosition[];

export function horseMovement(pos: GridPosition, grid: TileState[][]): GridPosition[] {
  const knightMoveOffsets = [
    { row: -2, col: -1 },
    { row: -2, col: 1 },
    { row: -1, col: -2 },
    { row: -1, col: 2 },
    { row: 1, col: -2 },
    { row: 1, col: 2 },
    { row: 2, col: -1 },
    { row: 2, col: 1 },
  ];

  const result: GridPosition[] = [];

  let option: GridPosition = null;

  for (const offset of knightMoveOffsets) {
    option = { row: pos.row + offset.row, col: pos.col + offset.row };
    if(isWithinBounds(option, grid))
    result.push({ row: pos.row + offset.row, col: pos.col + offset.row });
  }

  return result;
}


export function castleMovement(pos: GridPosition, grid: TileState[][]): GridPosition[] {
  const result: GridPosition[] = [];
  
  

  return result;
}



function isWithinBounds(pos: GridPosition, grid: TileState[][]): boolean {
  const rowCount: number = grid.length;
  const colCount: number = grid[0].length;
  return pos.row >= 0 && pos.row < rowCount && pos.col >= 0 && pos.col < colCount
}