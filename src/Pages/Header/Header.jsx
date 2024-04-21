import { useEffect } from "react";
import HeaderImage from "./../../assets/IMG_6344.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.scss";
import { ReactTyped } from "react-typed";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="welcome-container">
          <div>
            <h3 data-aos="fade-up">Avet Badalyan</h3>
            <h3 data-aos="fade-up">Frontend Developer</h3>
            <ReactTyped
              className="home-main-text"
              strings={[
                `I acquired fundamental Front-End Development knowledge through a bootcamp
at <strong>Armenian Code Academy</strong> and courses at <strong>Microsoft IC Armenia</strong>. <br/>
Then, at <strong>Cognaize Engineering LLC</strong>, I continued to improve my skills by working on a variety
of tasks, including redesigning elements, debugging, and implementing new
features. <br/>Alongside this, I worked on personal projects and freelancing.<br/>
And now, with 2 years of hands-on experience, I'm excited to take on
new challenges and contribute to innovative projects!`,
              ]}
              typeSpeed={10}
              contentType={"html"}
              loop={false}
            />
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
            My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
