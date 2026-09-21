import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import LazyImage from "../../Components/LazyImage/LazyImage";
import TechTag from "../../Components/TechTag/TechTag";
import TiltCard from "../../Components/TiltCard/TiltCard";
import { techColors } from "../../utils/techColors";

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

        {/* Overlay: gradient + category + title + buttons — desktop only */}
        <div className="project-card__overlay">
          <div className="project-card__overlay-content">
            <span className="project-card__overlay-category">
              {project.category}
            </span>
            <h3 className="project-card__overlay-title">{project.siteName}</h3>
            {techs.length > 0 && (
              <div className="project-card__overlay-techs">
                {techs.map((tech) => (
                  <TechTag
                    key={tech}
                    name={tech}
                    color={techColors[tech]}
                    size="sm"
                  />
                ))}
              </div>
            )}
            <div className="project-card__overlay-actions">
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

      {/* Caption — always visible on all screen sizes */}
      <div className="project-card__info">
        <div className="project-card__info-head">
          <h3 className="project-card__title-static">{project.siteName}</h3>
          <span className="project-card__category-static">
            {project.category}
          </span>
        </div>

        <p className="project-card__description">{project.description}</p>

        {/* Tags shown on mobile (overlay handles desktop) */}
        {techs.length > 0 && (
          <div className="project-card__caption-techs">
            {techs.map((tech) => (
              <TechTag
                key={tech}
                name={tech}
                color={techColors[tech]}
                size="sm"
              />
            ))}
          </div>
        )}

        {/* Mobile-only buttons — overlay is not available on touch */}
        <div className="project-card__mobile-actions">
          <a
            href={project.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--primary"
            aria-label={`Open live demo of ${project.siteName}`}
          >
            <FaExternalLinkAlt />
            <span>Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--secondary"
            aria-label={`View source code of ${project.siteName} on GitHub`}
          >
            <FaGithub />
            <span>Code</span>
          </a>
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;
