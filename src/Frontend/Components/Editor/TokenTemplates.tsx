import React from "react";
import { TemplateTokenComponent } from "../Tokens/Tokens";
import { Template, TokenTemplate } from "./Editor";

type TokenTemplatesProps = {
  clickHandler: (template: Template) => void;
  selectedTemplate: Template | null;
};

export const TokenTemplates = (props: TokenTemplatesProps) => {
  return (
    <div className="template-container">
      <TemplateTokenComponent
        clickHandler={props.clickHandler}
        token={{ playerID: "0" }}
      />
      <TemplateTokenComponent
        clickHandler={props.clickHandler}
        token={{ playerID: "1" }}
      />
    </div>
  );
};
