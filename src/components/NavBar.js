import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <>
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TheCoreClub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/categoria/Inicio">Inicio</Link>
        </li>
        <li class="nav-item">
          <Link to="/categoria/Tienda">Tienda</Link>
        </li>
        <li class="nav-item">
          <Link to="/categoria/Nosotros">Nosotros</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
    </>
    )
};

export default NavBar