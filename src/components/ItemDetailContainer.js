import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProductosById } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  
    const [producto, setItem] = useState({});
    const {id} = useParams()

  useEffect (() => {
    getProductosById(parseInt(id))
        .then(response => {
            setItem(response)})
        }, [id]);
  
    return (
        <div className="container">
            <h1>Detalle del Producto</h1>
            <ItemDetail {... producto}/>
        </div>
  )
}

export default ItemDetailContainer