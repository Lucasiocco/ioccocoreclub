const NavBar = () => {
    return (
        <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">CoreClub</a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Services</a>
          <ul class="nav-dropdown">
            <li>
              <a href="#!">Entrenamientos Personalizados</a>
            </li>
            <li>
              <a href="#!">Seguimiento Online</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>
    )
};

export default NavBar