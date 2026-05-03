import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderImage from './../../assets/IMG_0861.jpeg';
import './header.scss';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/cv.pdf';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header" className="header">
      <div className="container">
        <h2 data-aos="flip-right" className="welcome-heading">
          Hello and welcome &mdash; glad you&rsquo;re{' '}
          <span className="welcome-heading__end">
            here
            <span className="wave" role="img" aria-label="waving hand">
              👋
            </span>
          </span>
        </h2>
      </div>
      <div className="container header-main-content">
        <div className="header-left-part">
          <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
          <h1 data-aos="zoom-in-up">Avet Badalyan</h1>
        </div>

        <div className=" welcome-container">
          <h2 data-aos="zoom-in-up">Frontend Engineer</h2>
          <div data-aos="zoom-in-up" className="welcome-text">
            <p className="home-main-text" data-aos="zoom-in-up">
              3+ years of professional experience building scalable,
              user-focused web applications across fintech, e-commerce, and
              enterprise platforms.
            </p>
            <p data-aos="zoom-in-up" data-aos-delay="100">
              I have contributed to AI-powered financial products at
              <strong> Cognaize Engineering LLC</strong>, built custom Shopify
              solutions at <strong>Ashstone Studios</strong>, and now support
              <strong> EPAM Systems</strong> on its corporate web ecosystem
              built on <strong> AEM</strong>.
            </p>
            <p data-aos="zoom-in-up" data-aos-delay="200">
              My focus is frontend engineering with <strong>React.js</strong>,
              <strong> Redux</strong>, <strong> Shopify</strong>, and modern UI
              development, while I continue growing toward fullstack
              development with <strong>Node.js</strong>,
              <strong> Express.js</strong>, <strong> TypeScript</strong>,
              <strong> SQL/PostgreSQL</strong>, and <strong>AWS</strong>.
            </p>
          </div>
          <div className="header__buttons">
            <a href="#contact" className="btn primary">
              Let's Talk
            </a>
            <a href="#portfolio" className="btn primary">
              Explore Projects
            </a>
            <a href={CV} download className="btn primary">
              Download CV <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
