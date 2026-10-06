import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowDown, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { experienceData } from "./data";
import "./Experience.scss";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openModal = (job) => setSelectedJob(job);
  const closeModal = () => setSelectedJob(null);

  // Focus trap + Escape + scroll-lock + focus restore to the trigger button.
  // initialFocusRef ensures focus lands on the close button so keyboard users
  // always have a consistent, predictable exit point on modal open.
  useFocusTrap(Boolean(selectedJob), {
    containerRef: modalRef,
    onClose: closeModal,
    initialFocusRef: closeButtonRef,
  });

  return (
    <MotionConfig reducedMotion="user">
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            className="experience__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Professional Experience</h2>
            <p className="experience__subtitle">
              3+ years building products at scale for global brands and
              platforms
            </p>
          </motion.div>

          <div className="experience__list">
            {experienceData
              .filter((job) => !job.compact)
              .map((job, index) => (
                <motion.article
                  key={job.id}
                  className="experience__card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="experience__card-header">
                    <div className="experience__logo-wrapper">
                      <div className="experience__logo">
                        <img
                          src={job.logo}
                          alt={job.company}
                          width={64}
                          height={64}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="experience__meta">
                      <h3 className="experience__company">{job.company}</h3>
                      <p className="experience__role">{job.role}</p>
                      <span className="experience__duration">
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  <div className="experience__content">
                    <p className="experience__project">
                      {job.projectDescription}
                    </p>

                    {job.note && (
                      <p className="experience__note">
                        <strong>Note:</strong> {job.note}
                      </p>
                    )}

                    <div className="experience__highlights-section">
                      <ul className="experience__highlights">
                        {job.highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="experience__tech">
                      {job.tech.map((tech) => (
                        <span key={tech} className="experience__tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="experience__links">
                      {job.link && (
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--outline btn--sm"
                        >
                          {job.linkText}
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {job.links &&
                        job.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--outline btn--sm"
                          >
                            {link.text}
                            <FaExternalLinkAlt />
                          </a>
                        ))}
                      {job.contributions && (
                        <button
                          type="button"
                          className="btn btn--primary btn--sm"
                          onClick={() => openModal(job)}
                          aria-label={`View details about ${job.company}`}
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}

            {/* Compact Freelance Entry */}
            {experienceData
              .filter((job) => job.compact)
              .map((job) => (
                <motion.div
                  key={job.id}
                  className="experience__compact-entry"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span
                    className="experience__compact-marker"
                    aria-hidden="true"
                  >
                    🚀
                  </span>
                  <div className="experience__compact-body">
                    <div className="experience__compact-meta">
                      <h3 className="experience__compact-company">
                        {job.company}
                      </h3>
                      <span className="experience__compact-role">
                        {job.role}
                      </span>
                      <span className="experience__compact-duration">
                        · {job.duration}
                      </span>
                    </div>
                    <p className="experience__compact-desc">
                      {job.projectDescription}
                    </p>
                    {job.portfolioLink && (
                      <a href="#portfolio" className="experience__compact-link">
                        See projects
                        <FaArrowDown />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* AnimatePresence keeps the modal mounted through its exit animation —
          without it the exit variant below never plays. */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="experience-modal__overlay"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                ref={modalRef}
                className="experience-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="experience-modal-title"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  ref={closeButtonRef}
                  className="experience-modal__close"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>

                <div className="experience-modal__header">
                  <div className="experience-modal__logo">
                    <img
                      src={selectedJob.logo}
                      alt={selectedJob.company}
                      width={120}
                      height={120}
                      loading="lazy"
                    />
                  </div>
                  <div className="experience-modal__info">
                    <h2
                      id="experience-modal-title"
                      className="experience-modal__company"
                    >
                      {selectedJob.company}
                    </h2>
                    <p className="experience-modal__role">
                      {selectedJob.role} · {selectedJob.duration}
                    </p>
                    <p className="experience-modal__intro">
                      {selectedJob.companyDescription}
                    </p>
                    {selectedJob.link && (
                      <a
                        href={selectedJob.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline btn--sm"
                      >
                        {selectedJob.linkText}
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                {selectedJob.contributions && (
                  <div className="experience-modal__contributions">
                    <h3 className="experience-modal__contributions-title">
                      Key contributions at {selectedJob.company}
                    </h3>
                    <div className="experience-modal__contributions-grid">
                      {selectedJob.contributions.map((contrib, i) => (
                        <div key={i} className="contribution-card">
                          <span
                            className="contribution-card__icon"
                            aria-hidden="true"
                          >
                            {contrib.icon}
                          </span>
                          <h4 className="contribution-card__title">
                            {contrib.title}
                          </h4>
                          <ul className="contribution-card__points">
                            {contrib.points.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
};

export default Experience;
