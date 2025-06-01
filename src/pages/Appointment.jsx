import React from "react";
import { useParams } from "react-router-dom";

const Appointment = () => {
  const { docId } = useParams();

  return <div>Appointment: {docId}</div>;
};

export default Appointment;
