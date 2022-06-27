import React, {useEffect, useState} from 'react';

const Check = () => {
    const [check,setCheck] = useState(false);
    console.log('render')
    useEffect(()=>{
        console.log('useeffect')
        alert(`checked : ${check.toString()}`);
    },[check])
    return (
        <div>
            <input type="checkbox"
                    value={check}
                    onClick={()=>setCheck(check=> !check)}
            />
            {check ? "checked" : "not checked"}

        </div>
    );

};

export default Check;