import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../Styling/Footer.css';
import Logo from "../Logo.png"


const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <div className="logo-and-text">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <p>&copy; 2023 Your E-commerce Store. All rights reserved.</p>
      </div>
      <ul className="social-icons">
          <li>
            <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
        <ul className="footer-links">
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/helpdesk">Help and Support</NavLink></li>
        <li><NavLink to="/terms">Terms and Conditions</NavLink></li>
        <li><NavLink to="/refunds">Refund and Replacements</NavLink></li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
