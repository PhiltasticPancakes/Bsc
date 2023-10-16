import React from 'react';
export function TicTacToeBoard(_a) {
    var ctx = _a.ctx, G = _a.G, moves = _a.moves;
    var onClick = function (id) { return moves.clickCell(id); };
    var winner = '';
    if (ctx.gameover) {
        winner =
            ctx.gameover.winner !== undefined ? (React.createElement("div", { id: "winner" },
                "Winner: ",
                ctx.gameover.winner)) : (React.createElement("div", { id: "winner" }, "Draw!"));
    }
    var cellStyle = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
    };
    var tbody = [];
    for (var i = 0; i < 3; i++) {
        var cells = [];
        var _loop_1 = function (j) {
            var id = 3 * i + j;
            cells.push(React.createElement("td", { key: id }, G.cells[id] ? (React.createElement("div", { style: cellStyle }, G.cells[id])) : (React.createElement("button", { style: cellStyle, onClick: function () { return onClick(id); } }))));
        };
        for (var j = 0; j < 3; j++) {
            _loop_1(j);
        }
        tbody.push(React.createElement("tr", { key: i }, cells));
    }
    return (React.createElement("div", null,
        React.createElement("table", { id: "board" },
            React.createElement("tbody", null, tbody)),
        winner));
}
//# sourceMappingURL=Board.js.map