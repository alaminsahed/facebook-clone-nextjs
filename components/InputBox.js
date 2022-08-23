import React from 'react';
import { useSession } from "next-auth/react";
import Image from 'next/image';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';

const InputBox = () => {
    const { data: session, status } = useSession();

    const sendPost = (e) => {
        e.preventDefault();
        console.log('send post')
    }

    return (
        <div className='p-3 shadow-md mt-3 rounded-xl'>
            <div className='flex items-center gap-2 p-4 space-x-2'>
                <Image src={session.user.image} alt="avatar" height={40} width={40} className="inline-block rounded-full bg-gray-100 h-12 ring-2 ring-white cursor-pointer" />
                <form className='flex flex-1'>
                    <input type="text" placeholder="What's on your mind?" className='flex-grow p-2 rounded-full' />
                </form>
                <button hidden type='submit' onClick={() => sendPost(e)}>Submit</button>
            </div>
            <div className='flex items-center justify-evenly'>
                <div className='flex items-center'>
                    <VideoCameraIcon className='icon-search text-red-500' />
                    <p>Live Video</p>
                </div>
                <div className='flex items-center'>
                    <CameraIcon className='icon-search text-green-400' />
                    <p>Photo/Video</p>
                </div>
                <div className='flex items-center'>
                    <EmojiHappyIcon className='icon-search text-yellow-200' />
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
};

export default InputBox;