import React from "react";
import "./Home.scss";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Animate } from "react-simple-animate";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text-wrapper">
        <h1>
          Hi, I'm Avet -<br />
          Front End Developer 💻
        </h1>
      </div>
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
        <div className="contact-me">
          <div className="contact-me-buttons-wrapper">
            <button>Hire Me</button>
            <a href="">Download Resume</a>
          </div>
          <div className="contact-me-social-wrapper">
            <span>Social Media Links</span>
            <FaLinkedin size={32} />
            <FaFacebook size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
}
