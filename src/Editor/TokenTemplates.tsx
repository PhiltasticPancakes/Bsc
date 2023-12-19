import React from "react"
import { MovementDescription } from "../PlayingBoard/MovementsPatterns"
import { useDrag } from "react-dnd";
import { TileComponent } from "../Tiles.tsx/Tile";
import { OmniToken } from "../Tokens/Omni";

type TokenTemplatesProps = {
    clickHandler: any;
}

export const TokenTemplates = (props: TokenTemplatesProps) => {
  return (
    <div className="template-container">
          <OmniToken playerID="0" type='template' clickHandler={props.clickHandler}/>
          <OmniToken playerID="1" type='template' clickHandler={props.clickHandler}/>
    </div>
  )
}