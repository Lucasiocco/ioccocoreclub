import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        
<footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><NavLink to="./Hero">{"Inicio"}</NavLink></li>
      <li className="nav-item"><NavLink to="./Nosotros">{"Nosotros"}</NavLink></li>
      <li className="nav-item"><NavLink to="/">{"Tienda"}</NavLink></li>
    </ul>
    <ul>
      <li className="nav-item"><a href="https://www.instagram.com/thecoreclub.ok/" class="nav-link px-2">Instagram</a></li>
      <li className="nav-item"><a href="https://open.spotify.com/playlist/1SDTtjP2DxflUjpzQSGkLy" class="nav-link px-2">Spotify</a></li>
    </ul>
  </footer>

    )
};

export default Footer