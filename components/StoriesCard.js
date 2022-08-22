import Image from 'next/image';
import React from 'react';

const StoriesCard = ({ src, name, profile }) => {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-72 lg:w-72 cursor-pointer overflow-x p-3 transition duration-150 ease-in hover:scale-50 hover:animate-pulse'>
            <Image src={profile} alt="story" height={40} width={40} layout="fixed" objectFit='cover' className='absolute rounded-full z-50 top-10 opacity-0 md:opacity-100' />
            <Image src={src} alt="story" layout="fill" height={80} className='object-cover filter brightness-75 rounded-full lg:rounded-3xl' />
            <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-sm font-bold truncate text-white">{name}</p>
        </div>
    );
};

export default StoriesCard;