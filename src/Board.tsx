import React, { ReactNode } from "react";
import { MovementDescription, Token, compareGridPositions, playerID } from "./PlayingBoard/MovementsPatterns";
import { TileComponent } from "./Tiles.tsx/Tile";

export type Board = { tokens: TokenGrid, tiles: MovementDescriptionGrid }

export type GridPosition = {
    row: number;
    col: number;
};

type MovementDescriptionGrid = (MovementDescription)[][];
export type TokenGrid = (Token | null)[][];


type BoardComponentProps = Board & {onDragDropped?: any, editing?: boolean, handleClick?: (pos: GridPosition) => void, selectedTile: GridPosition | null, highlightedTiles: GridPosition[] };



export const BoardComponent = (props: BoardComponentProps) => {
    const gridLayout = { gridTemplateColumns: "repeat(" + props.tokens[0].length + ", 1fr)" };

    return (
        <div className="boardWrapper">

            <div className="board" style={gridLayout}>
                {props.tokens.map((row, rowNum) => (
                    row.map((token, colNum) => {
                        const pos: GridPosition = { row: rowNum, col: colNum };
                        const movement: MovementDescription = props.tiles[rowNum][colNum];
                        return (
                            <TileComponent
                                tileType={props.editing ? "editor" : "playing"}
                                isSelected={props.selectedTile != null && compareGridPositions(pos, props.selectedTile)}
                                key={rowNum + "," + colNum}
                                handleClick={props.handleClick}
                                onDragDropped={props.onDragDropped}
                                gridPos={pos}
                                token={token}
                                movementDescription={movement}
                            />)

                    }
                    )
                ))}
            </div>
        </div>
    )
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
