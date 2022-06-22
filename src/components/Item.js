import React from "react"
import { Link } from "react-router-dom"

const Item = (producto) => {
  return (
    <article className="item">
      <h2>{producto.name}</h2>
      <img src={producto.image} alt="foto" />
      <p>Precio : {producto.price}</p>
      <Link to={`/detail/${producto.id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item