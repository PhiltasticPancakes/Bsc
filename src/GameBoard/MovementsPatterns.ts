import { Ctx } from "boardgame.io";
import { BoardState, GridPosition, MoveDescription, PlayingBoard, Token } from "./PlayingBoard";

export type MovementPattern = (pos: GridPosition, grid: Token[][]) => GridPosition[];

export enum MovementDescription {
  Horse = "horse",
  Castle = "castle",
}

export function horseMovement(pos: GridPosition, tokens: Token[][]): GridPosition[] {
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
    option = { row: pos.row + offset.row, col: pos.col + offset.col };
    if(isWithinBounds(option, tokens))
    result.push(option);
  }

  return result;
}


export function castleMovement(pos: GridPosition, grid: Token[][]): GridPosition[] {
  const result: GridPosition[] = [];
  
  return result;
}

function isWithinBounds(pos: GridPosition, tokens: Token[][]): boolean {
  const rowCount: number = tokens.length;
  const colCount: number = tokens[0].length;
  return pos.row >= 0 && pos.row < rowCount && pos.col >= 0 && pos.col < colCount
}

export const getAllPossibleMoves = (G: BoardState, ctx: Ctx): MoveDescription[] => {
  const res: MoveDescription[] = [];



  return res;
}

export const getOptionsFromPos = ({tokens, movementPatterns}: PlayingBoard, gridPos: GridPosition): MoveDescription[] => {
  return [];
}