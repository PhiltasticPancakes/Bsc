import React, { ReactNode } from "react";
import { MovementDescription, Token, compareGridPositions } from "./PlayingBoard/BoardMovement";
import { EditingTileComponent, PlayingTileComponent } from "./Tiles.tsx/Tile";

export type Board = { tokens: TokenGrid, tiles: TileGrid }

export type GridPosition = {
    row: number;
    col: number;
};

export type Tile = {
    movementDescription: MovementDescription;
}
type TileGrid = (Tile)[][];
export type TokenGrid = (Token | null)[][];


type BaseBoardProps = Board & {
    clickHandler: (pos: GridPosition) => void,

};

export type EditingBoardProps = BaseBoardProps & {
    editing: true,
}

type PlayingBoardProps = BaseBoardProps & {
    editing: false,
    selectedTile: GridPosition | null,
    highlightedTiles: GridPosition[]
};

type BoardComponentProps = PlayingBoardProps | EditingBoardProps;



export const BoardComponent = (props: BoardComponentProps) => {
    const gridLayout = { gridTemplateColumns: "repeat(" + props.tokens[0].length + ", 1fr)" };


    return (
        <div className="board-wrapper">
            <div className="board" style={gridLayout}>
                {props.tokens.map((row, rowNum) => (
                    row.map((token, colNum) => {
                        const pos: GridPosition = { row: rowNum, col: colNum };
                        const tile: Tile = props.tiles[rowNum][colNum];
                        return (
                            props.editing ?
                                <EditingTileComponent
                                    isSelected={false}
                                    key={rowNum + "," + colNum}
                                    gridPos={pos}
                                    token={token}
                                    tile={tile} 
                                    clickHandler={props.clickHandler}
                                />
                                :
                                <PlayingTileComponent
                                    isHighlighted={props.highlightedTiles.some((t) => compareGridPositions(t, pos))}
                                    isSelected={props.selectedTile != null && compareGridPositions(pos, props.selectedTile)}
                                    key={rowNum + "," + colNum}
                                    clickHandler={props.clickHandler}
                                    gridPos={pos}
                                    token={token}
                                    tile={tile}
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

export function createTileGrid(rows: number, cols: number): TileGrid {
    const grid: TileGrid = Array.from(Array(rows), () => new Array(cols));
    for (let i = 0; i < rows; i++) {
        grid[i].fill({ movementDescription: MovementDescription.None });
    }
    return grid;
};
