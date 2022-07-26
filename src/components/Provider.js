import { createContext, useState, } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState ([])
 

 const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
        sumarCantidad(item.id, quantity)
    } else {
        setCartItems([...cartItems, {...item, quantity}])
    }
 };

 const isInCart = (id) => cartItems.some((prod) => prod.id === id);

 const sumarCantidad = (item, quantity) => {
    const newProductos = cartItems.map((prod) => {
        if (prod.id === item.id) {
            const newProducto = {
                ...prod,
                quantity: prod.quantity + quantity,
            };
            return newProducto;
        } else {
            return prod;
        }
    });
    setCartItems(newProductos);
};

const addItemNavBar = () => {
    let quantity = 0
    cartItems.forEach((producto) => {
        quantity = quantity + producto.quantity
})
    return quantity
}


const deleteItem = (id) => {
    setCartItems(cartItems.filter((producto) => producto.id !== id))
}


const clear = () => {
    setCartItems ([])
}

    const cartLenght = () => {
        let quantity = 0
        cartItems.forEach((producto) => {
            quantity = quantity + producto.quantity
        })
        return quantity
    }


const getSubtotal = (price, quantity) => {
    let subtotal = 0
    subtotal = subtotal + (price * quantity)
    return Number(subtotal)
}


    const getTotal = () => {
        let total = 0
        cartItems.forEach((producto) => {
            total = total + getSubtotal(producto.price, producto.quantity)
        })
        return Number(total)
    }

    const getTotalItems = () => {
        let total = 0
        cartItems.forEach((producto) => {
            total = total + producto.quantity
        })
        return total
    }


return (
    <CartContext.Provider value={{cartItems, getTotalItems, addItem, addItemNavBar, isInCart, deleteItem, clear, getTotal, getSubtotal, cartLenght}}>
        {children}
    </CartContext.Provider>
)

}

