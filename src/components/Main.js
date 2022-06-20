import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

    )
};

export default Main