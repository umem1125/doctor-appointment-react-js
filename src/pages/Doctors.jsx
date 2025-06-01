import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [activeSpecialty, setActiveSpecialty] = useState(speciality || ""); // Track active specialty
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (activeSpecialty) {
      setFilterDoc(
        doctors.filter(
          (doc) =>
            doc.speciality.toLowerCase() === activeSpecialty.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, activeSpecialty]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Our Doctors</h1>
      <p className="text-gray-600 mb-6">
        Select a specialty to find available doctors.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
        <div className="flex flex-col gap-4 text-sm text-gray-600 w-full sm:w-1/4">
          <h2 className="font-semibold text-lg">Specialties</h2>
          {[
            "Dokter Umum",
            "Dokter Kandungan",
            "Dokter Kulit",
            "Dokter Anak",
            "Dokter Saraf",
            "Dokter Spesialis Saluran Pencernaan",
          ].map((specialty, index) => (
            <p
              key={index}
              className={`pl-3 py-2 pr-4 border border-gray-300 rounded transition-all cursor-pointer ${
                activeSpecialty.toLowerCase() === specialty.toLowerCase()
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => {
                setActiveSpecialty(specialty); // Set active specialty
                navigate(`/doctors/${specialty}`); // Navigate to the selected specialty
              }}
            >
              {specialty}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.map((item) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={item._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-300"
              />
              <div className="text-center">
                <p className="text-lg font-semibold text-blue-800">
                  {item.name}
                </p>
                <p className="text-gray-600">{item.speciality}</p>
                <div className="mt-2">
                  <p className="text-green-500 font-medium">Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
