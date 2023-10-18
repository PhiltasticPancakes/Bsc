import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { MovementPattern, horseMovement } from "./MovementsPatterns";
import React, { useState } from "react";
import { Tile } from "./Tile";

export type GridPosition = {
  row: number;
  col: number;
};
//JSON serializables provided to G in boardgame.io framework, need to be seperate types with no functions.
export type BoardG = { gridG: GridG }
export type TileG = { tokenG: Token };
export type GridG = TileG[][];
export type Token = { playerID: number }

//Props extending BG base type
export type BaseBoardProps = BoardProps<BoardG> & {rows: number, cols: number};

//Actual game objects containing functionality
type Tile = TileG & { movementPattern: MovementPattern };
type Grid = Tile[][];
type Board = { grid: Grid };



export function getTileAtPosition(tile: GridPosition): Tile {
  return null;
}

//Called from tiles when clicked
export function onTileClicked(gridPos: GridPosition): void {
  console.log( gridPos.row+ ", " + gridPos.col);
}

export const Board = ({ G, ctx, moves }: BaseBoardProps) => {
  const [selected, setSelected] = useState(null);
  const [boardState, setBoardState] = useState(G.gridG);
  

  return (
    <main>
      <h1>Pluralic</h1>

      <div
        style={{
          display: 'grid',
          gridTemplate: 'repeat(8, 3rem) / repeat(8, 3rem)',
          gridGap: '0.3em',
        }}
      >

        {G.gridG.map((row, rowNum) => (
          row.map((tileG, colNum) => (
            <Tile
              key={rowNum + "," + colNum}
              gridPos={{row: rowNum, col: colNum}}
              tile={tileG}
            />
          )
          )
        ))}
      </div>
    </main>
  );
};


export function createBoardGrid(rows: number, cols: number): GridG {
  const grid: GridG = Array.from(Array(rows), () => new Array(cols));
  for (let i = 0; i < rows; i++) {
    if (i <= 1) {
      grid[i].fill({ tokenG: { playerID: 2 } })
    } else if (i >= rows - 2) {
      grid[i].fill({ tokenG: { playerID: 1 } })
    } else {
      grid[i].fill({ tokenG: null })
    }
  }


  return grid;
};
