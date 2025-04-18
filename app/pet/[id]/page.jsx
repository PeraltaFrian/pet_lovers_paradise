"use client"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import PetCard from "../../components/PetCard";
import PetForm from "../../components/PetForm"; 

const petCards = [
  {
    id: "1",
    imageSrc: "/assets/dog.jpg",
    altText: "Max",
    title: "Max",
    description: "Loyal",
    narrative: "Max is the definition of a loyal companion. He’ll be by your side through thick and thin, always ready to cheer you up with his wagging tail and big, soulful eyes. Max loves long walks in the park, chasing after tennis balls, and curling up at your feet after a day of fun. His gentle and protective nature makes him the perfect friend for quiet nights and outdoor adventures alike. If you're looking for a steadfast and loving buddy who will stick with you no matter what, Max is ready to become your best friend.",
    buttonText: "Adopt Max Now"
  },
  {
    id: "2",
    imageSrc: "/assets/dog2.jpg",
    altText: "Bella",
    title: "Bella",
    description: "Playful",
    narrative: "Bella is a ball of sunshine with endless energy and a heart full of love. She’s always ready to play — whether it’s fetching a ball, tugging on a rope, or simply running circles around you in excitement. Bella’s bright eyes and wagging tail will lift your spirits every day. But when playtime is over, she’s more than happy to snuggle up next to you for some quiet time. If you're looking for a fun-loving, affectionate companion who will fill your days with laughter and joy, Bella is waiting to make your home her playground.",
    buttonText: "Adopt Bella Now"
  },
  {
    id: "3",
    imageSrc: "/assets/cat.jpg",
    altText: "Oliver",
    title: "Oliver",
    description: "Curious",
    narrative: "Oliver is a curious little adventurer with a knack for finding hidden treasures around the house. He’ll follow you from room to room, making sure he doesn’t miss a single thing. His soft, grey fur and bright green eyes give him an almost mystical charm. Oliver loves exploring sunny windowsills and investigating the sound of rustling paper — and don’t be surprised if he decides to curl up next to you while you’re reading or working. If you’re looking for a clever and affectionate companion who will make life more interesting, Oliver is ready to make your home his kingdom.",
    buttonText: "Adopt Oliver Now"
  },
  {
    id: "4",
    imageSrc: "/assets/cat2.jpg",
    altText: "Luna",
    title: "Luna",
    description: "Independent",
    narrative: "Luna is a quiet observer with a heart full of love. She enjoys her independence and often spends her afternoons perched on a windowsill, watching the world go by. Luna has a mysterious charm — her deep blue eyes seem to understand your thoughts without a word. She’ll give you your space but will always be nearby, offering her quiet support. When she decides it's cuddle time, Luna will gracefully curl up on your lap and purr herself to sleep. If you’re looking for a calm and loyal friend who knows the art of quiet love, Luna is waiting for you.",
    buttonText: "Adopt Luna Now"
  },
  {
    id: "5",
    imageSrc: "/assets/rabbit.jpg",
    altText: "Thumper",
    title: "Thumper",
    description: "Energetic",
    narrative: "Thumper is a lively ball of energy who loves hopping around and exploring his surroundings. His playful personality shines through when he’s doing zoomies across the room or discovering a new cardboard box to chew on. Despite his energetic nature, Thumper has a soft spot for gentle head rubs and will melt into your arms when he’s tired out. He’s a curious and mischievous little guy who will keep you entertained with his antics. If you’re ready for a playful and affectionate friend who will bring life to your home, Thumper is waiting to hop into your heart." ,
    buttonText: "Adopt Thumper Now"
  },
  {
    id: "6",
    imageSrc: "/assets/rabbit2.jpg",
    altText: "Cinnamon",
    title: "Cinnamon",
    description: "Sweet",
    narrative: "Cinnamon is as sweet as her name suggests. Her soft, brown fur and gentle nature make her irresistible. She’s calm and loves nothing more than curling up next to you while you read or relax. Cinnamon adores soft strokes on her head and will reward you with tiny happy nudges. Her quiet personality makes her the perfect companion for peaceful evenings at home. If you’re looking for a sweet, loving friend who will fill your life with warmth and calm, Cinnamon is ready to bring comfort into your life.",
    buttonText: "Adopt Cinnamon Now"
  },
];

const PetProfilePage = () => {
    const router = useRouter();
    const { user } = useUser(); 
    const [pet, setPet] = useState(null);
  
    useEffect(() => {
        if (!user) {
          router.push("/sign-in"); 
        } else {
          const id = window.location.pathname.split("/").pop();
          const foundPet = petCards.find((pet) => pet.id === id);
          if (foundPet) {
            setPet(foundPet);
          }
        }
    }, [user, router]); 
  
    if (!pet) return <p>Loading...</p>;
  
    const handleSubmit = (adoptionRequest) => {
        console.log("Adoption Request:", adoptionRequest);
        alert(`Thank you for your interest in adopting ${pet.title}!`);
    };
  
    return (
        <section className="max-w-3xl mx-auto p-4">
        <PetCard pet={pet} />
        <section className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Adopt {pet.title}</h2>
          <PetForm pet={pet} handleSubmit={handleSubmit} />
        </section>
      </section>
    );
  };
  
  export default PetProfilePage;
