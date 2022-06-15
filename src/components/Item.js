import React from 'react'

function Item ({id , name, img}) {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <img src={img} alt={name} />
    </div>
  )
}

export default Item