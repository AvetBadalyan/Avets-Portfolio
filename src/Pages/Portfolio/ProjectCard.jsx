import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import LazyImage from "../../Components/LazyImage/LazyImage";
import TechTag from "../../Components/TechTag/TechTag";
import TiltCard from "../../Components/TiltCard/TiltCard";
import { techColors } from "../../utils/techColors";

const ProjectCard = ({ project, onSelect }) => {
  const techs = (project.tech || []).slice(0, 4);
  // Only offer "Details" when the modal has something the card doesn't —
  // i.e. a challenge write-up. Otherwise the modal would just repeat the card.
  const hasDetails = Boolean(project.challenge);

  // Mouse-convenience: clicking anywhere on the card opens the modal. This is a
  // progressive enhancement for pointer users only — the card is NOT given
  // role="button"/tabIndex, so it stays out of the tab order and out of the
  // a11y tree as an interactive element. Keyboard and screen-reader users use
  // the real <button> (Details) and <a> (Demo/Code) inside. The links call
  // stopPropagation so they don't also trigger this.
  const handleCardClick = () => {
    if (hasDetails) onSelect?.();
  };

  return (
    <TiltCard
      className="project-card"
      tiltAmount={6}
      scale={1.02}
      onClick={handleCardClick}
    >
      {/* Image + hover overlay */}
      <div className="project-card__image-wrapper">
        <LazyImage
          src={project.image}
          alt={project.siteName}
          className="project-card__image"
          width={600}
          height={400}
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
              {hasDetails && (
                <button
                  type="button"
                  className="project-card__btn project-card__btn--primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect?.();
                  }}
                  aria-label={`View details of ${project.siteName}`}
                >
                  <FaInfoCircle />
                  <span>Details</span>
                </button>
              )}
              <motion.a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`project-card__btn ${hasDetails ? "project-card__btn--secondary" : "project-card__btn--primary"}`}
                aria-label={`Open live demo of ${project.siteName}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt />
                <span>Demo</span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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

        {/* Mobile-only actions — overlay is not available on touch */}
        <div className="project-card__mobile-actions">
          {hasDetails && (
            <button
              type="button"
              className="project-card__btn project-card__btn--primary"
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.();
              }}
              aria-label={`View details of ${project.siteName}`}
            >
              <FaInfoCircle />
              <span>Details</span>
            </button>
          )}
          <a
            href={project.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`project-card__btn ${hasDetails ? "project-card__btn--secondary" : "project-card__btn--primary"}`}
            aria-label={`Open live demo of ${project.siteName}`}
          >
            <FaExternalLinkAlt />
            <span>Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
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
