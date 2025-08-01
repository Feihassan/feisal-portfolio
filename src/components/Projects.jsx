import React from "react";
import project1Img from "../assets/zuu.png";
import project2Img from "../assets/expo.png";
import project3Img from "../assets/smartgoal.png";
import project4Img from "../assets/dream.png";
const projects = [
  {
    title: "Mama Zulekha Store",
    image: project1Img,
    description:
      "An elegant e-commerce store for cosmetics with cart, checkout, EmailJS integration, and admin dashboard.",
    tech: ["React", "Vite", "Tailwind", "EmailJS"],
    live: "https://glowing-cat-c26794.netlify.app/",
  },
  {
    title: "ArtExplorer",
    image: project2Img,
    description:
      "A creative artwork gallery that allows users to explore stunning art pieces with smooth layout and filtering using vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://capable-lily-80f095.netlify.app/",
  },
  { 
  title: "Smart-Goal-Planner",
    image: project3Img,
    description:
      "Smart Goal Planner is a simple and powerful web app that helps users set, track, and achieve their savings goals. With features like real-time progress bars, deposit tracking, deadlines, and goal categories, it keeps users organized and motivated. Perfect for managing personal finances and staying on top of your financial targets.",
    tech: [" React", "Vite", "Tailwind CSS"],
    live: "https://benevolent-heliotrope-190e55.netlify.app/",
  },
   { 
  title: "Dream Apartment Finder",
    image: project4Img,
    description:
      "Dream Apartment Finder is a modern React app that lets users browse, search, and book apartments easily. It features a clean UI, search by location, and booking functionality all powered by a mock JSON backend.",
    tech: [" React", "Vite", "Tailwind CSS"],
    live: "https://resplendent-choux-4ad62a.netlify.app/",
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 md:px-20 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Live Only */}
              <div className="pt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-black px-4 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
