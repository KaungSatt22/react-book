import React from 'react';
import {FaStar} from "react-icons/fa";

const Rating = ({rating, defaultStar = 10,onRate}) => {
    return (
        <div>
            <div>

                {createArr(defaultStar).map((star,i)=>{
                    return (
                        <Star key={i} selectedStar={rating > i} onSelect={()=> onRate(i+1)}/>
                    )
                })}
            </div>

            <p>{rating} of {defaultStar}</p>
        </div>
    );
};
const createArr = length => [...Array(length)]
const Star = ({selectedStar=false,onSelect})=>{
    return (
        <FaStar color={selectedStar ? 'yellow' : 'grey'} onClick={onSelect} />
    )
}

export default Rating;