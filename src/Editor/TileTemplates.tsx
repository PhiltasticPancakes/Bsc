import React from "react"
import { MovementDescription } from "../PlayingBoard/BoardMovement"
import { useDrag } from "react-dnd";
import { TileComponent } from "../Tiles.tsx/Tile";


export const TileTemplates = () => {
  
  return (
    <div className="template-container">
      {(Object.keys(MovementDescription) as (keyof typeof MovementDescription)[]).map(
        (md) => (
          <TileComponent key={md} movementDescription={MovementDescription[md]} tileType="template" token={md} gridPos={{row: 0, col: 0}}/>
        )
      )}
    </div>
  )
}