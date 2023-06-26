import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "./images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <div className="bg-[#FEF3F3] mt-10 md:mt-0 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[800px] mx-auto">
          <Carousel autoPlay infiniteLoop>
            {images.map((image, index) => (
              <div key={index} className="h-[auto] mx-auto md:w-[400px]">
                <img
                  src={image}
                  alt={`slider ${index + 1}`}
                  className="mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-row justify-center">
          <Link to="/Portfolio">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
              className="hover:scale-105 duration-500 py-2 i px-4 border-2 w-[fit-content] mx-auto border-black"
            >
              View Portfolio
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
