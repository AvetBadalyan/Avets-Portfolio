import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CategoryGroup from "../../Components/CategoryGroup/CategoryGroup";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import ProjectModal from "../../Components/ProjectModal/ProjectModal";
import { groupByCategory } from "../../utils/groupByCategory";
import "./Portfolio.scss";
import portfolioData from "./portfolioData.json";
import projectImages from "./projectImages";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  // Use the SAME media query the CSS uses (matchMedia), not window.innerWidth.
  // window.innerWidth reports the real window width even in a device emulator,
  // so it could render the desktop panel at a visually-mobile size (JS and CSS
  // disagreeing). matchMedia tracks the exact `max-width: 768px` breakpoint, so
  // the component swap and the stylesheet always agree.
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches,
  );

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches); // sync in case it changed before listener attached
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const projects = (portfolioData.websites || []).map((project) => ({
    ...project,
    image: projectImages[project.imageFile] || project.imageFile,
  }));

  const groupedProjects = groupByCategory(projects);
  const categories = ["all", ...groupedProjects.map((g) => g.category)];

  // Desktop filter: "all" shows every category group, otherwise just the one.
  const visibleGroups =
    activeCategory === "all"
      ? groupedProjects
      : groupedProjects.filter((g) => g.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Recent Projects</h2>
          <p className="portfolio__subtitle">
            A collection of apps I've built — from full-stack platforms to
            interactive experiences
          </p>
        </motion.div>

        {isMobile ? (
          /* Mobile: one horizontal slider per category, no filter buttons —
             the grouping itself is the navigation. */
          groupedProjects.map(({ category, projects: categoryProjects }) => (
            <CategorySlider
              key={category}
              category={category}
              projects={categoryProjects}
              onSelectProject={setSelectedProject}
            />
          ))
        ) : (
          /* Desktop: filter buttons + category-grouped bento grids. "All"
             shows every group; a filter narrows to one. */
          <>
            <motion.div
              className="portfolio__filters"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`portfolio__filter ${activeCategory === category ? "portfolio__filter--active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {visibleGroups.map(({ category, projects: categoryProjects }) => (
              <CategoryGroup
                key={category}
                category={category}
                projects={categoryProjects}
                onSelectProject={setSelectedProject}
              />
            ))}
          </>
        )}

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Portfolio;
