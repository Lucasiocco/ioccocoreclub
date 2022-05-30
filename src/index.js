// Traigo libreria de REACT
import React from 'react';
// Traigo libreria de ReactDOM
import ReactDOM from 'react-dom/client';
// Agarro una APP de REACT que ya existe
import App from './App'; 
import './style.css';
// Mostrar la APP en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
