export var Pluralic = {
    setup: function () { return ({ tiles: createBoard(8, 8) }); },
    turn: {
        minMoves: 1,
        maxMoves: 1,
    },
    moves: {
        move: function (_a, id, from, to) {
            var G = _a.G, playerID = _a.playerID;
            var options = [];
            console.log("moved to" + to);
        }
    },
};
function getOptions(board, row, col) {
    return [];
}
function createBoard(rows, cols) {
    var board = Array(rows * cols).fill({ token: null, movementPattern: null });
    return board;
}
function horseMovement() {
}
//# sourceMappingURL=Game.js.map