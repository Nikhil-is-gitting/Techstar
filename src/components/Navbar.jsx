import React, { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FarmConnect</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#farmers">Farmers</a>
        <a href="#traders">Traders</a>
        <a href="#consumers">Consumers</a>
        <a href="#transporters">Transporters</a>
        <a href="#community">Community</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>
    </nav>
  );
}

export default Navbar;