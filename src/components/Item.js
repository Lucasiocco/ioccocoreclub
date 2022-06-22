import React from "react"
import { Link } from "react-router-dom"

function Item (id, name, image, price,) {
  return (
    <article className="item">
      <h2>{name}</h2>
      <img src={image} alt="foto" />
      <p>Precio : {price}</p>
      <Link to={`/detail/${id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item