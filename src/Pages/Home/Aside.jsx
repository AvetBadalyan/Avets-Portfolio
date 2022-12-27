import { Circle, Line } from "rc-progress";
import React from "react";
import "./Aside.scss";
import { languages } from "./languages";
import photo from "./../../assets/IMG_6344.JPG";
import { skillsData } from "../Skills/utils";
import { Animate } from "react-simple-animate";
import NewYear from "./NewYear";

export default function Aside() {
  return (
    <aside>
      <div
        className="new-year-container"
        style={{
          background: "url(https://cdn.wallpapersafari.com/74/68/xdkzXw.jpeg)",
        }}
      >
        <h1>🎄Happy New Year 2023 in🎅</h1>
        <NewYear />
      </div>
      <div className="aside-header">
        <img src={photo} alt="avet" />
        <h2>Avet Badalyan</h2>
        <h3>Front-end Developer</h3>
      </div>

      <div className="aside-main">
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

        <div className="aside-program-languages">
          {skillsData[0].data.map((item, index) => (
            <Animate
              key={index}
              play
              duration={1}
              delay={0.4}
              start={{ transform: "translateX(-250px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <div className="progressbar-wrapper" key={index}>
                <p>{item.skillName}</p>
                <Line
                  percent={item.percentage}
                  strokeWidth="2"
                  strokeColor="var(--selected-theme-main-color)"
                  strokeLinecap="square"
                  trailWidth="2"
                />
              </div>
            </Animate>
          ))}
        </div>
        <div className="other-skills">
          <span>Other Skills: </span>
          <span className="aside-info-text">Figma, SASS, Git/GitHub</span>
        </div>
      </div>
    </aside>
  );
}
