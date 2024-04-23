import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import ProjectsCategories from "./ProjectsCategories";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://avets-portfolio-default-rtdb.firebaseio.com/websites.json"
        );
        const result = await response.json();
        setProjects(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = projects.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  return (
    <section id="portfolio">
      <h2 data-aos="zoom-in-up" className="section-heading">
        Recent Projects
      </h2>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!isLoading && (
        <div className="container portfolio__container">
          <ProjectsCategories
            categories={uniqueCategories}
            projects={projects}
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
