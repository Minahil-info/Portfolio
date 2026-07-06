import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <h2 className="logo">Manahil<span>.</span></h2>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;