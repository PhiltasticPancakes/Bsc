import { BoardProps } from "boardgame.io/dist/types/packages/react";
import React, { useState } from "react";
import { BaseBoardProps, BoardComponent } from "../Board";
import {
  Board,
  MoveDescription,
  GridPosition,
  Token,
} from "../../../Framework/types";
import { compareGridPositions } from "../../../Framework/Utilities";
import { PlayerID } from "boardgame.io";

//JSON serializables gameobjects provided to G in boardgame.io framework, need to be seperate types with no functions.
export type GameState = {
  board: Board;
  possibleMoves: MoveDescription[];
  gameOver: false | PlayerID;
  winZone: GridPosition[];
};

//Props extending BG base type
export type PlayingBoardComponentProps = BoardProps<GameState>;

export type PlayingBoardProps = BaseBoardProps & {
  editing: false;
  selectedTile: GridPosition | null;
  highlightedTiles: GridPosition[];
};

//Component
export const PlayingBoardComponent = ({
  G,
  ctx,
  moves,
}: PlayingBoardComponentProps) => {
  const [selected, setSelected] = useState<GridPosition | null>(null);

  const handleOnTileClicked = (gridPos: GridPosition): void => {
    const clickedToken: Token | null = getTokenAtPos(gridPos);

    //Deselect if clicked on selected tile
    if (selected && compareGridPositions(selected, gridPos)) {
      setSelected(null);
      return;
    }

    //Select tile if it is the current player's
    if (clickedToken != null && clickedToken.playerID == ctx.currentPlayer) {
      setSelected(gridPos);
      return;
    }

    //Move if a tile is selected and the clicked tile is empty or not the current player's
    if (
      selected &&
      (clickedToken == null || clickedToken.playerID != ctx.currentPlayer)
    ) {
      moves.move({
        playerID: Number(ctx.currentPlayer),
        from: selected,
        to: gridPos,
      });
      setSelected(null);
      return;
    }
  };

  const getTokenAtPos = (pos: GridPosition): Token | null => {
    return G.board.tokens[pos.row][pos.col];
  };

  //if selected, highlight possible moves
  const highlightedTiles = selected
    ? G.possibleMoves
        .filter((m) => compareGridPositions(m.from, selected))
        .map((m) => m.to)
    : G.possibleMoves
        .map((m) => m.from)
        .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <BoardComponent
      editing={false}
      tokens={G.board.tokens}
      tiles={G.board.tiles}
      clickHandler={handleOnTileClicked}
      selectedTile={selected}
      highlightedTiles={highlightedTiles}
      winZone={G.winZone}
    />
  );
};

export const doMove = ({ from, to }: MoveDescription, G: GameState): void => {
  G.board.tokens[to.row][to.col] = G.board.tokens[from.row][from.col];
  G.board.tokens[from.row][from.col] = null;
};

export { Board };
