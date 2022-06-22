export const productos = [
  {
    id: 1,
    name: 'Plan X3',
    image: './img/TheCoreClub.png',
    price: '$4500',
    category: 'Planes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    name: 'Plan X2',
    image: './img/TheCoreClub.png',
    price: '$3500',
    category: 'Planes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    name: 'Plan ON',
    image: './img/TheCoreClub.png',
    price: '$2500',
    category: 'Planes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 3000);
  });
};

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
