import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p className="text-black font-semibold text-[15px]">I’m a Frontend Developer focused on delivering high-performance, scalable, and user-centric web experiences.</p> <br/>
            <p className="font-semibold text-[14px] text-gray-700">
During my internship at Bansal Moulders Pvt. Ltd., Noida,<br/> I built responsive interfaces using HTML, Tailwind CSS, JavaScript, and React.js, emphasizing clean architecture and reusable components.
I implemented secure authentication systems, enhanced cross-device responsiveness, and resolved critical UI issues to improve overall user experience.
Driven by precision and performance, I aim to create modern web applications that are both visually compelling and technically robust.</p>
            <div className="">
              <a
                href="../src/assets/PRIYANSHU-KUMAR-(CV).pdf"
                className="primary-btn my-6 mr-6 inline-block bg-pink-800 text-white px-4 py-2 rounded-full hover:scale-95"
                download
              >
                Download Resume
              </a>
              <a
                href="/#contact"
                title="Call 9625862116 "
                className="outline-btn my-6 border-2 py-2 px-4 rounded-full hover:bg-pink-900 active:scale-90 font-semibold text-black hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;