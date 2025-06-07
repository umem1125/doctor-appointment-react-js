import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaMoneyBillWave, FaTrash } from "react-icons/fa";

const MyAppointement = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4">
      <h2 className="pb-3 mt-12 font-medium text-zinc-700 border-b text-xl">
        My Appointments
      </h2>
      <div className="space-y-4">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            key={index}
          >
            <div className="flex-shrink-0">
              <img
                className="w-32 h-32 object-cover rounded-lg"
                src={item.image}
                alt={`${item.name}'s profile`}
              />
            </div>
            <div className="flex-1 text-sm text-zinc-600 sm:ml-4">
              <p className="text-neutral-800 font-semibold text-lg">
                {item.name}
              </p>
              <p className="text-neutral-600">{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>
                <span className="ml-1">18 June, 2025 | 8:30</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-end sm:ml-4">
              <button className="flex items-center justify-center text-sm text-white py-2 border bg-primary hover:bg-blue-600 transition-all duration-300 rounded-lg">
                <FaMoneyBillWave className="mr-1" />
                Pay Online
              </button>
              <button className="flex items-center justify-center text-sm text-stone-500 py-2 border hover:bg-red-100 transition-all duration-300 rounded-lg">
                <FaTrash className="mr-1" />
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointement;
