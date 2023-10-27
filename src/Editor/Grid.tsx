import React, { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { TemplateProps } from './Template';

type GridProps = {
    squares: ReactNode[]
}

const Grid = ({ squares: templates }: GridProps) => {

    const [, drop] = useDrop({
        accept: 'Template',
        drop: (item: TemplateProps) => {
            // Handle the drop event here
            console.log(`Dropped square ${item.id}`);
        },
    });

    return (
        <div
            ref={drop}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 60px)',
                gridGap: '5px',
                border: '2px solid black'
            }}
        >
            {templates}
        </div>
    );
};

export default Grid;
