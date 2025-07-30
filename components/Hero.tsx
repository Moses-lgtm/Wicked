// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-black max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl font-sans">
            THE PRODUCT OF THE FUTURE.
          </h1>
          <p className="text-white max-sm:text-sm font-sans">
             At Wicked Superstore, we don’t just sell cannabis — we celebrate it. Born from a passion for pushing boundaries and setting new standards, Wicked is here for those who know that quality matters. We specialize in premium THCA products that represent the future of cannabis: potent, pure, and carefully curated for those who expect more from their flower. Our name reflects our roots — bold, unapologetic, and real. Wicked is a space for trailblazers, the curious, and those rewriting the rules. Whether you’re elevating your lifestyle, healing your body, or just chasing a better high, you’ll find something here that speaks to your vibe. This is more than a dispensary — it’s a movement. Welcome to Wicked. Welcome to the future.
          </p>
          <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100 font-sans">
              BUY NOW
            </button>
            <button className="bg-white text-blue-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100 font-sans">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          src="/flower for banner.png"
          width={400}
          height={600}
          alt="flower bud"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
