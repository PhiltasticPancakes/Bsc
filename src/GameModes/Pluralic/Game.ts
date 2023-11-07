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
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ],
                [MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse, MovementDescription.Horse,MovementDescription.Horse ]
                
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
                        console.log("move called with: " + JSON.stringify(moveDescription));
                        console.log(G.possibleMoves.length);
                        isMoveInOptions
                        if (!isMoveInOptions(moveDescription, G.possibleMoves)) {
                            return INVALID_MOVE;
                        }
                        console.log("executing move: " + JSON.stringify(moveDescription));
                        doMove(moveDescription, G);
        }
    },
};
