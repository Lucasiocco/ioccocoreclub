import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <>
        <h1>
            {props.greeting}	
        </h1>
        <ItemCount />
        </>
    )
}

export default ItemListContainer