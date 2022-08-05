import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collectionProductos } from "../Firebase"
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState({});
    const {id} = useParams()

    useEffect(() => {
      const ref = doc(collectionProductos, id);
      getDoc(ref).then((response) => {
        setItem({
          id: response.id,
          ...response.data()
        })
      })
  
    },[id])
  
  
    return (
      <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer