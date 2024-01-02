import React from "react";
import { Board, GridPosition, Tile } from "../../Framework/types";
import { compareGridPositions } from "../../Framework/Utilities";
import {
  PlayingTileComponent,
  PlayingTileProps,
} from "./PlayingBoard/PlayingBoardTile";
import { EditorTileProps } from "./Editor/EditorTile";
import { TemplateTileProps } from "./Editor/TileTemplate";
import { EditingBoardProps } from "./Editor/EditingBoard";
import { PlayingBoardProps } from "./PlayingBoard/PlayingBoard";

export type TileComponentProps =
  | EditorTileProps
  | TemplateTileProps
  | PlayingTileProps;

export type BaseBoardProps = Board & {
  clickHandler: (pos: GridPosition) => void;
  winZone: GridPosition[];
};

type BoardComponentProps = PlayingBoardProps | EditingBoardProps;

export const BoardComponent = (props: BoardComponentProps) => {
  const gridLayout = {
    gridTemplateColumns: "repeat(" + props.tokens[0].length + ", 1fr)",
  };

  return (
    <div className="board-wrapper">
      <div className="board" style={gridLayout}>
        {props.tokens.map((row, rowNum) =>
          row.map((token, colNum) => {
            const pos: GridPosition = { row: rowNum, col: colNum };
            const tile: Tile = props.tiles[rowNum][colNum];
            return props.editing ? (
              <PlayingTileComponent
                isSelected={false}
                key={rowNum + "," + colNum}
                token={token}
                tile={tile}
                clickHandler={props.clickHandler}
                isHighlighted={false}
                isInWinZone={props.winZone.some((t) =>
                  compareGridPositions(t, pos),
                )}
              />
            ) : (
              <PlayingTileComponent
                isHighlighted={props.highlightedTiles.some((t) =>
                  compareGridPositions(t, pos),
                )}
                isSelected={
                  props.selectedTile != null &&
                  compareGridPositions(pos, props.selectedTile)
                }
                key={rowNum + "," + colNum}
                clickHandler={props.clickHandler}
                token={token}
                tile={tile}
                isInWinZone={props.winZone.some((t) =>
                  compareGridPositions(t, pos),
                )}
              />
            );
          }),
        )}
      </div>
    </div>
  );
};
