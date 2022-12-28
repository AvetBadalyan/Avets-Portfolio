import React from "react";
import PageHeader from "./../../Components/PageHeaderContent/PageHeader";
import { skillsData } from "./utils";
import "./Skills.styles.scss";
import { Animate } from "react-simple-animate";

export default function Skills() {
  return (
    <div>
      <div id="skills" className="skills">
        <PageHeader headerText="My Skills" />
        <div className="skills-content-wrapper">
          {skillsData.map((item, key) => (
            <div key={key} className="skills-content-wrapper-inner-content">
              <h3 className="skills-content-wrapper-inner-content-category-text">
                {item.label}
              </h3>
              <div className="skills-content-wrapper-logos">
                {item.data.map((dataItem, index) => (
                  <Animate
                    play
                    duration={1}
                    delay={0.4}
                    start={{ transform: "translateX(-250px)" }}
                    end={{ transform: "translateX(0px)" }}
                  >
                    <div className="skill-logo-wrapper" key={index}>
                      <p>{dataItem.skillName}</p>
                      <img src={dataItem.logo} alt="logo" />
                    </div>
                  </Animate>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
