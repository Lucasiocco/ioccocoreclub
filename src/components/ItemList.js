import React from 'react';
import Item from './Item';


const ItemList = ({ productos }) =>{
    return (
    productos.map(producto => 
        <Item 
            key={producto.id}
            id={producto.id}
            name={producto.name}
            image={producto.image}
            description={producto.description}
            price={producto.price}
        />)
    )
}

export default ItemList