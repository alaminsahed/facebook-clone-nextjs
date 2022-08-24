import React, { useEffect, useRef } from 'react';
import { useSession } from "next-auth/react";
import Image from 'next/image';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const InputBox = () => {
    const inputRef = useRef('');
    const { data: session, status } = useSession();



    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        try {
            const postRef = addDoc(collection(db, "posts"), {
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                timestamp: serverTimestamp()
            });
            console.log("Document written with ID: ", postRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        inputRef.current.value = '';
    }


    return (
        <div className='p-3 shadow-md mt-3 rounded-xl'>
            <div className='flex items-center gap-2 p-4 space-x-2'>
                <Image src={session.user.image} alt="avatar" height={40} width={40} className="inline-block rounded-full bg-gray-100 h-12 ring-2 ring-white cursor-pointer" />
                <form className='flex flex-1' onSubmit={sendPost}>
                    <input type="text" name="input" ref={inputRef} placeholder="What's on your mind?" className='flex-grow p-2 rounded-full' />
                </form>
                <button hidden type='submit'>Submit</button>
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