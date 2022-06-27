import React from 'react';

const RenderProps = ({data=[],render_prop,render_error}) => {
    return !data.length ? (
        render_error
    ) : (
        <ul>
            {data.map((item,i)=> (
                <li key={i}>{render_prop(item)}</li>
            ))}
        </ul>
    )
};

export default RenderProps;