import { createContext, useState, } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState ([])



 const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
        sumarCantidad(item.id, cantidad)
    } else {
        setCartItems([...cartItems, {
            ...item,
            cantidad: cantidad
        }])
    }
 };

 const isInCart = (id) => cartItems.some((prod) => prod.id === id);

 const sumarCantidad = (item, cantidad) => {
    const newProducts = cartItems.map((prod) => {
        if (prod.id === item.id) {
            const newProduct = {
                ...prod,
                cantidad: prod.cantidad + cantidad,
            };
            return newProduct;
        } else {
            return prod;
        }
    });
    setCartItems(newProducts);
};

const addItemNavBar = () => {
    let cantidad = 0
    cartItems.forEach((producto) => {
        cantidad = cantidad + producto.cantidad
})
    return cantidad
}


const deleteItem = (id) => {
    setCartItems(cartItems.filter((producto) => producto.id !== id))
}


const clear = () => {
    setCartItems ([])
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
    <CartContext.Provider value={{cartItems, addToCart, addItemNavBar, isInCart, deleteItem, clear, getTotal, getSubtotal, cartLenght}}>
        {children}
    </CartContext.Provider>
)

}

