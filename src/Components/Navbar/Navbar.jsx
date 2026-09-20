import React, { useState } from "react";
import { FaBriefcase, FaBars } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { navLinks } from "./data";
import { useModal } from "../../context/modal-context";
import "./Navbar.scss";

const Navbar = () => {
  const { showModalHandler } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <a href="#header" className="skip-link">Skip to main content</a>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo" aria-label="Home">
          <FaBriefcase />
        </a>

        <div className={`nav__links ${isMenuOpen ? "hidden" : ""}`}>
          {navLinks.map((item) => (
            <a key={item.id} href={item.link}>
              {item.title.toUpperCase()}
            </a>
          ))}
        </div>

        <div className={`nav__menu ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((item) => (
            <div key={item.id} className="nav__link" onClick={toggleMenu}>
              <a href={item.link}>{item.title.toUpperCase()}</a>
            </div>
          ))}
        </div>

        <button
          type="button"
          id="theme__icon"
          onClick={showModalHandler}
          aria-label="Open theme customization"
        >
          <IoIosColorPalette />
        </button>

        <button
          type="button"
          className="burger-menu"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
