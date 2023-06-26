import { React, useEffect } from "react";
import Nav from "../Componenets/Nav/Nav";
import Gallery from "../Componenets/Gallery/Gallery";
import Contact from "../Componenets/Contact/Contact";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
      <Nav />
      <Gallery />
      <Contact />
    </>
  );
};

export default Portfolio;
