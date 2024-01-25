import React, { useEffect } from "react";
import Form from "./Form";
import Marquee from "../components/Marquee";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Member() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="text-gray-800">
     
      
      <div className="flex flex-col md:flex-row gap-y-4 justify-between md:items-center bg-header xl:px-36 md:px-12 px-6 py-10">
        <h1 className="font-bold text-4xl md:text-5xl text-white">
          Programmer's Club<span className="text-green-600"> Recruitment Form</span>
        </h1>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden space-y-12 text-xl">
        <h3>
          The Programmers Club is a student-led initiative established in 2015 with the motto "For the students, By the students." Since our inception, we've been fostering a dynamic community where students passionate about programming unite to share knowledge and enthusiasm for all things tech.
        </h3>
        <Marquee />
        
      </section>
      <Form />
    </div>
  );
}
