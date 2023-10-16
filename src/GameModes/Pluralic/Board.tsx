import React from 'react';
import { BoardProps } from 'boardgame.io/react';
import { Ctx } from 'boardgame.io';
import { PluralicState } from './Game';

type PluralicProps = BoardProps<PluralicState> & { columns: number, rows: number }

export const PluralicBoard = ({ G, ctx, moves, columns, rows }: PluralicProps) => {
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
        {G.tiles.map((tile, index) => (
          <button
            key={index}
            onClick={() => {console.log(index)}}
            disabled={tile !== null}
          >
            {tile.token}
          </button>
        ))}
      </div>
    </main>
  );
};
