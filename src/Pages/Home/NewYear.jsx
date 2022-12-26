import React, { useState } from "react";
import "./NewYear.scss";

export default function NewYear() {
  const [ticks, setTicks] = useState(0);

  const refresh = () => {
    setTicks(ticks + 1);
  };

  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  setInterval(() => refresh(), 1000);

  return (
    <div id="countdown" className="countdown">
      <div className="time">
        <h2 id="days">{days}</h2>
        <p>days</p>
      </div>
      🔔
      <div className="time">
        <h2 id="hours">{hours}</h2>
        <p>hours</p>
      </div>
      🔔
      <div className="time">
        <h2 id="minutes">{minutes}</h2>
        <p>minutes</p>
      </div>
      🔔
      <div className="time">
        <h2 id="seconds">{seconds}</h2>
        <p>seconds</p>
      </div>
    </div>
  );
}
