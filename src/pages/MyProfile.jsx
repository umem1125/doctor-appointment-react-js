import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: assets.profile_pic,
    email: "johndoe@gmail.com",
    phone: "+62-813-1174-5927",
    address: {
      line1: "57th Floor",
      line2: "Kijue Hotel, Jakarta",
    },
    gender: "Male",
    date_of_birth: "1990-10-10",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (line, value) => {
    setUserData((prev) => ({
      ...prev,
      address: { ...prev.address, [line]: value },
    }));
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt={userData.name} />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-1">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          {isEdit ? (
            <input
              type="email"
              className="bg-gray-100 max-w-52"
              value={userData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          ) : (
            <p className="text-blue-500">{userData.email}</p>
          )}
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              className="bg-gray-100 max-w-52"
              value={userData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          <p>Address:</p>
          {isEdit ? (
            <>
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) => handleAddressChange("line1", e.target.value)}
                placeholder="Address Line 1"
                className="bg-gray-100 mb-2"
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) => handleAddressChange("line2", e.target.value)}
                placeholder="Address Line 2"
                className="bg-gray-100"
              />
            </>
          ) : (
            <p>
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <p className="text-neutral-500 underline mt-1">Basic Information</p>
      <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
        <p>Date of Birth:</p>
        {isEdit ? (
          <input
            type="date"
            className="bg-gray-100 max-w-52"
            value={userData.date_of_birth}
            onChange={(e) => handleInputChange("date_of_birth", e.target.value)}
          />
        ) : (
          <p>{userData.date_of_birth}</p>
        )}
        <p>Gender:</p>
        {isEdit ? (
          <select
            className="bg-gray-100 max-w-52"
            value={userData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={toggleEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEdit ? "Save Changes" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
