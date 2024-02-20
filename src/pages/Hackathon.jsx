import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import HackathonData from "../data/HackathonData";
import HackathonPage from "../components/Hackathon";


export default function Hackathon() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100">
      <section>
        <div className="bg-white text-white py-2">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              {/* Add content for the left column */}
              <p className="ml-2 uppercase text-black font-semibold tracking-loose">
              Department of Computer Engineering
              </p>
              <p className="ml-2 text-sm md:text-base text-black mb-2">
               Our Story
              </p>
              <p className="lg:text-6xl font-bold my-2 md:text-4xl text-green-800 leading-normal md:leading-relaxed ">
                Algorithm
              </p>
              <p className="text-sm md:text-base text-black mb-4">
              Algorithm hackathon is an event where participants come together to solve real world problems, basically in a competitive environment.
              </p>
              <a href="https://algorithm8.aiktc.ac.in/" class="relative inline-block my-2 text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-orange-600  rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-orange-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-600 group-hover:-rotate-180 ease"></span>
<span class="relative">Explore Now Algorithm 8.O</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
            </div>
            <div className=" ml-2 text-sm font-semibold  md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid green",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute min-h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid green",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div>
                {HackathonData.map((hackathon) => (
                   <HackathonPage key={hackathon.title} hackathon={hackathon} /> 
                  ))}
                
                </div>
                <img
                  className="mx-auto mb-36 "
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="Hackathon Image"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </div>
    
  );
}
