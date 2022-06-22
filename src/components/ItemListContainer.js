import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Productos } from "../utils/Productos";
import { customFetch } from "../utils/customFetch";

const ItemListContainer = () => {

    const [ productos, setItems] = useState([]);

  useEffect(() => {
    customFetch(2000, Productos)
    .then(resultado => setItems(resultado))
    
    }, [productos]);

    return (
        <div className="container">
            <h1 className="tittle">Estas a un click de cambiar tu vida!</h1>
            <ItemList productos={productos} />
        </div>
    )
}


export default ItemListContainer