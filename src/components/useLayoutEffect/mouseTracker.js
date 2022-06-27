import React, {useLayoutEffect, useState} from 'react';

const MouseTracker = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const setPosition = ({x, y}) => {
        setX(x);
        setY(y)
    }
    useLayoutEffect(()=> {
        console.log('useEffect')
        window.addEventListener('mousemove',setPosition);
        return ()=> window.removeEventListener("mousemove",setPosition);
    },[])
    return (
       <div> x : {x} || y : {y}</div>
    );
};

export default MouseTracker;