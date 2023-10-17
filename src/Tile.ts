import { MovementPattern } from "./GameBoard/MovementsPatterns";

export type Tile = {
    token: any;
    movementPattern: MovementPattern;
}