import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MINDTRACK</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#mood-tracker">About</a></li>
        <li><a href="#toolkit">Services</a></li>
        <li><a href="#insights">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
