"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Card from "../components/Card";
import { useAppContext } from "../store";
import CalBookingModal from "../components/CalBookingModal";
import BookingWidgetButton from "../components/BookingWidgetButton";
import BookingsList from "../components/BookingsList";

const DashboardPage = () => {
  const { isSignedIn, user } = useUser();
  const { state } = useAppContext();
  const { petCards, serviceCards } = state;

  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [refreshMessage, setRefreshMessage] = useState("");
  const [bookingRefreshToggle, setBookingRefreshToggle] = useState(false); 

  const handleBookingComplete = () => {
    setShowBooking(false);
    setBookingRefreshToggle(prev => !prev); 
  };

  const handleRefresh = () => {
    setRefreshMessage("Refreshed!");
    setBookingRefreshToggle(prev => !prev); 
    setTimeout(() => setRefreshMessage(""), 3000);
  };

  if (!isSignedIn) {
    return (
      <section className="text-center mt-10">
        <p className="text-lg">You need to sign in to access this page.</p>
        <Link href="/sign-in" className="text-teal-600 underline">
          Sign In
        </Link>
      </section>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center max-w-full py-8">
      <section className="p-4 font-bold my-5 text-center">
        <h1 className="text-3xl font-bold tracking-wide mb-4">
          Welcome,{" "}
          <span className="text-teal-600">
            {user?.firstName} {user?.lastName || "Guest"}
          </span>
          !
          <br />
          This is a lovely place for pet lovers!
        </h1>
      </section>

      <section className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Furry Friends Looking for a Home</h3>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {petCards.map((pet) => (
          <Link key={pet.id} href={`/pet/${pet.id}`}>
            <Card
              imageSrc={pet.imageSrc}
              altText={pet.altText}
              buttonText={pet.buttonText}
            />
          </Link>
        ))}
      </section>

      <div className="mt-8"></div>

      <section className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">
          Caring for Your Pet’s Health & Beauty
        </h3>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {serviceCards.map((service, index) => (
          <Card
            key={index}
            imageSrc={service.imageSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            onClick={() => {
              setSelectedService(service.title);
              setShowBooking(true);
            }}
          />
        ))}
      </section>

      <BookingWidgetButton onClick={() => setShowBooking(true)} />

      {showBooking && (
        <CalBookingModal
          onClose={() => setShowBooking(false)}
          onComplete={handleBookingComplete}
          serviceType={selectedService}
        />
      )}

      <div className="mt-8 mb-4 w-full max-w-4xl px-4 inline-flex items-center space-x-4">
        <h3 className="text-xl font-bold text-teal-700">Your Bookings</h3>
        <button
          onClick={handleRefresh}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
        >
          🔄 Refresh Bookings
        </button>
        {refreshMessage && (
          <span className="ml-4 text-green-500 font-semibold">{refreshMessage}</span>
        )}
      </div>

      <BookingsList refreshTrigger={bookingRefreshToggle} />
    </main>
  );
};

export default DashboardPage;
