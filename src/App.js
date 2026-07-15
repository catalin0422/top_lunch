import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Slide from "./Components/Slide";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-P2W2CCPBPH");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Home />
      <div className="gingham-divider" aria-hidden="true"></div>
      <Work />
      <About />
      <Slide />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
