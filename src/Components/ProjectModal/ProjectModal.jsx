import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { techColors } from "../../utils/techColors";
import LazyImage from "../LazyImage/LazyImage";
import TechTag from "../TechTag/TechTag";
import "./ProjectModal.scss";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.15 },
  },
};

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Trap focus inside the modal, close on Escape, lock scroll, and restore
  // focus to the trigger on close. Focus starts on the close button.
  useFocusTrap(Boolean(project), {
    containerRef: modalRef,
    onClose,
    initialFocusRef: closeButtonRef,
  });

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const techs = project?.tech || [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal__overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleOverlayClick}
        >
          <motion.div
            className="project-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              className="project-modal__close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <div className="project-modal__image-wrapper">
              <LazyImage
                src={project.image}
                alt={project.siteName}
                className="project-modal__image"
                width={800}
                height={450}
              />
              <span className="project-modal__category">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="project-modal__content">
              <h2 id="project-modal-title" className="project-modal__title">
                {project.siteName}
              </h2>

              <p className="project-modal__description">
                {project.description}
              </p>

              {/* Challenge section - the key differentiator */}
              {project.challenge && (
                <div className="project-modal__challenge">
                  <h3 className="project-modal__challenge-heading">
                    💡 The Challenge
                  </h3>
                  <p className="project-modal__challenge-text">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Tech stack */}
              {techs.length > 0 && (
                <div className="project-modal__techs">
                  <h3 className="project-modal__techs-heading">Tech Stack</h3>
                  <div className="project-modal__techs-list">
                    {techs.map((tech) => (
                      <TechTag
                        key={tech}
                        name={tech}
                        color={techColors[tech]}
                        size="md"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="project-modal__actions">
                <a
                  href={project.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal__btn project-modal__btn--primary"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal__btn project-modal__btn--secondary"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
