import { React, useEffect } from "react";
import Nav from "../Componenets/Nav/Nav";
import AboutComponenet from "../Componenets/About/AboutComponenet";
import Slider from "../Componenets/Slider/Slider";
import Contact from "../Componenets/Contact/Contact";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Nav />
      <AboutComponenet />
      <Slider />
      <Contact />
    </>
  );
};

export default AboutPage;
