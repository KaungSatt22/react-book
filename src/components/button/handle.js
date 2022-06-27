import React, {useRef} from 'react';
import Button from "./button";

const Handle = () => {
    const buttonRef = useRef()
    return (
        <div>
            <button onClick={()=>buttonRef.current.Toggle()}>Parent Button</button>
            <Button ref={buttonRef}/>
        </div>
    );
};

export default Handle;