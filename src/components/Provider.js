import { createContext, useState, } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setcartItems] = useState ([])


 // Agregar un producto al Cart
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

 // Agrega cantidad al icono del Cart en NavBar
const addItemNavBar = () => {
    let cantidad = 0
    cartItems.forEach((producto) => {
        cantidad = cantidad + producto.cantidad
})
    return cantidad
}


// Verifica si el producto ya fue agrgado al Cart
const isInCart = (id) => {
    return cartItems.some((producto) => (producto.id === id))
}

//Quitar prducto del Cart
const removeItem = (id) => {
    setcartItems(cartItems.filter((producto) => (producto.id !== id)))
}

//Vaciar Cart
const clear = () => {
    setcartItems ([])
}

    // Obtener número total de items
    const cartLenght = () => {
        let cantidad = 0
        cartItems.forEach((producto) => {
            cantidad = cantidad + producto.cantidad
        })
        return cantidad
    }

// Obtener el subtotal
const getSubtotal = (price, cantidad) => {
    let subtotal = 0
    subtotal = subtotal + (price * cantidad)
    return Number(subtotal)
}

// Obtener el total
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

