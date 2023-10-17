import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { horseMovement } from '../../GameBoard/MovementsPatterns';
import { BoardG, GridG, GridPosition, getTileAtPosition } from '../../GameBoard/Board';
import { makeMove } from 'boardgame.io/dist/types/src/core/action-creators';

export type PluralicState = BoardG

export const Pluralic: Game<PluralicState> = {
    setup: () => ({ gridG: createBoardGrid(8,8) }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        move: ({ G, playerID }, from: GridPosition, to: GridPosition) => {
            const possibleMoves: GridPosition[] = getTileAtPosition(from).movementPattern(from, G.gridG);
            if(!possibleMoves.includes(to)) {
                return INVALID_MOVE;
            }
            return;
        }
    },
};

function createBoardGrid(rows: number, cols: number): GridG {
    const grid: GridG = Array.from(Array(rows), () => new Array(cols));
    for(let i = 0; i<rows; i++) {
        grid[i].fill({tokenG: null})
    }
    return grid;
};
