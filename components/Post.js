import Image from 'next/image';
import React from 'react';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

const Post = ({ name, message, email, timestamps, image, PostImage }) => {
    console.log(PostImage);
    return (
        <div className='flex flex-col'>
            <div className=' p-2 bg-white shadow-sm mt-4 rounded-md'>
                <div className='flex items-center space-x-2'>
                    <Image src={image} alt="photo" height={40} width={40} className="rounded-full" />
                    <div className='ml-3'>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'>{new Date(timestamps?.toDate()).toLocaleString()}</p>
                    </div>
                </div>

                <p className='font-medium mt-5'>{message}</p>

            </div>
            {
                PostImage && (<div className='relative h-56 md:h-72 bg-white' >
                    <Image src={PostImage} alt="cat" layout='fill' objectFit='cover' />
                </div>)
            }
            <div className='flex justify-between space-x-2 bg-white shadow-sm border-t rounded-md p-2'>
                <div className='flex items-center'>
                    <ThumbUpIcon className='icon-search' />
                    <p className='hidden sm:block'>Like</p>
                </div>
                <div className='flex items-center'>
                    <ChatAltIcon className='icon-search' />
                    <p className='hidden sm:block'>Comment</p>
                </div>
                <div className='flex items-center'>
                    <ShareIcon className='icon-search' />
                    <p className='hidden sm:block'>Share</p>
                </div>
            </div>
        </div>
    );
};

export default Post;