import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProductos } from "../utils/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [ productos, setItems] = useState([]);
    const params = useParams()
    console.log(params);

  useEffect(() => {
    getProductos()
        .then((resultado) => {
            setItems(resultado);
    }) .catch((error) => { console.log(error); });

    }, []);

    return (
        <div>
            <h1>Estas a un click de cambiar tu vida!</h1>
            <ItemList productos={productos} />
        </div>
    )
}


export default ItemListContainer