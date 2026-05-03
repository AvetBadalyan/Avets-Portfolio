import React from "react";
import { FaMailBulk, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-up" data-aos-delay="100">
        <h2>Contact me via:</h2>
        <div className="contact__container">
          <ContactLink
            icon={<FaMailBulk />}
            text="avetbadalyan@gmail.com"
            href="mailto:avetbadalyan@gmail.com"
            delay={200}
          />
          <ContactLink
            icon={<FaPhone />}
            text="+374-55-280-444"
            href="tel:+374-55-280-444"
            delay={300}
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="250">
        <h2>Find me on:</h2>
        <div className="contact__container">
          <ContactLink
            icon={<FaLinkedin />}
            text="LinkedIn"
            href="https://www.linkedin.com/in/avet-badalyan-17b767101/"
            delay={350}
          />
          <ContactLink
            icon={<FaGithub />}
            text="GitHub"
            href="https://github.com/AvetBadalyan"
            delay={450}
          />
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, text, href, delay }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="contact__link"
      data-aos="zoom-in-up"
      data-aos-delay={delay}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Contact;
