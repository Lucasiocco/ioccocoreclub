import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";
import { useParams } from "react-router-dom";
import { SkeletonCard } from "./ProductLoader"
import { db } from "../Firebase"
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {

      setLoading(true)

      const collectionProductos = collection(db,"productos");
      const refDeldoc = doc(collectionProductos,id);
      const consulta = getDoc(refDeldoc);
  
      consulta
      .then(resultado => {
        const producto = resultado.data();
        setItem(producto);
        setLoading(false);
      } )
      .catch((error) => {
        console.log(error)
      })
  
    },[])
  
  
    return (
      <>
        {loading? <SkeletonCard/> : <ItemDetail item={item} />}
      </>
    )
}

export default ItemDetailContainer