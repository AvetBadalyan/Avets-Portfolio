import React from "react";
import "./Home.scss";
import { FaLinkedin, FaGithub, FaMailBulk, FaPhone } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import Aside from "./Aside";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <Aside />
      <main>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="home-main-container">
            <div className="home-text-wrapper">
              <h1>Welcome To My Portfolio Website!</h1>
            </div>
            <p className="home-main-text">
              I have acquired fundamental knowledge in{" "}
              <strong>Front-End Development</strong> at{" "}
              <strong>Armenian Code Academy's "Front-End Bootcamp"</strong>.
              <br />
              <span>
                {" "}
                Then I honed my skills as a{" "}
                <strong>Junior Software Engineer</strong> at{" "}
                <strong>"Cognaize" LLC</strong>, from adding new features and
                debugging to redesigning elements.
              </span>
              <br />
              <span>
                {" "}
                And now, with a year of hands-on experience, I'm ready to
                embrace new challenges and contribute to innovative projects.
              </span>
            </p>
            <div className="home-buttons-wrapper">
              <button onClick={() => navigate("/portfolio")}>
                Explore Projects
              </button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1AP7Z16T7eFec4Yk2rreuV5y_z-B1tuCh/view?usp=sharing"
                download="AvetCV"
              >
                Download Resume
              </a>
            </div>
            <div className="contact-me-social-wrapper">
              <span>Find me on</span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/avet-badalyan-17b767101/"
              >
                {" "}
                <FaLinkedin size={32} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AvetBadalyan"
              >
                <FaGithub size={32} />
              </a>
            </div>

            <div className="contact-me-wrapper">
              <span>Contact me via: </span>
              <p>
                <FaMailBulk size={32} /> avetbadalyan@gmail.com
              </p>
              <p>
                <FaPhone size={32} /> +374-55-280-444
              </p>
            </div>
          </div>
        </Animate>
      </main>
    </section>
  );
}
