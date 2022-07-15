import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collectionProductos } from "../Firebase"
import { getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

    const [ items , setItems] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {

      const ref = category
      ? query(collectionProductos, where("category", "==", category))
      : collectionProductos;

      getDocs(ref).then((response) => {
        const items = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setItems(items);
      });

    }, [category])

  
    return (
      <>
      <ItemList items={items}/>
      </>
    )
  }



export default ItemListContainer