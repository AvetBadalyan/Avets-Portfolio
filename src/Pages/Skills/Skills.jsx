import React from "react";
import PageHeader from "./../../Components/PageHeaderContent/PageHeader";
import { skillsData } from "./utils";
import { Line } from "rc-progress";

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
              <div>
                {item.data.map((dataItem, index) => (
                  <div className="progressbar-wrapper" key={index}>
                    <p>{dataItem.skillName}</p>
                    <Line
                      percent={dataItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--selected-theme-main-color)"
                      strokeLinecap="square"
                      trailWidth="2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
