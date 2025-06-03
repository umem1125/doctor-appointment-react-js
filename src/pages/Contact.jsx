import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-3xl font-bold text-center mb-6">
        <p>
          CONTACT <span className="text-gray-700">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={assets.contact_image}
          alt="Contact Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        <div className="flex flex-col justify-center gap-4 md:w-1/2">
          <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet.
            <br /> Lorem, ipsum dolor.
          </p>
          <p className="text-gray-600">
            Tel: +62 00000 <br /> Lorem, ipsum dolor.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">
            Careers at{" "}
            <span className="font-semibold text-primary underline">
              DoctorApp
            </span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, non.
          </p>
          <button className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
