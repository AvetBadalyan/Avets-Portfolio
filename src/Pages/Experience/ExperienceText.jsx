import React from "react";
import "./Experience.styles.scss";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.jpg";

export default function ExperienceText() {
  return (
    <div>
      <div className="cognaize-info">
        <img src={CognaizeLogo} alt="cognaize-logo" />

        <div class="experience-info">
          <p>
            <span>Company: </span>
            Cognaize automates unstructured data with Hybrid Intelligence.{" "}
            <br /> The company's products empower some of the world's largest
            banks, ratings agencies, investment firms and insurance companies
            with high-quality data.
          </p>

          <p>
            <span>Position: </span>
            Junior Software Engineer
          </p>
          <p>
            <span>Duration: </span>
            February 2023 - Present
          </p>
          <a href="https://www.cognaize.com/" target="_blank" rel="noreferrer">
            <span>Link to Cognaize official website🔗</span>
          </a>
        </div>
      </div>

      <p style={{ margin: "20px 0" }}>
        MY JOB RESPONSIBILITIES MAINLY INCLUDE:
      </p>

      <h3>Feature Development:</h3>
      <ul>
        <li>
          <p>
            Implemented little new features, enhancing application functionality
            and user experience.
          </p>
        </li>
        <li>
          <p>
            Worked closely with senior developers and collaborated with
            cross-functional teams for integrated solutions to implement coding
            and design best practices.
          </p>
        </li>
      </ul>

      <h3>Debugging and Issue Resolution:</h3>
      <ul>
        <li>
          <p>
            Diagnosed and promptly resolved bugs, ensuring smooth application
            operation.
          </p>
        </li>
        <li>
          <p>
            Engaged in code refactoring to improve maintainability, readability
            and performance, to optimize the codebase for scalability and
            efficiency.
          </p>
        </li>
      </ul>

      <h3>Design Implementation:</h3>
      <ul>
        <li>
          <p>
            Executed design changes, aligning applications with the latest
            design trends and UI/UX best practices.
          </p>
        </li>
        <li>
          <p>
            Translated design mockups into responsive and interactive web
            elements.
          </p>
        </li>
      </ul>

      <h3>Collaboration, Communication and Learning:</h3>
      <ul>
        <li>
          <p>
            Participated in team meetings, providing insights and updates on
            project progress.
          </p>
        </li>

        <li>
          <p>
            Engaged in continuous learning to stay current with industry trends
            and technologies.
          </p>
        </li>
      </ul>
    </div>
  );
}
