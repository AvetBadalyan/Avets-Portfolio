import React from "react";
import PageHeader from "../../Components/PageHeaderContent/PageHeader";
import { personalData } from "./utils";
import "./About.styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

export default function About() {
  return (
    <div className="about" id="about">
      <PageHeader headerText="About me" />

      <div className="about-content">
        <div className="about-content-personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: " translateX(-800px)" }}
            end={{ transform: " translateX(0px)" }}
          >
            <h3 className="developer-content">Front End Developer</h3>
            <p>About Me section</p>
          </Animate>

          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: " translateX(500px)" }}
            end={{ transform: " translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>

            <div className="personal-data-container">
              {personalData.map((item, key) => (
                <div className="personal-data" key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              ))}
            </div>
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
