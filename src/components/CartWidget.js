import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "./Contexto";

const CartWidget = () => {

  const resultado = useContext(Context);
  console.log(resultado);


  return (
      <>
       <NavLink to="/carrito" className="material-symbols-outlined">
        shopping_cart {resultado.cantidadTotal}
       </NavLink>
  </>
  )
}

export default CartWidget