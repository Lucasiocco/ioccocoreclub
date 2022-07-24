import React from 'react'
import { CartContext } from './Provider'
import { useContext } from 'react'

const CarritoDetail = () => {

  const {cartItems, deleteItem, clear, getTotal} = useContext(CartContext)

  return (
    <div className="cart">
    {cartItems.map((producto) => (
        <div className="infoCart" key={producto.id}>
            <img
                src={producto.image}
                alt={producto.name}
                width="70px"
            />
            <h2>{producto.name}</h2>
            <h2>${producto.price}</h2>
            <h2>Cantidad: {producto.quantity}</h2>
            <button onClick={() => deleteItem(producto.id)}>
                Eliminar
            </button>
        </div>
    ))}
    <div className="cartBtn">
        <h2>Total: ${getTotal()}</h2>
        <button onClick={clear}>Vaciar carrito</button>
    </div>
</div>
  )
}

export default CarritoDetail