import React from "react";
import "./Home.scss";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import Aside from "./Aside";

export default function Home() {
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
              <button>Explore Now</button>
              <a
                href="https://drive.google.com/file/d/1LX6gEuw1M6UEa1hgcjEkqglL6RDdntwP/view?usp=sharing"
                download="AvetCV"
              >
                Download Resume
              </a>
            </div>
            <div className="contact-me-social-wrapper">
              <span>Social Media Links</span>
              <FaLinkedin size={32} />
              <FaFacebook size={32} />
            </div>
          </div>
        </Animate>
      </main>
    </section>
  );
}
