import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header () {

  const logOut = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Pelispedia</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado">Listado</Link>
              </li>
              <li className="nav-item">
                <button onClick={logOut}>LogOut</button>
              </li>
              
            </ul>
          </div>
        </div>

        <Buscador />
      </nav>
    </header>
  )
};

export default Header;