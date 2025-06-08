import React from "react";
import Navbar from "./Navbar";
import Hero from "../Assets/hero2.webp";


const Home = () => {
    return (
      <div className="home-container">
        <img className="hero-section" src={Hero} alt="Top Lunch - Pranzuri delicioase direct la birou" loading="lazy"/>
        <Navbar />
        {}
          <div className="home-banner-container">
            <div className="home-text-section">
              <h1 className="primary-heading">
                    Livrăm <span className="highlight-pranz">prânzuri</span> delicioase, pregătite cu grijă în fiecare zi!
              </h1>
              <div className="primary-text">
              <p>Comanda o portie de probă acum!</p>
              <p>Livrare gratuită</p>
               <p>+373 (68) 631 885</p>
               <p>Chisinau, Moldova</p>
              </div>
              <a class="menu-button" href="menu-pranz-toplunch.xlsx" download="menu-pranz-toplunch.xlsx">
                 <button className="secondary-button">DESCARCĂ MENIUL</button>
              </a>
            </div>
          </div>
        </div>
    );
  };
  
  export default Home;
  
