export const Pluralic = {
    setup: () => ({ tiles: createBoard(8, 8) }),
    turn: {
        minMoves: 1,
        maxMoves: 1,
    },
    moves: {
        move: ({ G, playerID }, id, from, to) => {
            const options = [];
            console.log("moved to" + to);
        }
    },
};
function getOptions(board, row, col) {
    return [];
}
function createBoard(rows, cols) {
    const board = Array(rows * cols).fill({ token: null, movementPattern: null });
    return board;
}
function horseMovement() {
}
