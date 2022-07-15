import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <img className="imgLogo" src="../img/TheCoreClub.png" alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink to="./Hero">{"Inicio"}</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="./Nosotros">{"Nosotros"}</NavLink>
        </li>
        <li class="nav-item dropdown">
          <NavLink to="" class="nav-link dropdown-toggle" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
            {"Tienda"}
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink to="/">{"Ver Todo"}</NavLink>
          <NavLink to="category/Planes">{"Planes"}</NavLink>
          <NavLink to="category/Suplementos">{"Suplementos"}</NavLink>
          </ul>
        </li>
      </ul>
    </div>
      <CartWidget />
  </div>
</nav>
    </>
    )
};

export default NavBar