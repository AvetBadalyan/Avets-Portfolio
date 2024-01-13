import React from "react";
import PageHeader from "../../Components/PageHeaderContent/PageHeader";
import "./Experience.styles.scss";
import { Animate } from "react-simple-animate";
import ExperienceText from "./ExperienceText";


export default function Experience() {
  return (
    <div className="experience" id="experience">
      <PageHeader headerText="Experience" />

      <div className="experience-content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: " translateX(-800px)" }}
          end={{ transform: " translateX(0px)" }}
        >
      
          <ExperienceText />
        </Animate>
      </div>
    </div>
  );
}
