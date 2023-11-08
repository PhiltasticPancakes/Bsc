import { Ctx } from "boardgame.io";
import { Board, GridPosition } from "../Board";

export type MovementPattern = (pos: GridPosition, grid: Token[][]) => GridPosition[];

export type MoveDescription = {
  playerID: playerID;
  from: GridPosition;
  to: GridPosition;
}


export type Token = playerID
export type playerID = number;

export enum MovementDescription {
  Knight = "knight",
  Rook = "rook",
  Bishop = "bishop",
  King = "king",
  Queen = "queen",
  None = "none"
}

function knightMovement(pos: GridPosition, tokens: Token[][]): GridPosition[] {
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

  let result: GridPosition[] = [];

  let option: GridPosition;

  for (let offset of knightMoveOffsets) {
    option = { row: pos.row + offset.row, col: pos.col + offset.col };
    if (isWithinBounds(option, tokens)) {
      result.push(option);
    }
  }
  return result;
}



function castleMovement(pos: GridPosition, tokens: Token[][]): GridPosition[] {
  let result: GridPosition[] = [];
  for (let i = 1; isWithinBounds({ row: pos.row + i, col: pos.col }, tokens); i++) {
    let option = {row: pos.row + i, col: pos.col };
    result.push(option);
  }
  for (let i = 1; isWithinBounds({ row: pos.row - i, col: pos.col }, tokens); i++) {
    let option = {row: pos.row + i, col: pos.col };
    result.push(option);
  }
  for (let i = 1; isWithinBounds({ row: pos.row, col: pos.col + i}, tokens); i++) {
    let option = {row: pos.row + i, col: pos.col };
    result.push(option);
  }
  for (let i = 1; isWithinBounds({ row: pos.row, col: pos.col - i}, tokens); i++) {
    let option = {row: pos.row + i, col: pos.col };
    result.push(option);
  }

  return result;
}

const isWithinBounds = (pos: GridPosition, tokens: Token[][]): boolean => {
  let rowCount: number = tokens.length;
  let colCount: number = tokens[0].length;
  return pos.row >= 0 && pos.row < rowCount && pos.col >= 0 && pos.col < colCount
}

export const getAllPossibleMoves = (G: Board, ctx: Ctx): MoveDescription[] => {
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


const possibleMovesAtPos = ({ tokens, movementPatterns }: Board, gridPos: GridPosition): MoveDescription[] => {
  //Parses the string description to a function call to collect possible moves
  let parsedFunction: string = movementPatterns[gridPos.row][gridPos.col] + "Movement(" + JSON.stringify(gridPos) + "," + JSON.stringify(tokens) + ")";

  //Error prone implementation, use function to return correct movementpattern from string
  const reachablePositions: GridPosition[] = eval(parsedFunction) as GridPosition[];
  const possibleMoves: MoveDescription[] = reachablePositions.map(
    (option: GridPosition) => ({ playerID: tokens[gridPos.row][gridPos.col], from: gridPos, to:  option} as MoveDescription)
  );
  return possibleMoves;
}

export const isMoveInOptions = (move: MoveDescription, options: MoveDescription[]) => {
  return options.some(md => compareMoveOptions(md, move));
}

const compareMoveOptions = (move1: MoveDescription, move2: MoveDescription): boolean => {
  return (compareGridPositions(move1.from, move2.from) && compareGridPositions(move1.to, move2.to))
}

export const compareGridPositions = (pos1: GridPosition, pos2: GridPosition): boolean => {
  return pos1.row == pos2.row && pos1.col == pos2.col;
}