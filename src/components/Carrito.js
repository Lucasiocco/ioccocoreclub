import { useContext } from "react"
import { CartContext } from "./Provider"


function Cart() {
  const {cartItems, removeItem, clear} = useContext(CartContext)
  return (
    <div className='page'>

        <div className='page__in'>

          <div className='cart'>
            <h2 className='titulo32'>Mi Carrito</h2>
          </div>

          <div className='cart__table'>
            <div className='cart__table__row'>
              <div className='cart__table__row__col'>
                <p className='txt16d'>Imagen</p>
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>Descripcion</p>
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>Precio</p>
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>Cantidad</p>
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>Eliminar</p>
              </div>      
            </div>
          </div>

          <div>
            {cartItems.map((producto) => (
            <div key={producto.id} className='cart__table__row'>
              <div className='cart__table__row__col'>
                <img className='cart__img' src={producto.image} alt="" />
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>{producto.name}</p>
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>${producto.price}</p>
              </div>
              <div className='cart__table__row__col'>
                <p className='txt16d'>{producto.quantity}</p>     
              </div>
              <div className='cart__table__row__col'>
                <button className='cart__btn' onClick={() => removeItem(producto.id)} >x</button>
              </div>
            </div>
            ))}
          </div>

          <div className='cart__clear'>
          <button className='btn btn-primary' onClick={clear}>Vaciar Carrito</button>
          </div>

        </div>
      </div>
  )}


 
export default Cart