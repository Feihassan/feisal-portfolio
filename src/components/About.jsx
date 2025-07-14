import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-black text-white flex flex-col gap-12 scroll-mt-20"
    >
      {/* Intro */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          About Me
        </h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          I’m <span className="text-white font-semibold">Feisal Abdi Hassan</span>, a passionate full-stack developer based in Nairobi. I love crafting clean, modern web apps using tools like React, Tailwind, and Node.js. My goal is to turn ideas into user-friendly products that deliver value.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-white">Tech Stack</h3>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          <li className="bg-gray-800 px-4 py-1 rounded-full">JavaScript</li>
          <li className="bg-gray-800 px-4 py-1 rounded-full">React</li>
          <li className="bg-gray-800 px-4 py-1 rounded-full">Tailwind CSS</li>
          <li className="bg-gray-800 px-4 py-1 rounded-full">Node.js</li>
          <li className="bg-gray-800 px-4 py-1 rounded-full">MongoDB</li>
          <li className="bg-gray-800 px-4 py-1 rounded-full">Vite</li>
          <li className="bg-gray-800 px-4 py-1 rounded-full">Git & GitHub</li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-white">Education</h3>
        <div className="space-y-6 border-l border-gray-700 pl-4">
          <div>
            <div className="text-sm text-gray-400">2025</div>
           <h4 className="text-lg font-semibold text-white">
              Software Engineering | Full Stack Development Program
            </h4>
            <p className="text-gray-400 text-sm">Moringa School, Nairobi</p>
          </div>

          <div>
            <div className="text-sm text-gray-400">2021 – 2024</div>
            <h4 className="text-lg font-semibold text-white">
              Bachelors of Business Information Technology
            </h4>
            <p className="text-gray-400 text-sm">
              Mount Kenya University, Nairobi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
