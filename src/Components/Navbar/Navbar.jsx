import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { navMenus } from "./config";
import "./Navbar.scss";

import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "./../../context/modal-context";

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <FaBriefcase size={30} />
        </a>

        <ul className="nav__menu">
          {data.map((item) => (
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
