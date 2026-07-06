import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Manahil<span>.</span></h3>
            <p>Building beautiful apps and websites</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by Manahil Sarfarz
          </p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;