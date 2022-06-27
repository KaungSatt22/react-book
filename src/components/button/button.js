import React, {forwardRef, useImperativeHandle, useState} from 'react';

const Button = forwardRef((props,ref) => {
    const [flag,setFlag] = useState(false)
    useImperativeHandle(ref,()=> ({
        Toggle() {
            setFlag(!flag)
        }
    }))
    return (
        <div>
            <button>Child Button</button>
            {flag && <div>Secret</div>}
        </div>
    );
});

export default Button;