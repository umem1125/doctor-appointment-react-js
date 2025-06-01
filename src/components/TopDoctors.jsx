import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-900">
        Top Doctors to Book
      </h1>
      <p className="max-w-xl text-center text-gray-700 text-lg mb-4">
        Simply browse through our extensive list of trusted doctors
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center cursor-pointer"
          >
            <img
              src={item.image}
              alt="Doctor"
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-300"
            />
            <div className="text-center">
              <p className="text-lg font-semibold text-blue-800">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
              <div className="mt-2">
                <p className="text-green-500 font-medium">Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/doctors")}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        More
      </button>
    </section>
  );
};

export default TopDoctors;
