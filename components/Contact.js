import Image from "next/image";
import React from "react";

function Contact({ src, name }) {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
      <Image
        src={src}
        className='rounded-full'
        objectFit='cover'
        width={50}
        height={50}
        layout='fixed'
      />
      <p>{name}</p>
      <div className='w-3 h-3 rounded-full bg-gray-100 absolute bottom-2 left-7'></div>
      <div className='w-2 h-2 rounded-full bg-green-400 absolute gray-online'></div>
    </div>
  );
}

export default Contact;
