import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import LazyImage from "../LazyImage/LazyImage";
import TechTag from "../TechTag/TechTag";
import { techColors } from "../../utils/techColors";
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
  const previousActiveElement = useRef(null);

  // Store the element that was focused before modal opened
  useEffect(() => {
    previousActiveElement.current = document.activeElement;
  }, []);

  // Focus the close button when modal opens, restore focus on close
  useEffect(() => {
    if (project && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [project]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  // Focus trap
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    },
    []
  );

  // Click outside to close
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
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="project-modal"
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyDown={handleKeyDown}
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
              <span className="project-modal__category">{project.category}</span>
            </div>

            {/* Content */}
            <div className="project-modal__content">
              <h2 id="modal-title" className="project-modal__title">
                {project.siteName}
              </h2>

              <p className="project-modal__description">{project.description}</p>

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
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal__btn project-modal__btn--secondary"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
