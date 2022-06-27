import React from 'react';
import {faker} from "@faker-js/faker";
import List from "./List";

const Bigitem = () => {
    const bigList = [...Array(5000)].map(()=> ({
        name : faker.name.findName(),
        email : faker.internet.email(),
        avatar : faker.internet.avatar(),
    }))
    return (
        <List bigList={bigList}/>
    );
};

export default Bigitem;