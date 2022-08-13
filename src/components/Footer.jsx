import React from "react";
import FooterImg from "../assets/images/Footer.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-4">
        <img src={FooterImg} alt="Footer Logo" />
      </div>
    </footer>
  );
}

export default Footer;
