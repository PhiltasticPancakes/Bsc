import React from 'react';
import { useDrag } from 'react-dnd';
import { MovementPattern } from '../GameBoard/MovementsPatterns';

export type TemplateProps = {
    id: string;
    pattern: MovementPattern;
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

export default Template;
