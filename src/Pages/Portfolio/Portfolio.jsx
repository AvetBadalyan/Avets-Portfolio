import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./Portfolio.scss";
import portfolioData from "./portfolioData.json";
import ProjectCard from "./ProjectCard";
import projectImages from "./projectImages";

// Staggered animation for cards
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = (portfolioData.websites || []).map((project) => ({
    ...project,
    image: projectImages[project.imageFile] || project.imageFile,
  }));

  // Get unique categories
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Determine which projects get featured (larger) cards.
  // The `featured` flag lives in portfolioData.json so the decision is
  // stable — it doesn't shift when the active category filter changes.
  const getFeaturedStatus = (project) =>
    project.featured ? "featured" : "normal";

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        {/* Section Header */}
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

        {/* Category Filter */}
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

        {/* Projects Grid with Staggered Animation */}
        <motion.div
          className="portfolio__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`portfolio__item portfolio__item--${getFeaturedStatus(project)}`}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
