import { Ctx, Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";
import { Client } from "boardgame.io/react";

import {
  PlayingBoardComponent,
  doMove,
  GameState,
} from "../Frontend/Components/PlayingBoard/PlayingBoard";
import React from "react";
import { GameDefinition, MoveDescription } from "./types";
import { getAllPossibleMoves } from "./MovementPatterns";
import { isMoveInOptions } from "./Utilities";
const hasTokenInZone = (G: GameState, ctx: Ctx) => {
  for(const pos of G.winZone) {
    const token = G.board.tokens[pos.row][pos.col];
    if(token && token.playerID === ctx.currentPlayer) {
      return true;
    }
  }
  return false;
}

const gameWithSetupData = (setupData: GameDefinition): Game<GameState> => ({
  setup: () => ({
    board: setupData.initialBoard,
    possibleMoves: [],
    gameOver: false,
    winZone: setupData.winZone,
    threatened: false
  }),

  turn: {
    minMoves: setupData.moveCount,
    maxMoves: setupData.moveCount,
    onBegin: ({ G, ctx }) => {
      return { ...G, possibleMoves: getAllPossibleMoves(G, ctx), threatened: !hasTokenInZone(G, ctx) };
    },
    onEnd: ({ G, ctx }) => {
      return { ...G, gameOver: (G.threatened && !hasTokenInZone(G, ctx))? ctx.currentPlayer : false  };
    },
  },

  endIf: ({ G, ctx }) => {
    if (G.gameOver) {
      return { winner: ctx.playOrderPos %2 };
    }
  },

  minPlayers: setupData.playerCount,
  maxPlayers: setupData.playerCount,

  moves: {
    move: ({ G }, moveDescription: MoveDescription) => {
      if (!isMoveInOptions(moveDescription, G.possibleMoves)) {
        return INVALID_MOVE;
      }
      doMove(moveDescription, G);
    },
  },
});



export const ClientComponent = (gameSetup: GameDefinition) => {
  const GameClient = Client({
    game: gameWithSetupData(gameSetup),
    board: PlayingBoardComponent,
  });

  return <GameClient />;
};
