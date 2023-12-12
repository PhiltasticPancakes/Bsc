import { BoardProps } from "boardgame.io/dist/types/packages/react";
import React, { useState } from "react";
import { Board, BoardComponent, GridPosition} from "../Board";
import { MoveDescription, Token } from "./MovementsPatterns";

//JSON serializables gameobjects provided to G in boardgame.io framework, need to be seperate types with no functions.
export type PlayingBoard = Board & { possibleMoves: MoveDescription[] }


//Props extending BG base type
export type PlayingBoardComponentProps = BoardProps<PlayingBoard>;

//Component
export const PlayingBoardComponent = ({ G, ctx, moves }: PlayingBoardComponentProps) => {
  const [selected, setSelected] = useState<GridPosition | null>(null);

  const handleOnTileClicked = (gridPos: GridPosition): void => {
    const clickedTile: Token | null = getTokenAtPos(gridPos);
    console.log("tile clicked: " + JSON.stringify(gridPos) + ": " + clickedTile);

    if (clickedTile != null && Number(clickedTile) - 1 + "" == ctx.currentPlayer) {
      setSelected(gridPos);
      return;
    };

    //should do move
    if (selected && (clickedTile == null || Number(clickedTile) - 1 + "" != ctx.currentPlayer)) {
      moves.move({ playerID: Number(ctx.currentPlayer), from: selected, to: gridPos });
      setSelected(null);
      return;
    }

  }

  const getTokenAtPos = (pos: GridPosition): Token | null => {
    return G.tokens[pos.row][pos.col];
  }

  return (
      <BoardComponent
        tokens={G.tokens}
        tiles={G.tiles}
        handleClick={handleOnTileClicked}
        selectedTile={selected}
        highlightedTiles={[]} />
  );
};

export const doMove = ({ from, to }: MoveDescription, G: PlayingBoard): void => {
  G.tokens[to.row][to.col] = G.tokens[from.row][from.col];
  G.tokens[from.row][from.col] = null;
}

export { Board };
