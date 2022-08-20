import Image from 'next/image';
import React from 'react';
import logo from "../image/fb-logo.png";
import { SearchIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div>
            <h1 className='text-6xl'>header</h1>
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
                    <input type="text" placeholder='search facebook' className='rounded-full bg-transparent outline-none placeholder-gray-500' />
                </div>
            </div>
        </div>
    );
};

export default Header;