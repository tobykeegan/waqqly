import Image from "next/image";
import icon from "@/public/pawprint.png";
import bulmaBadge from "@/public/bulma.png";
export default function Navbar() {
  return (
    <nav className="navbar is-primary" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item is-size-3 has-text-weight-bold" href="/">
          <div className="level">
            <div className="level-left">
              <Image src={icon} alt="wagg.ly" width="30" height="30" />
            </div>
            <div className="level-right">
              <span>wagg.ly</span>
              <span className="tag is-warning is-medium">Beta</span>
            </div>
          </div>
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
        <div className="navbar-end">
          <div className="navbar-item">
            <a
              className="button is-link"
              target="_blank"
              href="https://docs.amplify.aws/gen2/"
            >
              Made with AWS Amplify Gen 2
            </a>
          </div>
          <div className="navbar-item">
            <a
              className="button"
              target="_blank"
              href="https://github.com/tobykeegan/waqqly"
            >
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
