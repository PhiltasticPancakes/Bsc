import React from "react";
import { MovementDescription, Token, compareGridPositions, playerID } from "./PlayingBoard/MovementsPatterns";

export type Board = { tokens: TokenGrid, movementPatterns: MovementDescriptionGrid }

export type GridPosition = {
    row: number;
    col: number;
};

type MovementDescriptionGrid = (MovementDescription)[][];
type TokenGrid = (Token | null)[][];

export type TileComponentProps = {
    gridPos: GridPosition,
    token: Token | null,
    movementPattern: MovementDescription,
    handleClick?: (gridPos: GridPosition) => void,
    isSelected?: boolean,
    isHighlighted?: boolean
}

type BoardComponentProps = Board & { handleClick?: (pos: GridPosition) => void, selectedTile: GridPosition | null, highlightedTiles: GridPosition[] };

type TokenComponentProps = { playerID: playerID | null }

export const BoardComponent = (props: BoardComponentProps) => {
    const gridLayout = { gridTemplateColumns: "repeat(" + props.tokens[0].length + ", 1fr)" };

    return (

        <div className="board" style={gridLayout}>
            {props.tokens.map((row, rowNum) => (
                row.map((token, colNum) => {
                    const pos: GridPosition = { row: rowNum, col: colNum };
                    const movement: MovementDescription = props.movementPatterns[rowNum][colNum];
                    return (
                        <TileComponent
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

export const TileComponent = (props: TileComponentProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
    }
    return (
        <>
            <div className="tile" style={style}
                onClick={() => {
                    if (props.handleClick) {
                        props.handleClick(props.gridPos);
                    }
                }}
            >
                <TokenComponent playerID={props.token} />
            </div>
        </>
    )

}

const TokenComponent = (props: TokenComponentProps) => {
    return <span>{props.playerID}</span>
}

export function createTilesGrid(rows: number, cols: number): TokenGrid {
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
