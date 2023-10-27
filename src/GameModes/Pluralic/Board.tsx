import React from 'react';
import { BoardProps } from 'boardgame.io/react';
import { Ctx } from 'boardgame.io';
import { horseMovement } from '../../GameBoard/MovementsPatterns';
import { BaseBoardProps, Board, BoardState } from '../../GameBoard/Board';

export const PluralicBoard = (props: BoardProps<BoardState>) => {
  return (
    <Board
      rows={8} cols={8} {...props}    />
  );
};
