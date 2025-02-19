import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_amolen.png';
import './Navbar.css'; // Importa el CSS aquí

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Amolen Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">¿Quién soy?</Link></li>
        <li><Link to="/estudios">Estudios</Link></li>
        <li><Link to="/diseños">Diseños</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

