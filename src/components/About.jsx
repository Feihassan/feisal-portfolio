import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 95 },
    { name: "Tailwind CSS", level: 97 },
    { name: "Node.js", level: 95 },
    { name: "MongoDB", level: 90 },
    { name: "Git & GitHub", level: 92 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm <span className="text-white font-semibold gradient-text">Feisal Abdi Hassan</span>, 
                a passionate full-stack developer based in Nairobi. I specialize in creating 
                modern, scalable web applications that deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                My journey in tech combines creativity with technical expertise, 
                turning complex problems into elegant solutions.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="text-sm text-primary font-semibold">2025</div>
                  <h4 className="text-lg font-bold text-white">
                    Software Engineering Program
                  </h4>
                  <p className="text-gray-400">Moringa School, Nairobi</p>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary/60 rounded-full" />
                  <div className="text-sm text-primary font-semibold">2021 – 2024</div>
                  <h4 className="text-lg font-bold text-white">
                    Bachelor's in Business IT
                  </h4>
                  <p className="text-gray-400">Mount Kenya University, Nairobi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="skills-section"
            className="space-y-8"
          >
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={skillsVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "React", "Tailwind CSS", "Node.js", "MongoDB", "Vite", "Git", "Figma"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;