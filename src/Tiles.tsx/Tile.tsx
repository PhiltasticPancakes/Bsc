import { useDrag, useDrop } from "react-dnd";
import { MovementDescription, playerID } from "../PlayingBoard/MovementsPatterns";
import React from "react";
import { GridPosition } from "../Board";
import { OmniToken } from "../Tokens/Omni";

type TokenComponentProps = { playerID: playerID | null };

type TileProps = (EditorTileProps | TemplateTileProps | PlayingTileProps);

type BaseTileType = {
    isSelected?: boolean,
    isHighlighted?: boolean,
    handleClick?: (gridPos: GridPosition) => void,

    movementDescription: MovementDescription,
    gridPos: GridPosition,
    token: string | null,


}

export type TemplateTileProps = {
    tileType: "template"
} & BaseTileType;

export type PlayingTileProps = {
    tileType: "playing",

} & BaseTileType;

export type EditorTileProps = {
    tileType: "editor",
    onDragDropped: (gridPos: GridPosition, tileTemplate: MovementDescription) => void;


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
            {props.token ?
                <OmniToken type={"playing"} playerID={props.token} />
                : null}
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

const mapTileToColor = (tileType: MovementDescription) => {
    switch (tileType) {
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

const TemplateTileWrapper = (props: TemplateTileProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: mapTileToColor(props.movementDescription)
    }
    const [, drag] = useDrag({
        type: 'Template',
        item: props,
    });

    return (
        <div className="tile" style={style} ref={drag}
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

const EditingTileWrapper = (props: EditorTileProps) => {
    const [, drop] = useDrop({
        accept: 'Template',
        drop: (item: EditorTileProps) => {
            // Handle the drop event here
            console.log(`Dropped square ${item.movementDescription}`);
            props.onDragDropped(props.gridPos, item.movementDescription);
        },
    });

    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: mapTileToColor(props.movementDescription),
        height: 'fit-content'
    }

    return (
        <div className="tile" style={style} ref={drop}
            onClick={() => {
                if (props.handleClick) {
                    props.handleClick(props.gridPos);
                }
            }}
        >
            {props.token ?
                <OmniToken type={"playing"} playerID={props.token} />
                : null}
        </div>
    )
}

const PlayingTileWrapper = (props: PlayingTileProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: mapTileToColor(props.movementDescription),
        height: 'fit-content'
    }

    return (
        <div className="tile" style={style}
            onClick={() => {
                if (props.handleClick) {
                    props.handleClick(props.gridPos);
                }
            }}
        >
            {props.token ?
                <OmniToken type={"playing"} playerID={props.token} />
                : null}
        </div>
    )
}

