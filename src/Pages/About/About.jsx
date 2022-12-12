import React from "react";
import PageHeader from "../../Components/PageHeaderContent/PageHeader";
import { personalData } from "./utils";
import "./About.styles.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <PageHeader headerText="About me" />
      <div className="about-content">
        <div className="about-content-personalWrapper">
          <h3 className="developer-content">Front End Developer</h3>
          <p>About Me section</p>
          <h3 className="personalContent">Personal Information</h3>
          <div className="personal-data-container">
            {personalData.map((item, key) => (
              <div className="personal-data" key={key}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-content-serviceWrapper">service wrapper</div>
      </div>
    </div>
  );
}
