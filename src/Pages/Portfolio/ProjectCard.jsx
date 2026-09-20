import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import LazyImage from "../../Components/LazyImage/LazyImage";
import TiltCard from "../../Components/TiltCard/TiltCard";

/**
 * Tech badge brand colors.
 * These badges always render on the fixed dark hover overlay
 * (linear-gradient down to rgba(0,0,0,0.85)) in BOTH themes, so the text
 * color only needs to read against a dark surface. A few brand colors were
 * too dark for that (Express #888, Socket.io #666, JS #B8960B, deep blues) and
 * have been lightened to stay legible while keeping their recognizable hue.
 * The `bg` is a low-alpha tint of the same hue.
 */
const techColors = {
  React: { bg: "rgba(97, 218, 251, 0.15)", color: "#61DAFB" },
  "Node.js": { bg: "rgba(104, 160, 99, 0.18)", color: "#8CC084" },
  TypeScript: { bg: "rgba(49, 120, 198, 0.18)", color: "#5B9BE0" },
  MongoDB: { bg: "rgba(77, 179, 61, 0.18)", color: "#6FD35A" },
  PostgreSQL: { bg: "rgba(51, 103, 145, 0.2)", color: "#6FA8DA" },
  Redux: { bg: "rgba(118, 74, 188, 0.2)", color: "#A98EE0" },
  "RTK Query": { bg: "rgba(118, 74, 188, 0.2)", color: "#A98EE0" },
  Express: { bg: "rgba(160, 160, 160, 0.2)", color: "#C9C9C9" },
  "Socket.io": { bg: "rgba(160, 160, 160, 0.2)", color: "#BFBFBF" },
  "Framer Motion": { bg: "rgba(187, 78, 236, 0.18)", color: "#CE82F0" },
  Zustand: { bg: "rgba(99, 90, 220, 0.2)", color: "#8F86E8" },
  Firebase: { bg: "rgba(255, 149, 0, 0.18)", color: "#FFB84D" },
  AWS: { bg: "rgba(255, 153, 0, 0.18)", color: "#FFB43D" },
  Supabase: { bg: "rgba(62, 207, 142, 0.18)", color: "#4FD69A" },
  "React Hook Form": { bg: "rgba(236, 90, 41, 0.18)", color: "#F07A55" },
  "TanStack Query": { bg: "rgba(255, 65, 84, 0.18)", color: "#FF6E7C" },
  Vite: { bg: "rgba(189, 52, 254, 0.16)", color: "#C77CF5" },
  JavaScript: { bg: "rgba(240, 219, 79, 0.22)", color: "#F0DB4F" },
  HTML: { bg: "rgba(228, 77, 38, 0.18)", color: "#F06A4D" },
  CSS: { bg: "rgba(21, 114, 182, 0.2)", color: "#4F9BD9" },
  PWA: { bg: "rgba(93, 95, 239, 0.2)", color: "#8B8DF5" },
};

const defaultTechStyle = { bg: "rgba(139, 92, 246, 0.2)", color: "#B49CF0" };

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
