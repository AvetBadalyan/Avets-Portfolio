import './Experience.scss';
import ExperienceCard from './ExperienceCard';
import CognaizeLogo from './../../assets/pics/cognaize-armenia.jpg';
import ashstone from './../../assets/pics/ashtone.jpg';
import EPAMLogo from './../../assets/education/EPAM.jpg';
import { EXPERIENCE_DATA } from './experienceData';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 data-aos="zoom-in-up" className="experience-header section-heading">
          Professional Experience
        </h2>
      </div>

      <div className="container">
        <h3 data-aos="zoom-in-up" className="experience-header section-heading">
          EPAM Systems
        </h3>
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={EPAMLogo} alt="EPAM Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-up">
            <p>
              <span className="text-highlight">Company:</span>{' '}
              EPAM Systems delivers software engineering and digital platform
              solutions for global enterprises.
            </p>
            <p>
              <span className="text-highlight">Project:</span>{' '}
              Contributing to the corporate website of one of the world's
              largest engineering companies, built on Adobe Experience
              Manager (AEM) and serving millions of monthly visitors.
            </p>
            <p>
              <span className="text-highlight">Position:</span> Full-Stack Developer
            </p>
            <p>
              <span className="text-highlight">Duration:</span> July 2025 - Present
            </p>
            <p>
              <span className="text-highlight">Highlights:</span>{' '}
              Resolved 40+ UI issues on{' '}
              <a
                href="https://www.epam.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-link"
              >
                www.epam.com
              </a>
              , improving responsiveness and UX consistency. Wrote Sinon.js
              unit tests for 20+ frontend modules, meaningfully reducing
              regression risk. Collaborated daily with cross-functional teams
              in agile sprints, contributing to planning and code reviews.
            </p>
            <a
              href="https://www.epam.com/"
              target="_blank"
              rel="noreferrer"
              className="btn cat__btn white"
            >
              Visit EPAM
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 data-aos="zoom-in-up" className="experience-header section-heading">
          Ashstone Studios
        </h3>
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={ashstone} alt="Ashstone Studios Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-up">
            <p>
              <span className="text-highlight">Company:</span>{' '}
              Ashstone Studios is a creative agency focused on Shopify
              e-commerce solutions and digital growth.
            </p>
            <p>
              <span className="text-highlight">Project:</span>{' '}
              Built and maintained Shopify storefronts, delivering feature
              enhancements, theme customization, debugging, and performance
              improvements for client-facing e-commerce projects.
            </p>
            <p>
              <span className="text-highlight">Position:</span> Frontend (Shopify) Developer
            </p>
            <p>
              <span className="text-highlight">Duration:</span> June 2024 - January 2026
            </p>
            <p>
              <span className="text-highlight">Note:</span>{' '}
              Worked in parallel with my EPAM role from July 2025 to December
              2025.
            </p>
            <p>
              <span className="text-highlight">Highlights:</span>{' '}
              Delivered 5 custom Shopify themes including <span className="text-highlight">Motto</span>{' '}
              — published on the official Shopify Theme Store with 20+ verified
              buyer reviews. Resolved 30+ client support requests and
              maintained production storefronts for international e-commerce
              brands.
            </p>
            <div className="theme-links">
              <a
                href="https://themes.shopify.com/themes/motto/presets/motto"
                target="_blank"
                rel="noreferrer"
                className="btn cat__btn white"
              >
                Motto Theme
              </a>
              <a
                href="https://themes.shopify.com/themes/monochrome/presets/monochrome"
                target="_blank"
                rel="noreferrer"
                className="btn cat__btn white"
              >
                Monochrome Theme
              </a>
              <a
                href="https://themes.shopify.com/themes/force/presets/force"
                target="_blank"
                rel="noreferrer"
                className="btn cat__btn white"
              >
                Force Theme
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 data-aos="zoom-in-up" className="experience-header section-heading">
          Cognaize
        </h3>
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={CognaizeLogo} alt="Cognaize Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-down">
            <p>
              <span className="text-highlight">Company:</span>{' '}
              Cognaize Engineering LLC builds AI-powered solutions for
              extracting, structuring, and analyzing complex financial data.
            </p>
            <p>
              <span className="text-highlight">Project:</span>{' '}
              Worked on a hybrid-intelligence platform that automated the
              extraction and analysis of unstructured financial documents for
              banks, insurers, and other financial organizations.
            </p>
            <p>
              <span className="text-highlight">Position:</span> Software Engineer
            </p>
            <p>
              <span className="text-highlight">Duration:</span> February 2023 - March 2024
            </p>
            <p>
              <span className="text-highlight">Highlights:</span>{' '}
              Implemented 50+ features and resolved 50+ production bugs on an
              AI-powered platform processing financial documents for banks and
              insurers. Refactored legacy modules to improve maintainability,
              enabling faster iteration across the engineering team.
            </p>
            <a
              href="https://www.cognaize.com/"
              target="_blank"
              rel="noreferrer"
              className="btn cat__btn white"
            >
              Visit Cognaize
            </a>
          </div>
        </div>

        <h3 className="job-responsibilities">
          Key contributions at Cognaize
        </h3>

        <div className="experience-card-container">
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceCard key={index} index={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
