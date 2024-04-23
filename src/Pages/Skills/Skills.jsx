import { frontendSkills, backendSkills } from "./utils";
import "./Skills.scss";

export default function Skills() {
  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-item" data-aos="flip-up">
        <div className="skill-info">
          <img src={skill.logo} alt={skill.skillName} />
          <p>{skill.skillName}</p>
        </div>
        <div className="progress-bar" data-aos="fade-right">
          <div
            className="progress"
            style={{ width: `${skill.percentage}%` }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <div className="container skills-content-wrapper">
        <h2 data-aos="zoom-in-up" className="section-heading">
          Skills
        </h2>
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
