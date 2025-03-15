import React from "react";
// import AboutBack from "../Assets/aboutBack.png";

const Contacte = () => {
  return (
 
    <div className="contacte-section-container">
      <div className="contacte-section-content">
        <div className="contacte-description">
          <p className="contacte-primary-subheading"> Contactează-ne </p>
          <p className="contacte-primary-text">
            Telefon:
          </p>
          <ul className="contacte-list">
            <li>+373 (60) 123 123</li>
            <li>toplunch@gmail.com</li>
         
          </ul>
        </div>

        <div className="contacte-details">
          <p className="contacte-primary-text">Orar:</p>
          <ul className="contacte-list">
            <li>08:00 - 20:00</li>
          </ul>
          
        </div>
      </div>

    </div>
  
  );
};

export default Contacte;