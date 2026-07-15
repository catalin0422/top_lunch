import React from "react";
import { Link } from "react-scroll";
import { FaLeaf, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";
import Hero from "../Assets/hero.webp";

const Home = () => {
  return (
    <header id="home-section" className="home-container">
      <Link
        to="menu-section"
        smooth={true}
        duration={500}
        offset={-20}
        className="vegan-banner"
      >
        <FaLeaf className="vegan-banner-icon" aria-hidden="true" />
        Meniu vegan disponibil
      </Link>
      <Navbar />
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-heading">
            Ce mâncăm <em>azi</em> la birou?
          </h1>
          <p className="hero-sub">
            TopLunch livrează prânz complet gratuit la birou, în Chișinău, cu
            supă, fel principal și salată.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-call" href="tel:+37368631885">
              <FaPhoneAlt className="btn-icon" aria-hidden="true" />
              Sună acum <span className="btn-phone">068 631 885</span>
            </a>
            <a
              className="btn btn-whatsapp"
              href="https://wa.me/37368631885?text=Bun%C4%83%20ziua!%20A%C8%99%20dori%20s%C4%83%20comand%20o%20por%C8%9Bie%20de%20prob%C4%83."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="btn-icon" aria-hidden="true" />
              Comandă pe WhatsApp
            </a>
          </div>
          <p className="hero-note">
            Comanzi până la 10:00 · porție de probă disponibilă
          </p>
        </div>

        <img
          className="hero-photo"
          src={Hero}
          alt="Prânz TopLunch pregătit pentru livrare la birou"
          fetchPriority="high"
        />
      </div>
    </header>
  );
};

export default Home;
