import React from 'react';
import { BoardProps } from 'boardgame.io/react';
import { Ctx } from 'boardgame.io';
import { PluralicState } from './Game';

type PluralicProps = BoardProps<PluralicState>;

export const PluralicBoard = ({ G, ctx, moves}: PluralicProps) => {
  return (
    <main>
      <h1>boardgame.io Typescript Demo</h1>

      <div
        style={{
          display: 'grid',
          gridTemplate: 'repeat(8, 3rem) / repeat(15, 3rem)',
          gridGap: '0.3em',
        }}
      >
        {G.tiles.map((tile, index) => (
          <button
            key={index}
            onClick={() => {console.log(index)}}
          >
            {tile.token}
          </button>
        ))}
      </div>
    </main>
  );
};
