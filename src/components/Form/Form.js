import React,{useState} from 'react';

const Form = ({onNewColor=f=>f}) => {

    const [title,setTitle] = useState('');
    const [color,setColor] = useState('#000000');
    const onSubmit = e => {
        e.preventDefault();
        onNewColor(title,color)
        setTitle('');
        setColor('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"
                       onChange={e=>setTitle(e.target.value)}
                       placeholder={'Enter A Title ....'}
                       value={title}
                />
                <input type="color"
                       onChange={e=>setColor(e.target.value)}
                       value={color}
                />
                <button>Add</button>
            </form>


        </div>
    )
};

export default Form;