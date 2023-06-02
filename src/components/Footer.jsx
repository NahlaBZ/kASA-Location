import React from "react";
import logoKasaWhite from "../assets/icon/Kasafooter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logoKasaWhite} alt="logo Kasa" />
      </div>
      <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
