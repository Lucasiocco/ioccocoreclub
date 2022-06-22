import { Productos } from "./Productos";

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
            resolve(Productos.find(producto => producto.id === id));
        }, 2000)
    })
}

export const getProductByCat = (categoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Productos.filter(producto => producto.categoria == categoria));
        }, 2000)
    })
}