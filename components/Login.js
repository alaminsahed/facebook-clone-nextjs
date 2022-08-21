import Image from 'next/image';
import React from 'react';
import logo from "../image/fb-logo.png";
import { signIn } from "next-auth/react"

const Login = () => {
    return (
        <div className='grid place-items-center mt-24'>
            <Image src={logo} alt="logo" height={200} width={200} objectFit="contain" />
            <button onClick={() => signIn()} className='bg-blue-500 p-2 rounded-full text-white'>Login with facebook</button>
        </div>
    );
};

export default Login;