import { useEffect, useState } from "react"
import { productos } from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { ProductLoader } from "./ProductLoader"
import { db } from "../Firebase"
import { getDocs, collection } from "firebase/firestore"

const ItemListContainer = () => {

    const [ items , setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const { category } = useParams();

    const collectionProductos = collection(db,"productos");

    useEffect(() => {
    
      const consulta = getDocs(collectionProductos);

    consulta
    .then((resultado) => {
      const productos_mapeados = resultado.docs.map(referencia => {
        const aux = referencia.data();
        aux.id = referencia.id;
        return aux;
      })
      setItems(productos_mapeados);
      setLoading(false);

    })
    .catch((error) => {
      console.log(error)
    })

    }, [category])

  
    return (
      <>
        {loading ? <ProductLoader /> : <ItemList items={items} />}
      </>
    )
  }



export default ItemListContainer