import Image from 'next/image';
import React from 'react';

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className='flex items-center space-x-2 p-4 hover:bg-gray-200'>
            {src && <Image src={src} width={30} height={30} alt="avatar" className="rounded-full cursor-pointer" layout='fixed' />}
            {Icon && <Icon className="h-8 w-8 text-blue-500 cursor-pointer" />}
            <h2 className="hidden sm:inline-block text-sm font-semibold cursor-pointer">{title}</h2>
        </div>
    );
};

export default SidebarRow;