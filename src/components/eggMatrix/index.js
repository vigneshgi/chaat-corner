import React from 'react';
import StoresList from './storeList';
import Example from './sametable';
import CreateStore from './createStore';

const EggMatrix = () => {
  
    return (
        <div>
            <CreateStore />
            {/* <StoresList /> */}
            <Example />
        </div>
    );
};

export default EggMatrix;
