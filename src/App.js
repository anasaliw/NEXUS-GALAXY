import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Home/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/Home/HeroSection/HeroSection";
import Tokenomics from "./components/Home/Tokonomics/Tokenomics";
import Footer from "./components/Home/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <Tokenomics />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
