import React from "react";
import "./Experience.styles.scss";

export default function ExperienceCard({ title, icon, description }) {
  return (
    <div className="experience-card">
      <div className="experience-card__icon">{icon}</div>
      <div className="experience-card__details">
        <h3>{title}</h3>
        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
