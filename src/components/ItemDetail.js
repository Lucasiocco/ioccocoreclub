import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({name, id, description, price, image}) => {

  return (

    <div className="item-detail">
      <h2>{name}</h2>
      <img src={image} alt={id} />
      <p>{description}</p>
      <h3>${price}</h3>
      <ItemCount initial={1}/>
    </div>

  )
}

export default ItemDetail