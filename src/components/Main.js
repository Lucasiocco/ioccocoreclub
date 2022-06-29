import React from 'react'
import Hero from './Hero'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Carrito from './Carrito'
import Checkout from './Checkout'
import Nosotros from './Nosotros'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <main className="main">
    <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
</main>
  )
}

export default Main