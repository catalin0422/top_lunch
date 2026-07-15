import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const details = [
  {
    icon: FaPhoneAlt,
    title: "Telefon",
    text: "068 631 885 · răspundem oricând.",
    href: "tel:+37368631885",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    text: "Trimite-ne un mesaj oricând, revenim cu răspuns în cel mai scurt timp.",
    href: "https://wa.me/37368631885?text=Bun%C4%83%20ziua!%20A%C8%99%20dori%20s%C4%83%20comand%20o%20por%C8%9Bie%20de%20prob%C4%83.",
    external: true,
  },
  {
    icon: FaEnvelope,
    title: "Email",
    text: "toplunch.md@gmail.com · pentru contracte și facturare.",
    href: "mailto:toplunch.md@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Zonă de livrare",
    text: "Livrăm gratuit la birou, oriunde în Chișinău.",
  },
];

const Contact = () => {
  return (
    <section id="contact-section" className="contact-band">
      <div className="contact-band-inner">
        <div className="contact-band-intro" data-reveal="item">
          <p className="section-eyebrow">Hai să vorbim</p>
          <h2 className="contact-band-title">Contact</h2>
          <p className="contact-band-text">
            Ai întrebări sau vrei o porție de probă pentru echipa ta? Suntem
            la un telefon distanță.
          </p>
          <a className="btn btn-call" href="tel:+37368631885">
            <FaPhoneAlt className="btn-icon" aria-hidden="true" />
            Sună acum <span className="btn-phone">068 631 885</span>
          </a>
        </div>
        <ul className="contact-details-list" data-reveal="group">
          {details.map(({ icon: Icon, title, text, href, external }) => {
            const inner = (
              <>
                <Icon className="contact-detail-icon" aria-hidden="true" />
                <h3 className="contact-detail-title">{title}</h3>
                <p className="contact-detail-text">{text}</p>
              </>
            );
            return (
              <li key={title}>
                {href ? (
                  <a
                    className="contact-detail"
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="contact-detail">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
