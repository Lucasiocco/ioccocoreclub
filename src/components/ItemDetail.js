import React from 'react';
import ItemCount from './ItemCount';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from './Provider';
import { Link }from 'react-router-dom';

const ItemDetail = ({item}) => {

  const[ocultarConfirmar, setocultarConfirmar] = useState(false)

  const { addItem } = useContext(CartContext)

  const addToCart = (quantity) => {
    addItem(item, quantity)
    setocultarConfirmar (true)
  }

  return (

    <div className="item-detail">
      <h4>{item.name}</h4>
      <img className="img-itemDetail" src={item.image} alt={item.id} />
      <p className="p-detail">{item.description}</p>
      <h5>{item.price}</h5>
      <ItemCount initial={0} onAdd={addToCart}/>
      <Link to={"/carrito"}>Finalizar la compra</Link>
    </div>

  )
}

export default ItemDetail