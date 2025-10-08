import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import feisalPhoto from "../assets/feisal.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl animate-float top-20 left-[-100px]" />
      <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float bottom-20 right-[-100px]" style={{ animationDelay: '1s' }} />
      <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-full blur-2xl animate-float top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />

      {/* Left Content */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl z-10 relative"
      >
        {/* Glassmorphism card */}
        <div className="glass-dark rounded-3xl p-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text animate-glow">
                Feisal
              </span>
            </h1>
            <div className="text-3xl md:text-5xl font-bold text-primary mb-6">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Specialist",
                  "UI/UX Designer",
                  "Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl text-gray-300 leading-relaxed mb-8 font-light"
        >
          Crafting exceptional digital experiences with cutting-edge technologies.
          Transforming ideas into scalable, beautiful web applications.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group relative bg-gradient-to-r from-primary to-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="glass border-2 border-primary/50 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Enhanced Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-12 md:mt-0 relative group"
      >
        {/* 3D Floating Container */}
        <div className="relative animate-float">
          {/* Multiple Glow Rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-cyan-400 to-purple-500 p-1 animate-glow" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-pink-500 via-purple-500 to-primary p-1 animate-pulse" />
          
          {/* Glass Frame */}
          <div className="relative glass rounded-full p-4 group-hover:scale-105 transition-all duration-500">
            <img
              src={feisalPhoto}
              alt="Feisal Abdi Hassan"
              className="w-80 h-80 object-cover rounded-full shadow-2xl transition-all duration-500 group-hover:shadow-primary/25"
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;