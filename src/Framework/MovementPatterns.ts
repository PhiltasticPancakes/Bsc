import { Ctx } from "boardgame.io";
import { GridPosition, Token, Board, MoveDescription, MovementPattern, TileType, Tile, TokenGrid } from "./types";
import { GameState } from "../Frontend/Components/PlayingBoard/PlayingBoard";
import { getTileAtPosition, getTileTypeByName, getTokenAtPosition } from "./Utilities";

export const knightMovement: MovementPattern = (pos, {board}) =>  {
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
    if (isWithinBounds(option, board.tokens)) {
      result.push(option);
    }
  }
  return result;
}

export const kingMovement: MovementPattern = (pos, {board}) => {
  const kingMoveOffsets = [
    { row: -1, col: -1 },
    { row: -1, col: 1 },
    { row: -1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: -1 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: 0, col: 1 },
  ];

  let result: GridPosition[] = [];

  let option: GridPosition;

  for (let offset of kingMoveOffsets) {
    option = { row: pos.row + offset.row, col: pos.col + offset.col };
    if (isWithinBounds(option, board.tokens)) {
      result.push(option);
    }
  }
  return result;
}


export const bishopMovement: MovementPattern = (pos, {board}) =>  {
  let result: GridPosition[] = [];
  let i, j;
  for (i = 1, j = 1; isWithinBounds({ row: pos.row + i, col: pos.col + j }, board.tokens); i++, j++) {
    let option = {row: pos.row + i, col: pos.col +i };
    result.push(option);
  }
  for (i = 1, j = 1; isWithinBounds({ row: pos.row - i, col: pos.col - j }, board.tokens); i++, j++) {
    let option = {row: pos.row - i, col: pos.col -j };
    result.push(option);
  }
  for (i = 1, j = 1; isWithinBounds({ row: pos.row + i, col: pos.col - j }, board.tokens); i++, j++) {
    let option = {row: pos.row + i, col: pos.col - j};
    result.push(option);
  }
  for (i = 1, j = 1; isWithinBounds({ row: pos.row - i, col: pos.col + j }, board.tokens); i++, j++) {
    let option = {row: pos.row - i, col: pos.col + j };
    result.push(option);
  }

  return result;
}

export const rookMovement: MovementPattern = (pos, {board}) =>  {
  let result: GridPosition[] = [];
  for (let i = 1; isWithinBounds({ row: pos.row + i, col: pos.col }, board.tokens); i++) {
    let option = {row: pos.row + i, col: pos.col };
    result.push(option);
  }
  for (let i = 1; isWithinBounds({ row: pos.row - i, col: pos.col }, board.tokens); i++) {
    let option = {row: pos.row - i, col: pos.col };
    result.push(option);
  }
  for (let i = 1; isWithinBounds({ row: pos.row, col: pos.col + i}, board.tokens); i++) {
    let option = {row: pos.row, col: pos.col + i };
    result.push(option);
  }
  for (let i = 1; isWithinBounds({ row: pos.row, col: pos.col - i}, board.tokens); i++) {
    let option = {row: pos.row, col: pos.col -i};
    result.push(option);
  }

  return result;
}

export const queenMovement: MovementPattern = (pos, tokens) =>  {
  return [...rookMovement(pos, tokens), ...bishopMovement(pos, tokens)]
}

export const blankMovement: MovementPattern = (pos, tokens) => {
  return [];
}

const isWithinBounds = (pos: GridPosition, tokens: TokenGrid): boolean => {
  let rowCount: number = tokens.length;
  let colCount: number = tokens[0].length;
  return pos.row >= 0 && pos.row < rowCount && pos.col >= 0 && pos.col < colCount
}

export const getAllPossibleMoves = (G: GameState, ctx: Ctx): MoveDescription[] => {
  let rowCount: number = G.board.tokens.length;
  let colCount: number = G.board.tokens[0].length;
  let optionsAtPos: MoveDescription[] = [];

  let pos: GridPosition;

  const allPossibleMoves: MoveDescription[] = [];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if(!G.board.tokens[i][j] || G.board.tokens[i][j]?.playerID != ctx.currentPlayer ) {
        continue;
      }
      pos = { row: i, col: j };
      optionsAtPos = possibleMovesAtPos(G, ctx, pos);
      allPossibleMoves.push(...optionsAtPos);
    }
  }

  return allPossibleMoves;
}


const possibleMovesAtPos = (G: GameState, ctx: Ctx, gridPos: GridPosition): MoveDescription[] => {
  const tile: Tile = getTileAtPosition(G, gridPos);
  const tileTemplate: TileType = getTileTypeByName(tile.tileTypeName);

  const reachablePositions: GridPosition[] = tileTemplate.movementPattern(gridPos, G);

  const possibleMoves: MoveDescription[] = reachablePositions.map(
    (option: GridPosition) => ({ playerID: ctx.currentPlayer, from: gridPos, to:  option} as MoveDescription)
  );
  return possibleMoves;
}

 