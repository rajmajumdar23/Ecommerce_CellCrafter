import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styling/Navbar.css';
import Logo from '../Logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={`menu-toggle ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${showMenu ? 'open' : ''}`}>
        <li>
          <NavLink to="/" id="Hover"style={{ textDecoration: 'none', listStyle: 'none' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" id="Hover"style={{ textDecoration: 'none', listStyle: 'none' }}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" id="Hover"style={{ textDecoration: 'none', listStyle: 'none' }}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" id="Hover"style={{ textDecoration: 'none', listStyle: 'none' }}>
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
