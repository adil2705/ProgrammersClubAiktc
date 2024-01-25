import React from "react";


export default function Landing() {
 
  return (
    <div className="mx-auto mb-5 grid max-w-7xl px-4 sm:px-6 md:mt-2 lg:grid-cols-2 lg:px-4 2xl:grid-cols-2">
      <div className="mx-auto max-w-md px-8 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-12 xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          {/* <img className="h-10" src="/img/ccbcet-logo.svg" alt="Workcation" /> */}
          <img
            className="mt-2 rounded-lg object-center sm:mt-6 sm:h-80 sm:w-auto sm:object-cover md:h-80 lg:hidden"
            src="/img/landing.svg"
            alt="graphics"
          />
          <p class="text-sm font-semibold tracking-wider text-black uppercase">Anjuman-I-Islam's Kalsekar Technical Campus, Navi Mumbai</p>
          <p class="text-sm font-semibold tracking-wider text-black uppercase">Department of Computer Engineering</p>
          <h1
            className="font-headline  text-brand-light py-2 text-4xl font-bold tracking-tight sm:text-4xl lg:text-6xl xl:text-8xl"
          >
            Programmer's Club
          </h1>
          <p
            className="mt-2 text-gray-600 sm:mt-4 sm:text-xl"
          >
            The Programmers Club is a student-led initiative established in 2015 with the motto "For the students, By the students." Since our inception, we've been fostering a dynamic community where students passionate about programming unite to share knowledge and enthusiasm for all things tech.
          </p>
          {/* button  */}
          <div
            className="  space-x-1 sm:mt-6"
          >
            <a
              className="focus:outline-none inline-block transform rounded-lg my-6 bg-green-400 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-600 focus:ring focus:ring-green-400 focus:ring-opacity-50 focus:ring-offset-2 active:bg-green-400 sm:text-base"
              href="/member"
              target="_self"
            >
              become a member
            </a>
          </div>
        </div>
      </div>
      {/* largest view  */}
      <div
        className="relative hidden lg:block 2xl:col-span-2"
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
