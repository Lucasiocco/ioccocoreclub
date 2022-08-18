import React from 'react'
import { CartContext } from './Provider'
import { useContext } from 'react'

const CarritoDetail = () => {

  const {cartItems, deleteItem, clear, getSubtotal, getTotalItems, getTotal} = useContext(CartContext)

  return (
    <div className="carrito__detail">
        <h2 className='carrito__detail__title'>Carrito</h2>
    <div className="cart">
    {cartItems.map((producto) => (
        <div className="infoCart" key={producto.id}>
            <img
                src={producto.image}
                alt={producto.name}
                width="150px"
            />
            <h2>{producto.name}</h2>
            <h2>${producto.price}</h2>
            <h5>Cantidad: {producto.quantity}</h5>
            <p>Subtotal: ${getSubtotal(producto.price, producto.quantity )}</p>
            <button className='btn btn-primary' onClick={() => deleteItem(producto.id)}>
                Eliminar
            </button>
        </div>
    ))}
    </div>
    <div className="cartBtn">
        <h2>Total: ${getTotal()}</h2>
        <button className='btn btn-primary' onClick={clear}>Vaciar carrito</button>
    </div>
    </div>
  )
}

export default CarritoDetail