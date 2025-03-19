import React from "react";


const About = () => {
  return (
 
    <div id="about-section" className="about-section-container">
      <div className="about-section-content">
        <div className="about-description">
          <h3 className="about-primary-subheading"> DESPRE NOI </h3>
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
            <li>• Lucrăm pe bază de contract + factură fiscală.</li>
            <li>• Comenzi până la ora 10:00 sunt livrate în aceeași zi.</li>
            <li>• Comanda minimă zilnică este de 15 porții</li>
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

