import React from "react";

import { 
  About, 
  Contact, 
  Experience,
  Hero, 
  Navbar, 
  Faq,
  Foot,
  Clients,
  StarsCanvas, 
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
        <Experience   />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Clients />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Faq />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Foot />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default AlgoHome;