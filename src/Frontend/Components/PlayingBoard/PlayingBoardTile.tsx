import React from "react";
import { GridPosition, Token, Tile, TileType } from "../../../Framework/types";
import { getTileTypeByName } from "../../../Framework/Utilities";
import { TokenComponent } from "../Tokens/Tokens";
import { BaseTileProps } from "../BaseTile";


export type PlayingTileProps = {
    clickHandler: (gridPos: GridPosition) => void
    isHighlighted: boolean,
    token: Token | null,
    tile: Tile,
} & BaseTileProps;

export const PlayingTileComponent = (props: PlayingTileProps) => {
    let tileTemplate: TileType = getTileTypeByName(props.tile.tileTypeName);
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: tileTemplate.color,
        height: 'fit-content',
        ...(props.isHighlighted ? { border: 'solid 4px blue' } : {}),
    }

    return (
        <div className="tile" style={style}
            onClick={() => {
                    props.clickHandler(props.tile.gridPosition);

            }}
        >
            {props.token ?
                <TokenComponent token={props.token} />
                : null}
        </div>
    )
}
