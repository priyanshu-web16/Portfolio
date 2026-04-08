import React from "react";
import personImg from "../assets/Priyanshu.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container lg:gap-60 grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase font-bold">Hello</p>
              <p className="text-4xl md:text-5xl font-bold text-black/80 dark:text-white">
                I'm Priyanshu
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                 Front-End Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left font-semibold">
                Building Fast, Beautiful & User-Centered Web Experiences
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">Passionate about crafting intuitive interfaces with attention to detail and performance.
Helping brands stand out through modern design and seamless user experiences.</p>
              <a
                href="/#contact"
                className="inline-block primary-btn !my-3 bg-pink-800 active:scale-90 px-3 py-2 rounded text-white font-bold"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* image section */}
          
          <div>
            <img
              src={personImg}
              className="w-full md:max-w-lg mx-auto backdrop-blur-sm h-[500px] hover:scale-110 bg-cover bg-center"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;