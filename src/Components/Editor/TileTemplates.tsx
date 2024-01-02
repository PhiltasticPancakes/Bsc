import React from "react"
import { TemplateTileComponent} from "../../Tiles.tsx/Tile";
import { Template } from "webpack";
import { TileTemplate } from "./Editor";
import { MovementDescription } from "../../Framework/types";

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