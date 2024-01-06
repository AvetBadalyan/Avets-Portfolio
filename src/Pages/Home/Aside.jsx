import { Circle } from "rc-progress";
import React, { useMemo } from "react";
import "./Aside.scss";
import { languages } from "./languages";
import photo from "./../../assets/IMG_6344.JPG";

export default function Aside() {
  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const birthDate = useMemo(() => new Date("1995-04-28"), []);
  const ageInDays = useMemo(
    () => Math.floor((today - birthDate) / (24 * 60 * 60 * 1000)),
    [birthDate, today]
  );

  const ageInYears = useMemo(() => Math.floor(ageInDays / 365.25), [ageInDays]);

  return (
    <aside>
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
          <span className="aside-info-text">{ageInYears}</span>
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
