import { HiDownload } from "react-icons/hi";
import CountryFlag from "../../Components/CountryFlag/CountryFlag";
import CV from "../../assets/cv.pdf";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";
import "./About.scss";
import { languageSkills } from "./languages";

/**
 * About section - uses CSS-based scroll reveal instead of framer-motion.
 * This keeps framer-motion out of the initial lazy-load chain, deferring
 * its ~40KB bundle until sections that actually need complex animations
 * (Portfolio filters, Experience accordion, etc.).
 */
const About = () => {
  const headerRef = useScrollReveal();
  const sidebarRef = useScrollReveal({ rootMargin: "-50px" });
  const textRef = useScrollReveal({ rootMargin: "-50px" });
  const languagesRef = useStaggerReveal({
    stagger: 0.1,
    itemSelector: ".about__language",
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <div ref={headerRef} className="about__header reveal">
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="about__content">
          <div
            ref={sidebarRef}
            className="about__sidebar reveal reveal--delay-1"
          >
            <div ref={languagesRef} className="about__languages">
              <h3 className="about__languages-title">Languages</h3>
              {languageSkills.map((lang) => (
                <div
                  key={lang.language}
                  className="about__language reveal-item"
                >
                  <div className="about__language-info">
                    <CountryFlag
                      countryCode={lang.flagEmoji}
                      aria-hidden="true"
                      style={{ width: "2rem", height: "1.5rem" }}
                    />
                    <span className="about__language-name">
                      {lang.language}
                    </span>
                    <span className="about__language-level">{lang.level}</span>
                  </div>
                  <div className="about__language-bar">
                    <div
                      className="about__language-fill"
                      style={{ "--proficiency": `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={textRef} className="about__text reveal reveal--delay-2">
            <h3 className="about__role">Frontend Engineer → Full Stack</h3>

            <p>
              I build complete web products — from database schema to React UI
              to cloud deployment. Since 2021 I've shipped AI-powered fintech
              platforms, published Shopify themes, and enterprise web apps,
              currently as a <strong>Software Engineer</strong> at{" "}
              <strong>EPAM Systems</strong>.
            </p>

            <p>
              Most recently I built a full-stack music library end-to-end with{" "}
              <strong>React and Node.js</strong> — my deliberate push from
              "frontend dev who can touch backend" to owning the whole stack.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon" aria-hidden="true">
                  🎯
                </span>
                <div>
                  <strong>Core Stack:</strong> React, TypeScript, Node.js,
                  PostgreSQL
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon" aria-hidden="true">
                  🛒
                </span>
                <div>
                  <strong>E-commerce:</strong> Shopify Liquid, Theme Development
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon" aria-hidden="true">
                  ☁️
                </span>
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

            <a
              href={CV}
              download="Avet-Badalyan-CV.pdf"
              className="btn btn--primary about__cta"
            >
              <HiDownload />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
