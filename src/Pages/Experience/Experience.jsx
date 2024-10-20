import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";
import CognaizeLogo from "./../../assets/pics/cognaize-armenia.jpg";
import ashstone from "./../../assets/pics/ashtone.jpg";
import { EXPERIENCE_DATA } from "./experienceData";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Experience in development
      </div>
      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Cognaize
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={CognaizeLogo} alt="Cognaize Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-down">
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
              <span>Duration: </span>February 2023 - March 2024
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


      <div data-aos="zoom-in-up" className="experience-header section-heading">
        Ashstone Studios
      </div>
      <div className="container experience-content" data-aos="fade-up">
        <div className="company-info">
          <div className="company-info__logo">
            <img src={ashstone} alt="Cognaize Logo" />
          </div>
          <div className="company-info__details" data-aos="fade-up">
            <p>
              <span>Company: </span>
              Ashstone Studios is a Professional Website Design & Development Agency developing High-End and Premium Shopify Themes for Modern Commerce With Maximized Functionality. 
            </p>
            <p>
              <span>Position: </span>Frontend (Shopify) Developer
            </p>
            <p>
              <span>Duration: </span>May 2024 - Present
            </p>
            <a
              href="https://ashstonestudios.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Link to Ashstone Studios official website🔗</span>
            </a>
          </div>
        </div>

   

      </div>
    </section>
  );
}
