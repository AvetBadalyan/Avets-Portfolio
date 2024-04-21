import React, { useEffect, useState } from "react";
import "./About.styles.scss";
import AboutMeText from "./AboutMeText";

import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import { languageSkills } from "./languages";
import ReactCountryFlag from "react-country-flag";

const About = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animation only once when component mounts
    setAnimationStarted(true);
  }, []);

  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="language-skills">
            {languageSkills.map((language) => (
              <div className="language-skill" key={language.language}>
                <div className="language-name">
                  <span>{language.language}</span>
                  <ReactCountryFlag
                    countryCode={language.flagEmoji}
                    svg
                    style={{ fontSize: "1em", width: "1.5rem" }}
                  />
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: animationStarted
                        ? `${language.proficiency}%`
                        : "0%",
                      transition: animationStarted
                        ? "width 1s ease-in-out"
                        : "none",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>

          <AboutMeText />
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
