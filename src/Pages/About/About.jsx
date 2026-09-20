import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { HiDownload } from "react-icons/hi";
import CV from "../../assets/cv.pdf";
import { fadeIn, staggerContainer } from "../../utils/animations";
import "./About.scss";
import { languageSkills } from "./languages";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="about__content">
          {/* Left - Languages */}
          <motion.div
            className="about__sidebar"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Languages */}
            <motion.div
              className="about__languages"
              variants={staggerContainer(0.1, 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h4 className="about__languages-title">Languages</h4>
              {languageSkills.map((lang) => (
                <motion.div
                  key={lang.language}
                  className="about__language"
                  variants={fadeIn("up", 0)}
                >
                  <div className="about__language-info">
                    <ReactCountryFlag
                      countryCode={lang.flagEmoji}
                      svg
                      style={{ width: "2rem", height: "1.5rem" }}
                    />
                    <span className="about__language-name">
                      {lang.language}
                    </span>
                    <span className="about__language-level">{lang.level}</span>
                  </div>
                  <div className="about__language-bar">
                    <motion.div
                      className="about__language-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="about__role">Frontend Engineer → Full Stack</h3>

            <p>
              I build complete web products — from database schema to React UI
              to cloud deployment. Started in 2021 with JavaScript and React
              training, joined <strong>Cognaize</strong> building AI-powered
              fintech platforms, then <strong>Ashstone Studios</strong> shipping
              Shopify themes (3 published on official Theme Store), and now at{" "}
              <strong>EPAM Systems</strong> as Full-Stack Developer.
            </p>

            <p>
              Recently built a full-stack music library end-to-end —{" "}
              <strong>React/Node.js</strong> with Express REST API, PostgreSQL,
              TypeORM, Supabase, Redux Toolkit, RTK Query, and persistent audio
              player. That project was my deliberate push from "frontend dev who
              can touch backend" to owning the whole stack.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">🎯</span>
                <div>
                  <strong>Core Stack:</strong> React, TypeScript, Node.js,
                  PostgreSQL
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">🛒</span>
                <div>
                  <strong>E-commerce:</strong> Shopify Liquid, Theme Development
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">☁️</span>
                <div>
                  <strong>Cloud:</strong> AWS Amplify, Vercel, Render, Firebase
                </div>
              </div>
            </div>

            <h4 className="about__subheading">Former Financial Analyst</h4>
            <p>
              2017–2021: Financial analyst, accountant, and auditor delivering
              services to ~40 client organizations. That background means I read
              business requirements, ask the right questions, and translate
              stakeholder needs into technical decisions — not just code what
              I'm told.
            </p>

            <motion.a
              href={CV}
              download
              className="about__cta"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiDownload />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
