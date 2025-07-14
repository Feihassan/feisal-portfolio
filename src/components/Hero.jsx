import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import feisalPhoto from "../assets/feisal.jpg";

const Hero = () => {
  const heroImage = feisalPhoto;

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Left Glow */}
      <div className="absolute w-80 h-80 md:w-[400px] md:h-[400px] bg-primary/20 rounded-full blur-3xl -z-10 top-10 left-[-100px]" />
      {/* Right Glow */}
      <div className="hidden md:block absolute w-64 h-64 bg-purple-600/20 rounded-full blur-2xl -z-10 bottom-10 right-10" />

      {/* Left Content */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-primary">Feisal</span> <br />
          <span className="text-primary">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Expert",
                "Problem Solver",
                "Open Source Lover",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="mt-6 text-gray-400 italic">
          I craft beautiful web apps using modern tools like React & Tailwind.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="#about"
            className="bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-black transition"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* Right: Stylish Profile Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="mt-12 md:mt-0 relative group"
      >
        {/* Glowing gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[5px] animate-pulse group-hover:scale-105 transition-all duration-300 blur-sm z-[-1]" />

        {/* Actual image */}
        <img
          src={heroImage}
          alt="Feisal"
          className="w-[250px] h-[250px] object-cover rounded-full border-4 border-black shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
