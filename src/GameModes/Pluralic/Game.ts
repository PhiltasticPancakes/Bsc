import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { horseMovement } from '../../GameBoard/MovementsPatterns';
import { BoardG, GridG, GridPosition, createBoardGrid, getOptionsFromPos } from '../../GameBoard/Board';
import { makeMove } from 'boardgame.io/dist/types/src/core/action-creators';
import { moveTo } from '../../GameBoard/Board';

export const Pluralic: Game<BoardG> = {
    setup: () => ({ gridG: createBoardGrid(8, 8) }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        move: ({ G, playerID }, from: GridPosition, to: GridPosition) => {
            moveTo(from, to, G.gridG);
//            const possibleMoves: GridPosition[] = getOptionsFromPos(from);
//            if (!possibleMoves.includes(to)) {
//                return INVALID_MOVE;
//            }
//            return;
        }
    },
};
