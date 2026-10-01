import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { useScrollReveal, useStaggerReveal } from "../../hooks/useScrollReveal";
import "./Contact.scss";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "avetbadalyan@gmail.com",
    href: "mailto:avetbadalyan@gmail.com?subject=Let's%20Connect",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+374-55-280-444",
    href: "tel:+374-55-280-444",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "avet-badalyan",
    href: "https://www.linkedin.com/in/avet-badalyan-17b767101/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "AvetBadalyan",
    href: "https://github.com/AvetBadalyan",
  },
];

/**
 * Contact section - uses CSS-based scroll reveal.
 * Keeps framer-motion out of this chunk for better code splitting.
 */
const Contact = () => {
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal({ rootMargin: "-50px" });
  const gridRef = useStaggerReveal({
    stagger: 0.1,
    itemSelector: ".contact__item",
  });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div ref={headerRef} className="contact__header reveal">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="contact__subtitle">
            Let's build something great together
          </p>
        </div>

        <div ref={cardRef} className="contact__card reveal reveal--delay-1">
          <div className="contact__status">
            <span className="contact__status-dot" />
            <span>Open to opportunities</span>
          </div>

          <div className="contact__location">
            <FaMapMarkerAlt />
            <span>Yerevan, Armenia • Open to remote</span>
          </div>

          <div ref={gridRef} className="contact__grid">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact__item reveal-item"
              >
                <div className="contact__item-icon">{item.icon}</div>
                <div className="contact__item-content">
                  <span className="contact__item-label">{item.label}</span>
                  <span className="contact__item-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          <p className="contact__message">
            Whether you have a project in mind, want to discuss opportunities,
            or just say hi — I'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
