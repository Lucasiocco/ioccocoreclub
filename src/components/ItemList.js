import React from 'react';
import Item from './Item';

function ItemList({productos}) {

    return (
      productos.map(p => 
        <Item 
        id={p.id}
        name={p.name} 
        image={p.image}
        key={p.id} 
        />
    )
    )
}

export default ItemList