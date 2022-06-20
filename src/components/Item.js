import React from 'react'

function Item ({id , name, img, description, price}) {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default Item