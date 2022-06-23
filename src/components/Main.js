import React from 'react'
import Hero from './Hero'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <main className="main">
    <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/productos/" element={<ItemListContainer />}></Route>
        <Route path="/category/:category" element={<ItemListContainer />}></Route>
        <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
</main>
  )
}

export default Main