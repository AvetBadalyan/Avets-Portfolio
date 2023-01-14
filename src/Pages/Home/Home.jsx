import React from "react";
import "./Home.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
          <div className="home-text-wrapper">
            <h1>Welcome To My WebDev Space!</h1>
          </div>
          <div className="contact-me">
            <div className="contact-me-buttons-wrapper">
              <button onClick={() => navigate("/portfolio")}>
                Explore Now
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
          </div>
        </Animate>
      </main>
    </section>
  );
}
