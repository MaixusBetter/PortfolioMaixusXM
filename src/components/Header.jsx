import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <h1 className="text-center">Xavier Mendoza</h1>
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
