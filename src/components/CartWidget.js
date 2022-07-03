import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './Provider'

const CartWidget = () => {

  const { addItemNavBar } = useContext(CartContext)
  
  return (
      <>
       <NavLink to="/carrito" className="material-symbols-outlined">
        shopping_cart<span className="badge badge-light">{addItemNavBar}</span>
       </NavLink>
  </>
  )
}

export default CartWidget