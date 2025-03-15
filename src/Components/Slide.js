import React from "react";
// import Background from "../Assets/hero2.png";
import Vegetable from "../Assets/vegetables.png";
import Meat from "../Assets/meat.png";
import Fish from "../Assets/fish.png";
import Stew from "../Assets/stew.png";

const Slide = () => {
  const workInfoData = [
    {
      image: Vegetable,
      title: "Sortare atentă a legumelor",
      text1: "Fiecare legumă trece printr-un riguros control al calității, fiind verificată pentru nivelul de nitrați și stadiul de coacere. Punem accent pe produse ecologice, fără adaosuri chimice, pentru a oferi ingrediente cât mai naturale și sănătoase."
    },
    {
      image: Fish,
      title: "Păstrare la rece conform standardelor",
      text1: "Fiecare secție respectă cu strictețe temperatura necesară pentru păstrarea produselor, conform normelor stabilite. Temperatura poate varia între 6 și 18 grade, iar angajații beneficiază de uniforme speciale pentru a lucra în condiții optime, fără disconfort.",
    },
    {
      image: Meat,
      title: "Carne proaspătă și de calitate",
      text1: "Toată carnea este păstrată în condiții ideale de refrigerare, pentru a asigura prospețimea și calitatea până în momentul utilizării. ",
    },
    {
      image: Stew,
      title: "Mâncare gustoasă, pregătită cu pasiune",
      text1: "Fiecare preparat este gătit cu atenție la detalii, folosind ingrediente proaspete și metode tradiționale de preparare. Ne asigurăm că aromele naturale sunt păstrate, iar combinațiile de gusturi creează o experiență culinară autentică. Fără aditivi sau ingrediente artificiale, fiecare farfurie reflectă pasiunea noastră pentru mâncare sănătoasă și delicioasă.",
    },
  ];
  return (
    <div className="slide-section-wrapper">
    
      <div className="slide-section-top">
        <p className="slide-primary-text">
        De ce să ne alegi pe noi?
        </p>
        <p className="slide-introduction-text">
        La sosirea produselor în bucătărie, fiecare ingredient este cu atenție direcționat către secția sa specifică: legumele se alătură secției de legume, brânzeturile sunt preluate de secția de lactate, iar crupele sunt puse în zona dedicată băcăniei. Fiecare secție respectă cu rigurozitate temperatura ideală, pentru a păstra prospețimea și calitatea produselor, oferind astfel gustul autentic pe care îl merită fiecare preparat.
        </p>
      </div>
      <div className="slide-section-bottom">
        {workInfoData.map((data) => (
          <div className="slide-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 class="slide-meniu-title">{data.title}</h2>
            <p class="slide-meniu">{data.text1}</p>
            <p class="slide-meniu">{data.text2}</p>
            <p class="slide-meniu">{data.text3}</p>
            <p class="slide-meniu">{data.text4}</p>
            <p class="-pret">{data.text5}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
