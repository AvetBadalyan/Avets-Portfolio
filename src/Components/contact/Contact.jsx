import React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact me via: </h2>

      <div className="container contact__container" data-aos="fade-up">
        <a href="mailto:avetbadalyan@gmail.com">
          <FaMailBulk size={32} />
          <span>avetbadalyan@gmail.com</span>
        </a>
        <a href="tel:+374-55-280-444">
          <FaPhone size={32} />
          <span>+374-55-280-444</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
