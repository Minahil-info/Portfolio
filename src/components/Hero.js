import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Hero.css";
import profile from "../profile.jpeg";

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const strings = [
    "CS Student 🎓",
    "Web Developer 💻",
    "Flutter Developer 📱",
    "Graphic Designer 🎨",
  ];

  useEffect(() => {
    if (subIndex === strings[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings]);

  useEffect(() => {
    setText(strings[index].substring(0, subIndex));
  }, [subIndex, index, strings]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">👋 Hello, I'm</span>
            <h1>Manahil Sarfarz</h1>
            <div className="typing-wrapper">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Passionate about building beautiful apps and websites. 
              6th Semester CS student at Baba Guru Nanak University.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="/Manahil_CV.pdf" download className="btn-secondary">
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:manahil@email.com">
                <MdEmail />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img src={profile} alt="Manahil Sarfarz" />
              <div className="floating-badge">
                <span>✨ Available for Internship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;