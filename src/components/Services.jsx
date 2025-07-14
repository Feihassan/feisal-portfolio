// src/components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">What I Do</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-400">
            Crafting intuitive and beautiful interfaces for web and mobile.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-400">
            Building fast, responsive websites with React, Vite & Tailwind.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">Brand Strategy</h3>
          <p className="text-gray-400">
            Helping startups create visual identity and product strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
