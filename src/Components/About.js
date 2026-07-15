import React from "react";
import {
  FaUtensils,
  FaRegClock,
  FaTruck,
  FaUsers,
  FaFileInvoice,
  FaLeaf,
  FaPhoneAlt,
} from "react-icons/fa";

const details = [
  {
    icon: FaUtensils,
    title: "Porție de probă",
    text: "Poți comanda o porție de probă, ca echipa ta să guste înainte să decidă.",
  },
  {
    icon: FaRegClock,
    title: "Comandă până la 10:00",
    text: "Comenzile plasate dimineața ajung la birou în aceeași zi, la ora prânzului.",
  },
  {
    icon: FaTruck,
    title: "Livrare gratuită",
    text: "Aducem prânzul direct la sediul companiei, oriunde în Chișinău.",
  },
  {
    icon: FaUsers,
    title: "Minim 10 porții pe zi",
    text: "Lucrăm cu echipe și birouri, comanda minimă zilnică este de 10 porții.",
  },
  {
    icon: FaFileInvoice,
    title: "Contract și factură fiscală",
    text: "Documente în regulă pentru contabilitatea companiei tale.",
  },
  {
    icon: FaLeaf,
    title: "Ambalaje ecologice",
    text: "Caserole bio disponibile contra cost, la cerere.",
  },
];

const About = () => {
  return (
    <section id="about-section" className="about-band">
      <div className="about-band-inner">
        <div className="about-band-intro" data-reveal="item">
          <p className="section-eyebrow section-eyebrow-light">
            Pentru companii
          </p>
          <h2 className="about-band-title">Condiții</h2>
          <p className="about-band-text">
            TopLunch livrează prânzuri gătite cu ingrediente proaspete,
            naturale și de calitate superioară, direct la sediul companiilor
            din Chișinău.
          </p>
          <a className="btn btn-light" href="tel:+37368631885">
            <FaPhoneAlt className="btn-icon" aria-hidden="true" />
            Sună acum <span className="btn-phone">068 631 885</span>
          </a>
        </div>
        <ul className="about-details-list" data-reveal="group">
          {details.map(({ icon: Icon, title, text }) => (
            <li className="about-detail" key={title}>
              <Icon className="about-detail-icon" aria-hidden="true" />
              <h3 className="about-detail-title">{title}</h3>
              <p className="about-detail-text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
