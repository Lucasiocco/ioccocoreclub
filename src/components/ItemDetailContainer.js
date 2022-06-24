import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";
import { useParams } from "react-router-dom";
import { SkeletonCard } from "./ProductLoader"

const ItemDetailContainer = () => {
  
    const [producto, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {

      setLoading(true)
  
      new Promise((res, rej) => {
        setTimeout(() => {
          res(productos.find(productos => productos.id == id))
        }, 2000)
      })
        .then(respuesta => {
          setLoading(false)
          setItem(respuesta)
        })
  
    },[])
  
  
    return (
      <>
        {loading? <SkeletonCard/> : <ItemDetail producto={producto} />}
      </>
    )
}

export default ItemDetailContainer