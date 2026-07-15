import React from "react";
import Vegetable from "../Assets/vegetables.webp";
import Meat from "../Assets/meat.webp";
import Fish from "../Assets/fish.webp";
import Stew from "../Assets/stew.webp";

const qualityData = [
  {
    image: Vegetable,
    title: "Sortare atentă a legumelor",
    text: "Fiecare legumă trece printr-un riguros control al calității, fiind verificată pentru nivelul de nitrați și stadiul de coacere. Punem accent pe produse ecologice, fără adaosuri chimice.",
  },
  {
    image: Fish,
    title: "Păstrare la rece conform standardelor",
    text: "Fiecare secție respectă cu strictețe temperatura necesară pentru păstrarea produselor, conform normelor stabilite, între 6 și 18 grade.",
  },
  {
    image: Meat,
    title: "Carne proaspătă și de calitate",
    text: "Toată carnea este păstrată în condiții ideale de refrigerare, pentru a asigura prospețimea și calitatea până în momentul utilizării.",
  },
  {
    image: Stew,
    title: "Gătit cu pasiune, fără aditivi",
    text: "Fiecare preparat este gătit cu atenție la detalii, folosind ingrediente proaspete și metode tradiționale de preparare, fără aditivi sau ingrediente artificiale.",
  },
];

const Slide = () => {
  return (
    <section id="quality-section" className="quality-section">
      <div className="section-heading" data-reveal="item">
        <p className="section-eyebrow">Cum gătim</p>
        <h2 className="section-title">De ce să ne alegi pe noi?</h2>
        <p className="section-lede">
          La sosirea în bucătărie, fiecare ingredient este direcționat către
          secția sa: legumele la secția de legume, brânzeturile la lactate,
          crupele la băcănie. Fiecare secție respectă temperatura ideală,
          pentru a păstra prospețimea și gustul autentic.
        </p>
      </div>
      <div className="quality-grid" data-reveal="group">
        {qualityData.map((item) => (
          <article className="quality-card" key={item.title}>
            <div className="quality-card-img">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <h3 className="quality-card-title">{item.title}</h3>
            <p className="quality-card-text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Slide;
