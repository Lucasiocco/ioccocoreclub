import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './Provider'

const CartWidget = () => {

  const resultado = useContext(CartContext)
  console.log(resultado)

  return (
      <>
       <NavLink to="/carrito" className="material-symbols-outlined">
        shopping_cart {resultado.cantidad_total}
       </NavLink>
  </>
  )
}

export default CartWidget