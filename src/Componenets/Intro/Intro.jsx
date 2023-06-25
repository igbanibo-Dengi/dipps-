import React from "react";
import IntroImg from "../../Assets/images/intro-img.png";

const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-[1200px] mx-auto md:px-5">
      <div className="md:w-[60%] md:py-20 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl mb-10">
          Discover the Magic of Dipps Makeover
        </h1>
        <p className="text-base sm:text-xl">
          Welcome to Dipps Makeover, where enchanting transformations come to
          life. Our team of skilled makeup artists specializes in unlocking your
          true beauty potential, whether you're a celebrity, a bride, or simply
          someone seeking a captivating look.
        </p>
        <p className="text-base sm:text-xl mt-4">
          Immerse yourself in the world of Dipps Makeover, where beauty is a
          work of art. Let us be your trusted partner on your journey to
          captivating beauty and unforgettable moments.
        </p>
      </div>
      <div className="flex flex-row justify-center mt-10 md:mt-0 md:justify-center md:items-end">
        <img src={IntroImg} alt="Intro" />
      </div>
    </section>
  );
};

export default Intro;
