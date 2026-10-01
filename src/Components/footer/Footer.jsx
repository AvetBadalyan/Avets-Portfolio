import { FaArrowUp } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <button
          className="footer__back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

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
