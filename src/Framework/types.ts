

import { PlayerID } from "boardgame.io";
import { GameState } from "../Frontend/Components/PlayingBoard/PlayingBoard";

/**
 * Represents the description of a move.
 */
export type MoveDescription = {
    playerID: PlayerID;
    from: GridPosition;
    to: GridPosition;
}

/**
 * Represents a token.
 */
export type Token = { playerID: PlayerID }

/**
 * Represents the board.
 */
export type Board = { tokens: TokenGrid, tiles: TileGrid }

/**
 * Represents a position on the grid.
 */
export type GridPosition = {
    row: number;
    col: number;
};

/**
 * Represents an item on the board.
 */
export type BoardItem = Tile | Token;

/**
 * Represents a tile on the board.
 */
export type Tile = {
    movementDescription: MovementDescription;
}

/**
 * Represents a grid of tiles.
 */
export type TileGrid = Tile[][];

/**
 * Represents a grid of tokens.
 */
export type TokenGrid = (Token | null)[][];

/**
 * Represents a win condition based on zone control.
 */
export type WinCondition = {description: string, check: (gameState: GameState ) => boolean};



/**
 * Represents a zone control win condition.
 */
export type ZoneControl = WinCondition & { zone: GridPosition[] };

/**
 * Represents the definition of a game mode.
 */
export type GameDefinition = {
    gameName: string;
    initialBoard: Board;
    playerCount: number;
    winCondition: WinCondition;
    moveCount?: number;
}

/**
 * Interface for saving functionality.
 */
export type SaveImplementation = (gameName: string, game: GameDefinition) => void;

/**
 * There are the valid movement descriptions, these are used to determine how a token can move depending on the tile it is on.
 */
export enum MovementDescription {
    Knight = "knight",
    Rook = "rook",
    Bishop = "bishop",
    King = "king",
    Queen = "queen",
    None = "none"
}
