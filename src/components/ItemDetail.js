import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

  return (

    <div className="item-detail">
      <h4>{producto.name}</h4>
      <img src={producto.image} alt={producto.id} />
      <p>{producto.description}</p>
      <h5>${producto.price}</h5>
      <ItemCount initial={1}/>
    </div>

  )
}

export default ItemDetail