import React from "react";
import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-t-xl cursor-pointer'>
      {src && (
        <div className='flex'>
          <Image
            src='https://i.ibb.co/ctk6CTw/1584004071571.jpg'
            width={30}
            height={30}
            layout='fixed'
            className='h6 w-6 md:h-8 md:w-8 rounded-full cursor-pointer'
          />
          {/* <p className=' '>{title}</p> */}
        </div>
      )}
      {Icon && <Icon className='h6 w-6 md:h-10 md:w-10 text-blue-500 ' />}
      <p className='hidden md:inline-flex font-medium'>{title}</p>
    </div>
  );
}

export default SidebarRow;
