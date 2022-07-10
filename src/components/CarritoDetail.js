import React from 'react'
import { CartContext } from './Provider'
import { useContext } from 'react'

const CarritoDetail = () => {

  const {cartItems, deleteItem, clear, getTotal} = useContext(CartContext)

  return (
    <div className="cart">
    {cartItems.map((prod) => (
        <div className="infoCart" key={prod.id}>
            <img
                src={prod.img}
                alt={prod.name}
                width="70px"
            />
            <h2>{prod.name}</h2>
            <h2>${prod.price}</h2>
            <h2>Cantidad: {prod.cantidad}</h2>
            <button onClick={() => deleteItem(prod.id)}>
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