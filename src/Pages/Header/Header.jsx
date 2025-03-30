import { useEffect } from 'react';
import HeaderImage from './../../assets/1731479126421~5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.scss';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/cv.pdf';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header" className="header">
      <h2 data-aos="flip-right" className="welcome-heading">
        Welcome To My Portfolio Website!
      </h2>
      <div className="container header-main-content">
        <div className="header-left-part">
          <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
          <h1 data-aos="zoom-in-up">AVET BADALYAN</h1>
        </div>

        <div className=" welcome-container">
          <h2 data-aos="zoom-in-up">Frontend Developer</h2>
          <div data-aos="zoom-in-up" className="welcome-text">
            <p className="home-main-text" data-aos="zoom-in-up">
              I acquired fundamental Front-End Development knowledge through a
              bootcamp at <strong>Armenian Code Academy</strong> and courses at
              <strong> Microsoft IC Armenia</strong>. <br /> <br />
              Then, at <strong>Cognaize Engineering LLC</strong>, I continued to
              improve my skills by working on a variety of tasks, including
              redesigning elements, debugging, and implementing new features.
              <br />I also develop <strong>Shopify themes</strong> for online
              stores, enhancing my Frontend expertise.
              <br /> <br />
              Currently, I'm learning Node.js/Express.js, Next.js, TypeScript, SQL/PostgreSQL
              and AWS at <strong>EPAM</strong> to become a Fullstack Developer.{' '}
              <br />
              And now, with 2+ years of hands-on experience, I'm excited to take
              on new challenges!
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
