import {
  FaArrowDown,
  FaDownload,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import CV from "../../assets/cv.pdf";
import AnimatedCounter from "../../Components/AnimatedCounter/AnimatedCounter";
import GradientBackground from "../../Components/GradientBackground/GradientBackground";
import HeaderImage from "./../../assets/IMG_0861.webp";
import "./header.scss";

const Header = () => {
  const stats = [
    { number: "3+", label: "Years Exp" },
    { number: "20", label: "Projects" },
    { number: "4", label: "MERN Apps" },
    { number: "3", label: "Shopify Themes" },
  ];

  const roles = [
    "Frontend Engineer",
    "React Developer",
    "Full Stack Developer",
    "Shopify Developer",
  ];

  const techBadges = [
    {
      icon: <FaReact />,
      name: "React",
      position: "badge--1",
      color: "#61DAFB",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      position: "badge--2",
      color: "#68A063",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      position: "badge--3",
      color: "#F0DB4F",
    },
  ];

  return (
    <header id="header" className="hero">
      <GradientBackground />

      <div className="hero__container container">
        <div className="hero__content hero__content--enter">
          <p className="hero__greeting">
            <span className="hero__wave" aria-hidden="true">
              👋
            </span>
            Hello, I'm
          </p>

          <h1 className="hero__name">
            <span className="hero__name-gradient">Avet Badalyan</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-static">I'm a </span>
            <ReactTyped
              strings={roles}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2500}
              loop
              className="hero__role-typed"
            />
          </div>

          <p className="hero__bio">
            Building scalable, user-focused web applications across fintech,
            e-commerce, and enterprise platforms. Currently at{" "}
            <strong>EPAM Systems</strong>, previously at{" "}
            <strong>Ashstone Studios</strong> & <strong>Cognaize</strong>.
          </p>

          <div className="hero__cta">
            <a href="#portfolio" className="btn btn--primary hero__btn">
              <span>View Projects</span>
              <HiOutlineArrowRight className="hero__btn-icon" />
            </a>
            <a href="#contact" className="btn btn--outline hero__btn">
              Let's Talk
            </a>
            <a href={CV} download className="btn btn--outline hero__btn">
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/AvetBadalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/avet-badalyan-17b767101/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper hero__image-wrapper--animate">
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />

            {techBadges.map((badge, index) => (
              <div
                key={badge.name}
                className={`hero__badge ${badge.position} hero__badge--animate`}
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >
                <span className="hero__badge-inner hero__badge-inner--float">
                  <span
                    className="hero__badge-icon"
                    aria-hidden="true"
                    style={{ color: badge.color }}
                  >
                    {badge.icon}
                  </span>
                  {badge.name}
                </span>
              </div>
            ))}

            <div className="hero__image-container">
              <img
                src={HeaderImage}
                alt="Avet Badalyan - Frontend Engineer"
                className="hero__image"
                width={280}
                height={280}
                loading="eager"
                fetchPriority="high"
              />
              <div className="hero__image-glow" />
            </div>
          </div>

          <div className="hero__stats hero__stats--animate">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="hero__stat hero__stat--animate"
                style={{ animationDelay: `${1.1 + index * 0.1}s` }}
              >
                <AnimatedCounter
                  value={stat.number}
                  className="hero__stat-number"
                />
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll hero__scroll--animate"
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <div className="hero__scroll-icon">
          <FaArrowDown />
        </div>
      </a>
    </header>
  );
};

export default Header;
