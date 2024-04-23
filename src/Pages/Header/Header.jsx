import { useEffect } from "react";
import HeaderImage from "./../../assets/IMG_6344.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.scss";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/cv.pdf";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header id="header" className="header">
      <h1 data-aos="flip-right" className="welcome-heading">
        Welcome To My Portfolio Website!
      </h1>
      <div className="container header__container">
        <div className="welcome-container">
          <div data-aos="fade-up" className="welcome-text">
            <h1 data-aos="zoom-in-up">Avet Badalyan</h1>
            <h2 data-aos="zoom-in-up">Frontend Developer</h2>

            <p className="home-main-text">
              I acquired fundamental Front-End Development knowledge through a
              bootcamp at <strong>Armenian Code Academy</strong> and courses at{" "}
              <strong>Microsoft IC Armenia</strong>. <br />
              Then, at <strong>Cognaize Engineering LLC</strong>, I continued to
              improve my skills by working on a variety of tasks, including
              redesigning elements, debugging, and implementing new features.{" "}
              <br />
              Alongside this, I worked on personal projects and freelancing.
              <br />
              And now, with 2 years of hands-on experience, I'm excited to take
              on new challenges and contribute to innovative projects!
            </p>
          </div>
          <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
        </div>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn primary">
            Explore Projects
          </a>
          <a href={CV} download className="btn primary">
            Download Resume <FaDownload />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
