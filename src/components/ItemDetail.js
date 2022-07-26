import React from 'react';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from './Provider';
import { Link, useParams }from 'react-router-dom';
import { useEffect } from 'react';

const ItemDetail = ({item, price, image, name, description}) => {

  const { addItem } = useContext(CartContext)
  const [ quantity, setQuantity ] = useState(0)

  const onAdd = (quantity) => {
    setQuantity(quantity)
    addItem ( item, quantity, price, image, name, description )
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
  <Link to={"/"} className="volverTienda">Seguir Comprando</Link>
  </div>
</div>

  )
}


export default ItemDetail