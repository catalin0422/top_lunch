import { useState } from "react";
import Logo from "../Assets/favicon.webp";
import { Link } from "react-scroll";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "menu-section", label: "Meniu" },
  { to: "about-section", label: "Condiții" },
  { to: "quality-section", label: "De ce noi" },
  { to: "contact-section", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button
        type="button"
        className="nav-burger"
        aria-label={open ? "Închide meniul" : "Deschide meniul"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <div
        id="nav-links"
        className={
          open ? "navbar-links-container nav-links-open" : "navbar-links-container"
        }
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-20}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav-logo-container">
        <img src={Logo} alt="TopLunch" />
      </div>
      <a className="nav-phone" href="tel:+37368631885">
        <FaPhoneAlt className="nav-phone-icon" aria-hidden="true" />
        068 631 885
      </a>
    </nav>
  );
};

export default Navbar;
