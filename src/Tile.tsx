import { useDrop } from "react-dnd";
import { MovementDescription, Token, playerID } from "./PlayingBoard/MovementsPatterns";
import React from "react";
import { GridPosition } from "./Board";

type TokenComponentProps = { playerID: playerID | null };

type TileProps = (EditorTileProps | TemplateTileProps | PlayingTileProps);

type BaseTileType = {
    isSelected?: boolean,
    isHighlighted?: boolean,
    handleClick?: (gridPos: GridPosition) => void,
    movementPattern: MovementDescription,
    gridPos: GridPosition,
    token: string | null,


}

export type TemplateTileProps = {
    tileType: "template"
} & BaseTileType;

export type PlayingTileProps = {
    tileType: "editor",

} & BaseTileType;

export type EditorTileProps = {
    tileType: "playing",

} & BaseTileType;


const Tile = (props: TileProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
    }
    return (
        <div className="tile" style={style}
            onClick={() => {
                if (props.handleClick) {
                    props.handleClick(props.gridPos);
                }
            }}
        >
        {props.token}
        </div>
    )
}

export const TileComponent = (props: TileProps) => {
    switch (props.tileType) {
        case "template":
            return (<TemplateTileWrapper {...props} />)
        case "playing":
            return (<PlayingTileWrapper {...props} />)
        case "editor":
            return (<EditingTileWrapper {...props} />)
    }
}
const TemplateTileWrapper = (props: TileProps) => {
    const [, drop] = useDrop({
        accept: 'Template',
        drop: (item: any) => {
            // Handle the drop event here
            console.log(`Dropped square ${item.id}`);
        },
    });

    return (
        <Tile {...props} />
    )
}

const EditingTileWrapper = (props: TileProps) => {
    return (
        <div className="editing-tile">
            <Tile {...props} />
        </div>
    )
}

const PlayingTileWrapper = (props: TileProps) => {
    return <Tile {...props} />
}




const TokenComponent = (props: TokenComponentProps) => {
    return <span>{props.playerID}</span>
}
