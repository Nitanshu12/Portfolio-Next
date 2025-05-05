"use-client"
import React from "react";
import { Spotlight } from "./ui/Spotlight";
// import { cn } from "@/lib/utils";


function Hero() {
  return (
    <div className="relative pb-20 pt-36 h-screen">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-50 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="-top-28 -left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
        {/* Hero Content */}
        <div className="relative z-10 flex justify-center my-20">
          <div className="flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Website with magic and Next.js
            </h2>
          </div>
        </div>
      </div>  
  );
}

export default Hero;
