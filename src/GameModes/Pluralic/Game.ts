import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { MoveDescription, MovementDescription, getAllPossibleMoves, isMoveInOptions } from '../../PlayingBoard/MovementsPatterns';
import { PlayingBoard, doMove } from '../../PlayingBoard/PlayingBoard';

export const Pluralic: Game<PlayingBoard> = {
    //Setup should fetch initial game state from the game database
    setup: () => ({
        tokens:
            [
                ["2", "2", "2", "2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2", "2", "2", "2"],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                ["1", "1", "1", "1", "1", "1", "1", "1"],
                ["1", "1", "1", "1", "1", "1", "1", "1"]
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
