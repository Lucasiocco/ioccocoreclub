import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CarritoDetail from "./CarritoDetail"
import { CartContext } from "./Provider"


const Cart = () => {


  const {addItemNavBar} = useContext(CartContext)


  return (
  <>

    {addItemNavBar() === 0 ? (
    <div className='page'>
      <div className='page__in page__center'>
        <h2 className='tituloCarrito'>No hay elementos en tu carrito</h2>
        <Link to='/' className='cart__btn'>Volver a la tienda</Link>
      </div>
    </div>

) : (
  <div className='page'>
    <CarritoDetail/>
    <Link to="/Checkout">Proceder con la compra</Link>
  </div>

)}
</>
  
);
}

 
export default Cart