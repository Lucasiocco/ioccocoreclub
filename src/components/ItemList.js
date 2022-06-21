import React from 'react';
import Item from './Item';


const ItemList = ({ productos }) =>{

    return (
        <section className="item-list">
            {productos.map(producto => 
                <Item 
                key={producto.id} 
                producto={producto} 
                />
            )}
        </section>
    )
}

export default ItemList