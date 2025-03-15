import React from "react";
import Navbar from "./Navbar";
import Hero from "../Assets/hero2.png";


const Home = () => {
    return (
      <div className="home-container">
        <img className="hero-section" src={Hero} alt="" />
        <Navbar />
        {}
          <div className="home-banner-container">
            <div className="home-text-section">
              <h1 className="primary-heading">
                    Livrăm <span className="highlight-pranz">prânzuri</span> delicioase, pregătite cu grijă în fiecare zi!
              </h1>
              <div className="primary-text">
               <p>+373 (60) 123123</p>
               <p>str. Uzinelor 17, Chișinău</p>
              </div>
              <a class="menu-button" href="menu.pdf" download="menu.pdf">
                 <button className="secondary-button">DESCARCĂ MENIUL</button>
              </a>
            </div>
          </div>
        </div>
    );
  };
  
  export default Home;
  
