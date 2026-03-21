import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MntWorld from "./components/MntWorld";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <MntWorld/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
