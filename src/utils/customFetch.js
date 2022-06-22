import { productos } from "./productos";

export const customFetch = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === id));
        }, 2000)
    })
}

export const getProductByCat = (categoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(producto => producto.categoria == categoria));
        }, 2000)
    })
}