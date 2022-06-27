import React from 'react';
import {FixedSizeList} from "react-window";

const List = ({bigList}) => {
    const renderRow = ({index,style}) => (
        <div style={{ ...style,...{display : "flex"}}}>
            <img src={bigList[index].avatar} alt={bigList[index].name}/>
            <p>{bigList[index].name} - {bigList[index].email}</p>
        </div>
    )
    return (
        <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}
        >
            {renderRow}
        </FixedSizeList>
    );
};

export default List;