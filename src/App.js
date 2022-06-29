import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/Provider';

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