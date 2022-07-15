import React from 'react';
import Item from './Item';


const ItemList = ({items}) => {
    return (
      <>
      <h1 className='bienvenida'>Tienda</h1>
        <div className="itemList">
      {items.map((item) => (
          <Item
          key={item.id}
          item={item}
          />
      ))
      }
        </div>
      </>
    )
  }

export default ItemList