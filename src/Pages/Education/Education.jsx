import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";
import TiltCard from "../../Components/TiltCard/TiltCard";
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
            Professional trainings, certifications, and academic studies
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

          <motion.div
            className="education__grid"
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {techCerts.map((item, index) => (
              <TiltCard
                key={item.id}
                className="education__card-tilt"
                tiltAmount={8}
                scale={1.02}
              >
                <motion.article
                  className="education__card"
                  variants={fadeIn("up", index * 0.08)}
                >
                  <div className="education__card-logo">
                    <img
                      src={item.logo}
                      alt={item.title}
                      width={140}
                      height={140}
                    />
                  </div>

                  <h4 className="education__card-title">{item.title}</h4>

                  <div className="education__card-content">
                    <p className="education__card-field">
                      <strong>Duration:</strong> {item.duration}
                    </p>
                    <p className="education__card-field">
                      <strong>Faculty:</strong> {item.faculty}
                    </p>
                    {item.description && (
                      <p className="education__card-field">
                        <strong>Description:</strong> {item.description}
                      </p>
                    )}
                  </div>

                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm education__card-link"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Certificate</span>
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </motion.article>
              </TiltCard>
            ))}
          </motion.div>
        </motion.div>
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

          <motion.div
            className="education__grid"
            variants={staggerContainer(0.12, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {academic.map((item, index) => (
              <TiltCard
                key={item.id}
                className="education__card-tilt"
                tiltAmount={8}
                scale={1.02}
              >
                <motion.article
                  className="education__card"
                  variants={fadeIn("up", index * 0.08)}
                >
                  <div className="education__card-logo">
                    <img
                      src={item.logo}
                      alt={item.title}
                      width={140}
                      height={140}
                    />
                  </div>

                  <h4 className="education__card-title">{item.title}</h4>

                  <div className="education__card-content">
                    <p className="education__card-field">
                      <strong>Duration:</strong> {item.duration}
                    </p>
                    <p className="education__card-field">
                      <strong>Faculty:</strong> {item.faculty}
                    </p>
                    {item.degree && (
                      <span className="education__card-degree">
                        {item.degree}
                      </span>
                    )}
                  </div>

                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm education__card-link"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Diploma</span>
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </motion.article>
              </TiltCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
