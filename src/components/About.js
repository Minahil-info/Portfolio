import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaUserGraduate, FaCode, FaPalette, FaHeart } from "react-icons/fa";
import "./About.css";

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className={`about ${theme}`}>
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Know Who I Am</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              👋 Hello! I'm <span className="highlight">Manahil Sarfarz</span>, 
              a passionate Computer Science student at 
              <span className="highlight"> Baba Guru Nanak University</span>.
            </p>
            
            <p>
              Currently in my <strong>6th semester</strong>, I'm deeply interested in 
              creating beautiful and functional applications. I believe in continuous 
              learning and love exploring new technologies.
            </p>

            <p>
              My journey in tech started with web development and now I'm expanding 
              into mobile app development with Flutter. I enjoy solving problems and 
              building solutions that make a difference.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">6th</span>
                <span className="stat-label">Semester</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Skills</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">🎯</span>
                <span className="stat-label">Goal: Internship</span>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <FaUserGraduate className="card-icon" />
              <h3>Education</h3>
              <p>Baba Guru Nanak University</p>
              <p className="card-detail">CS Student | 6th Semester</p>
            </div>

            <div className="about-card">
              <FaCode className="card-icon" />
              <h3>Development</h3>
              <p>Web & Flutter Developer</p>
              <p className="card-detail">React, Node.js, Flutter</p>
            </div>

            <div className="about-card">
              <FaPalette className="card-icon" />
              <h3>Design</h3>
              <p>Graphic Design (Canva)</p>
              <p className="card-detail">Basic UI/UX Design</p>
            </div>

            <div className="about-card">
              <FaHeart className="card-icon" />
              <h3>Passion</h3>
              <p>Building Islamic Apps</p>
              <p className="card-detail">Namaz App Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;