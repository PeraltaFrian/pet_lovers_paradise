import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import FormField from "./FormField";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const PetForm = ({ pet, handleSubmit }) => {
  const { user } = useUser();

  const [name] = useState(user?.firstName || ""); 
  const [lastName] = useState(user?.lastName || "");
  const [email] = useState(user?.emailAddresses[0]?.emailAddress || ""); 
  const [contactNumber, setContactNumber] = useState(""); 
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
  }, [user]);

  const validatePhoneNumber = (number) => {
    if (!number) {
      setPhoneError("Phone number is required");
      return false;
    }

    const phoneNumber = parsePhoneNumberFromString(number);
    if (!phoneNumber || !phoneNumber.isValid()) {
      setPhoneError("Invalid international phone number format");
      return false;
    }

    setPhoneError("");
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePhoneNumber(contactNumber)) return;

    if (!contactNumber || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    handleSubmit({
      petId: pet.id,
      petName: pet.title,
      adopterName: `${name} ${lastName}`,
      adopterEmail: email,
      adopterContact: contactNumber,
      message,
    });

    setContactNumber("");
    setMessage("");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-4">
        <div className="flex space-x-4">
          <FormField 
            label="First Name" 
            value={name} 
            onChange={() => {}} 
            placeholder="First Name" 
            disabled 
          />
          <FormField 
            label="Last Name" 
            value={lastName} 
            onChange={() => {}} 
            placeholder="Last Name" 
            disabled 
          />
        </div>
        <FormField 
          label="Email Address" 
          type="email" 
          value={email} 
          onChange={() => {}} 
          placeholder="Email Address" 
          disabled 
        />
        <FormField 
          label="Contact Number" 
          type="tel" 
          value={contactNumber} 
          onChange={(e) => {
            setContactNumber(e.target.value);
            validatePhoneNumber(e.target.value);
          }} 
          placeholder="+1 123-456-7890 or +44 20 7946 0958" 
        />
        {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}

        <FormField 
          label="Message" 
          type="textarea" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder={`Tell us why you'd love to adopt ${pet.title}`} 
          rows="4"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
      >
        Submit Adoption Request
      </button>
    </form>
  );
};

export default PetForm;

