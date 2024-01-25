import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import LeadsCard from "./components/LeadsCard";
import Faculty from  "./components/Faculty";
import leadsData from "./data/leadsData";
import WebTeam from "./components/WebTeam";
import webTeam from "./data/webTeam";
import TeachTeam from "./components/TeachTeam";
import DocTeam from "./components/DocTeam";
import techTeam from "./data/techTeam";
import docTeam from "./data/docTeam";


import MediaTeam from "./components/MediaTeam";
import mediaTeam from "./data/mediaTeam";


import facultyData from "./data/facultyData"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Teams() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" bg-gray-100">
      <section className="  mx-auto   max-w-7xl overflow-hidden px-4 sm:px-6 ">
        <article className="col-auto mb-10 mt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="title-font mb-20 uppercase font-bold text-center text-2xl font-medium text-gray-700 sm:text-3xl"
          >
            <p className="">
              {/* <span className="">Meet The Team</span><br /> */}
              Passionate students driving the success of the Chapter
            </p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-bold text-gray-900 sm:text-3xl "
          >
            OUR SENIOR LEADER
          </h1>
          {/* faculty Leads */}

          <section className=" flex flex-wrap justify-center gap-5">
            {facultyData.map(faculty => (
              <Faculty faculty={faculty} key={faculty.id} />
            ))}
          </section>





          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-bold text-gray-900 sm:text-3xl "
          >
            OUR TEAM LEADER
          </h1>
          {/* Chapter Leads */}

          <section className=" flex flex-wrap justify-center gap-5">
            {leadsData.map(leads => (
              <LeadsCard leads={leads} key={leads.title} />
            ))}
          </section>
        </article>
        {/* Web Executives */}
        <article className="col-auto mb-10 mt-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            WEB DEVLOPMENT TEAM
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {webTeam.map(webTeam => (
              <WebTeam webTeam={webTeam} key={webTeam} />
            ))}
          </section>
        </article>

        {/* Tech Executive */}
        <article className="col-auto mb-10 mt-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-bold text-gray-900 sm:text-3xl"
          >
         Technical & Event Management
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {techTeam.map(techTeam => (
              <TeachTeam techTeam={techTeam} key={techTeam.title} />
            ))}
          </section>
        </article>

        {/* Media Executive */}
        <article className="col-auto mb-10 mt-10">
          <h1 className=" title-font mb-20 text-center uppercase text-2xl font-bold text-gray-900 sm:text-3xl">
          Marketing & Social Media
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {mediaTeam.map(mediaTeam => (
              <MediaTeam mediaTeam={mediaTeam} key={mediaTeam.index} />
            ))}
          </section>
        </article>

        {/* Doc Executive */}
        <article className="col-auto mb-10 mt-10">
          <h1 className=" title-font mb-20 uppercase text-center text-2xl font-bold text-gray-900 sm:text-3xl">
           Documentation & Content
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {docTeam.map(docTeam => (
              <DocTeam docTeam={docTeam} key={docTeam.index} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}
