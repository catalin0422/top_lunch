import React, { useState } from "react";
import { weekMenu, getTodayIndex, isWeekend, PRICE_LEI } from "../menuData";

const Work = () => {
  const todayIndex = getTodayIndex();
  const weekend = isWeekend();
  const [menuType, setMenuType] = useState("clasic");

  return (
    <section id="menu-section" className="week-section">
      <div className="section-heading" data-reveal="item">
        <p className="section-eyebrow">Meniul săptămânii</p>
        <h2 className="section-title">
          Cinci zile, cinci prânzuri, {PRICE_LEI} lei porția
        </h2>
        <p className="section-lede">
          Fiecare prânz include supă, fel principal și salată, în variantă
          clasică sau vegan. Meniul se schimbă în fiecare săptămână.
        </p>
      </div>

      <div
        className="menu-toggle"
        role="group"
        aria-label="Alege tipul de meniu"
        data-reveal="item"
      >
        <button
          type="button"
          className={
            menuType === "clasic" ? "toggle-btn toggle-btn-active" : "toggle-btn"
          }
          onClick={() => setMenuType("clasic")}
        >
          Meniu clasic
        </button>
        <button
          type="button"
          className={
            menuType === "vegan"
              ? "toggle-btn toggle-btn-vegan toggle-btn-active"
              : "toggle-btn toggle-btn-vegan"
          }
          onClick={() => setMenuType("vegan")}
        >
          Meniu vegan
        </button>
      </div>

      <div className="week-strip" data-reveal="group">
        {weekMenu.map((menu, index) => {
          const isToday = !weekend && index === todayIndex;
          const dishes = menuType === "vegan" ? menu.vegan : menu.dishes;
          return (
            <article
              className={isToday ? "day-card day-card-today" : "day-card"}
              key={menu.day}
            >
              {isToday && <span className="day-card-flag">azi</span>}
              <h3 className="day-card-title">{menu.day}</h3>
              <ul className="day-card-dishes">
                {dishes.map((dish) => (
                  <li className="dish-row" key={dish}>
                    {dish}
                  </li>
                ))}
              </ul>
              <p className="day-card-price">{PRICE_LEI} lei</p>
            </article>
          );
        })}
      </div>

      <p className="week-download" data-reveal="item">
        <a
          className="btn btn-download"
          href="Meniu 6 iulie-10 iulie_1862d949-4e02-4aa5-8262-2c05bbfd1701.xlsx"
          download="Meniu 6 iulie-10 iulie_1862d949-4e02-4aa5-8262-2c05bbfd1701.xlsx"
        >
          Descarcă meniul complet
        </a>
      </p>
    </section>
  );
};

export default Work;
