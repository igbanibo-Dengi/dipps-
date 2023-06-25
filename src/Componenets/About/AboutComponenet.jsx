import React from "react";
import IntroImg from "../../Assets/images/intro-img.png";

const AboutComponenet = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-[1200px] pt-[100px] items-end justify-center lg:pt-[200px] mx-auto md:px-5">
      <div className="md:w-[60%] md:pt-20 px-4 md:px-0 flex flex-col gap-3 ">
        <h1 className="text-4xl md:text-5xl mb-10">About</h1>
        <p>Where Beauty Transforms into Art</p>
        <p>
          Welcome to Dipps Makeover, a haven where beauty is elevated to an art
          form. With a passion for creativity and an unwavering commitment to
          excellence, Dipps Makeover is your destination for breathtaking
          transformations and personalized makeup experiences.
        </p>
        <p>
          At Dipps Makeover, we believe that makeup is more than just an
          enhancement—it's a form of self-expression, a way to embrace your
          unique features, and a means to unlock your inner confidence. Led by
          our skilled and talented team, we take pride in our ability to create
          stunning looks that capture the essence of each individual.
        </p>
        <p>
          What sets Dipps Makeover apart is our dedication to providing a
          personalized and luxurious experience for every client. We understand
          that no two individuals are alike, which is why we take the time to
          listen, collaborate, and understand your unique needs and preferences.
          Our goal is to ensure that you feel heard, valued, and pampered
          throughout the entire process.
        </p>
        <p>
          Located in the vibrant Yenagoa, Bayelsa State, Dipps Makeover caters
          to clients not only in the Bayelsa, but also across various
          destinations by request. We offer our services for weddings, special
          events, photoshoots, and any occasion where you desire to look and
          feel extraordinary.
        </p>
      </div>
      <div className="hidden lg:flex flex-row items-end mt-10 md:mt-0 justify-end overflow-visble">
        <img src={IntroImg} alt="Intro" />
      </div>
    </section>
  );
};

export default AboutComponenet;
