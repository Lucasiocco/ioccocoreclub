import React from 'react';
import Item from './Item';


const ItemList = ({productos}) => {
    return (
        <div className="itemList">
      {productos.map(producto => (
          <Item
          key={producto.id}
          id={producto.id}
          name={producto.name}
          image={producto.image}
          />
      ))
      }
        </div>
    )
  }

export default ItemList