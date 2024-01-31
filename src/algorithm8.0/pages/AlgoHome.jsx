import React from "react";

import { 
  About, 
  Contact, 
  Timeline, 
  Hero, 
  Navbar, 
  Sponsers,
  StarsCanvas 
} from "../components";

const AlgoHome = () => {
  return (
    <div className='relative z-0 bg-indigo-950'>
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
        <Timeline />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Sponsers />
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
