
import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/react';

import { PlayingBoard, PlayingBoardComponent, doMove } from './PlayingBoard/PlayingBoard';
import React from 'react';
import { MoveDescription, MovementDescription, getAllPossibleMoves, isMoveInOptions } from './PlayingBoard/MovementsPatterns';


const pluralicSetupData = ({
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

    tiles:
        [
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight]

        ],
    possibleMoves:
        []

});

const gameWithSetupData = (setupData: PlayingBoard): Game<PlayingBoard> => ({
    setup: () => (
        setupData
    ),

    turn: {
        minMoves: 1,
        maxMoves: 1,
        onBegin: ({ G, ctx }) => {
            return { ...G, possibleMoves: getAllPossibleMoves(G, ctx) };
        },
    },

    moves: {
        move: ({ G }, moveDescription: MoveDescription) => {
            console.log(G.possibleMoves.length);
            if (!isMoveInOptions(moveDescription, G.possibleMoves)) {
                return INVALID_MOVE;
            }
            doMove(moveDescription, G);
        }
    },
});

const makeGame = (setup: PlayingBoard) => {

}

const GameClient = Client({ game: gameWithSetupData(pluralicSetupData), board: PlayingBoardComponent });


export const ClientComponent = () => {
    return (
        <GameClient />
    )
}

