import { motion, useReducedMotion } from "framer-motion";
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
import { fadeIn, floating, staggerContainer } from "../../utils/animations";
import HeaderImage from "./../../assets/IMG_0861.jpeg";
import "./header.scss";

const Header = () => {
  const reduceMotion = useReducedMotion();

  const stats = [
    { number: "3+", label: "Years Exp" },
    { number: "16", label: "Projects" },
    { number: "4", label: "MERN Apps" },
    { number: "5", label: "Shopify Themes" },
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
        {/* Left Column - Text Content */}
        <motion.div
          className="hero__content"
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__greeting" variants={fadeIn("up", 0)}>
            <span className="hero__wave">👋</span>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero__name" variants={fadeIn("up", 0)}>
            <span className="hero__name-gradient">Avet Badalyan</span>
          </motion.h1>

          <motion.div className="hero__role" variants={fadeIn("up", 0)}>
            <span className="hero__role-static">I'm a </span>
            <ReactTyped
              strings={roles}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2500}
              loop
              className="hero__role-typed"
            />
          </motion.div>

          <motion.p className="hero__bio" variants={fadeIn("up", 0)}>
            Building scalable, user-focused web applications across fintech,
            e-commerce, and enterprise platforms. Currently at{" "}
            <strong>EPAM Systems</strong>, previously at{" "}
            <strong>Ashstone Studios</strong> & <strong>Cognaize</strong>.
          </motion.p>

          <motion.div className="hero__cta" variants={fadeIn("up", 0)}>
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
          </motion.div>

          <motion.div className="hero__social" variants={fadeIn("up", 0)}>
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
          </motion.div>
        </motion.div>

        {/* Right Column - Visual */}
        <div className="hero__visual">
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
          >
            {/* Animated decorative rings */}
            <motion.div
              className="hero__ring hero__ring--outer"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 25, repeat: Infinity, ease: "linear" }
              }
            />
            <motion.div
              className="hero__ring hero__ring--inner"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 18, repeat: Infinity, ease: "linear" }
              }
            />

            {/* Floating tech badges */}
            {techBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className={`hero__badge ${badge.position}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.15 }}
              >
                <motion.span
                  className="hero__badge-inner"
                  animate={reduceMotion ? undefined : floating.animate}
                  transition={reduceMotion ? undefined : { delay: index * 0.5 }}
                >
                  <span
                    className="hero__badge-icon"
                    style={{ color: badge.color }}
                  >
                    {badge.icon}
                  </span>
                  {badge.name}
                </motion.span>
              </motion.div>
            ))}

            {/* Profile image */}
            <div className="hero__image-container">
              <img
                src={HeaderImage}
                alt="Avet Badalyan - Frontend Engineer"
                className="hero__image"
              />
              <div className="hero__image-glow" />
            </div>
          </motion.div>

          {/* Stats bar with animated counters */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <AnimatedCounter
                  value={stat.number}
                  className="hero__stat-number"
                  duration={2}
                />
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <motion.div
          className="hero__scroll-icon"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <FaArrowDown />
        </motion.div>
      </motion.a>
    </header>
  );
};

export default Header;
