import React from 'react';
import { BoardProps } from 'boardgame.io/react';
import { Ctx } from 'boardgame.io';
import { PluralicState } from './Game';

import { horseMovement } from '../../GameBoard/MovementsPatterns';

type PluralicProps = BoardProps<PluralicState>;

export const PluralicBoard = ({ G, ctx, moves}: PluralicProps) => {

  return (
    <main>
      <h1>boardgame.io Typescript Demo</h1>

      <div
        style={{
          display: 'grid',
          gridTemplate: 'repeat(8, 3rem) / repeat(8, 3rem)',
          gridGap: '0.3em',
        }}
      >
        {G.gridG.map((row, rowNum) => (
          row.map((tile, colNum) => (
          <button
            key={rowNum + "," + colNum}
            onClick={() => {console.log(rowNum + "," + colNum); horseMovement({row: rowNum, col: colNum}, G.gridG)}}
          >
          {tile.tokenG}
          </button>

          )


          )
        ))}
      </div>
    </main>
  );
};
