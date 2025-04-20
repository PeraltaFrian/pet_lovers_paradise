"use client"
import { createContext, useContext, useReducer } from "react";

const initialState = {
  isMounted: false,
  petCards: [
    { id: "1", imageSrc: "/assets/dog.jpg", altText: "Max", buttonText: "Know More About Max" },
    { id: "2", imageSrc: "/assets/dog2.jpg", altText: "Bella", buttonText: "Know More About Bella" },
    { id: "3", imageSrc: "/assets/cat.jpg", altText: "Oliver", buttonText: "Know More About Oliver" },
    { id: "4", imageSrc: "/assets/cat2.jpg", altText: "Luna", buttonText: "Know More About Luna" },
    { id: "5", imageSrc: "/assets/rabbit.jpg", altText: "Thumper", buttonText: "Know More About Thumper" },
    { id: "6", imageSrc: "/assets/rabbit2.jpg", altText: "Cinnamon", buttonText: "Know More About Cinnamon" },
  ],
  serviceCards: [
    { imageSrc: "/assets/grooming.jpg", altText: "Pet Grooming", title: "Pet Grooming", description: "Honey's Pet Grooming", buttonText: "Book Now" },
    { imageSrc: "/assets/veterinary.jpg", altText: "Veterinary Services", title: "Veterinary Care", description: "Trusted Veterinary Care", buttonText: "Book Now" },
    { imageSrc: "/assets/petcaregiver.jpg", altText: "Pet Caregiver", title: "Pet Caregiver", description: "Loving Pet Caregiver", buttonText: "Book Now" },
  ],
};


function appReducer(state, action) {
  switch (action.type) {
    case "SET_IS_MOUNTED":
      return { ...state, isMounted: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}