import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { MiProvider } from './components/Provider';

const App = () => {
    return (
      <BrowserRouter>
      <MiProvider>
        <Header/>
        <Main/>
      </MiProvider>
        <Footer/>
      </BrowserRouter>
    );
  };

export default App