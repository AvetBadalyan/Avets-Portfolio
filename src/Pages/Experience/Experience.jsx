import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.jpg";
import { EXPERIENCE_DATA } from "./experienceData";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Experience
      </div>
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
          {EXPERIENCE_DATA.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
