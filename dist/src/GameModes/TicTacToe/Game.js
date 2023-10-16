import { INVALID_MOVE } from 'boardgame.io/core';
export var TicTacToe = {
    setup: function () { return ({ cells: Array(9).fill(null) }); },
    turn: {
        minMoves: 1,
        maxMoves: 1,
    },
    moves: {
        clickCell: function (_a, id) {
            var G = _a.G, playerID = _a.playerID;
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = playerID;
        }
    },
    endIf: function (_a) {
        var G = _a.G, ctx = _a.ctx;
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        }
    },
};
// Return true if `cells` is in a winning configuration.
function IsVictory(cells) {
    var positions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    var isRowComplete = function (row) {
        var symbols = row.map(function (i) { return cells[i]; });
        return symbols.every(function (i) { return i !== null && i === symbols[0]; });
    };
    return positions.map(isRowComplete).some(function (i) { return i === true; });
}
// Return true if all `cells` are occupied.
function IsDraw(cells) {
    return cells.filter(function (c) { return c === null; }).length === 0;
}
//# sourceMappingURL=Game.js.map