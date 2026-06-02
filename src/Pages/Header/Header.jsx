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

        <div className="welcome-container">
          <h2 data-aos="zoom-in-up">Frontend Engineer</h2>
          <div data-aos="zoom-in-up" className="welcome-text">
            <p className="home-main-text">
              3+ years of professional experience building scalable,
              user-focused web applications across fintech, e-commerce, and
              enterprise platforms.
            </p>
            <p>
              I have contributed to AI-powered financial products at 
              <span className="text-highlight"> Cognaize Engineering LLC</span>, built custom Shopify
              solutions at <span className="text-highlight">Ashstone Studios</span>, and now support{' '}
              <span className="text-highlight">EPAM Systems</span> on its corporate web ecosystem
              built on <span className="text-highlight">AEM</span>.
            </p>
            <p>
              My focus is frontend engineering with <span className="text-highlight">React.js</span>,{' '}
              <span className="text-highlight">Redux</span>, <span className="text-highlight">Shopify</span>, and modern UI
              development, while I continue growing toward fullstack
              development with <span className="text-highlight">Node.js</span>,{' '}
              <span className="text-highlight">Express.js</span>, <span className="text-highlight">TypeScript</span>,{' '}
              <span className="text-highlight">SQL/PostgreSQL</span>, and <span className="text-highlight">AWS</span>.
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
