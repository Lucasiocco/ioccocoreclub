import { productos } from "./productos";

export const customFetch = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time)
    })
}

export const getProductosById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos.filter(producto => producto.id === id))
      }, 3000);
    });
  };
  
  export const getProductosByCategory = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos.filter(producto => producto.category === category))
      }, 3000);
    });
  }