import React from "react";
// import Background from "../Assets/hero2.png";
import Ciuperci from "../Assets/lunch1.webp";
import Bors from "../Assets/lunch2.webp";
import Pui from "../Assets/lunch3.webp";
import Perisoare from "../Assets/lunch4.webp";
import Radauteana from "../Assets/lunch5.webp";

const Work = () => {
  const workInfoData = [
    {
      image: Ciuperci,
      title: "Luni",
      text1: "• Supă cremă de ciuperci cu crutoane",
      text2: "• Bulgur cu legume",
      text3: "• Carne de pui BBQ",
      text4: "• Salată Fantezie",
      text5: "80 lei",
    },
    {
      image: Pui,
      title: "Marti",
      text1: "• Ciorba de pui",
      text2: "• Colțunași cu cartofi",
      text3: "• Mici",
      text4: "• Salată vitaminoasă",
      text5: "80 lei",
    },
    {
      image: Perisoare,
      title: "Miercuri",
      text1: "• Ciorbă cu perișoare",
      text2: "• Pilaf",
      text3: "• Frigarui de pui",
      text4: "• Salată de sfeclă cu prune uscate si feta",
      text5: "80 lei",
    },
    {
      image: Bors,
      title: "Joi",
      text1: "• Bors roșu",
      text2: "• Gulaș de vită cu legume",
      text3: "• Salată roșii cu castraveți",
      text5: "80 lei",
    },
    {
      image: Radauteana,
      title: "Vineri",
      text1: "• Ciorbă rădăuțeană",
      text2: "• Spaghetti Bolognese",
      text4: "• Salata Oliver",
      text5: "80 lei",
    },
  ];
  return (
    <div id="menu-section" className="work-section-wrapper">
    
      <div className="work-section-top">
        <p className="work-primary-text">
        Explorează meniul nostru de prânzuri:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 class="work-meniu-title">{data.title}</h2>
            <p class="work-meniu">{data.text1}</p>
            <p class="work-meniu">{data.text2}</p>
            <p class="work-meniu">{data.text3}</p>
            <p class="work-meniu">{data.text4}</p>
            <p class="work-pret">{data.text5}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
