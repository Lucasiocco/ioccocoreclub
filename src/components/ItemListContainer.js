import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

  useEffect(() => {
      setTimeout(() => {
          console.log("Cargando items");
          const productos = ["Producto 1", "Producto 2", "Producto 3"];
          setItems (productos);
      },3000)
  })
   

    const onAdd = () => {}

    if (items.length > 0) {
        return (
            <div>
                <h1>{props.greeting}</h1>
                <ItemCount stock={items} initial={0} onAdd={onAdd} />
            </div>
        )
    } else { 
        return (
            <div>
                <h1>{props.greeting}</h1>
                <p>Cargando productos...</p>
            </div>
        )
    }
}

export default ItemListContainer