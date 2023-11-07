import { BoardProps } from "boardgame.io/dist/types/packages/react";
import { MovementDescription} from "./MovementsPatterns";
import React, { useState } from "react";
import { Tile } from "./Tile";

export type GridPosition = {
  row: number;
  col: number;
};

export type MoveDescription = {
  playerID: playerID;
  from: GridPosition;
  to: GridPosition;
}

type MovementDescriptionGrid = (MovementDescription | null)[][];
type TokenGrid = (Token | null)[][];

export type PlayingBoard = {tokens: TokenGrid, movementPatterns: MovementDescriptionGrid}

//JSON serializables gameobjects provided to G in boardgame.io framework, need to be seperate types with no functions.
export type BoardState = PlayingBoard & { possibleMoves: MoveDescription[]}
export type Token = playerID
export type playerID = number;

//Props extending BG base type
export type BaseBoardProps = BoardProps<BoardState>;

//Component
export const PlayingBoardComponent = ({ G, ctx, moves }: BaseBoardProps) => {
  const [selected, setSelected] = useState<GridPosition | null>(null);


  function handleOnTileClicked(gridPos: GridPosition): void {
    const clickedTile: Token | null = getTokenAtPos(gridPos);

    if(clickedTile && clickedTile-1 + "" == ctx.currentPlayer) {
      setSelected(gridPos);
      return;
    };

    //should do move
    if(selected && (!clickedTile || clickedTile-1 + "" != ctx.currentPlayer)) {
      moves.move({playerID: Number(ctx.currentPlayer), from: selected, to: gridPos}); 
      setSelected(null);
      return;
    }

  }

  const isFieldSelected = (gridPos: GridPosition): boolean => {
    return (selected?.col==gridPos.col && selected?.row==gridPos.row);
  }

  const getTokenAtPos = (pos: GridPosition): Token | null => {
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
          row.map((token, colNum) => (
            
            <Tile
              highlight={isFieldSelected({row: rowNum, col: colNum})}
              key={rowNum + "," + colNum}
              onClick={handleOnTileClicked}
              gridPos={{row: rowNum, col: colNum}}
              token={token}
            />
          )
          )
        ))}
      </div>
    </main>
  );
};

export function createTilesGrid(rows: number, cols: number): TokenGrid {
  const grid: TokenGrid = Array.from(Array(rows), () => new Array(cols));
  for (let i = 0; i < rows; i++) {
    grid[i].fill(null);
  }
  return grid;
};

export function createMovementGrid(rows: number, cols: number): MovementDescriptionGrid {
  const grid: MovementDescriptionGrid = Array.from(Array(rows), () => new Array(cols));
  for (let i = 0; i < rows; i++) {
    grid[i].fill(null);
  }
  return grid;
};


export const doMove = ({from, to}: MoveDescription, G: BoardState): void => {
    G.tokens[to.row][to.col] = G.tokens[from.row][from.col];
    G.tokens[from.row][from.col] = null;
}