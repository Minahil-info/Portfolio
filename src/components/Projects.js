import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>React based personal portfolio.</p>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>API based weather application.</p>
        </div>

        <div className="project-card">
          <h3>To-Do App</h3>
          <p>Task management app.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;