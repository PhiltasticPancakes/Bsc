import React from "react"
import { MovementDescription } from "../PlayingBoard/BoardMovement"
import { TemplateTileComponent} from "../Tiles.tsx/Tile";
import { Template } from "webpack";
import { TileTemplate } from "./Editor";

type TileTemplatesProps = {
  clickHandler: (template: Template) => void;
  selectedTemplate: Template | null;
}

export const TileTemplates = (props: TileTemplatesProps) => {
  
  return (
    <div className="template-container">
      {(Object.keys(MovementDescription) as (keyof typeof MovementDescription)[]).map(
        (md) => (
          <TemplateTileComponent isSelected={props.selectedTemplate==md} key={md} clickHandler={props.clickHandler} tile={{movementDescription: MovementDescription[md]}} />
        )
      )}
    </div>
  )
}