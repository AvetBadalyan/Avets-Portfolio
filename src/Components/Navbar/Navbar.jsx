import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaBriefcase, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/use-theme";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { navLinks } from "./data";
import "./Navbar.scss";

/**
 * Navbar — framer-motion replaced with CSS transitions so the motion-vendor
 * chunk is not part of the initial JS bundle.
 *
 * Animations preserved:
 *  • Nav slides down on mount (CSS animation in .scss)
 *  • Theme / burger icon rotates in/out on toggle (CSS keyframes)
 *  • Mobile drawer slides in from the right (CSS transform transition)
 *  • Backdrop fades in (CSS transition)
 *  • Mobile links stagger in (CSS animation-delay per child)
 *  • Active nav indicator underline (CSS transition via layoutId removed;
 *    indicator is positioned via CSS and transitions with color change)
 */
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mobileMenuRef = useRef(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Trigger the nav entrance animation once after mount
  useEffect(() => {
    requestAnimationFrame(() => setIsMounted(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 },
    );

    observed.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useFocusTrap(isMenuOpen, { containerRef: mobileMenuRef, onClose: closeMenu });

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <nav
      className={[
        "nav",
        isScrolled ? "nav--scrolled" : "",
        isMenuOpen ? "nav--open" : "",
        isMounted ? "nav--mounted" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container nav__container">
        <a href="#header" className="nav__logo" aria-label="Home">
          <FaBriefcase />
          <span className="nav__logo-text">AB</span>
        </a>

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
                {isActive && <span className="nav__link-indicator" />}
              </a>
            );
          })}
        </div>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {/* CSS rotation swap — no AnimatePresence needed */}
            <span key={isDarkMode ? "sun" : "moon"} className="nav__icon-swap">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>

          <button
            type="button"
            className="nav__burger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              key={isMenuOpen ? "close" : "open"}
              className="nav__icon-swap"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>
        </div>

        {/* Mobile drawer — CSS transform transition */}
        {isMenuOpen && (
          <>
            <div className="nav__backdrop" onClick={closeMenu} />

            <div
              ref={mobileMenuRef}
              className="nav__mobile nav__mobile--open"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
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
                    <a
                      key={item.id}
                      href={item.link}
                      className={`nav__mobile-link nav__mobile-link--stagger ${isActive ? "nav__mobile-link--active" : ""}`}
                      style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                className="nav__mobile-theme nav__mobile-theme--stagger"
                style={{ animationDelay: `${0.1 + navLinks.length * 0.06}s` }}
                onClick={toggleTheme}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
