import React from "react";
import Link from "next/link";  

const Button = ({ text, link, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a
          className="w-full bg-teal-500 text-white py-3 px-6 rounded-md hover:bg-teal-600 transition ease-in-out duration-300"
        >
          {text}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full bg-teal-500 text-white py-3 px-6 rounded-md hover:bg-teal-600 transition ease-in-out duration-300"
    >
      {text}
    </button>
  );
};

export default Button;