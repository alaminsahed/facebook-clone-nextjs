import React from 'react';
import { useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow';
import { CalendarIcon, ChevronDownIcon, ClockIcon, DesktopComputerIcon, ShoppingBagIcon, UserGroupIcon, UserIcon } from '@heroicons/react/solid';

const Sidebar = () => {
    const { data: session, status } = useSession()

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UserIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Market Place" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />

        </div>
    );
};

export default Sidebar;