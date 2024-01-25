import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import HackathonData from "./data/HackathonData";
import HackathonPage from "./components/HackathonPage";


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
              <a
                className="ml-2 bg-transparent mr-auto hover:bg-green-500 text-black rounded shadow hover:shadow-lg py-2 px-4 border border-teal-500 hover:border-transparent"
                href="https://algorithm.aiktc.ac.in/"
                target="_blank"
              >
                Explore Now Algorithm 7.0
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
