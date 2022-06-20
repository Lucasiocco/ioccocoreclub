import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";
import customFetch from "../utils/customFetch";

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState({});
    const params = useParams

  useEffect (() => {
    customFetch(2000, productos)
        .then(resultado => setItem(resultado))
  })
  
    return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer