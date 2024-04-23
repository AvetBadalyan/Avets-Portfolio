import React, { useState } from "react";
import { FaBriefcase, FaBars } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { navLinks } from "./data";
import { useModal } from "./../../context/modal-context";
import "./Navbar.scss";

const Navbar = () => {
  const { showModalHandler } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <FaBriefcase size={30} />
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

        <IoIosColorPalette id="theme__icon" onClick={showModalHandler} />

        <FaBars className="burger-menu" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
