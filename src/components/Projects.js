import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt, FaMobileAlt, FaDesktop } from "react-icons/fa";
import { SiFlutter, SiReact } from "react-icons/si";
import "./Projects.css";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: "Namaz App",
      description: "Complete Islamic app featuring Quran, Dua, Zikr, Prayer Times, Tasbeeh Counter, and 99 Names of Allah & Prophets.",
      tech: ["Flutter", "Dart", "Firebase"],
      icon: <FaMobileAlt />,
      github: "https://github.com/yourusername/namaz-app",
      live: "https://your-app-link.com",
      image: "namaz-app.jpg", // Apni image ka naam
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio built with React featuring dark/light mode, animations, and responsive design.",
      tech: ["React", "CSS3", "EmailJS"],
      icon: <FaDesktop />,
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com",
      image: "portfolio.jpg",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Real-time weather application using OpenWeatherMap API with 5-day forecast.",
      tech: ["JavaScript", "API", "CSS3"],
      icon: <FaDesktop />,
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.com",
      image: "weather.jpg",
    },
  ];

  return (
    <section id="projects" className={`projects ${theme}`}>
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
          <p className="section-description">
            Here are some of the projects I've built to showcase my skills
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                <span className="project-tech-badge">{project.tech[0]}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;