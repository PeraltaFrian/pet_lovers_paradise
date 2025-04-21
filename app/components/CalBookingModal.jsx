"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const CalBookingModal = ({ onClose, serviceType }) => {
  const { user } = useUser();
  const name = encodeURIComponent(`${user?.firstName || ""} ${user?.lastName || ""}`);
  const service = encodeURIComponent(serviceType || "");

  const calUrl = `https://calendly.com/groupcprga/schedule?name=${name}&a1=${service}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className= "bg-transparent rounded-lg overflow-hidden shadow-lg w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <iframe
          src={calUrl}
          width="100%"
          height="700"
          frameBorder="0"
          title="Cal Booking"
        ></iframe>
      </div>
    </div>
  );
};

export default CalBookingModal;
