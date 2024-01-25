import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function HackathonPage({hackathon}) {
    return (
      <div>
        {
            hackathon.index %2==1 && (
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 after:odd:text-right">
                  {/* <p className="mb-3 text-base text-black"></p>  */}
                  <h4 className="mb-3 font-bold text-black text-lg md:text-2xl text-left">{hackathon.title}</h4>
                  <p className="mb-3 text-base text-black">{hackathon.description}</p>
                  
                </div>
              </div>
            )
        }
        {
              hackathon.index %2==0 &&(
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-black"> </p>  
                  <h4 className="mb-3 font-bold text-black text-lg md:text-2xl">{hackathon.title}</h4>
                  <p className="mb-3 text-base text-black">{hackathon.description}</p>
                                 
                </div>
             </div> 
              )
        }
        

             
              </div> 
       
      
    );
}