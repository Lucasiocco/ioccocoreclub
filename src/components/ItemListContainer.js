import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import productos from "../utils/productos";

function ItemListContainer() {

    const [items, setItems] = useState([]);

  useEffect(() => {
    customFetch(3000, productos)
        .then(resultado => setItems(resultado))
    }, [items]);

    return (
        <div>
            <ItemList productos={items} />
        </div>
    )
}


export default ItemListContainer