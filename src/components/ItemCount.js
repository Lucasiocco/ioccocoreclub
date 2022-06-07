import {useState} from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

const [count, setCount] = useState(0);

const aumentarContador = () => { 
    setCount(count + 1);
}

const bajarContador = () => {
    setCount(count - 1);
}

const confirmarContador = () => {
    onAdd(count);
}

  return (
    <div>
    <p>El contador va: {count}</p>
    <button onClick={aumentarContador}>Sumar</button>
    <button onClick={bajarContador}>Restar</button>
    <button onClick={confirmarContador}>Confirmar</button>
    </div>
  )
}

export default ItemCount