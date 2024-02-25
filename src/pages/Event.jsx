import React from "react";
import EventCard from "../components/EventCard";
import eventCard from "../data/eventCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Event() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* Event Cards */}
      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div  data-aos="fade-up" data-aos-duration="1000"  className=" mb-20">
            <h1 className="title-font mb-8 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Event & Workshops
            </h1>
            {/* banner */}
            <div className="flex flex-col rounded-lg bg-gray-100 xl:flex-row shadow-xl">
              <img
                className=" roun w-auto rounded-t-lg xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
                src="/img/WhatsApp Image 2024-02-25 at 5.03.02 PM.jpeg"
                alt="banner"
              />
              <div className="p-10 xl:p-16">
              <div className=" mb-8">
                <h1 className=" mb-4 w-full text-2xl font-semibold text-blue-900">
                  Algorithm <span className=" text-blue-500">8.0</span>
                </h1>
                <p>
                Algorithm hackathon is an event where participants come together to solve real world problems, basically in a competitive environment.
                </p>
              </div>
              <div className="">
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
            </div>
          </div>
          <div  data-aos="fade-up" data-aos-duration="1000"  className="mt-10 text-center">
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
              Recent Events
            </p>
          </div>
          <section  className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {eventCard.map(events => (
              <EventCard  events={events} key={events.title} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}
