import React from "react";

const Project = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Weather App</h3>
          <p>React app using API to show live weather.</p>
          <a href="https://github.com/kaviraghvani29/javaScript.git" target="_blank">
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Apartments</h3>
          <p>Appartment website.</p>
          <a href="https://github.com/kaviraghvani29/css_wix_project.git" target="_blank">
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built using React.</p>
          <a href="https://github.com/kaviraghvani29/Portfolio.git" target="_blank">
            GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Torch</h3>
          <p>Website created using Tailwind css.</p>
          <a href="https://github.com/kaviraghvani29/tailwind_css.git" target="_blank">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Project;