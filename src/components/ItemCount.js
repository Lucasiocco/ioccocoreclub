import {useState} from 'react'
import swal from 'sweetalert';

const ItemCount = ({ stock, initial, onAdd }) => {
const resultado = useState(initial);
const count = resultado[0];
const setCount = resultado[1];

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
  )}


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