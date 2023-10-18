import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { MovementPattern, horseMovement } from "./MovementsPatterns";
import React, { useState } from "react";
import { Tile } from "./Tile";

export type GridPosition = {
  row: number;
  col: number;
};
//JSON serializables gameobjects provided to G in boardgame.io framework, need to be seperate types with no functions.
export type BoardG = { gridG: GridG }
export type TileG = { tokenG: Token };
export type GridG = TileG[][];
export type Token = { playerID: number }

//Props extending BG base type
export type BaseBoardProps = BoardProps<BoardG> & {rows: number, cols: number};

//Actual game objects containing functionality
type Board = { grid: GridG };

export function getTileAtPosition(gridPos: GridPosition): TileG {
  return null;
}

//Called from tiles when clicked
const createMovementGrid = (): MovementPattern[][] => {
  const grid: MovementPattern[][] = Array.from(Array(8), () => new Array(8));
  for (let i = 0; i < 8; i++) {
    grid[i].fill(horseMovement);
  }
  return grid;
}

const movementGrid = createMovementGrid();

export const getOptionsFromPos = (gridPos: GridPosition): GridPosition[] => {
  return movementGrid[gridPos.row][gridPos.col].call(gridPos);
}

export const moveTo = (from: GridPosition, to: GridPosition, grid: GridG): void => {
    grid[to.row][to.col] = {tokenG: {playerID: grid[from.row][from.col].tokenG.playerID}};
    grid[from.row][from.col] = {tokenG: {playerID: null}};
}

export const Board = ({ G, ctx, moves }: BaseBoardProps) => {
  const [selected, setSelected] = useState<GridPosition>(null);


  function handleOnTileClicked(gridPos: GridPosition): void {
    console.log( gridPos.row+ ", " + gridPos.col + ' clicked');
    const clickedTile: TileG = getTileAtPos(gridPos);

    if(clickedTile.tokenG && clickedTile.tokenG.playerID-1 + "" == ctx.currentPlayer) {
      console.log("setting sel")
      setSelected(gridPos);
      return;
    };
    if(selected && clickedTile.tokenG?.playerID-1 + "" != ctx.currentPlayer) {
      console.log("move");
      moves.move(selected, gridPos); 
      setSelected(null);
      return;
    }

  }

  const isFieldSelected = (gridPos: GridPosition): boolean => {
    return (selected?.col==gridPos.col && selected?.row==gridPos.row);
  }

  const getTileAtPos = (pos: GridPosition): TileG => {
    return G.gridG[pos.row][pos.col];
  }



  return (
    <main>
      <h1>Pluralic</h1>
      <h1>{ctx.currentPlayer}</h1>

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
              isSelected={isFieldSelected({row: rowNum, col: colNum})}
              key={rowNum + "," + colNum}
              onClick={handleOnTileClicked}
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

