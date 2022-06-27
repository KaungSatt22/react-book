import React from 'react';
import Rating from "./Rating";
import {FaTrash} from "react-icons/fa";


const Color = ({id,title,rating,color,onRemove,onRate}) => {
    return (
        <div style={{backgroundColor: color , padding : '5px'}}>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <Rating rating={rating}
                    onRate={rating=> onRate(id,rating)}
            />
        </div>
    );
};

export default Color;