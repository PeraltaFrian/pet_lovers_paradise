const PetCard = ({ pet }) => {
    return (
      <div className="pet-card">
        <img src={pet.imageSrc} alt={pet.altText} className="w-full rounded-md" />
        <h1 className="text-3xl font-bold mt-4">{pet.title}</h1>
        <p className="text-lg text-gray-700 mt-2">{pet.description}</p>
        <p className="text-md mt-4">{pet.narrative}</p>
      </div>
    );
  };
  
  export default PetCard;
