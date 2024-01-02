
import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { Client } from 'boardgame.io/react';

import { GameDefinition, PlayingBoardComponent, doMove, PlayingBoardState } from '../Frontend/Components/PlayingBoard/PlayingBoard';
import React from 'react';
import { MoveDescription } from './types';
import { getAllPossibleMoves } from './BoardMovement';
import { isMoveInOptions } from './Utilities';


const gameWithSetupData = (setupData: GameDefinition): Game<PlayingBoardState> => ({
    setup: () => ({
        ...setupData.initialBoard,
        possibleMoves : []}

    ),

    turn: {
        minMoves: setupData.moveCount,
        maxMoves: setupData.moveCount,
        onBegin: ({ G, ctx }) => {
            return { ...G, possibleMoves: getAllPossibleMoves(G, ctx) };
        },
    },

    minPlayers: setupData.playerCount,
    maxPlayers: setupData.playerCount,

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

export const ClientComponent = (gameSetup: GameDefinition) => {
    const GameClient = Client({ game: gameWithSetupData(gameSetup), board: PlayingBoardComponent });


    return (
        <GameClient />
    )
}

