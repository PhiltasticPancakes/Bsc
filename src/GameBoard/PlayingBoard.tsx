import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { MovementDescription} from "./MovementsPatterns";
import React, { useState } from "react";
import { Tile } from "./Tile";

export type GridPosition = {
  row: number;
  col: number;
};

export type MoveDescription = {
  from: GridPosition;
  to: GridPosition;
}

export type PlayingBoard = {tokens: Token[][], movementPatterns: MovementDescription[][]}

//JSON serializables gameobjects provided to G in boardgame.io framework, need to be seperate types with no functions.
export type BoardState = PlayingBoard & { possibleMoves: MoveDescription[]}
export type Token = playerID
type playerID = number;

//Props extending BG base type
export type BaseBoardProps = BoardProps<BoardState>;

//Component
export const PlayingBoardComponent = ({ G, ctx, moves }: BaseBoardProps) => {
  const [selected, setSelected] = useState<GridPosition>(null);


  function handleOnTileClicked(gridPos: GridPosition): void {
    const clickedTile: Token = getTileAtPos(gridPos);

    if(clickedTile-1 + "" == ctx.currentPlayer) {
      setSelected(gridPos);
      return;
    };
    if(selected && clickedTile-1 + "" != ctx.currentPlayer) {
      moves.move(selected, gridPos); 
      setSelected(null);
      return;
    }

  }

  const isFieldSelected = (gridPos: GridPosition): boolean => {
    return (selected?.col==gridPos.col && selected?.row==gridPos.row);
  }

  const getTileAtPos = (pos: GridPosition): Token => {
    return G.tokens[pos.row][pos.col];
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

        {G.tokens.map((row, rowNum) => (
          row.map((tileG, colNum) => (
            
            <Tile
              highlight={isFieldSelected({row: rowNum, col: colNum})}
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

export function createTilesGrid(rows: number, cols: number): Token[][] {
  const grid: Token[][] = Array.from(Array(rows), () => new Array(cols));
  for (let i = 0; i < rows; i++) {
    grid[i].fill(null);
  }
  return grid;
};

export function createMovementGrid(rows: number, cols: number): MovementDescription[][] {
  const grid: MovementDescription[][] = Array.from(Array(rows), () => new Array(cols));
  for (let i = 0; i < rows; i++) {
    grid[i].fill(null);
  }
  return grid;
};

export function getTileAtPosition(gridPos: GridPosition): Token {
  return null;
}


export const doMove = ({from, to}: MoveDescription, tokens: Token[][]): void => {
    tokens[to.row][to.col] = tokens[from.row][from.col];
    tokens[from.row][from.col] = null;
}