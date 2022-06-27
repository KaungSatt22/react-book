import React,{useEffect,useState} from 'react';

const Useeffect = () => {
    const [val,setVal] = useState('');
    const [phrase,setPhrase] =useState('example phrase')
    const onSubmit = ()=> {
        setPhrase(val);
        setVal('')
    }
    console.log('render')
    useEffect(()=> {
        console.log(`Phrase :  ${phrase}`)
    },[phrase])
    useEffect(()=> {
        console.log(`Value :  ${val}`)
    },[val])
    return (
        <div>
            <input type="text"
                    value={val}
                   onChange={e=> setVal(e.target.value)}
            />
            <button onClick={onSubmit}>ADD</button>
        </div>
    );
};

export default Useeffect;