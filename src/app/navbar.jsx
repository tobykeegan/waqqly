export default function Navbar() {
  return (
    <nav className="navbar is-success" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item is-size-3 has-text-weight-bold" href="/">
          waqq.ly
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href=""
        ></a>
      </div>

      <div id="navbar-main" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Register </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/register/pet">
                Register a pet
              </a>
              <a className="navbar-item" href="/register/walker">
                Register a walker
              </a>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> View </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="/view/pets">
                View our pets
              </a>
              <a className="navbar-item" href="/view/walkers">
                View the walkers
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
