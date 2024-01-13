import React from "react";
import PageHeader from "../../Components/PageHeaderContent/PageHeader";
import "./About.styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import AboutMeText from "./AboutMeText";

export default function About() {
  return (
    <div className="about" id="about">
      <PageHeader headerText="About me" />

      <div className="about-content">
        <div className="about-text-section">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: " translateX(-800px)" }}
            end={{ transform: " translateX(0px)" }}
          >
            
            <AboutMeText />
          </Animate>
        </div>

        <div className="about-content-serviceWrapper">
          <div className="about-content-serviceWrapper-innerContent">
            <div>
              <DiApple size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--selected-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
