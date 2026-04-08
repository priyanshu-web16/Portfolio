import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 md:w-[80%] mx-auto">
         I create the user-facing, interactive, and visual components of websites and applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. I specialize in building responsive, high-performance, and visually stunning web interfaces.
I focus on clean code, reusable components, and seamless user experiences to help businesses create impactful digital products.
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;