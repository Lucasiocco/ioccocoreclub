import {useEffect, useState} from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

const [count, setCount] = useState(0);

const aumentarContador = () => { 
    setCount(count + 1);
}

const bajarContador = () => {
    setCount(count - 1);
}

const confirmarContador = (e) => {
    console.log(`Confirmando el contador: ${count}`);
    onAdd(count);
    return count;
}

  return (
    <div>
    <button className="btn btn-primary" onClick={aumentarContador}>Sumar</button>
    <button className="btn btn-primary" onClick={bajarContador}>Restar</button>
    <p>{count}</p>
    <button className="btn btn-primary" onClick={confirmarContador()}>Confirmar</button>
    </div>
  )
}

export default ItemCount