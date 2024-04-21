import React, { useEffect, useState } from "react";
import { frontendSkills, backendSkills } from "./utils"; // Importing separate arrays for frontend and backend skills
import "./Skills.styles.scss";

export default function Skills() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Trigger animation only once when component mounts
    setAnimationStarted(true);
  }, []);

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-item">
        <div className="skill-info">
          <img src={skill.logo} alt={skill.skillName} />
          <p>{skill.skillName}</p>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: animationStarted ? `${skill.percentage}%` : "0%",
              transition: animationStarted ? "width 2s ease-in-out" : "none",
            }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="skills-content-wrapper">
        <div className="skills-category">
          <h3 className="skills-category-title">Frontend Skills</h3>
          <div className="skills-list">{renderSkills(frontendSkills)}</div>
        </div>
        <div className="skills-category">
          <h3 className="skills-category-title">Backend and Technologies</h3>
          <div className="skills-list">{renderSkills(backendSkills)}</div>
        </div>
      </div>
    </section>
  );
}
