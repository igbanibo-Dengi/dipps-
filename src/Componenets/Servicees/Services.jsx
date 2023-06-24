import React from "react";
import IMG1 from "../../Assets/images/service-img-1.jpg";

const Services = () => {
  return (
    <div className="bg-[#FEF3F3] py-20">
      <section className="max-w-[1200px]">
        <div className="text-center mb-10 text-3xl">
          <p>SERVICES</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 px-2 sm:px-0">
          <div className="flex flex-col justify-center text-center border-2 border-[#FEF3F3] p-4 rounded">
            <img src={IMG1} alt="services" />
            <p className="text-2xl p-4">BRIDAL</p>
            <button className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black">
              Book Now
            </button>
          </div>
          <div className="flex flex-col justify-center text-center border-2 border-[#FEF3F3] p-4 rounded">
            <img src={IMG1} alt="services" />
            <p className="text-2xl p-4">EVENT</p>
            <button className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black">
              Book Now
            </button>
          </div>
          <div className="flex flex-col justify-center text-center border-2 border-[#FEF3F3] p-4 rounded">
            <img src={IMG1} alt="services" />
            <p className="text-2xl p-4">CASUAL</p>
            <button className="hover:scale-105 duration-500 py-2 px-4 border-2 w-[130px] mx-auto border-black">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
