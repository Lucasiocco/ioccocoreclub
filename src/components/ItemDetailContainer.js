import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductos } from "../utils/productos";

const ItemDetailContainer = () => {
  
    const [producto, setItem] = useState({});
    const params = useParams

  useEffect (() => {
    getProductos()
        .then((resultado) => {
            setItem(resultado);
  })
  .catch((error) => { 
    console.log(error); 
  });
  }, []);
  
    return (
    <ItemDetail productos={producto} />
  )
}

export default ItemDetailContainer