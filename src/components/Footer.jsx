import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img src={assets.doctor_app_logo} className="w-44 mb-5" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            laboriosam illo nobis aliquam vero sit eos assumenda maiores error
            ut, numquam quis pariatur architecto ratione, sunt aspernatur
            eligendi quae magni?
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+62 81460445300</li>
            <li>chaerulumamb2@yahoo.com</li>
          </ul>
        </div>
      </div>
      {/* copy right */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          All Right{" "}
          <a href="https://github.com/umem1125" target="blank">
            Build by: Umem
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
