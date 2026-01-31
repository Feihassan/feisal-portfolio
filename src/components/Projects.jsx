import React from "react";
import { motion } from "framer-motion";
import project1Img from "../assets/zuu.png";
import project2Img from "../assets/expo1.png";
import project3Img from "../assets/smartgoal.png";
import project4Img from "../assets/dream.png";
import project5Img from "../assets/bodax.png";


import project6Img from "../assets/globalease.png";
import project7img from "../assets/Local.png";
const projects = [
  {
    title: "Bodax",
    image: project5Img,
    description: "Kenya's Fastest same-day delivery courier.",
    tech: ["React", "Tailwind CSS", "JavaScript", "PostgreSQL"],
    live: "https://www.bodax.org/",
    category: "Pogressive Web App"
  },
  {
    title: "Globaleaseltd",
    image: project6Img,
    description: "Elegant e-commerce platform with cart functionality, checkout system, and admin dashboard.",
    tech: ["React", "Vite", "Tailwindcss", "Node.js" , "firebase"],
    live: "https://www.globaleaseltd.co.ke/",
    category: "web App"
  },
  {
    title: "Local Event hub",
    image: project7img,
    description: "Event management platform with event creation, browsing, and RSVP features.",
    tech: ["React", "Vite", "Tailwind CSS" ,"Node.js" , "supabase"],
    live: "https://local-event-hub.vercel.app/",
    category: "Progressive web App"
  },
  {
    title: "Dream Apartment Finder",
    image: project4Img,
    description: "Modern apartment browsing platform with search functionality and booking system.",
    tech: ["React", "Vite", "Tailwind CSS"],
    live: "https://resplendent-choux-4ad62a.netlify.app/",
    category: "Web App"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work in web development and design
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-dark rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 card-3d">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-cyan-400 text-black px-6 py-3 rounded-full font-bold text-lg transform scale-90 group-hover:scale-100 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25"
                    >
                      View Live Demo
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="glass border border-primary/30 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-cyan-400 font-semibold transition-colors duration-300 flex items-center gap-2"
                    >
                      Explore Project
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
