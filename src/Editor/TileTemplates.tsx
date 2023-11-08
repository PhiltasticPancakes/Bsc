import React from "react"
import { MovementDescription } from "../PlayingBoard/MovementsPatterns"
import { useDrag } from "react-dnd";

export type TemplateProps = {
  id: string;
  pattern: MovementDescription;
}

const Template = ({ id, pattern }: TemplateProps) => {
  const [, drag] = useDrag({
    type: 'Template',
    item: { id, pattern },
  });

  return (
    <>
      <div
        ref={drag}
        style={{
          width: '50px',
          height: '50px',
          cursor: 'move',
        }}
      />
    </>
  );
};

export const TileTemplates = () => {
  return (
    <div className="template-container">
      {(Object.keys(MovementDescription) as (keyof typeof MovementDescription)[]).map(
        (md) => (
          <Template key={md} id={md} pattern={MovementDescription[md]} />
        )
      )}
    </div>
  )
}