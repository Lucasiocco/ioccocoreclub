import ItemListContainer from "./ItemListContainer";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <>
        <Routes>
            <Route path="/categoria/Inicio" element={<ItemListContainer />} />
            <Route path="/categoria/Tienda" element={<ItemListContainer />} />
            <Route path="/categoria/Nosotros" element={<ItemListContainer />} />
        </Routes> 
        </>
    )
};

export default Main