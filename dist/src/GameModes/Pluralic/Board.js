import React from 'react';
export var PluralicBoard = function (_a) {
    var G = _a.G, ctx = _a.ctx, moves = _a.moves;
    return (React.createElement("main", null,
        React.createElement("h1", null, "boardgame.io Typescript Demo"),
        React.createElement("div", { style: {
                display: 'grid',
                gridTemplate: 'repeat(8, 3rem) / repeat(8, 3rem)',
                gridGap: '0.3em',
            } }, G.tiles.map(function (tile, index) { return (React.createElement("button", { key: index, onClick: function () { console.log(index); } }, tile.token)); }))));
};
//# sourceMappingURL=Board.js.map