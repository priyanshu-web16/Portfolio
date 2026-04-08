import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    name: "Pixel-Perfect UI Implementation",
    description:
      "Translated Figma designs into pixel-perfect, responsive interfaces using React.js and Tailwind CSS, ensuring precise spacing, typography, and layout consistency. Built reusable components with a utility-first approach while maintaining performance, accessibility, and cross-browser compatibility.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Modern Front-End Development",
    description:
      "I build responsive, scalable, and high-performance web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. My focus is on writing clean, maintainable code while ensuring seamless functionality across all devices and browsers.",
    image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Performance & Responsiveness Optimization",
    description:
      "Delivered fast, responsive web applications with React.js and Tailwind CSS, focusing on performance best practices, minimal load times, and seamless user experiences across devices ",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Reusable Components & Clean Architecture",
    description:
      "I develop modular and reusable UI components using React.js, making applications scalable and easy to maintain. My approach focuses on structured code, reusability, and efficient development practices.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl hover:scale-104  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;