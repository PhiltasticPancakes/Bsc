import React from "react"
import { Template } from "webpack";
import { TileTemplate } from "./Editor";
import { TileTypeName } from "../../../Framework/types";
import { TemplateTileComponent } from "./TileTemplate";
import { getTileTypeByName } from "../../../Framework/Utilities";

type TileTemplateProps = {
  clickHandler: (template: Template) => void;
  selectedTemplate: Template | null;
}

export const TileTemplates = (props: TileTemplateProps) => {
  
  return (
    <div className="template-container">
      {(Object.keys(TileTypeName) as (keyof typeof TileTypeName)[]).map(
        (md) => (
          <TemplateTileComponent isSelected={props.selectedTemplate==md} key={md} clickHandler={props.clickHandler} tileType={getTileTypeByName(TileTypeName[md])} />
        )
      )}
    </div>
  )
}