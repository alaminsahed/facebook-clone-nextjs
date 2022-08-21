import Image from 'next/image';
import React from 'react';
import logo from "../image/fb-logo.png";
import { HomeIcon, SearchIcon, FlagIcon, ShoppingCartIcon, PlayIcon, UserGroupIcon, AdjustmentsIcon, ChatIcon, BellIcon, ArrowDownIcon, ViewGridAddIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid'
import HomeIcons from './HomeIcons';
import profile from "../image/profile.jpeg";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import { data } from 'autoprefixer';

const Header = () => {
    const { data: session, status } = useSession()
    if (data) console.log(session);
    //console.log(data)
    return (
        <div className='sticky top-0 items-center flex shadow-md p-2 lg:px-5 bg-white z-50'>
            {/* <h1 className='text-6xl'>header</h1> */}
            <div className='flex items-center'>
                <Image
                    src={logo}
                    alt="Facebook"
                    width={50}
                    height={50}
                    layout="fixed"
                />
                <div className='flex ml-2 rounded-full items-center bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input type="text" placeholder='search facebook' className='hidden sm:inline-flex rounded-full bg-transparent outline-none placeholder-gray-500 flex-shrink' />
                </div>
            </div>
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6'>
                    <HomeIcons active Icons={HomeIcon} />
                    <HomeIcons Icons={FlagIcon} />
                    <HomeIcons Icons={PlayIcon} />
                    <HomeIcons Icons={ShoppingCartIcon} />
                    <HomeIcons Icons={UserGroupIcon} />
                </div>
            </div>
            <div className='flex items-center justify-end'>

                <Image onClick={() => signOut} src={session.user.image} alt="avatar" height={40} width={40} className="inline-block rounded-full ring-2 ring-white" />
                <h2 className='font-semibold whitespace-nowrap'>{session.user.name}</h2>
                <ViewGridAddIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDoubleDownIcon className="icon" />

            </div>
        </div>
    );
};

export default Header;