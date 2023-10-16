import React from 'react';
export const PluralicBoard = ({ G, ctx, moves }) => {
    return (React.createElement("main", null,
        React.createElement("h1", null, "boardgame.io Typescript Demo"),
        React.createElement("div", { style: {
                display: 'grid',
                gridTemplate: 'repeat(8, 3rem) / repeat(3, 3rem)',
                gridGap: '0.3em',
            } }, G.tiles.map((tile, index) => (React.createElement("button", { key: index, onClick: () => { }, disabled: tile !== null }, tile.token))))));
};
