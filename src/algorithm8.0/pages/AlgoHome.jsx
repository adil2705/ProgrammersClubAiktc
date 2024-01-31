import React from "react";

import { BrowserRouter } from "react-router-dom";
import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Clients, 
  Works, 
  StarsCanvas 
} from "../components";

const AlgoHome = () => {
  return (
    <div className='relative z-0 bg-purple-950'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <div className='relative z-1'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
      </div>
      <div className='relative z-0'>
        <About />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Experience />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Works />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Feedbacks />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Clients />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default AlgoHome;
