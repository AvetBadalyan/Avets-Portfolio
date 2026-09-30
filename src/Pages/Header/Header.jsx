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
import MagneticButton from "../../Components/MagneticButton/MagneticButton";
import HeaderImage from "./../../assets/IMG_0861.jpeg";
import "./header.scss";

/**
 * Header / Hero section.
 * All framer-motion usage removed — animations are handled by CSS keyframes
 * already defined in header.scss, keeping the motion-vendor chunk out of the
 * initial JS bundle.
 *
 * Animations preserved:
 *  • heroContentEnter  — translateY fade-up for left column (CSS)
 *  • imageWrapperEnter — scale + opacity for image wrapper (CSS)
 *  • badgeEnter        — staggered opacity+translateY for tech badges (CSS)
 *  • statsEnter        — opacity+translateY for stats panel (CSS)
 *  • scrollEnter       — opacity for scroll indicator (CSS)
 *  • borderGlow        — rotating conic ring (CSS, already present)
 *  • ringPulse         — outer/inner rings (CSS, already present)
 *  • floating          — badge hover float (CSS, already present)
 */
const Header = () => {
  const reduceMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const stats = [
    { number: "3+", label: "Years Exp" },
    { number: "21", label: "Projects" },
    { number: "4", label: "MERN Apps" },
    { number: "3", label: "Shopify Themes" },
  ];

  const roles = [
    "Frontend Engineer",
    "React Developer",
    "Full Stack Developer",
    "Shopify Expert",
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
        {/* CSS transform-only entrance — LCP text paints on first frame */}
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
            <strong>Ashstone Studios</strong> &amp; <strong>Cognaize</strong>.
          </p>

          <div className="hero__cta">
            <MagneticButton
              as="a"
              href="#portfolio"
              className="btn btn--primary hero__btn"
              strength={0.2}
            >
              <span>View Projects</span>
              <HiOutlineArrowRight className="hero__btn-icon" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="btn btn--outline hero__btn"
              strength={0.2}
            >
              Let's Talk
            </MagneticButton>
            <MagneticButton
              as="a"
              href={CV}
              download
              className="btn btn--outline hero__btn"
              strength={0.15}
            >
              <FaDownload />
              <span>Resume</span>
            </MagneticButton>
          </div>

          <div className="hero__social">
            <MagneticButton
              as="a"
              href="https://github.com/AvetBadalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub Profile"
              strength={0.4}
            >
              <FaGithub />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="https://www.linkedin.com/in/avet-badalyan-17b767101/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn Profile"
              strength={0.4}
            >
              <FaLinkedin />
            </MagneticButton>
          </div>
        </div>

        <div className="hero__visual">
          {/* CSS scale+opacity entrance — replaces motion spring */}
          <div className="hero__image-wrapper hero__image-wrapper--enter">
            {/* Rings use CSS ringPulse keyframes already in header.scss */}
            <div
              className={`hero__ring hero__ring--outer${reduceMotion ? " hero__ring--static" : ""}`}
            />
            <div
              className={`hero__ring hero__ring--inner${reduceMotion ? " hero__ring--static" : ""}`}
            />

            {techBadges.map((badge, index) => (
              <div
                key={badge.name}
                className={`hero__badge ${badge.position} hero__badge--enter`}
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >
                <span
                  className={`hero__badge-inner${reduceMotion ? "" : " hero__badge-inner--float"}`}
                >
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

          {/* Stats panel CSS entrance */}
          <div className="hero__stats hero__stats--enter">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="hero__stat hero__stat--enter"
                style={{ animationDelay: `${1.1 + index * 0.1}s` }}
              >
                <AnimatedCounter
                  value={stat.number}
                  className="hero__stat-number"
                  duration={2}
                />
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll hero__scroll--enter"
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <div
          className={`hero__scroll-icon${reduceMotion ? "" : " hero__scroll-icon--bounce"}`}
        >
          <FaArrowDown />
        </div>
      </a>
    </header>
  );
};

export default Header;
