import React from "react";
import "./Experience.styles.scss";
import {
  RiCodeSSlashLine,
  RiBugLine,
  RiLayoutLine,
  RiTeamLine,
} from "react-icons/ri";
import ExperienceCard from "./ExperienceCard";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.jpg";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-header">Experience</div>
      <div className="experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={CognaizeLogo} alt="Cognaize Logo" />
          </div>
          <div className="company-info__details">
            <p>
              <span>Company: </span>
              Cognaize automates unstructured data with Hybrid Intelligence.
              <br /> The company's products empower some of the world's largest
              banks, ratings agencies, investment firms, and insurance companies
              with high-quality data.
            </p>
            <p>
              <span>Position: </span>Junior Software Engineer
            </p>
            <p>
              <span>Duration: </span>February 2023 - Present
            </p>
            <a
              href="https://www.cognaize.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Link to Cognaize official website🔗</span>
            </a>
          </div>
        </div>

        <p className="job-responsibilities">
          MY JOB RESPONSIBILITIES MAINLY INCLUDE:
        </p>

        <div className="experience-card-container">
          <ExperienceCard
            title="Feature Development"
            icon={<RiCodeSSlashLine />}
            description={[
              "Implemented new features to enhance application functionality and user experience.",
              "Collaborated with senior developers for integrated solutions.",
            ]}
          />
          <ExperienceCard
            title="Debugging and Issue Resolution"
            icon={<RiBugLine />}
            description={[
              "Diagnosed and resolved bugs to ensure smooth application operation.",
              "Engaged in code refactoring to improve maintainability and performance.",
            ]}
          />
          <ExperienceCard
            title="Design Implementation"
            icon={<RiLayoutLine />}
            description={[
              "Executed design changes to align applications with UI/UX best practices.",
              "Translated design mockups into responsive web elements.",
            ]}
          />
          <ExperienceCard
            title="Collaboration, Communication and Learning"
            icon={<RiTeamLine />}
            description={[
              "Participated in team meetings, providing insights and updates on project progress.",
              "Engaged in continuous learning to stay current with industry trends and technologies.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
