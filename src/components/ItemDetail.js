import React from 'react';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from './Provider';
import { Link }from 'react-router-dom';

const ItemDetail = ({item}) => {

  const { addItem } = useContext(CartContext)
  const [ cant, setCant ] = useState(0)

  const onAdd = (quantity) => {
    setCant(quantity)
    addItem ( item, quantity )
  }

  return (

<div class="container">
  <div class="img">
  <img className="img-itemDetail" src={item.image} alt={item.id} />
  </div>
  <div class="descrip">
  <h4>{item.name}</h4>
  <p className="p-detail">{item.description}</p>
  <h5>{item.price}</h5>
  </div>
  <div class="count">
  <ItemCount initial={0} onAdd={onAdd}/>
  <Link to={"/"}>Seguir Comprando</Link>
  </div>
</div>

  )
}

export default ItemDetail