import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import About from "./Components/About";
import Slide from "./Components/Slide";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Contacte from "./Components/Contacte";


function App() {
  return (
    <div className="App">
      <Home />
      <Work/>
      <About/>
      <Slide/>
      {/* <Contacte/> */}
      <Footer/>
    </div>
  );
}

export default App;
