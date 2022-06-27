import React from 'react';
import Color from "./Color";

const ColorList = ({colors,onRemove,onRate}) => {
    return (
        <div>
            {colors.map((color)=> {
                return (
                    <Color key={color.id}
                           {...color}
                           onRemove={onRemove}
                           onRate={onRate}
                    />
                )
            })}
        </div>
    );
};

export default ColorList;