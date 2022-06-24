import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from './Provider'

const CartWidget = () => {

  const resultado = useContext(contexto)
  console.log(resultado)

  return (
      <>
       <NavLink to="/carrito" className="material-symbols-outlined">
        shopping_cart
       </NavLink>
  </>
  )
}

export default CartWidget