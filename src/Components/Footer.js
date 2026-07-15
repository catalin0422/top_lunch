import React from "react";
import Logo from "../Assets/Logo.webp";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <div className="footer-brand">
          <img className="footer-logo" src={Logo} alt="TopLunch" />
          <p className="footer-tagline">
            Prânzuri livrate la birou, în Chișinău.
          </p>
        </div>
        <div className="footer-contact">
          <span className="footer-heading">Contactează-ne</span>
          <a href="tel:+37368631885">+373 (68) 631 885</a>
          <a href="mailto:toplunch.md@gmail.com">toplunch.md@gmail.com</a>
          <span className="footer-hours">De luni până vineri · comanzi până la 10:00</span>
        </div>
      </div>
      <p className="footer-copyright">© {year} TopLunch · Chișinău, Moldova</p>
    </footer>
  );
};

export default Footer;
