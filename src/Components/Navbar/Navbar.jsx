import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import "./Navbar.scss";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = (e) => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-container-logo">
          <FaReact size={30} />
        </Link>
        <div
          className={
            click ? "navbar-container-menu active" : "navbar-container-menu"
          }
        >
          {navMenus.map((item, key) => (
            <div
              onClick={() => setClick(false)}
              key={key}
              className="navbar-container-menu-item"
            >
              <Link className="navbar-container-menu-item-links" to={item.to}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="nav-icon" onClick={handleClick}>
          {click ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
}
