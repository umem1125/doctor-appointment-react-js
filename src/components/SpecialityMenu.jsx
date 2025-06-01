import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <section
      className="flex flex-col items-center gap-6 py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-900"
      id="speciality"
    >
      <h1 className="text-4xl font-extrabold mb-2 text-center text-sky-900">
        Find By Speciality
      </h1>
      <p className="max-w-xl text-center text-gray-700 text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.url}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex flex-col items-center p-6"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-300"
            />
            <p className="text-xl font-semibold text-blue-800 uppercase tracking-wide">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMenu;
