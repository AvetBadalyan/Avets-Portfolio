import './Experience.scss';
import ExperienceCard from './ExperienceCard';
import CognaizeLogo from './../../assets/pics/cognaize-armenia.jpg';
import ashstone from './../../assets/pics/ashtone.jpg';
import EPAMLogo from './../../assets/education/EPAM.jpg';
import { EXPERIENCE_DATA } from './experienceData';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Professional Experience
      </div>

      <div data-aos="zoom-in-up" className="experience-header section-heading">
        EPAM Systems
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={EPAMLogo} alt="EPAM Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-up">
            <p>
              <span>Company: </span>
              EPAM Systems delivers software engineering and digital platform
              solutions for global enterprises.
            </p>
            <p>
              <span>Project: </span>
              Contributing to EPAM's corporate website,
              www.epam.com, built on Adobe Experience Manager (AEM).
            </p>
            <p>
              <span>Position: </span>Frontend Developer
            </p>
            <p>
              <span>Duration: </span>July 2025 - Present
            </p>
            <p>
              <span>Highlights: </span>
              Resolved 40+ UI issues and wrote unit tests for 15+ components,
              strengthening reliability, maintainability, and UX consistency
              across a business-critical web platform.
            </p>
            <a
              href="https://www.epam.com/"
              target="_blank"
              rel="noreferrer"
              className="btn cat__btn white"
            >
              <span>Visit EPAM</span>
            </a>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Ashstone Studios
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={ashstone} alt="Ashstone Studios Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-up">
            <p>
              <span>Company: </span>
              Ashstone Studios is a creative agency focused on Shopify
              e-commerce solutions and digital growth.
            </p>
            <p>
              <span>Project: </span>
              Built and maintained Shopify storefronts, delivering feature
              enhancements, theme customization, debugging, and performance
              improvements for client-facing e-commerce projects.
            </p>
            <p>
              <span>Position: </span>Frontend (Shopify) Developer
            </p>
            <p>
              <span>Duration: </span>May 2024 - December 2025
            </p>
            <p>
              <span>Note: </span>
              Worked in parallel with my EPAM role from July 2025 to December
              2025.
            </p>
            <p>
              <span>Highlights: </span>
              Delivered and maintained 5 Shopify projects, including Motto,
              which is published on the Shopify Theme Store and has received
              20+ positive reviews.
            </p>
            <div className="theme-links">
              <a
                href="https://themes.shopify.com/themes/motto/presets/motto"
                target="_blank"
                rel="noreferrer"
                className="btn cat__btn white"
              >
                <span>Motto Theme</span>
              </a>
              <a
                href="https://themes.shopify.com/themes/monochrome/presets/monochrome"
                target="_blank"
                rel="noreferrer"
                className="btn cat__btn white"
              >
                <span>Monochrome Theme</span>
              </a>
              <a
                href="https://themes.shopify.com/themes/force/presets/force"
                target="_blank"
                rel="noreferrer"
                className="btn cat__btn white"
              >
                <span>Force Theme</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Cognaize
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={CognaizeLogo} alt="Cognaize Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-down">
            <p>
              <span>Company: </span>
              Cognaize Engineering LLC builds AI-powered solutions for
              extracting, structuring, and analyzing complex financial data.
            </p>
            <p>
              <span>Project: </span>
              Worked on a hybrid-intelligence platform that automated the
              extraction and analysis of unstructured financial documents for
              banks, insurers, and other financial organizations.
            </p>
            <p>
              <span>Position: </span>Junior Software Engineer
            </p>
            <p>
              <span>Duration: </span>February 2023 - March 2024
            </p>
            <p>
              <span>Highlights: </span>
              Implemented 50+ features and resolved 50+ bugs while improving
              readability, maintainability, and scalability across the
              codebase.
            </p>
            <a
              href="https://www.cognaize.com/"
              target="_blank"
              rel="noreferrer"
              className="btn cat__btn white"
            >
              <span>Visit Cognaize</span>
            </a>
          </div>
        </div>

        <p className="job-responsibilities">
          Key contributions at Cognaize
        </p>

        <div className="experience-card-container">
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
