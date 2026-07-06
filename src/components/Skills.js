import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaGitAlt, FaGithub,
  FaMobileAlt, FaDesktop, FaPalette, FaDatabase,
  FaCrown, FaRocket, FaHeart
} from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skills = {
    languages: [
      { name: "C++", icon: "💻", level: 75 },
      { name: "Python", icon: <FaPython />, level: 60 },
      { name: "JavaScript", icon: <FaJs />, level: 80 },
    ],
    frontend: [
      { name: "HTML5", icon: <FaHtml5 />, level: 85 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 80 },
      { name: "React", icon: <FaReact />, level: 70 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, level: 55 },
      { name: "Database", icon: <FaDatabase />, level: 45 },
    ],
    mobile: [
      { name: "Flutter", icon: <FaMobileAlt />, level: 60 },
      { name: "App Dev", icon: <FaMobileAlt />, level: 55 },
    ],
    design: [
      { name: "Canva", icon: <FaPalette />, level: 75 },
      { name: "UI/UX Basic", icon: <FaPalette />, level: 50 },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt />, level: 70 },
      { name: "GitHub", icon: <FaGithub />, level: 75 },
    ],
  };

  return (
    <section id="skills" className={`skills ${theme}`}>
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">My Arsenal</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
          <p className="section-description">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skills-category">
            <div className="category-header">
              <FaCrown className="category-icon" />
              <h3>Languages</h3>
            </div>
            <div className="skills-list">
              {skills.languages.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="skills-category">
            <div className="category-header">
              <FaDesktop className="category-icon" />
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skills-category">
            <div className="category-header">
              <FaDatabase className="category-icon" />
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="skills-category">
            <div className="category-header">
              <FaMobileAlt className="category-icon" />
              <h3>Mobile App</h3>
            </div>
            <div className="skills-list">
              {skills.mobile.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="skills-category">
            <div className="category-header">
              <FaPalette className="category-icon" />
              <h3>Design</h3>
            </div>
            <div className="skills-list">
              {skills.design.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skills-category">
            <div className="category-header">
              <FaRocket className="category-icon" />
              <h3>Tools</h3>
            </div>
            <div className="skills-list">
              {skills.tools.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="skills-fact">
          <FaHeart className="fact-icon" />
          <p>
            Always learning and growing! Currently exploring <strong>Flutter</strong> and <strong>AI/ML</strong> 
            to expand my skillset 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;