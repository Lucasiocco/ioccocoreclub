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

    <div className="item-detail">
      <h4>{item.name}</h4>
      <img className="img-itemDetail" src={item.image} alt={item.id} />
      <p className="p-detail">{item.description}</p>
      <h5>{item.price}</h5>
      { cant === 0 ? ( 
      <ItemCount initial={0} onAdd={onAdd}/>
      ) : (
      <Link to={"/carrito"}>Finalizar la compra</Link>
      )}
      </div>
  )
}

export default ItemDetail