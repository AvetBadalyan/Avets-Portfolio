import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Back to top */}
        <motion.button
          className="footer__back-to-top"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>

        {/* Copyright */}
        <div className="footer__copyright">
          <small>
            © {new Date().getFullYear()} Avet Badalyan — All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
