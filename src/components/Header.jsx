import { Link } from 'react-router-dom';
import logo from '/assets/Portfolio logo.png';

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container text-center">
        <Link to="/">
          <img src={logo} alt="Xavier Mendoza Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
        </Link>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;