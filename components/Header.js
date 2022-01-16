import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

function Header() {
  // const [session] = useSession();
  return (
    <div className='sticky top-0 bg-white flex items-center p-2 pb-0 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex item-center'>
        <Image
          src='https://i.ibb.co/PchnXDn/1024px-Facebook-Logo-2019.png'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex item-center ml-2 rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600' />
          <input
            type='text'
            placeholder='Search Facebook'
            className='hidden md:inline-flex ml-2 item-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
          />
        </div>
      </div>
      {/* center */}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2 '>
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className='flex item-center sm:space-x-2 justify-end'>
        {/* {user image } */}
        <div></div>
        <Image
          onClick={signOut}
          className='rounded-full cursor-pointer'
          // src={session.user.image}
          src='https://i.ibb.co/ctk6CTw/1584004071571.jpg'
          width={40}
          height={40}
          layout='fixed'
        />
        <p className='icon whitespace-nowrap font-semibold pr-3 m-auto'>
          ziani ismail
        </p>
        <ViewGridIcon className='icon' />
        <BellIcon className='icon' />
        <ChatIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  );
}

export default Header;
