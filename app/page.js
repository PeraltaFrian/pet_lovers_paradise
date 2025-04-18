"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; 
import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter(); 

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleButtonClick = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      alert("Please sign in to view the adoption and services.");
      router.push("/sign-in");
    }
  };

  const petCards = [
    {
      imageSrc: "/assets/dog.jpg",
      altText: "A cute dog waiting for adoption",
      title: "Adopt a Loyal Dog",
      description: "A loyal companion looking for a forever home",
    },
    {
      imageSrc: "/assets/cat.jpg",
      altText: "A fluffy cat ready to be adopted",
      title: "Find Your Purrfect Cat",
      description: "A sweet and affectionate cat waiting for you",
    },
    {
      imageSrc: "/assets/rabbit.jpg",
      altText: "A cute rabbit looking for a home",
      title: "Adopt a Lovable Rabbit",
      description: "A cuddly rabbit in need of a loving family",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-8 pb-10 gap-12 sm:px-5 bg-white">
      <section className="text-center mt-4 mb-6 px-4 sm:px-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Find Your Perfect Pet, and Experience Unconditional Love!
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Looking for a loyal companion, a playful partner, or a cuddly friend? Whether you're a passionate dog lover, a proud cat parent, or a rabbit enthusiast, we've got the perfect pet waiting for you to give them a forever home!
        </p>
        <p className="text-lg text-gray-600">
          Explore each pet’s unique personality and discover how they can brighten your life! 🐾
        </p>
      </section>

      <section className="grid gap-8 sm:grid-cols-3 mx-2 w-full justify-items-center">
        {petCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>

      <section className="mt-8">
        <Button
          text="Find Your Perfect Pet & Services"
          onClick={handleButtonClick}
        />
      </section>
    </div>
  );
}
