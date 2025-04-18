import React from "react";
import Image from "next/image";
import Button from "../components/Button";  

const Card = ({ imageSrc, altText, title, description, buttonText, link, onClick }) => {
  return (
    <section className="bg-white p-4 rounded-xl shadow-lg">
      <Image
        className="rounded-lg object-cover"
        src={imageSrc}
        width={440}
        height={327}
        alt={altText}
      />
      <h2 className="mt-2 text-center text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-center">{description}</p>
      {buttonText && (
        <section className="text-center mt-4">
          <Button text={buttonText} link={link} onClick={onClick} />
        </section>
      )}
    </section>
  );
};

export default Card;
