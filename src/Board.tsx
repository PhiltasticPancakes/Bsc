import React, { ReactNode } from "react";
import { MovementDescription, Token, compareGridPositions, playerID } from "./PlayingBoard/MovementsPatterns";
import { useDrop } from "react-dnd";

export type Board = { tokens: TokenGrid, movementPatterns: MovementDescriptionGrid }

export type GridPosition = {
    row: number;
    col: number;
};

type MovementDescriptionGrid = (MovementDescription)[][];
type TokenGrid = (Token | null)[][];

type TileContext = "template" | "playing" | "editor";

type TileProps = {
    gridPos: GridPosition,
    token: Token | null,
    movementPattern: MovementDescription,
    handleClick?: (gridPos: GridPosition) => void,
    isSelected?: boolean,
    isHighlighted?: boolean
} ;
export type TileComponentProps = TileProps & {
    context: TileContext,
}


type BoardComponentProps = Board & {editing?: boolean, handleClick?: (pos: GridPosition) => void, selectedTile: GridPosition | null, highlightedTiles: GridPosition[] };

type TokenComponentProps = { playerID: playerID | null };


export const BoardComponent = (props: BoardComponentProps) => {
    const gridLayout = { gridTemplateColumns: "repeat(" + props.tokens[0].length + ", 1fr)" };

    const [, drop] = useDrop({
        accept: 'Template',
        drop: (item: any) => {
            // Handle the drop event here
            console.log(`Dropped square ${item.id}`);
        },
    });

    return (

        <div className="board" style={gridLayout}>
            {props.tokens.map((row, rowNum) => (
                row.map((token, colNum) => {
                    const pos: GridPosition = { row: rowNum, col: colNum };
                    const movement: MovementDescription = props.movementPatterns[rowNum][colNum];
                    return (
                        <TileComponent
                            context={props.editing? "editor" : "playing"}
                            isSelected={props.selectedTile != null && compareGridPositions(pos, props.selectedTile)}
                            key={rowNum + "," + colNum}
                            handleClick={props.handleClick}
                            gridPos={pos}
                            token={token}
                            movementPattern={movement}
                        />)

                }
                )
            ))}
        </div>
    )
}

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
                <TokenComponent playerID={props.token} />
            </div>
    )
}
const TemplateTileWrapper = (props: TileProps) => {


}

const EditingTileWrapper = (props: TileProps) => {
    return(
        <div className="editing-tile">

        </div>
    )
}

const PlayingTileWrapper = (props: TileProps) => {
    return <Tile {...props}/>
}

export const TileComponent = (props: TileComponentProps) => {
    switch(props.context) {
        case "template":
            return (<PlayingTileWrapper {...props}/>)
        case "playing":
            return (<PlayingTileWrapper {...props}/>)
        case "editor":
            return (<PlayingTileWrapper {...props}/>)
    }
}



const TokenComponent = (props: TokenComponentProps) => {
    return <span>{props.playerID}</span>
}

export function createTokenGrid(rows: number, cols: number): TokenGrid {
    const grid: TokenGrid = Array.from(Array(rows), () => new Array(cols));
    for (let i = 0; i < rows; i++) {
        grid[i].fill(null);
    }
    return grid;
};

export function createMovementGrid(rows: number, cols: number): MovementDescriptionGrid {
    const grid: MovementDescriptionGrid = Array.from(Array(rows), () => new Array(cols));
    for (let i = 0; i < rows; i++) {
        grid[i].fill(MovementDescription.None);
    }
    return grid;
};
