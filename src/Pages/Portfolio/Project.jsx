import React from "react";
import Card from "../../Components/Card/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project" />
      </div>
      <h4>{project.siteName}</h4>
      <p>{project.description}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.webUrl}
          className="btn sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.githubUrl}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </Card>
  );
};

export default Project;
