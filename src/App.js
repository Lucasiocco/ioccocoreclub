import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/Provider';
import { collectionProductos } from './Firebase';
import { addDoc } from 'firebase/firestore';
import { productos } from './components/productos';


//productos.map((producto) => addDoc(collectionProductos, producto));

const App = () => {
    return (
      <CartProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    );
  };

export default App