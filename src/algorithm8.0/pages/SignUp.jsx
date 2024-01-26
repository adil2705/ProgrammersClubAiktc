import React from "react";
import Lottie from 'react-lottie';
import SignUpAnimation from '../assets/lottie/signup.json'

import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { useState } from "react";
import { auth } from "../../firebase-config";
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const isMobile = window.innerWidth < 768;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SignUpAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault()

    if(password !== conpassword) {
      alert('Passwords do not match')
      return
    } else {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Account created successfully')
            history.push('/signin');
        })
        .catch((error) => {
            alert(error.message)
        });
    }
  }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/2 max-w-lg">
        <Lottie 
          options={defaultOptions}
          height={isMobile ? 250 : 500}
          width={isMobile ? 350 : 500}
        />
      </div>
      <div className="md:w-1/2 max-w-sm">
        <div className="my-4 font-semibold text-2xl text-slate-500 text-center md:text-left">
          Sign-Up for an account
        </div>
        <input 
            className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl" 
            type="text" 
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
            required 
            placeholder="Email Address" />
        <input 
            className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-4" 
            type="password" 
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Password" />
        <input 
            className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-4" 
            type="password" 
            label="Confirm Password"
            value={conpassword}
            onChange={(e) => setConPassword(e.target.value)} 
            required 
            placeholder="Confirm Password" />
        <div className="text-center md:text-left font-bold">
          <button 
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded-xl tracking-wider text-base" 
            type="submit"
            onClick={onSubmit}>
            Sign-Up
          </button>
        </div>
        <div className="mt-4 font-semibold text-lg text-slate-500 text-center md:text-left">
          Already have an account? <a className="text-red-600 hover:underline hover:underline-offset-4 font-bold" href="/signin">Sign-In</a>
        </div>
      </div>
    </section>
  );
}