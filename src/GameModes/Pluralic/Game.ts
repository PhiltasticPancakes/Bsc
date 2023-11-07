import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { BoardState, doMove,  } from '../../GameBoard/PlayingBoard';
import { MoveDescription } from '../../GameBoard/PlayingBoard';
import { MovementDescription, getAllPossibleMoves, isMoveInOptions } from '../../GameBoard/MovementsPatterns';

export const Pluralic: Game<BoardState> = {
    //Setup should fetch initial game state from the game database
    setup: () => ({
        tokens:
            [
                [2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1]
            ],

        movementPatterns:
            [
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
                [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ]
                
            ],
        possibleMoves:
            []

    }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
        onBegin: ({G, ctx}) => {
            return {...G, possibleMoves: getAllPossibleMoves(G, ctx)};
        },
    },
    

    moves: {
        move: ({ G }, moveDescription: MoveDescription) => {
                        console.log(G.possibleMoves.length);
                        isMoveInOptions
                        if (!isMoveInOptions(moveDescription, G.possibleMoves)) {
                            return INVALID_MOVE;
                        }
                        doMove(moveDescription, G);
        }
    },
};
