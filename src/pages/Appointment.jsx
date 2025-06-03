import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { RelatedDoctors } from "../components";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlot = async () => {
    setDocSlot([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="container mx-auto p-4">
        {/* Doctors details */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>

          <div className="flex-1 p-6">
            <h2 className="text-3xl font-semibold text-gray-900 flex items-center">
              {docInfo.name}
              <img
                className="w-5 ml-2"
                src={assets.verified_icon}
                alt="Verified"
              />
            </h2>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full bg-gray-200">
                {docInfo.experience}
              </button>
            </div>
            {/* Doctors about */}
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="mt-4 text-lg font-semibold">
              Appointment fees:{" "}
              <span className="text-green-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
            <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-sky-950 transition duration-200 rounded-full my-6">
              Book Appointment
            </button>
          </div>
        </div>
        {/* BOOKING SLOTS */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlot.length > 0 &&
              docSlot.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-4 min-w-16 rounded-full cursor-pointer transition duration-200 ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200 hover:bg-gray-100"
                  }`}
                  key={index}
                >
                  <p className="font-semibold">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p className="text-sm">
                    {item[0] && item[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlot.length > 0 &&
              docSlot[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition duration-200 ${
                    slotTime === item.time
                      ? "bg-primary text-white"
                      : "border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {item.time}
                </p>
              ))}
          </div>
          <button className="bg-primary hover:bg-sky-950 text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book Appointment
          </button>
        </div>
        {/* todo: related doctors */}
        <RelatedDoctors />
      </div>
    )
  );
};

export default Appointment;
