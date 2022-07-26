import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CarritoDetail from "./CarritoDetail"
import Form from "./Form"
import { CartContext } from "./Provider"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { db } from "../Firebase"


const Cart = () => {

  const [data, setData] = useState({name: "", email: "", phone: ""})
  const {cartItems, getTotal, addItemNavBar} = useContext(CartContext)

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const objOrden = {
      buyer:{
        name: data.name,
        email: data.email,
        phone: data.phone
      },
      cartItems,
      total: getTotal(),
      date: serverTimestamp()
  };

  const ref = collection(db, 'orders');
  addDoc(ref, objOrden).then((response) => {
    console.log(response)
  }
  ).catch((error) => {
    console.log(error)
  }
  )
  }

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
    <Form
      handleChange={handleChange}
      data={data}
      handleSubmit={handleSubmit}
    />
  </div>

)}
</>
  
);
}

 
export default Cart