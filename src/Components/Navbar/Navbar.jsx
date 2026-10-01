import { useCallback, useEffect, useRef, useState } from "react";
import { FaBars, FaBriefcase, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/use-theme";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { navLinks } from "./data";
import "./Navbar.scss";

const MENU_ANIM_MS = 300; // keep in sync with $menu-anim in Navbar.scss

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  // isMenuMounted keeps the panel in the DOM through the close animation.
  // isMenuOpen drives the open/close CSS state.
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header");
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuRef = useRef(null);
  const closeTimer = useRef(null);

  const openMenu = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsMenuMounted(true);
    // Next frame: flip to open so the enter transition runs from the start state.
    requestAnimationFrame(() => setIsMenuOpen(true));
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    // Unmount only after the exit animation has finished.
    closeTimer.current = setTimeout(
      () => setIsMenuMounted(false),
      MENU_ANIM_MS,
    );
  }, []);

  const toggleMenu = useCallback(() => {
    if (isMenuOpen) closeMenu();
    else openMenu();
  }, [isMenuOpen, openMenu, closeMenu]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

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
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 },
    );

    observed.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Only trap focus while the menu is actually open.
  useFocusTrap(isMenuOpen, {
    containerRef: mobileMenuRef,
    onClose: closeMenu,
  });

  return (
    <nav
      className={`nav nav--animate ${isScrolled ? "nav--scrolled" : ""} ${isMenuOpen ? "nav--open" : ""}`}
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
                aria-current={isActive ? "page" : undefined}
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
            <span className="nav__icon-swap">
              <FaSun
                className={`nav__icon ${isDarkMode ? "nav__icon--in" : "nav__icon--out"}`}
                aria-hidden={!isDarkMode}
              />
              <FaMoon
                className={`nav__icon ${isDarkMode ? "nav__icon--out" : "nav__icon--in"}`}
                aria-hidden={isDarkMode}
              />
            </span>
          </button>

          <button
            type="button"
            className="nav__burger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="nav__icon-swap">
              <FaBars
                className={`nav__icon ${isMenuOpen ? "nav__icon--out" : "nav__icon--in"}`}
                aria-hidden={isMenuOpen}
              />
              <FaTimes
                className={`nav__icon ${isMenuOpen ? "nav__icon--in" : "nav__icon--out"}`}
                aria-hidden={!isMenuOpen}
              />
            </span>
          </button>
        </div>

        {isMenuMounted && (
          <>
            <div
              className={`nav__backdrop ${isMenuOpen ? "nav__backdrop--open" : ""}`}
              onClick={closeMenu}
            />

            <div
              ref={mobileMenuRef}
              className={`nav__mobile ${isMenuOpen ? "nav__mobile--open" : ""}`}
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
                      className={`nav__mobile-link nav__mobile-link--animate ${isActive ? "nav__mobile-link--active" : ""}`}
                      style={{ animationDelay: `${0.08 + index * 0.05}s` }}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                className="nav__mobile-theme"
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
