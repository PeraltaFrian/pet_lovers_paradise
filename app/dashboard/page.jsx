"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link"; 
import Card from "../components/Card";

const DashboardPage = () => {
  const { isSignedIn, user } = useUser();

  
  if (!isSignedIn) {
    return (
      <section>
        You need to sign in to access this page. 
        <Link href="/sign-in">
          Sign In
        </Link>
      </section>
    );
  }

  
  const petCards = [
    { id: "1", imageSrc: "/assets/dog.jpg", altText: "Max", buttonText: "Know More About Max" },
    { id: "2", imageSrc: "/assets/dog2.jpg", altText: "Bella", buttonText: "Know More About Bella" },
    { id: "3", imageSrc: "/assets/cat.jpg", altText: "Oliver", buttonText: "Know More About Oliver" },
    { id: "4", imageSrc: "/assets/cat2.jpg", altText: "Luna", buttonText: "Know More About Luna" },
    { id: "5", imageSrc: "/assets/rabbit.jpg", altText: "Thumper", buttonText: "Know More About Thumper" },
    { id: "6", imageSrc: "/assets/rabbit2.jpg", altText: "Cinnamon", buttonText: "Know More About Cinnamon" }
  ];


  const serviceCards = [
    { imageSrc: "/assets/grooming.jpg", altText: "Pet Grooming", title: "Pet Grooming", description: "Honey's Pet Grooming", buttonText: "Book Now" },
    { imageSrc: "/assets/veterinary.jpg", altText: "Veterinary Services", title: "Veterinary Care", description: "Trusted Veterinary Care", buttonText: "Book Now" },
    { imageSrc: "/assets/petcaregiver.jpg", altText: "Pet Caregiver", title: "Pet Caregiver", description: "Loving Pet Caregiver", buttonText: "Book Now" }
  ];

  return (
    <main className="flex flex-col items-center justify-center max-w-full py-8">
      <section className="p-4 font-bold my-5 text-center">
        <h1 className="text-3xl font-bold tracking-wide mb-4">
          Welcome, <span className="text-teal-600">{user?.firstName} {user?.lastName || "Guest"}</span>!
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
        <h3 className="text-xl font-semibold text-gray-800">Caring for Your Pet’s Health & Beauty</h3>
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
          />
        ))}
      </section>
    </main>
  );
};

export default DashboardPage;
