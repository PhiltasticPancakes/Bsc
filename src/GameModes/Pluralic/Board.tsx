import React from 'react';
import { BoardProps } from 'boardgame.io/react';
import { Ctx } from 'boardgame.io';
import { horseMovement } from '../../GameBoard/MovementsPatterns';
import { BaseBoardProps, Board, BoardG, onTileClicked } from '../../GameBoard/Board';

export const PluralicBoard = (props: BoardProps<BoardG>) => {
  return (
    <Board
      rows={8} cols={8} {...props}    />
  );
};
