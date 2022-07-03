import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./Provider"
import Checkout from "./Checkout"


const Cart = () => {
  const {cartItems, removeItem, clear, getTotal, getSubtotal, addItemNavBar} = useContext(CartContext)
  return (
    <div>
    {addItemNavBar () === 0 ? (
    <div className='page'>
      <div className='page__in page__center'>
        <h2 className='titulo22'>No hay elementos en tu carrito</h2>
        <Link to='/' className='cart__btn'>Ir a la tienda</Link>
      </div>
   </div>


) : (

  <div className='page'>

     <div className='page__in'>

       <div className='cart'>
         <h2 className='titulo32'>Mi Carrito</h2>
       </div>

       <div className='cart__table'>
         <div className='cart__table__row'>
           <div className='cart__table__row__col'>
             <p className='txt16d'>Producto</p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'></p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>Precio</p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>Cantidad</p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>Subtotal</p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'></p>
           </div>      
         </div>
       </div>

       <div>
         {cartItems.map((item) => (
         <div key={item.id} className='cart__table__row'>
           <div className='cart__table__row__col'>
             <img className='cart__img' src={item.image} alt="" />
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>{item.titulo}</p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>${item.precio2}</p>
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>{item.cantidad}</p>     
           </div>
           <div className='cart__table__row__col'>
             <p className='txt16d'>${getSubtotal(item.precio2, item.cantidad )}</p>     
           </div>
           <div className='cart__table__row__col'>
             <img src="../img/mastercard.png" alt="" className='cart__icon' onClick={() => removeItem(item.id)}/>
           </div>
         </div>
         ))}
       </div>

       <div className='cart__clear'>
       <button className='cart__btn' onClick={clear}>Vaciar Carrito</button>
       <Link to='/' className='cardBtn'>Seguir comprando</Link>
       </div>

       <div>
         <div className='page__flex page__flex__end'>
           <p className='cart__items'>Cantidad de items:</p>
           <p className='cart__items'>{addItemNavBar()}</p>
         </div>
         <div className='page__flex page__flex__end'>
           <p className='cart__total'>TOTAL:</p>
           <p className='cart__total'>$ {getTotal()}</p>          
         </div>

       
       
       
       </div>   
       

     </div>
   </div>
)       }


</div>


 

)}


 
export default Cart