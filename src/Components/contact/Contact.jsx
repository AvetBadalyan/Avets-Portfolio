import React from "react";
import { FaMailBulk, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div data-aos="zoom-in-up">
        <h2>Contact me via: </h2>

        <div className="container contact__container">
          <a href="mailto:avetbadalyan@gmail.com" className="contact__link">
            <FaMailBulk size={32} />
            <span>avetbadalyan@gmail.com</span>
          </a>
          <a href="tel:+374-55-280-444" className="contact__link">
            <FaPhone size={32} />
            <span>+374-55-280-444</span>
          </a>
        </div>
      </div>

      <div data-aos="zoom-in-up">
        <h2>Find me on</h2>

        <div className="container contact__container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/avet-badalyan-17b767101/"
            className="contact__link"
          >
            <FaLinkedin size={32} />
            <span>LinkedIn</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AvetBadalyan"
            className="contact__link"
          >
            <FaGithub size={32} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
