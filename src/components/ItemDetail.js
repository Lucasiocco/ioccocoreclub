import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (producto) => {
  const onAdd = (count) => {
    console.log(`Confirmando el contador: ${count}`);
  }

  return (
    <div>
      <h2>{producto.name}</h2>
      <img src={producto.img} alt="foto" />
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <ItemCount initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail