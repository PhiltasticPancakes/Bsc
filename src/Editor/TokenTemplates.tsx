import React from "react"
import { MovementDescription } from "../PlayingBoard/BoardMovement"
import { useDrag } from "react-dnd";
import { TileComponent } from "../Tiles.tsx/Tile";
import { OmatiToken } from "../Tokens/OmatiToken";

type TokenTemplatesProps = {
    clickHandler: any;
}

export const TokenTemplates = (props: TokenTemplatesProps) => {
  return (
    <div className="template-container">
          <OmatiToken playerID="0" type='template' clickHandler={props.clickHandler}/>
          <OmatiToken playerID="1" type='template' clickHandler={props.clickHandler}/>
    </div>
  )
}