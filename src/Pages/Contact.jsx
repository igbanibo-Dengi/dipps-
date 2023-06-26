import { React, useEffect } from "react";
import Nav from "../Componenets/Nav/Nav";
import ContactComponent from "../Componenets/Contact/Contact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Nav />
      <div className="py-[50px]"></div>
      <ContactComponent />
    </>
  );
};

export default Contact;
