import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import Projects from "./Projects";

const ProjectsCategories = ({ categories, projects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterProjectsHandler = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => filterProjectsHandler(category)}
          className={`btn cat__btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
      <Projects projects={filteredProjects} />
    </div>
  );
};

export default ProjectsCategories;
