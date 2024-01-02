import React from "react";
import { EditingTileComponent, PlayingTileComponent } from "./Tiles.tsx/Tile";
import { compareGridPositions } from "./Framework/BoardMovement";
import { Board, GridPosition, Tile } from "./Framework/types";




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


