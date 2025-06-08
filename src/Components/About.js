import React from "react";


const About = () => {
  return (
 
    <div id="about-section" className="about-section-container">
      <div className="about-section-content">
        <div className="about-description">
          <h3 className="about-primary-subheading"> DESPRE NOI </h3>
          <p className="about-primary-text">
            TopLunch este companie dedicată livrării de prânzuri delicioase și sănătoase
            pentru birouri și corporații. Oferim prânzuri gătite cu ingrediente
            proaspete, naturale și de calitate superioară, livrate direct la sediul
            dumneavoastră în Chișinău.
          </p>
        </div>

        <div className="about-details">
          <p className="about-secondary-text">DETALII:</p>
          <ul className="details-list">
            <li>• <span class="bold-text">Meniu diversificat și sănătos </span> – Ingrediente proaspete, fără aditivi chimici.</li>
            <li>• <span class="bold-text">Livrare rapidă și gratuită </span> – Comenzile făcute până la ora 10:00 ajung în aceeași zi.</li>
            <li>• <span class="bold-text">Comanda minima zilnica </span>  – 10 portii.</li>
            <li>• <span class="bold-text">Contract și factură fiscală </span> – Perfect pentru companii și angajați.</li>
            <li>• <span class="bold-text">Ambalaje ecologice disponibile </span>  – Caserole bio contra cost.</li>
          </ul>
          
        </div>
      </div>

    </div>
  
  );
};

export default About;

