import React from "react";
import { OmatiToken } from "./OmatiToken";
import { Template } from "../Editor/Editor";
import { Token } from "../../../Framework/types";

export type TokenProps = {
  token: Token;
};

export type TemplateTokenProps = {
  clickHandler: (template: Template) => void;
  token: Token;
};

export const TemplateTokenComponent = (props: TemplateTokenProps) => {
  return (
    <div
      onClick={() =>
        props.clickHandler({ templateType: "token", token: props.token })
      }
    >
      <OmatiToken playerID={props.token.playerID} />
    </div>
  );
};

export const TokenComponent = (props: TokenProps) => {
  return <OmatiToken playerID={props.token.playerID} />;
};
