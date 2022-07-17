import { db } from "../Firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState } from "react"

const Checkout = () => {

  const [idCompra,setIdCompra] = useState("")

  const handleBuy = () => {
    
    const collectionOrdenes = collection(db,"ordenes")

    const orderData = {
      buyer : {
        name : "Horacio",
        phone : "555555555",
        email : "test@tes.com"
      },
      items : [{id:1,titulo:"test producto"}],
      date : serverTimestamp(),
      total : 100
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setIdCompra(resultado.id)
      })
      .catch(error=>{
        console.log(error)
      })


  }

  return (
    <div className="checkout">
      <h2>CheckOut</h2>
      {idCompra&&<p>Su compra es : {idCompra}</p>}
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
          <div className="checkout__right__bottom__item">
            <button className="checkout__right__bottom__item__button" onClick={handleBuy}>Pagar</button>
          </div>
        </div>
      </div>
  );


}    


export default Checkout