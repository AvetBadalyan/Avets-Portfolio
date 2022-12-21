import React from "react";
import "./About.styles.scss";

export default function AboutMeText() {
  return (
    <p>
      Graduated from{" "}
      <a
        href="https://drive.google.com/file/d/1_pNauQc3wi1_xBc2sJ8qWDETlq0opUwV/view"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underlined-bold-text">Microsoft IC Armenia</span>{" "}
      </a>
      (in 2021) and{" "}
      <a
        href="https://www.linkedin.com/posts/avet-badalyan-17b767101_aca-certificate-activity-6947997990619901952-7owg/?utm_source=linkedin_share&utm_medium=member_desktop_web"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underlined-bold-text">Armenian Code Academy</span>
      </a>
      (in 2022), I am in Programming and
      <span style={{ color: "var(--selected-theme-main-color)" }}>
        {" "}
        FRONT END DEVELOPMENT
      </span>{" "}
      <i>since 2021</i>. <br /> Periodically I update my portfolio with small or
      average interesting apps mastering my skills. All started from translating
      little books from w3schools{" "}
      <a
        style={{ color: "var(--selected-theme-main-color)" }}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/posts/avet-badalyan-17b767101_html-book-by-avet-badalyanpdf-activity-6843206376559271938-EMmj/?utm_source=linkedin_share&utm_medium=member_desktop_web"
      >
        about HTML
      </a>{" "}
      and{" "}
      <a
        style={{ color: "var(--selected-theme-main-color)" }}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/posts/avet-badalyan-17b767101_css-%D5%B0%D5%A1%D5%B5%D5%A5%D6%80%D5%A5%D5%B6-%D5%A9%D5%A1%D6%80%D5%A3%D5%B4%D5%A1%D5%B6%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6-activity-6847076788267433984-lbYE/?utm_source=linkedin_share&utm_medium=member_desktop_web"
      >
        about CSS
      </a>
      . <br />
      Now I build interactive apps with React JS, Redux and a little bit
      backend.
      <br />
      <br /> Before I worked as{" "}
      <b>
        <i>financial analyst, accountant and external auditor</i>
      </b>{" "}
      for 3 years. <br /> My main education is{" "}
      <b>
        <i>Finance and Management</i>
      </b>
      -{" "}
      <a
        href="https://drive.google.com/file/d/15DRtrupp8a-ZaCcSjdOinl_9x1_3scjE/view"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underlined-bold-text">
          French University in Armenia 2012-2016
        </span>
      </a>{" "}
      (Lyon 3, France, internship in Valence City) and{" "}
      <a
        href="https://drive.google.com/file/d/1l6ogOVUpgbhn7B9ij8cT5KDvFo2GjTfj/view"
        target="_blank"
        rel="noreferrer"
      >
        <span className="underlined-bold-text">
          Public Administration Academy of Armenia 2016-2018
        </span>
      </a>{" "}
      (internship in central Bank of RA) .
    </p>
  );
}
