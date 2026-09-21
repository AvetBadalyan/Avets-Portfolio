import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { fadeIn, staggerContainer } from "../../utils/animations";
import data from "./data";
import "./Education.scss";

const Education = () => {
  // Separate into tech certifications and academic degrees
  const techCerts = data.filter(
    (item) =>
      item.faculty.toLowerCase().includes("javascript") ||
      item.faculty.toLowerCase().includes("react") ||
      item.faculty.toLowerCase().includes("frontend") ||
      item.faculty.toLowerCase().includes("fullstack"),
  );

  const academic = data.filter((item) => !techCerts.includes(item));

  return (
    <section id="education" className="education">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="education__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Education & Training</h2>
          <p className="education__subtitle">
            Professional certifications and academic background
          </p>
        </motion.div>

        {/* Tech Certifications */}
        <motion.div
          className="education__section"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h3
            className="education__section-title"
            variants={fadeIn("up", 0)}
          >
            <FaCertificate />
            <span>Technical Training</span>
          </motion.h3>

          <div className="education__grid">
            {techCerts.map((item, index) => (
              <motion.article
                key={item.id}
                className="education__card"
                variants={fadeIn("up", 0)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="education__card-logo">
                  <img src={item.logo} alt={item.title} />
                </div>

                <div className="education__card-content">
                  <h4 className="education__card-title">{item.title}</h4>
                  <p className="education__card-faculty">{item.faculty}</p>
                  <span className="education__card-duration">
                    {item.duration}
                  </span>

                  {item.description && (
                    <p className="education__card-description">
                      {item.description}
                    </p>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm education__card-link"
                    >
                      <FaCertificate />
                      <span>View Certificate</span>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Academic Degrees */}
        <motion.div
          className="education__section"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h3
            className="education__section-title"
            variants={fadeIn("up", 0)}
          >
            <FaGraduationCap />
            <span>Academic Background</span>
          </motion.h3>

          <div className="education__grid education__grid--academic">
            {academic.map((item, index) => (
              <motion.article
                key={item.id}
                className="education__card education__card--academic"
                variants={fadeIn("up", 0)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="education__card-logo">
                  <img src={item.logo} alt={item.title} />
                </div>

                <div className="education__card-content">
                  <h4 className="education__card-title">{item.title}</h4>
                  <p className="education__card-faculty">{item.faculty}</p>
                  <span className="education__card-duration">
                    {item.duration}
                  </span>

                  {item.degree && (
                    <span className="education__card-degree">
                      {item.degree}
                    </span>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm education__card-link"
                    >
                      <FaCertificate />
                      <span>View Diploma</span>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
