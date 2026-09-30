import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaBriefcase, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/use-theme";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { navLinks } from "./data";
import "./Navbar.scss";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header");
  const [isScrolled, setIsScrolled] = useState(false);

  // The panel we trap focus inside while the mobile menu is open. Focus is
  // automatically restored to the burger (which had focus when tapped) on close.
  const mobileMenuRef = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Navbar background toggle: reads only window.scrollY (no layout query), so
  // it never forces a synchronous reflow on scroll.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active-section highlighting via IntersectionObserver instead of reading
  // getBoundingClientRect() for every section on each scroll event — the
  // previous approach forced a layout reflow per frame (flagged by Lighthouse).
  useEffect(() => {
    const sectionIds = [
      "header",
      ...navLinks.map((link) => link.link.slice(1)),
    ];
    const observed = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (observed.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is currently intersecting.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      // Trigger the switch when a section crosses the upper region of the
      // viewport, mirroring the old `rect.top <= 120` threshold.
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 },
    );

    observed.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile-menu a11y: trap Tab inside the panel, close on Escape, lock body
  // scroll, and restore focus to the burger — all handled by the shared hook.
  useFocusTrap(isMenuOpen, {
    containerRef: mobileMenuRef,
    onClose: closeMenu,
  });

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <motion.nav
      className={`nav ${isScrolled ? "nav--scrolled" : ""} ${isMenuOpen ? "nav--open" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container nav__container">
        <motion.a
          href="#header"
          className="nav__logo"
          aria-label="Home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaBriefcase />
          <span className="nav__logo-text">AB</span>
        </motion.a>

        <div className="nav__links">
          {navLinks.map((item) => {
            const sectionId = item.link.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.id}
                href={item.link}
                className={`nav__link ${isActive ? "nav__link--active" : ""}`}
              >
                {item.title}
                {isActive && (
                  <motion.span
                    className="nav__link-indicator"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="nav__actions">
          <motion.button
            type="button"
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaSun />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMoon />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            type="button"
            className="nav__burger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="burger"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="nav__backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              <motion.div
                ref={mobileMenuRef}
                className="nav__mobile"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <button
                  type="button"
                  className="nav__mobile-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>

                <div className="nav__mobile-links">
                  {navLinks.map((item, index) => {
                    const sectionId = item.link.slice(1);
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.a
                        key={item.id}
                        href={item.link}
                        className={`nav__mobile-link ${isActive ? "nav__mobile-link--active" : ""}`}
                        onClick={closeMenu}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        {item.title}
                      </motion.a>
                    );
                  })}
                </div>

                <motion.button
                  type="button"
                  className="nav__mobile-theme"
                  onClick={toggleTheme}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                  <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
