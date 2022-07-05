import { createContext, useState, } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setcartItems] = useState ([])



 const addItem = (id, image, name, price, cantidad) => {
    if (isInCart(id)) {
        let copia = cartItems.findIndex((copia) => (copia.id === id))
        let copiaCart = [...cartItems]
        copiaCart[copia].cantidad += cantidad
        setcartItems(copiaCart)
    } else {
        const itemToAdd = {id, image, name, price, cantidad}
        setcartItems([...cartItems, itemToAdd])
    }
 }


const addItemNavBar = () => {
    let cantidad = 0
    cartItems.forEach((producto) => {
        cantidad = cantidad + producto.cantidad
})
    return cantidad
}


const isInCart = (id) => {
    return cartItems.some((producto) => (producto.id === id))
}


const removeItem = (id) => {
    setcartItems(cartItems.filter((producto) => (producto.id !== id)))
}


const clear = () => {
    setcartItems ([])
}

    const cartLenght = () => {
        let cantidad = 0
        cartItems.forEach((producto) => {
            cantidad = cantidad + producto.cantidad
        })
        return cantidad
    }


const getSubtotal = (price, cantidad) => {
    let subtotal = 0
    subtotal = subtotal + (price * cantidad)
    return Number(subtotal)
}


    const getTotal = () => {
    let total = 0
    cartItems.forEach((producto) => {
        total = total + (producto.cantidad * producto.price)
    })
    return Number(total)
}

return (
    <CartContext.Provider value={{cartItems, addItem, addItemNavBar, isInCart, removeItem, clear, getTotal, getSubtotal, cartLenght}}>
        {children}
    </CartContext.Provider>
)

}

