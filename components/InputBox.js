import React, { useEffect, useRef } from 'react';
import { useSession } from "next-auth/react";
import Image from 'next/image';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL, getStorage, uploadBytesResumable } from "firebase/storage";


const InputBox = () => {
    const inputRef = useRef('');
    const fileRef = useRef(null);
    const { data: session, status } = useSession();
    const [inputImage, setInputImage] = React.useState(null);




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
            }).then((docu) => {
                if (inputImage) {
                    const storage = getStorage();
                    const storageRef = ref(storage, `posts/${docu.id}`);
                    const uploadTask = uploadBytesResumable(storageRef, inputImage, 'data_url');
                    uploadTask.on('state_changed', null,
                        (error) => {
                            alert(error);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                                .then((URL) => {
                                    setDoc(doc(db, "posts", docu.id), { postImage: URL }, { merge: true });
                                });
                        }
                    )
                    removeImage();
                }

            });
            console.log("Document written with ID: ", postRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        inputRef.current.value = '';

    }

    const addPostToImage = (e) => {
        console.log(e.target.files[0])
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (event) => {
            setInputImage(event.target.result);
        }

    }
    console.log("a", inputImage);

    const removeImage = () => {
        setInputImage(null);
    }


    return (
        <div className='p-3 shadow-md mt-3 rounded-xl'>
            <div className='flex items-center gap-2 p-4 space-x-2'>
                <Image src={session.user.image} alt="avatar" height={40} width={40} className="inline-block rounded-full bg-gray-100 h-12 ring-2 ring-white cursor-pointer" />
                <form className='flex flex-1' onSubmit={sendPost}>

                    <input type="text" name="input" ref={inputRef} placeholder="What's on your mind?" className='flex-grow p-2 rounded-full' />
                    <button hidden type='submit'>Submit</button>
                </form>
                {
                    inputImage && (<div className='flex flex-col filter hover:brightness-150 ' onClick={removeImage}>
                        <Image src={inputImage} alt="prev" className="object-contain" height={40} width={40} />
                    </div>)
                }
            </div>
            <div className='flex items-center justify-evenly'>
                <div className='flex items-center'>
                    <VideoCameraIcon className='icon-search text-red-500' />
                    <p>Live Video</p>
                </div>
                <div className='flex items-center cursor-pointer' onClick={() => fileRef.current.click()}>
                    <CameraIcon className='icon-search text-green-400' />
                    <input type="file" onChange={addPostToImage} ref={fileRef} hidden />
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