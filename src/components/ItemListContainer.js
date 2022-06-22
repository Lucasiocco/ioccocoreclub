import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {getProductosByCategory} from "../utils/productos";
import { customFetch } from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [ productos, setItems] = useState([]);
    const {category} = useParams();

  useEffect(() => {
    if(!category) {
        customFetch("productos")
            .then(response => {
                setItems(response)
            })
        } else {
            getProductosByCategory(category)
                .then(response => {
                    setItems(response)
                })
        }
    }, [category]);

    return (
        <div className="container">
            <h1 className="tittle">Estas a un click de cambiar tu vida!</h1>
            <ItemList productos={productos} />
        </div>
    )
}


export default ItemListContainer