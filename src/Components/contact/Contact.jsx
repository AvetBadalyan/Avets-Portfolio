import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { fadeIn, staggerContainer } from "../../utils/animations";
import "./Contact.scss";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "avetbadalyan@gmail.com",
    href: "mailto:avetbadalyan@gmail.com",
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

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="contact__subtitle">
            Let's build something great together
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="contact__card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Status Badge */}
          <div className="contact__status">
            <span className="contact__status-dot" />
            <span>Open to opportunities</span>
          </div>

          {/* Location */}
          <div className="contact__location">
            <FaMapMarkerAlt />
            <span>Yerevan, Armenia • Open to remote</span>
          </div>

          {/* Contact Grid */}
          <motion.div
            className="contact__grid"
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact__item"
                variants={fadeIn("up", 0)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="contact__item-icon">{item.icon}</div>
                <div className="contact__item-content">
                  <span className="contact__item-label">{item.label}</span>
                  <span className="contact__item-value">{item.value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Message */}
          <motion.p
            className="contact__message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Whether you have a project in mind, want to discuss opportunities,
            or just say hi — I'd love to hear from you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
