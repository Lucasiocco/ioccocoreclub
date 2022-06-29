import React from "react"
import { Link } from "react-router-dom"

const Item = ({item}) => {
  
  return (
    <article className="item">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>Precio : {item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item