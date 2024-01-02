import React from "react";
import { OmatiToken } from "../Tokens/OmatiToken";
import { TokenComponent } from "../Tokens/Tokens";
import { TileTemplate } from "../Editor/Editor";
import { GridPosition, MovementDescription, Tile } from "../../../Framework/types";


export type TileComponentProps = (EditorTileProps | TemplateTileProps | PlayingTileProps);

type BaseTileType = {
    isSelected: boolean,
    tile: Tile,
}

export type TemplateTileProps = {
    clickHandler: (tile: TileTemplate) => void
} & BaseTileType;

export type PlayingTileProps = {
    clickHandler: (gridPos: GridPosition) => void
    isHighlighted: boolean,
    gridPos: GridPosition,
    token: string | null,

} & BaseTileType;

export type EditorTileProps = {
    clickHandler: (gridPos: GridPosition) => void
    gridPos: GridPosition,
    token: string | null,

} & BaseTileType;

const mapTileToColor = (tile: Tile) => {
    switch (tile.movementDescription) {
        case MovementDescription.Rook:
            return 'red'
        case MovementDescription.Bishop:
            return 'teal'
        case MovementDescription.Knight:
            return 'green'
        case MovementDescription.Queen:
            return 'purple'
        case MovementDescription.King:
            return 'yellow'
    }
}

export const TemplateTileComponent = (props: TemplateTileProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: mapTileToColor(props.tile),
    }

    return (
        <div className="tile" style={style}
            onClick={() => {
                    props.clickHandler({ type: "tile", tile: props.tile });

            }}
        >
            {props.tile.movementDescription}
        </div>
    )
}

export const EditingTileComponent = (props: EditorTileProps) => {
    let style: React.CSSProperties = {
        background: mapTileToColor(props.tile),
        height: 'fit-content'
    }

    return (
        <div className="tile" style={style}
            onClick={() => {
                    props.clickHandler(props.gridPos);
            }}
        >
            {props.token ?
                <TokenComponent playerID={props.token} />
                : null}
        </div>
    )
}

export const PlayingTileComponent = (props: PlayingTileProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: mapTileToColor(props.tile),
        height: 'fit-content',
        ...(props.isHighlighted ? { border: 'solid 4px blue' } : {}),
    }

    return (
        <div className="tile" style={style}
            onClick={() => {
                    props.clickHandler(props.gridPos);

            }}
        >
            {props.token ?
                <TokenComponent playerID={props.token} />
                : null}
        </div>
    )
}

