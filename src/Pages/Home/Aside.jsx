import { Circle } from "rc-progress";
import React from "react";
import "./Aside.scss";
import { languages } from "./languages";
import photo from "./../../assets/IMG_6344.JPG";

export default function Aside() {
  return (
    <aside>
      {/* <div
        className="new-year-container"
        style={{
          background: "url(https://cdn.wallpapersafari.com/74/68/xdkzXw.jpeg)",
        }}
      >
        <h1>🎄Happy New Year 2023 in🎅</h1>
        <NewYear />
      </div> */}

      <div className="aside-header">
        <img src={photo} alt="avet" />
        <h2>Avet Badalyan</h2>
        <h3>Front-end Developer</h3>
      </div>

      <div className="aside-info">
        <div>
          <span>Country: </span>
          <span className="aside-info-text">Armenia</span>
        </div>
        <div>
          <span>City: </span>
          <span className="aside-info-text">Yerevan</span>
        </div>
        <div>
          <span>Age: </span>
          <span className="aside-info-text">27</span>
        </div>
      </div>

      <div className="aside-languages">
        {languages.map((item, key) => (
          <div className="language-progressbar-wrapper" key={key}>
            <Circle
              percent={item.percentage}
              strokeWidth="8"
              strokeColor="var(--selected-theme-main-color)"
              strokeLinecap="square"
              trailWidth="8"
            />
            <p>{item.languageName}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
