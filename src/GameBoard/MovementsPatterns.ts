import { Ctx } from "boardgame.io";
import { BoardState, GridPosition, MoveDescription, PlayingBoard, Token, playerID } from "./PlayingBoard";

export type MovementPattern = (pos: GridPosition, grid: Token[][]) => GridPosition[];

export enum MovementDescription {
  Horse = "horse",
  Castle = "castle",
  Bishop = "bishop",
  King = "king",
  Queen = "queen"
}

function horseMovement(pos: GridPosition, tokens: Token[][]): MoveDescription[] {
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

  let result: MoveDescription[] = [];

  let option: GridPosition;

  for (let offset of knightMoveOffsets) {
    option = { row: pos.row + offset.row, col: pos.col + offset.col };
    if (isWithinBounds(option, tokens)) {
      result.push({ playerID: tokens[pos.row][pos.col] as playerID, from: pos, to: option });
    }
  }
  return result;
}


function castleMovement(pos: GridPosition, tokens: Token[][]): MoveDescription[] {
  let result: MoveDescription[] = [];

  return result;
}

function isWithinBounds(pos: GridPosition, tokens: Token[][]): boolean {
  let rowCount: number = tokens.length;
  let colCount: number = tokens[0].length;
  return pos.row >= 0 && pos.row < rowCount && pos.col >= 0 && pos.col < colCount
}

export const getAllPossibleMoves = (G: BoardState, ctx: Ctx): MoveDescription[] => {
  let rowCount: number = G.tokens.length;
  let colCount: number = G.tokens[0].length;
  let optionsAtPos: MoveDescription[] = []

  let pos: GridPosition;

  const allPossibleMoves: MoveDescription[] = [];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      pos = { row: i, col: j };
      optionsAtPos = possibleMovesAtPos(G, pos);
      allPossibleMoves.push(...optionsAtPos);
    }
  }

  return allPossibleMoves;
}


const possibleMovesAtPos = ({ tokens, movementPatterns }: PlayingBoard, gridPos: GridPosition): MoveDescription[] => {
  //Parses the string description to a function call to collect possible moves
  let parsedFunction: string = movementPatterns[gridPos.row][gridPos.col] + "Movement(" + JSON.stringify(gridPos) + "," + JSON.stringify(tokens) + ")";
  const reachablePositions: MoveDescription[] = eval(parsedFunction);
  return reachablePositions;
}

export const isMoveInOptions = (move: MoveDescription, options: MoveDescription[]) => {
  return options.some(md => compareMoveOptions(md, move));
}

const compareMoveOptions = (move1: MoveDescription, move2: MoveDescription): boolean => {
  return (compareGridPositions(move1.from, move2.from) && compareGridPositions(move1.to, move2.to))
}

const compareGridPositions = (pos1: GridPosition, pos2: GridPosition): boolean => {
  return pos1.row == pos2.row && pos1.col == pos2.col;
}