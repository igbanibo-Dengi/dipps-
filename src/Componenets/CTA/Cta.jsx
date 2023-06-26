import React from "react";
import CTAIMG from "../../Assets/images/cta-img.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="pt-10 md:pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease: "easeInOut" }}
        className="flex flex-col md:flex-row p-4 gap-4 md:gap-0"
      >
        <div className="flex flex-col items-center w-full justify-center gap-10">
          <p className="text-xl lg:text-2xl max-w-[400px] leading-10">
            Are you in search of an exquisitely glamorous look for a wedding,
            celebration, or captivating photoshoot? Alternatively, do you desire
            a subtly radiant, skin-like finish? Be assured that I possess a deep
            passion for the art of applying, sculpting, and crafting a truly
            remarkable appearance that is perfectly tailored to your individual
            preferences.
          </p>
          <Link to="/Contact">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
              className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black"
            >
              Get In Touch
            </motion.div>
          </Link>
        </div>
        <div className="p-5 md:w-full hidden md:block">
          <img src={CTAIMG} alt="call to action" />
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;
