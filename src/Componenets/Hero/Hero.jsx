import React from "react";
import { Link } from "react-scroll";
import HeroBg from "../../Assets/images/hero-bg-00.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="hero bg-cover h-[85vh] md:h-[70vh] lg:h-[100vh] pt-[100px] bg-no-repeat bg-center w-full"
      style={{ backgroundImage: `url(${HeroBg})`, backgroundColor: 'rgba(0, 0, 0, 0.1)', }}
    >
      <div className="max-w-[1200px] h-full justify-center flex flex-col items-center mx-auto ">
        <div className="max-w-[300px] md:max-w-[1000px] flex flex-col shadow-2xl p-10 rounded-full text-white items-center">
          <h1 className="text-center text-[42px] md:text-[58px]">
            MAKEUP ARTISTRY
          </h1>
          <h3 className="text-[23px] md:text-[30px]">By Dipps</h3>
        </div>
        <motion.button
          animate={{ x: [60, 120, 0], opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          href="#service-section"
          className="hover:scale-105 duration-500 text-white text-center mt-10 py-2 px-4 border-2 shadow-xl w-[30%] mx-auto border-white rounded"
        >
          <Link
            to="service-section"
            spy={true}
            smooth={true}
            offset={-40}
            duration={900}
          >
            SERVICES
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
