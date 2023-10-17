import { MovementPattern } from "./MovementsPatterns";

export type GridPosition = {
    row: number;
    col: number;
};
//JSON serializables provided to G in boardgame.io framework, need to be seperate types with no functions.
export type BoardG = { gridG: GridG }
export type TileG = { tokenG: Token };
export type GridG = TileG[][];
export type Token = { playerID: number }

type Tile = TileG & {movementPattern: MovementPattern};
type Grid = Tile[][];
type Board = {grid: Grid};


export function getTileAtPosition(pos: GridPosition): Tile {
    return null;
}