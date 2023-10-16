import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

interface Tile {
    token: any;
    movementPattern: (board: PluralicState, row: number, col: number) => Tile[];
}


interface Position {
    x: number;
    y: number;
}

export type PluralicState = {
    tiles: Tile[];
}

export const Pluralic: Game<PluralicState> = {
    setup: () => ({ tiles: createBoard(8,8) }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    moves: {
        move: ({ G, playerID }: any, id: any, from: any, to: string) => {
            const options: Tile[] = [];
            console.log("moved to" + to);
        }
    },
};


function getOptions(board: Tile[], row: number, col: number) : Tile[] {
    return [];
}

function createBoard(rows: number, cols: number): Tile[] {
    const board: Tile[] = Array(rows*cols).fill({token: null, movementPattern: null});

    return board;
}

function horseMovement() {
    
}