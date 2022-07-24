import {useState, useContext} from 'react'
import swal from 'sweetalert';
import { CartContext } from './Provider';
import { addToCart, addItem } from './Provider';

const ItemCount = ({ stock, initial, onAdd }) => {
const resultado = useState(initial);
const count = resultado[0];
const setCount = resultado[1];
const { addToCart, addItem } = useContext(CartContext);


const aumentarContador = () => { 
    setCount(count + 1);
}

const bajarContador = () => {
  if (count > 0) {
    setCount(count - 1);
  } else { 
    swal("No puedes bajar menos de 0", "", "error");
  }
}

const confirmarContador = ()=>{
  if(count === 1){
      swal({
          text: 'Se ha agregado: ' + count + ' producto a su carro',
          icon: 'success'
      })    
  } else if(count === 0){
      swal({
          text: 'Debes agregar al menos 1 producto si quieres continuar',
          icon: 'error'
      })    
  } else (count > 1) && (swal({
      
          text: 'Se han agregado: ' + count + ' productos a su carro',
          icon: 'success'
      })  
  )
  addToCart(addItem, count);
}


  return (
    <div className="count">
    <button className="btn btn-primary" onClick={aumentarContador}>Sumar</button>
    <button className="btn btn-primary" onClick={bajarContador}>Restar</button>
    <p className="p-count">{count}</p>
    <div>
      <button className="btn btn-primary" onClick={confirmarContador}>Confirmar</button>
    </div>
    </div>
  )
}

export default ItemCount