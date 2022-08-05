import { db } from "../Firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState, useContext } from "react"
import { CartContext } from "./Provider"
import Form from "./Form"

const Checkout = () => {
  
  const [data, setData] = useState({name: '', email: '', phone: ''})
  const [orderId, setOrderId] = useState('');
  const {cartItems, getTotal, deleteAll} = useContext(CartContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const objOrden = {
        buyer: {
            name: data.name,
            phone: data.phone,
            email: data.email,
        },
        cartItems,
        total: getTotal(),
        date: serverTimestamp(),
    };

    const ref = collection(db, 'ordenes');
    addDoc(ref, objOrden).then((response) => {
        setOrderId(response.id);
        deleteAll();
    });
}

  return (
    <div className="checkout">
      <h2>CheckOut</h2>
        <div className="checkout__right__bottom">
          <div className="checkout__right__bottom__item">
            <h3 className="checkout__right__bottom__item__title">Payment method</h3>
            <div className="checkout__right__bottom__item__method">
              <div className="checkout__right__bottom__item__method__item">
                <input type="radio" name="payment" id="payment1" />
                <label htmlFor="payment1">
                  <img src="../img/mastercard.png" alt="mastercard" />
                </label>
              </div>
              <div className="checkout__right__bottom__item__method__item">
                <input type="radio" name="payment" id="payment2" />
                <label htmlFor="payment2">
                  <img src="../img/visa.png" alt="visa" />
                </label>
              </div>
            </div>
          </div>
          <Form
      handleChange={handleChange}
      data={data}
      handleSubmit={handleSubmit}
      />
          <div className="checkout__right__bottom__item">
            <button className="checkout__right__bottom__item__button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      {orderId&&<p>Su orden de compra es : {orderId}</p>}
      </div>
  );

 
}    


export default Checkout