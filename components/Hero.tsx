"use client";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import MagicButton from "./ui/MagicButton";

function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <BackgroundBeams />

      {/* Spotlights */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Spotlight
          className="-top-50 -left-10 md:-left-32 md:-top-120 w-900 h-1200"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight
          className="-top-118 -left-80 h-[80vh] w-[50vw]"
          fill="white"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] gap-2">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Nitanshu Goyal
        </h1>
        <TextGenerateEffect
          className="text-center text-[20px] font-bold text-white mt-4"
          words="Tech CS & AI @ Newton School of Technology | UI/UX Enthusiast | Societal Change-Maker | Passionate About Innovation | Volleyball Player"
        />
        <MagicButton/>
      </div>
    </section>
  );
}

export default Hero;
