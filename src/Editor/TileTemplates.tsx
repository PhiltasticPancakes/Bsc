import React from "react"
import { MovementDescription } from "../PlayingBoard/MovementsPatterns"
import { useDrag } from "react-dnd";
import { TileComponent } from "../Tile";


export const TileTemplates = () => {
  
  return (
    <div className="template-container">
      {(Object.keys(MovementDescription) as (keyof typeof MovementDescription)[]).map(
        (md) => (
          <TileComponent key={md} movementPattern={MovementDescription[md]} tileType="template" token={md} gridPos={{row: 0, col: 0}}/>
        )
      )}
    </div>
  )
}