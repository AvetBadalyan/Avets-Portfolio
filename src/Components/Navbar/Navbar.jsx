import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaBriefcase, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/theme-context";
import { navLinks } from "./data";
import "./Navbar.scss";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header");
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for the mobile-menu focus trap: the panel we trap focus inside, and
  // the burger button we return focus to when the menu closes.
  const mobileMenuRef = useRef(null);
  const burgerRef = useRef(null);

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = [
        "header",
        ...navLinks.map((link) => link.link.slice(1)),
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile-menu keyboard handling: Escape closes it, and Tab is trapped inside
  // the panel so focus can't escape to the page behind it (required to honor
  // aria-modal="true"). On open we move focus into the panel; on close we
  // restore focus to the burger button that opened it.
  useEffect(() => {
    if (!isMenuOpen) return;

    const panel = mobileMenuRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

    // Move focus into the panel on open.
    getFocusable()[0]?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      // Cycle: Shift+Tab off the first element wraps to the last, and Tab off
      // the last wraps back to the first.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Return focus to the burger when the menu closes.
      burgerRef.current?.focus();
    };
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
      <a href="#header" className="skip-link">
        Skip to main content
      </a>

      <div className="container nav__container">
        {/* Logo */}
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

        {/* Desktop Nav Links */}
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

        {/* Actions */}
        <div className="nav__actions">
          {/* Theme Toggle */}
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

          {/* Mobile Burger */}
          <motion.button
            ref={burgerRef}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="nav__backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Menu Panel */}
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

                {/* Theme toggle in mobile menu */}
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
