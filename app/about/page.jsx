import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-teal-500 py-2 rounded-2xl">
        <div className="bg-white rounded-2xl p-12 w-full max-w-4xl border-4 border-teal-500 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-500 mb-6">
            Welcome to our Pet Lovers' platform! Our purpose is to help find loving homes for the pets we save, offer affordable services, and connect passionate pet lovers like you with each other.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-500 mb-6">
            Our mission is to provide rescued pets with a chance to find their forever homes. We believe every pet deserves a loving family, and we work tirelessly to ensure they get that opportunity. In addition, we strive to offer affordable pet care services to ensure pets and their families can live happy and healthy lives together.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
          <ul className="list-disc pl-6 text-lg text-gray-500 mb-6">
            <li>Adoption services for rescued pets</li>
            <li>Affordable and reliable pet care services</li>
            <li>Connecting pet lovers through a supportive community</li>
            <li>Resources and guidance on how to care for your pets</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h3>
          <p className="text-lg text-gray-500 mb-6">
            Whether you're interested in adopting a pet, seeking affordable services, or simply want to connect with other pet lovers, our platform offers a welcoming community for all. Join us in our mission to provide pets with the love and care they deserve.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
