import Logo from "../Assets/toplunch2.webp";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" loading="lazy" />
      </div>
      <div className="navbar-links-container">
        {/* Replace anchor tag with Link for Home */}
        <Link to="home-section" smooth={true} duration={500}>Home</Link>
        <Link to="about-section" smooth={true} duration={500}>Despre noi</Link>
        <Link to="menu-section" smooth={true} duration={500}>Meniu</Link>
        <Link to="contact-section" smooth={true} duration={500}>Contactează-ne</Link>
      </div>
    </nav>
  );
};

export default Navbar;
