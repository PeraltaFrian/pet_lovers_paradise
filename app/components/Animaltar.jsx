
import Image from 'next/image'
import React from 'react'

// function Animaltar() {

// const catURL = 'https://api.thecatapi.com/v1/images/search?&api_key=live_KAzFUPQDpfhBcsoBL1GGqKKo97uvPu1RPh8PPwziy4y4zKy0zSgj5rRZgZH42l2F'

// fetch(catURL)

// .then((res) => {
//     return res.json();
// })

// console.log(data);
// return (
// <>
//     <Image src={data.url} alt='Image of cat'/>
// </>
// )
// }
// export default Animaltar

import { useState, useEffect } from 'react';
const Animaltar = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div className="flex justify-center">
      {photos.map((photo) => (
        <Image key={photo.id} src={photo.url} alt="Photo of cat" width={175} height={175} className='rounded-xl' />
      ))}
    </div>
  );
};
export default Animaltar;



// const apiURL = "https://api.thecatapi.com/v1/images/search";
//     fetch(apiURL)
//         .then(response => {
//             if(!response.ok) {
//                 throw new Error("Network response was not OK");
//             }
//             return response.json();
//         })
//         .then(data => {

//             setCatUrl(data.url);
//             console.log(data);


//             // condition.src = "https:" + data.current.condition.icon;
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         })