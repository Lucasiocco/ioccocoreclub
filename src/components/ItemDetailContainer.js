import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProductosById } from "../utils/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
    const [producto, setItem] = useState({});
    const {id} = useParams()

  useEffect (() => {
    getProductosById(parseInt(id))
        .then(response => {
            setItem(response)})
        }, [producto]);
  
    return (
        <div className="container">
            <h1>Detalle del Producto</h1>
            <ItemDetail {... producto}/>
        </div>
  )
}

export default ItemDetailContainer