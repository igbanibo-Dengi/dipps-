import React from "react";
import GoogleMapReact from "google-map-react";
import { AiFillPhone } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 4.938793669189146,
      lng: 6.326983850507782,
    },
    zoom: 11,
  };

  const markerPosition = {
    lat: 4.938793669189146,
    lng: 6.326983850507782,
  };

  const Marker = ({ text }) => (
    <div style={{ color: "red", fontWeight: "bold", marginTop: "-30px" }}>
      <FaMapMarkerAlt size={24} />
    </div>
  );

  return (
    <section>
      <div className="flex flex-col lg:flex-row md:gap-10 px-6 py-10">
        <div className="w-full pt-5 flex flex-col">
          <h3 className="text-3xl text-center">GET IN TOUCH</h3>
          <div className="flex flex-row justify-center gap-10 py-5 ">
            <a href="/" className="hover:scale-110 duration-300">
              <AiFillPhone size={30} />
            </a>
            <a href="/" className="hover:scale-110 duration-300">
              <BsTwitter size={30} />
            </a>
            <a href="/" className="hover:scale-110 duration-300">
              <AiFillInstagram size={30} />
            </a>
          </div>
          <form className="grid grid-cols-2 gap-3 mt-4">
            <input
              className="border border-black p-3"
              type="name"
              placeholder="Name"
            />
            <input
              className="border border-black p-3"
              type="email"
              placeholder="Email"
            />
            <input
              className="border border-black p-3"
              type="phone"
              placeholder="Phone number"
            />
            <input
              className="border border-black p-3"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="border border-black col-span-2"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
          </form>
          <button className="uppercase mt-5 hover:scale-105 duration-500 py-2 px-4 border-2 w-[fit-content] mx-auto border-black">
            SUBMIT
          </button>
        </div>
        <div className="map h-[450px] w-full mt-5 border border-gray-500">
          <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAlk-soenCOTpMQw5G_uN_VxsAS4CoFfH8",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={4.938793669189146}
                lng={6.326983850507782}
                text="Dipps Makeover"
              />
              {/* Add Marker component for the pin */}
              <Marker
                lat={markerPosition.lat}
                lng={markerPosition.lng}
                text="Dipps Makeover"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
      <div className="text-center p-6 border-t border-t-black">
        <p>© 2023 Dipps Beautifyers</p>
      </div>
    </section>
  );
};

export default Contact;
