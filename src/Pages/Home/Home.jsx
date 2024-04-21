import React from "react";
import "./Home.scss";
import { FaLinkedin, FaGithub, FaMailBulk, FaPhone } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import Aside from "./Aside";
import { ReactTyped } from "react-typed";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  // const navigate = useNavigate();
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
              typeSpeed={70}
              contentType={"html"}
              loop={false}
            />

            <div className="home-buttons-wrapper">
              <button onClick={() => {}}>Explore Projects</button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1f6OZennPRcWYrqLR9zbtixQy-ilQbsKJ/view?usp=sharing"
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
