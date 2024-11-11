import React, { useState } from "react";
import "./Navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">My Work</a></li>
        <li>
          <a 
            href="./images/FED CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
