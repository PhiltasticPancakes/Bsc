import React from "react";
import { GridPosition, PlayingBoard, Token } from "./PlayingBoard/PlayingBoard";
import { MovementDescription, compareGridPositions } from "./PlayingBoard/MovementsPatterns";



type BoardComponentProps = PlayingBoard & { onClick: any, selectedTile: GridPosition, highlightedTiles: GridPosition[] };

export const BoardComponent = (props: BoardComponentProps) => {
  const gridLayout = { gridTemplateColumns: "repeat(" + props.tokens[0].length + ", 1fr)" };
  <div className="board" style={gridLayout}>
    {props.tokens.map((row, rowNum) => (
      row.map((token, colNum) => {
        const pos: GridPosition = { row: rowNum, col: colNum };
        const movement: MovementDescription = props.movementPatterns[rowNum][colNum];
        return (
          <TileComponent
            isSelected={compareGridPositions(pos, props.selectedTile)}
            key={rowNum + "," + colNum}
            onClick={props.onClick}
            gridPos={pos}
            token={token}
            movementPattern={movement}
          />)

      }
      )
    ))}
  </div>
}
export type TileComponentProps = {
  gridPos: GridPosition,
  token: Token | null,
  movementPattern: MovementDescription,
  onClick?: (gridPos: GridPosition) => any,
  isSelected?: boolean,
  isHighlighted?: boolean
}

export const TileComponent = (props: TileComponentProps) => {
  let style: React.CSSProperties = {
    ...(props.isSelected ? { color: 'Green' } : {}),
  }
  return (
    <>
      <div style={style}
        onClick={() => { props.onClick??(props.gridPos) }}
      >
        {props.token}
      </div>
    </>
  )

}