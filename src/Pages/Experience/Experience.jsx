import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import EPAMLogo from "./../../assets/education/EPAM.webp";
import ashstoneLogo from "./../../assets/pics/ashtone.webp";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.webp";
import "./Experience.scss";

const experienceData = [
  {
    id: 1,
    company: "EPAM Systems",
    logo: EPAMLogo,
    role: "Software Engineer",
    duration: "July 2025 - Present",
    type: "Full-time",
    companyDescription:
      "EPAM Systems, Inc. delivers software engineering and digital platform solutions for global enterprises, serving millions of users worldwide.",
    projectDescription:
      "Building the HFM Client Area for HF Markets Group — the client portal for a global forex/CFD brokerage. A large-scale Next.js (App Router) frontend in TypeScript, React, and Tailwind CSS with an internal design system, SSR, and a 2700+ test suite.",
    note: "Previously contributed to EPAM's corporate websites (epam.com and regional/product sites) on the AEM platform (July 2025 - April 2026), resolving 40+ UI issues and writing Sinon.js unit tests for 20+ frontend modules, then to the Ketcher Life Sciences platform (~3 months).",
    highlights: [
      "Resolved a wide range of UI/UX bugs across the client area — navigation, modals/drawers/dropdowns, overflow and positioning, and layout fixes to match Figma designs",
      "Implemented feature enhancements in marketing tools, asset pages, account manager cards, search, widgets, and the AI assistant",
      "Built responsive/mobile UI (bottom sheets, skeleton loaders) with Next.js, React, TypeScript, Tailwind CSS, and the internal UIKit",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    link: "https://www.epam.com/",
    linkText: "Visit EPAM",
    contributions: [
      {
        icon: "🐞",
        title: "UI/UX Bug Fixing",
        points: [
          "Resolved navigation active-state, modal/drawer/dropdown behavior, overflow, and positioning bugs across the client area",
          "Fixed layout and alignment issues to match Figma designs",
        ],
      },
      {
        icon: "✨",
        title: "Feature Development",
        points: [
          "Enhanced marketing tools and asset pages with search filters and data display formatting",
          "Built out account manager cards, search, widgets, and the AI assistant",
        ],
      },
      {
        icon: "📱",
        title: "Responsive & Role-Based UI",
        points: [
          "Built responsive/mobile UI (bottom sheets, spacing, skeleton loaders) with Next.js, React, TypeScript, Tailwind, and the UIKit",
          "Worked across role-based flows for traders, affiliates, CPAs, and campaign managers, respecting access rules and code patterns",
        ],
      },
      {
        icon: "🔀",
        title: "Quality & Git Workflow",
        points: [
          "Verified every change via type-checking, linting, the automated test suite, and local browser testing before delivery",
          "Iterated through GitLab merge requests on reviewer and AI-assisted (GitLab Duo) feedback; kept branches in sync and resolved conflicts",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Ashstone Studios",
    logo: ashstoneLogo,
    role: "Frontend (Shopify) Developer",
    duration: "June 2024 - December 2025",
    type: "Full-time",
    companyDescription:
      "Ashstone Studios is a creative agency specializing in e-commerce solutions and digital marketing, developing high-end premium Shopify themes for modern commerce.",
    projectDescription:
      "Developed and maintained Shopify-based e-commerce websites, ensuring functionality, performance, and user experience. Collaborated with clients to implement new features and resolve bugs, ensuring seamless operation and satisfaction.",
    note: "Concurrent with my EPAM role for 6 months (July 2025 - December 2025).",
    highlights: [
      "Published 3 Shopify themes on the official Theme Store, with Motto earning 20+ positive reviews",
      "Resolved 30+ client support requests and delivered features for international e-commerce brands",
    ],
    tech: ["Shopify", "Liquid", "JavaScript", "SCSS", "Tailwind"],
    links: [
      {
        url: "https://themes.shopify.com/themes/motto/presets/motto",
        text: "Motto Theme",
      },
      {
        url: "https://themes.shopify.com/themes/monochrome/presets/monochrome",
        text: "Monochrome Theme",
      },
      {
        url: "https://themes.shopify.com/themes/force/presets/force",
        text: "Force Theme",
      },
    ],
    contributions: [
      {
        icon: "🛒",
        title: "Theme Development",
        points: [
          "Designed and published 3 custom Shopify themes on the official Theme Store",
          "Motto theme earned 20+ positive reviews; provided support and features for others",
        ],
      },
      {
        icon: "⚡",
        title: "Performance",
        points: [
          "Ensured responsive, user-friendly, and performance-optimized web design",
          "Optimized themes for seamless user experiences across devices",
        ],
      },
      {
        icon: "🔧",
        title: "Client Support",
        points: [
          "Resolved 30+ client requests addressing user feedback and technical challenges",
          "Debugged and troubleshot technical issues to improve website functionality",
        ],
      },
      {
        icon: "🎨",
        title: "E-Commerce Design",
        points: [
          "Collaborated with design and content teams to implement and enhance features",
          "Built responsive e-commerce themes using Liquid, JavaScript, HTML/CSS",
        ],
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
    companyDescription:
      "Cognaize automates unstructured data with Hybrid Intelligence. The company's products empower some of the world's largest banks, ratings agencies, investment firms, and insurance companies with high-quality data.",
    projectDescription:
      "Automated the processing and analysis of unstructured financial data by implementing a hybrid intelligence approach. Leveraged advanced AI techniques and human expertise to extract, organize, and interpret complex financial information, enhancing decision-making accuracy and operational efficiency.",
    highlights: [
      "Implemented 50+ features and resolved 50+ production bugs on AI-powered platform",
      "Refactored legacy code increasing maintainability by ~15%",
    ],
    tech: ["React", "TypeScript", "Redux", "Python", "REST API"],
    link: "https://www.cognaize.com/",
    linkText: "Visit Cognaize",
    contributions: [
      {
        icon: "</>",
        title: "Feature Development",
        points: [
          "Collaborated with senior developers to implement 50+ new features",
          "Enhanced application functionality ensuring continuous product improvement",
        ],
      },
      {
        icon: "🔧",
        title: "Debugging & Refactoring",
        points: [
          "Diagnosed and resolved 50+ production bugs maintaining smooth operation",
          "Refactored legacy code increasing maintainability by ~15%",
        ],
      },
      {
        icon: "🎨",
        title: "UI Implementation",
        points: [
          "Executed design updates in alignment with UI best practices",
          "Worked closely with designers to ensure seamless integration",
        ],
      },
      {
        icon: "🤝",
        title: "Team Collaboration",
        points: [
          "Participated in team meetings providing project updates and strategic input",
          "Worked closely with backend developers ensuring end-to-end functionality",
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Freelance & Own Projects",
    logo: null,
    role: "Self-Directed Developer",
    duration: "June 2022 - February 2023",
    type: "Freelance",
    compact: true,
    projectDescription:
      "Where it started — freelance work and self-directed learning. I built many of the apps below and grew into professional engineering.",
    portfolioLink: true,
  },
];

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = "";
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedJob) {
        closeModal();
      }
    };

    if (selectedJob) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedJob]);

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
            3+ years building products at scale for global brands and platforms
          </p>
        </motion.div>

        {/* Experience Cards */}
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
                {/* Header with Logo + Meta */}
                <div className="experience__card-header">
                  <div className="experience__logo-wrapper">
                    <div className="experience__logo">
                      <img
                        src={job.logo}
                        alt={job.company}
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="experience__meta">
                    <h3 className="experience__company">{job.company}</h3>
                    <p className="experience__role">{job.role}</p>
                    <span className="experience__duration">{job.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="experience__content">
                  {/* Project Description */}
                  <p className="experience__project">
                    {job.projectDescription}
                  </p>

                  {/* Note if exists */}
                  {job.note && (
                    <p className="experience__note">
                      <strong>Note:</strong> {job.note}
                    </p>
                  )}

                  {/* Highlights */}
                  <div className="experience__highlights-section">
                    <ul className="experience__highlights">
                      {job.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

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
                        className="btn btn--primary btn--sm"
                        onClick={() => openModal(job)}
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
                <span className="experience__compact-marker" aria-hidden="true">
                  🚀
                </span>
                <div className="experience__compact-body">
                  <div className="experience__compact-meta">
                    <h3 className="experience__compact-company">
                      {job.company}
                    </h3>
                    <span className="experience__compact-role">{job.role}</span>
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

      {/* Detailed Modal for Experience */}
      {selectedJob && (
        <div
          className="experience-modal__overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="experience-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="experience-modal__close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Modal Header */}
            <div className="experience-modal__header">
              <div className="experience-modal__logo">
                <img
                  src={selectedJob.logo}
                  alt={selectedJob.company}
                  width={120}
                  height={120}
                />
              </div>
              <div className="experience-modal__info">
                <h2 id="modal-title" className="experience-modal__company">
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

            {/* Key Contributions */}
            {selectedJob.contributions && (
              <div className="experience-modal__contributions">
                <h3 className="experience-modal__contributions-title">
                  Key contributions at {selectedJob.company}
                </h3>
                <div className="experience-modal__contributions-grid">
                  {selectedJob.contributions.map((contrib, i) => (
                    <div key={i} className="contribution-card">
                      <span className="contribution-card__icon">
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
        </div>
      )}
    </section>
  );
};

export default Experience;
