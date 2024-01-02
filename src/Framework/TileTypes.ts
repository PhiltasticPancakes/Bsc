import {
  kingMovement,
  queenMovement,
  rookMovement,
  bishopMovement,
  knightMovement,
  blankMovement,
} from "./MovementPatterns";
import { TileType, TileTypeName } from "./types";

export const kingTileType: TileType = {
  name: TileTypeName.King,
  description: "King",
  movementPattern: kingMovement,
  color: "blue",
};

export const queenTileType: TileType = {
  name: TileTypeName.Queen,
  description: "Queen",
  movementPattern: queenMovement,
  color: "purple",
};

export const rookTileType: TileType = {
  name: TileTypeName.Rook,
  description: "Rook",
  movementPattern: rookMovement,
  color: "red",
};

export const bishopTileType: TileType = {
  name: TileTypeName.Bishop,
  description: "Bishop",
  movementPattern: bishopMovement,
  color: "grey",
};

export const knightTileType: TileType = {
  name: TileTypeName.Knight,
  description: "Knight",
  movementPattern: knightMovement,
  color: "green",
};

export const blankTileType: TileType = {
  name: TileTypeName.Blank,
  description: "blank",
  movementPattern: blankMovement,
  color: "white",
};

export const getAllTileTypes = (): TileType[] => {
  return [
    kingTileType,
    queenTileType,
    rookTileType,
    bishopTileType,
    knightTileType,
    blankTileType,
  ];
};
