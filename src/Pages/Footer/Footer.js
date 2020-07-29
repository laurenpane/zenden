import React from "react";
import "./Footer.css";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
// import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <img className="footer-item" src={instagram} alt="instagram" />
      <img className="footer-item" src={twitter} alt="twitter" />
      <img className="footer-item" src={linkedin} alt="linkedin" />
    </div>
  );
}
