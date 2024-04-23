import React from "react";
import { FaMailBulk, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div data-aos="zoom-in-up">
        <h2>Contact me via:</h2>
        <div className="container contact__container">
          <ContactLink
            icon={<FaMailBulk size={32} />}
            text="avetbadalyan@gmail.com"
            href="mailto:avetbadalyan@gmail.com"
          />
          <ContactLink
            icon={<FaPhone size={32} />}
            text="+374-55-280-444"
            href="tel:+374-55-280-444"
          />
        </div>
      </div>

      <div data-aos="zoom-in-up">
        <h2>Find me on</h2>
        <div className="container contact__container">
          <ContactLink
            icon={<FaLinkedin size={32} />}
            text="LinkedIn"
            href="https://www.linkedin.com/in/avet-badalyan-17b767101/"
          />
          <ContactLink
            icon={<FaGithub size={32} />}
            text="GitHub"
            href="https://github.com/AvetBadalyan"
          />
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, text, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="contact__link">
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Contact;
