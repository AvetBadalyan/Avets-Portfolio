import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import LazyImage from "../../Components/LazyImage/LazyImage";
import TiltCard from "../../Components/TiltCard/TiltCard";

// Tech badge colors
const techColors = {
  React: { bg: "rgba(97, 218, 251, 0.15)", color: "#61DAFB" },
  "Node.js": { bg: "rgba(104, 160, 99, 0.15)", color: "#68A063" },
  TypeScript: { bg: "rgba(49, 120, 198, 0.15)", color: "#3178C6" },
  MongoDB: { bg: "rgba(77, 179, 61, 0.15)", color: "#4DB33D" },
  PostgreSQL: { bg: "rgba(51, 103, 145, 0.15)", color: "#336791" },
  Redux: { bg: "rgba(118, 74, 188, 0.15)", color: "#764ABC" },
  "RTK Query": { bg: "rgba(118, 74, 188, 0.15)", color: "#764ABC" },
  Express: { bg: "rgba(128, 128, 128, 0.18)", color: "#888" },
  "Socket.io": { bg: "rgba(37, 37, 37, 0.18)", color: "#666" },
  "Framer Motion": { bg: "rgba(187, 78, 236, 0.15)", color: "#BB4EEC" },
  Zustand: { bg: "rgba(67, 56, 202, 0.15)", color: "#4338CA" },
  Firebase: { bg: "rgba(255, 149, 0, 0.15)", color: "#F57C00" },
  AWS: { bg: "rgba(255, 153, 0, 0.15)", color: "#D9820A" },
  Supabase: { bg: "rgba(62, 207, 142, 0.15)", color: "#2E9E6B" },
  "React Hook Form": { bg: "rgba(236, 90, 41, 0.15)", color: "#EC5A29" },
  "TanStack Query": { bg: "rgba(255, 65, 84, 0.15)", color: "#E53E4E" },
  Vite: { bg: "rgba(189, 52, 254, 0.12)", color: "#8B36C6" },
  JavaScript: { bg: "rgba(240, 219, 79, 0.22)", color: "#B8960B" },
  HTML: { bg: "rgba(228, 77, 38, 0.15)", color: "#E44D26" },
  CSS: { bg: "rgba(21, 114, 182, 0.15)", color: "#1572B6" },
  PWA: { bg: "rgba(93, 95, 239, 0.15)", color: "#5D5FEF" },
};

const defaultTechStyle = { bg: "rgba(139, 92, 246, 0.15)", color: "#7C5CD6" };

const ProjectCard = ({ project, index }) => {
  const techs = (project.tech || []).slice(0, 4);

  return (
    <TiltCard
      className="project-card"
      tiltAmount={6}
      scale={1.02}
      glareEnabled={true}
    >
      {/* Image + hover overlay */}
      <div className="project-card__image-wrapper">
        <LazyImage
          src={project.image}
          alt={project.siteName}
          className="project-card__image"
        />

        <div className="project-card__overlay">
          <div className="project-card__overlay-content">
            <motion.span
              className="project-card__category"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.category}
            </motion.span>
            <motion.h3
              className="project-card__title"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {project.siteName}
            </motion.h3>

            {techs.length > 0 && (
              <motion.div
                className="project-card__techs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {techs.map((tech, i) => {
                  const style = techColors[tech] || defaultTechStyle;
                  return (
                    <motion.span
                      key={tech}
                      className="project-card__tech"
                      style={{ background: style.bg, color: style.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </motion.div>
            )}

            <div className="project-card__actions">
              <motion.a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--primary"
                aria-label={`Open live demo of ${project.siteName}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--secondary"
                aria-label={`View source code of ${project.siteName} on GitHub`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
                <span>Code</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Always-visible caption */}
      <div className="project-card__info">
        <div className="project-card__info-head">
          <h3 className="project-card__title-static">{project.siteName}</h3>
          <span className="project-card__category-static">
            {project.category}
          </span>
        </div>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__links">
          <a
            href={project.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            GitHub
          </a>
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;
