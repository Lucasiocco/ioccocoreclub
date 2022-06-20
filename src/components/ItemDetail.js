import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = (Item) => {
  const onAdd = (count) => {
    console.log(`Confirmando el contador: ${count}`);
  }

  return (
    <div>
      <h2>{Item.name}</h2>
      <img src={Item.img} alt={Item.name} />
      <p>{Item.description}</p>
      <p>${Item.price}</p>
      <ItemCount initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail