'use client';
// import Image from "next/image"
// import React from 'react'
import { useUser } from "@clerk/nextjs"

// function Avatar() {
//     const { user, isLoaded, isSignedIn } = useUser();
//   return (
//     <Image 
//     src={`https://ui-avatars.com/api/?name=${user.firstName + user.lastName}&background=random`}
//     alt="User avatar"
//     width={100}
//     height={100}
//   />
//   )
// }

// export default Avatar


import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Avatar() {

    let { user } = useUser();
    const [catUrl, setCatUrl] = useState(null);
    const name = user.firstName || user.lastName;

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": process.env.CAT_API_KEY
      });
      
      var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      };

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?api_key=${CAT_API_KEY}", requestOptions)
      .then(res => res.json())
      .then(data => setCatUrl(data.url));
  }, []);

  return (
    <div className="relative w-24 h-24 rounded-full overflow-hidden">
      {/* {catUrl && ( */}
        <Image
          src={catUrl}
          alt="Cat background"
          fill
          className="object-cover"
        />
      {/* )} */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-black bg-opacity-30">
        {name
          .split(' ')
          .map((n) => n[0])
          .join('')
          .toUpperCase()}
      </div> */}
    </div>
  );
}
