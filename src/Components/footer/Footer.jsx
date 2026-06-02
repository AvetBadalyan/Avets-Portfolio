
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <small>{new Date().getFullYear()} AVET BADALYAN &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
