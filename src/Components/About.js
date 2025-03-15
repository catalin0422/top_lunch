import React from "react";
import AboutBack from "../Assets/aboutBack.png";

const About = () => {
  return (
 
    <div id="about-section" className="about-section-container">
      <div className="about-section-content">
        <div className="about-description">
          <p className="about-primary-subheading"> DESPRE NOI </p>
          <p className="about-primary-text">
            Suntem o companie dedicată livrării de prânzuri delicioase și sănătoase
            pentru birouri și corporații. Oferim prânzuri gătite cu ingrediente
            proaspete, naturale și de calitate superioară, livrate direct la sediul
            dumneavoastră în Chișinău.
          </p>
        </div>

        <div className="about-details">
          <p className="about-secondary-text">DETALII:</p>
          <ul className="details-list">
            <li>• Comenzi până la ora 10:00 sunt livrate în aceeași zi.</li>
            <li>• Comanda minimă este de 12 porții</li>
            <li>• Tăcâmuri gratuite incluse.</li>
            <li>• Ingrediente proaspete și ecologice, fără aditivi chimici.</li>
            <li>• Livrarea se face in caserole termoizolante.</li>
            <li>• Caserole bio, preț adițional 5 lei.</li>
          </ul>
          
        </div>
      </div>

    </div>
  
  );
};

export default About;

