import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
          Book an Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light">
          <img
            className="w-32"
            src={assets.group_profiles}
            alt="Group of doctors"
          />
          <p>
            Browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            and easily schedule your appointment.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-3 bg-white px-10 py-3 rounded-full text-gray-700 text-sm font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          aria-label="Book an appointment"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src={assets.header_img}
          alt="Healthcare professionals"
        />
      </div>
    </div>
  );
};

export default Header;
