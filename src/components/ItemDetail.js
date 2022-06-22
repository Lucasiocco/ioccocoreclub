import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

  const [ cant, setCant ] = useState(true);
  console.log(cant);

  const onAdd = (cantidadSeleccionada) => {
    console.log('Desde Item Detail' + cantidadSeleccionada);
  }

  return (

    <div className="item-detail">
      <h2>{producto.name}</h2>
      <img src={producto.img} alt="foto" />
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <ItemCount initial={1} onAdd={onAdd}/>
    </div>

  )
}

export default ItemDetail