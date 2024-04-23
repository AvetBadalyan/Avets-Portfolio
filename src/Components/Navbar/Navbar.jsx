import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { navLinks } from "./data";
import { useModal } from "./../../context/modal-context";
import "./Navbar.scss";

const Navbar = () => {
  const { showModalHandler } = useModal();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <FaBriefcase size={30} />
        </a>

        <ul className="nav__menu">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
