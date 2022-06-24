import React from 'react';
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';

const ItemDetail = ({item}) => {

  const [cant, setCant] = useState(true)

  const onAdd = (cantidadSeleccionada) => {
    setCant(cantidadSeleccionada)
  }

  return (

    <div className="item-detail">
      <h4>{item.name}</h4>
      <img src={item.image} alt={item.id} />
      <p>{item.description}</p>
      <h5>{item.price}</h5>
      <ItemCount initial={1} onAdd={onAdd}/>
    </div>

  )
}

export default ItemDetail