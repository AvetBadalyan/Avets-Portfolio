import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import EPAMLogo from "./../../assets/education/EPAM.webp";
import ashstoneLogo from "./../../assets/pics/ashtone.webp";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.webp";
import "./Experience.scss";

const experienceData = [
  {
    id: 1,
    company: "EPAM Systems",
    logo: EPAMLogo,
    role: "Full-Stack Developer",
    duration: "July 2025 - Present",
    type: "Full-time",
    description:
      "Contributing to the corporate website of one of the world's largest engineering companies, built on Adobe Experience Manager (AEM) and serving millions of monthly visitors.",
    highlights: [
      "Resolved 40+ UI issues on www.epam.com, improving responsiveness and UX consistency",
      "Wrote Sinon.js unit tests for 20+ frontend modules, reducing regression risk",
      "Collaborated daily with cross-functional teams in agile sprints",
    ],
    tech: ["AEM", "JavaScript", "Sinon.js", "HTL", "SCSS"],
    link: "https://www.epam.com/",
    linkText: "Visit EPAM",
  },
  {
    id: 2,
    company: "Ashstone Studios",
    logo: ashstoneLogo,
    role: "Frontend (Shopify) Developer",
    duration: "June 2024 - January 2026",
    type: "Full-time",
    description:
      "Built and maintained Shopify storefronts, delivering feature enhancements, theme customization, debugging, and performance improvements.",
    highlights: [
      "Delivered 5 custom Shopify themes including Motto — published on official Shopify Theme Store",
      "Resolved 30+ client support requests for international e-commerce brands",
      "Worked in parallel with EPAM role from July 2025 to December 2025",
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "SCSS", "Tailwind"],
    links: [
      {
        url: "https://themes.shopify.com/themes/motto/presets/motto",
        text: "Motto Theme",
      },
      {
        url: "https://themes.shopify.com/themes/monochrome/presets/monochrome",
        text: "Monochrome",
      },
      {
        url: "https://themes.shopify.com/themes/force/presets/force",
        text: "Force Theme",
      },
    ],
  },
  {
    id: 3,
    company: "Cognaize",
    logo: CognaizeLogo,
    role: "Software Engineer",
    duration: "February 2023 - March 2024",
    type: "Full-time",
    description:
      "Worked on a hybrid-intelligence platform that automated the extraction and analysis of unstructured financial documents for banks, insurers, and other financial organizations.",
    highlights: [
      "Implemented 50+ features and resolved 50+ production bugs on AI-powered platform",
      "Refactored legacy modules to improve maintainability and team iteration speed",
      "Partnered with senior engineers to ship integrated, production-ready solutions",
    ],
    tech: ["React", "TypeScript", "Redux", "Python", "REST API"],
    link: "https://www.cognaize.com/",
    linkText: "Visit Cognaize",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Professional Experience</h2>
          <p className="experience__subtitle">
            3+ years building products at scale across fintech, e-commerce, and
            enterprise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="experience__timeline">
          {/* Timeline line */}
          <div className="experience__timeline-line" />

          {experienceData.map((job, index) => (
            <motion.div
              key={job.id}
              className={`experience__item ${index % 2 === 0 ? "experience__item--left" : "experience__item--right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="experience__dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.15 + 0.2,
                }}
              />

              {/* Card */}
              <motion.article
                className="experience__card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Header */}
                <div className="experience__card-header">
                  <div className="experience__logo">
                    <img src={job.logo} alt={job.company} />
                  </div>
                  <div className="experience__meta">
                    <h3 className="experience__company">{job.company}</h3>
                    <p className="experience__role">{job.role}</p>
                    <span className="experience__duration">{job.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="experience__description">{job.description}</p>

                {/* Highlights */}
                <ul className="experience__highlights">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="experience__tech">
                  {job.tech.map((tech) => (
                    <span key={tech} className="experience__tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="experience__links">
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm experience__link"
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
                        className="btn btn--outline btn--sm experience__link"
                      >
                        {link.text}
                        <FaExternalLinkAlt />
                      </a>
                    ))}
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
