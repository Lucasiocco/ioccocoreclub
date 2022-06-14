import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);
    const resultado = useParams

  useEffect(() => {

    const MocAsync = new Promise((resolve) => {

      setTimeout(() => {
          console.log("Cargando productos");
          const productos = ["Producto 1", "Producto 2", "Producto 3"];
          resolve(productos);
        },3000)
    })

        MocAsync.then(productos => {
            setItems(productos)
            });
    
    }, []);

    const onAdd = () => {}

    if (items.length > 0) {
        return (
            <div>
                <h1>{props.greeting}</h1>
                <ItemList/>
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