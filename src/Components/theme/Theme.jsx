import React, { useEffect, useState } from "react";
import { FaPalette } from "react-icons/fa";
import setTheme from "../../helpers/themeHelper";
import "./Theme.scss";

const colorsArray = [
  {
    id: "yellow",
    bgColor: "rgb(255, 221, 64)",
  },
  {
    id: "red",
    bgColor: "rgb(232, 42, 42)",
  },
  {
    id: "green",
    bgColor: "rgb(106, 192, 69)",
  },
  {
    id: "blue",
    bgColor: "rgb(80, 120, 255)",
  },
];

export default function Theme() {
  const [theme, setCurrentTheme] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  function handleToggleTheme(currentId) {
    setCurrentTheme(currentId);
    setToggle(false);
  }

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""} `}>
      <div
        onClick={() => setToggle(!toggle)}
        className="theme-wrapper-toggle-icon"
      >
        <FaPalette size={40} />
      </div>
      <div className="theme-wrapper-menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, key) => (
            <li
              onClick={() => handleToggleTheme(item.id)}
              key={key}
              style={{ background: item.bgColor }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
