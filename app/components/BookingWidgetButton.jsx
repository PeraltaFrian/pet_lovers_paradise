"use client";
import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const BookingWidgetButton = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={onClick}
        className="bg-teal-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-teal-700 transition flex items-center gap-2 animate-bounce"
      >
        <CalendarDaysIcon className="h-5 w-5 text-white" />
        Book Now
      </button>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Schedule an Appointment
      </div>
    </div>
  );
};

export default BookingWidgetButton;
