import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { customFetch, getProductosByCategory } from "../utils/customFetch";

const ItemListContainer = () => {

    const [ productos, setItems] = useState([]);
    const { category } = useParams();


  useEffect(() => {
    if (category) {
        customFetch(3000, getProductosByCategory(category))
        .then(response => setItems(response))}
    else { customFetch()}
    }, [productos]);

    return (
        <div className="container">
           <h1 className="tittle">Estas a un click de cambiar tu vida!</h1>
          { productos?.length < 0 ? <p>No existe</p> : <ItemList productos={productos}/> }
        </div>
    )
}


export default ItemListContainer