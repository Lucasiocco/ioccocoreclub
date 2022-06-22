import { NavLink } from "react-router-dom";

const CartWidget = () => {

  return (
      <>
       <NavLink to="/carrito" className="material-symbols-outlined">
        shopping_cart
       </NavLink>
  </>
  )
}

export default CartWidget