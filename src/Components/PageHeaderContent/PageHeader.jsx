import React from "react";
import "./PageHeader.scss";

export default function PageHeader({ headerText }) {
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
    </div>
  );
}
