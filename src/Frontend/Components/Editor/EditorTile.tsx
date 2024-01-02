import React from "react";
import { GridPosition, Token, Tile, TileType } from "../../../Framework/types";
import { BaseTileProps } from "../BaseTile";
import { TokenComponent } from "../Tokens/Tokens";
import { getTileTypeByName } from "../../../Framework/Utilities";

export type EditorTileProps = {
  clickHandler: (gridPos: GridPosition) => void;
  gridPos: GridPosition;
  token: Token | null;
  tile: Tile;
} & BaseTileProps;

export const EditorTileComponent = (props: EditorTileProps) => {
  const tileType: TileType = getTileTypeByName(props.tile.tileTypeName);
  let style: React.CSSProperties = {
    background: tileType.color,
    height: "fit-content",
  };

  return (
    <div
      className="tile"
      style={style}
      onClick={() => {
        props.clickHandler(props.gridPos);
      }}
    >
      {props.token ? <TokenComponent token={props.token} /> : null}
    </div>
  );
};
