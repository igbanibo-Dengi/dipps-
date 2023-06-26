import { React, useEffect } from "react";
import Nav from "../Componenets/Nav/Nav";
import Hero from "../Componenets/Hero/Hero";
import Intro from "../Componenets/Intro/Intro";
import Services from "../Componenets/Servicees/Services";
import Cta from "../Componenets/CTA/Cta";
import Slider from "../Componenets/Slider/Slider";
import Contact from "../Componenets/Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Intro />
      <Services />
      <Cta />
      <Slider />
      <Contact />
    </>
  );
};

export default Home;
