import React from "react";

const projects = [
  {
    id: 1,
    title: "Wipro Lighting UI",
    description: "Developed a responsive and dynamic UI replicating Wipro Lighting’s official site using React.js.",
    image: "../src/assets/Wipro-preview.png",
    demo: "../src/assets/Wipro-preview.png",
    github: "https://github.com/priyanshu-web16/Wipro-Lighting-Clone",
  },
  {
    id: 2,
    title: "Car Rental",
    description: "Developed a responsive and dynamic UI using React.js and Tailwind CSS.",
    image: "../src/assets/Car-Rental-preview.png",
    demo: "../src/assets/Car-Rental-preview.png",
    github: "https://github.com/priyanshu-web16/Car-Rental-",
  },
  {
    id: 3,
    title: "Neepanlok",
    description: "Business Website : Optimized layouts for mobile and desktop responsiveness and Improved UI consistency and user experience across pages ",
    image: "../src/assets/Neepanlok-preview.png",
    demo: "../src/assets/Neepanlok-preview.png",
    github: "https://github.com/priyanshu-web16?tab=repositories",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          My Projects
        </h2>
        <div className="mb-8 flex items-center justify-center">
           <a
                href="https://github.com/priyanshu-web16?tab=repositories"
                className="inline-block primary-btn bg-blue-500 hover:bg-blue-700 active:scale-90 px-3 py-2 rounded text-white font-bold"
              >
                View All
              </a>
          </div>
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm"
                  >
                    Preview
                  </a>
                  <a
                    href={project.github}
                    // target="_blank"
                    rel="https://github.com/priyanshu-web16?tab=repositories"
                    className="px-4 py-2 border border-gray-600 hover:bg-pink-400 rounded-lg text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;