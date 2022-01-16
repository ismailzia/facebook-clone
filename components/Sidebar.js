import React from "react";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className='hide__sidebar p-2 mt-5 max-w-[600px] xl:max-w-[300px]'>
      <SidebarRow src={true} title='ziani ismail' />
      <SidebarRow Icon={UserIcon} title='Friends' />
      <SidebarRow Icon={UserGroupIcon} title='Groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='MarketPlace' />
      <SidebarRow Icon={DesktopComputerIcon} title='watch' />
      <SidebarRow Icon={CalendarIcon} title='Events' />
      <SidebarRow Icon={ClockIcon} title='Memories' />
      <SidebarRow Icon={ChevronDownIcon} title='See Moreen' />
    </div>
  );
}

export default Sidebar;
