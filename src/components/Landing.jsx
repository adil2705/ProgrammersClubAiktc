import React from "react";


export default function Landing() {
 
  return (
    <div className="mx-auto mb-5 grid max-w-7xl px-4 sm:px-6 md:mt-2 lg:grid-cols-2 lg:px-4 2xl:grid-cols-2">
      <div className="mx-auto max-w-md px-8 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-12 xl:mr-0 2xl:col-span-5">
        <div className="xl:max-w-xl">
          {/* <img className="h-10" src="/img/ccbcet-logo.svg" alt="Workcation" /> */}
          <img
            className="mt-2 rounded-lg object-center sm:mt-6 sm:h-80 sm:w-auto sm:object-cover  lg:hidden"
            src="/img/landing.svg"
            alt="graphics"
          />
          <p className="text-sm font-semibold tracking-wider text-black uppercase">Anjuman-I-Islam's Kalsekar Technical Campus, Navi Mumbai</p>
          <p className="text-sm font-semibold tracking-wider text-black uppercase">Department of Computer Engineering</p>
          <h1
            className="font-headline  text-brand-light py-2 text-4xl font-bold tracking-tight sm:text-4xl lg:text-6xl xl:text-8xl"
          >
            Programmers Club
          </h1>
          <p
            className="mt-2 text-gray-600 sm:mt-4 sm:text-xl"
          >
            The Programmers Club is a student-led initiative established in 2014 with the motto "For the students, By the students." Since our inception, we've been fostering a dynamic community where students passionate about programming unite to share knowledge and enthusiasm for all things tech.
          </p>
          {/* button  */}
        <a href="https://algorithm8.aiktc.ac.in/" class="relative inline-block my-2 text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-orange-600  rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
<span class="relative">Algorithm 8.O</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
        </div>
      </div>
      {/* largest view  */}
      <div
        className="relative hidden lg:block 2xl:col-span-3"
      >
        <img
          className="absolute inset-0  h-full min-w-full"
          src="/img/landing.svg"
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>
  );
}
