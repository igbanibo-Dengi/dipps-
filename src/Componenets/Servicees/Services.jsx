import React from "react";
import IMG1 from "../../Assets/images/Bridal.jpg";
import IMG2 from "../../Assets/images/Event.jpg";
import IMG3 from "../../Assets/images/Casual.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Percentage of the element's visibility required to trigger the animation
  });
  return (
    <div className="bg-[#FEF3F3] py-20" id="service-section">
      <section className="max-w-[1200px]">
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{ duration: 1 }}
          className=" text-center mb-10 text-3xl"
        >
          SERVICES
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center sm:px-0">
          <div className="flex flex-col justify-center text-center bg-white  shadow-lg  border-2 border-[#FEF3F3] p-4 rounded">
            <img src={IMG1} alt="services" className="w-[250px] h-[auto]" />
            <p className="text-2xl p-4 ">BRIDAL</p>
            <Link to="/Contact">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
                className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black"
              >
                Book Now
              </motion.div>
            </Link>
          </div>
          <div className="flex flex-col justify-center text-center bg-white  shadow-lg border-2 border-[#FEF3F3] p-4 rounded">
            <img src={IMG2} alt="services" className="w-[250px] h-[auto]" />
            <p className="text-2xl p-4">EVENT</p>
            <Link to="/Contact">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
                className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black"
              >
                Book Now
              </motion.div>
            </Link>
          </div>
          <div className="flex flex-col justify-center text-center bg-white  shadow-lg border-2 border-[#FEF3F3] p-4 rounded">
            <img src={IMG3} alt="services" className="w-[250px] h-[auto]" />
            <p className="text-2xl p-4">CASUAL</p>
            <Link to="/Contact">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
                className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black"
              >
                Book Now
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
