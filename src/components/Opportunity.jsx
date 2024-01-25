import React from "react";

export default function Opportunity() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container mx-auto px-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-20 text-center"
          >
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
            Key Points of <span className="text-green-400 font-semibold">Programmers Club</span>  AIKTC 
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5 "
          >
            <div className="w-full px-4 py-2 lg:w-1/2">
              <div className=" mb-4 transform  rounded-lg border border-gray-200 bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105 ">
              <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
                  <span class=" text-green-500">Student-Led Initiative:</span>
	            </h3>
                <p className="font-semibold text-gray-700 antialiased ">
                  The club is entirely run and organized by students, emphasizing peer-to-peer learning and collaboration.
                </p>
              </div>
              <div className=" mb-4 transform  rounded-lg border border-gray-200 bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105  ">
              <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
                  <span class=" text-green-500">Passionate Community:</span>
	            </h3>
                <p className="font-semibold text-gray-700  antialiased ">
                  You will get the opportunity to receive training and develop
                  communication, project development, time management and
                  programming skills while at college.
                </p>
              </div>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <div
                href="#"
                className=" mb-4 transform rounded-lg border border-gray-200  bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105  "
              >
                <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
                  <span class=" text-green-500">Knowledge Sharing:</span>
	              </h3>
                <p className="font-semibold text-gray-700 antialiased">
                  We provide proper mentorship and resources to become a better
                  programmer, who can compete on global scale.
                </p>
              </div>
              <div
                href="#"
                className=" mb-4 transform rounded-lg border border-gray-200  bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105  "
              >
                <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
	                <span class=" text-green-500">Innovation and Growth:</span>
	          </h3>
                <p className="font-semibold text-gray-700 antialiased">
                  
                Encourages innovation and personal growth by creating an environment that supports exploration and pushing boundaries.

	
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
