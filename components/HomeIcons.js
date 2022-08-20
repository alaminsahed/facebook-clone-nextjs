import React from 'react';

const HomeIcons = ({ Icons, active }) => {
    return (
        <div className='flex items-center cursor-pointer md:px-10 p-3 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group'>
            <Icons className={`h-5 mx-auto sm:h-7 text-center group-hover:text-blue-500 ${active && `text-blue-500`}`} />
        </div>
    );
};

export default HomeIcons;