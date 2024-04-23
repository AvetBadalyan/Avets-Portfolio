// About.jsx
import React from "react";
import AboutMeText from "./AboutMeText";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import { languageSkills } from "./languages";
import "./About.scss";
import LanguageSkill from "../../Components/LanguageSkill/LanguageSkill";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="language-skills">
          <h2 data-aos="zoom-in-up" className="section-heading">
            Languages
          </h2>
          <div className="language-skills-container">
            {languageSkills.map((language) => (
              <LanguageSkill key={language.language} {...language} />
            ))}
          </div>
        </div>
        <div className="about-info">
          <h2 data-aos="zoom-in-up" className="section-heading">
            About Me
          </h2>
          <AboutMeText />
          <a href={CV} download className="btn primary" data-aos="fade-right">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
