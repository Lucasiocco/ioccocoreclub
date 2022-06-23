import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../utils/productos";
import { useParams } from "react-router-dom";
import { customFetch, getProductosByCategory } from "../utils/customFetch";

const ItemListContainer = () => {

    const [ productos, setItems] = useState([]);
    const { category } = useParams();


  useEffect(() => {
    if (!category) {
        customFetch(productos)
        .then(response => {
          setItems(response)
          });
        }
    else { 
      getProductosByCategory(category)
    .then(response => {
      setItems(response)
  });
  }
  }, [category]);

  if (productos.length > 0) {

    return (
        <div className="catalogo">
          {category ? "" : <h1>Home</h1>}
           <h2>Estas a un click de cambiar tu vida!</h2>
          <ItemList items={productos} />
        </div>
    );

  }
  else {
    return (
            <h3>Cargando...</h3>
    );
  }

}


export default ItemListContainer