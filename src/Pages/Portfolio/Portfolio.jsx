import React from "react";
import "./Portfolio.scss";
import ProjectsCategories from "./ProjectsCategories";
import projectImages from "./projectImages";
import portfolioData from "./portfolioData.json";

const Portfolio = () => {
  const projects = (portfolioData.websites || []).map((project) => ({
    ...project,
    image: projectImages[project.imageFile] || project.imageFile,
  }));

  const categories = projects.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  return (
    <section id="portfolio">
      <h2 data-aos="zoom-in-up" className="section-heading">
        Recent Projects
      </h2>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
