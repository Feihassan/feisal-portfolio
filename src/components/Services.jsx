import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with React, Tailwind CSS, and modern JavaScript.",
      icon: "🎨",
      features: ["React & Next.js", "Responsive Design", "Performance Optimization", "Modern UI/UX"]
    },
    {
      title: "Backend Development", 
      description: "Building robust server-side applications with Node.js, APIs, and database integration.",
      icon: "⚙️",
      features: ["Node.js & Express", "RESTful APIs", "Database Design", "Authentication"]
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment.",
      icon: "🚀",
      features: ["Complete Web Apps", "E-commerce Solutions", "Custom Dashboards", "Cloud Deployment"]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized services to bring your digital vision to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-dark rounded-3xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-500 h-full card-3d">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-dark rounded-3xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create something amazing. From concept to deployment, 
              I'll help bring your ideas to life with modern web technologies.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary to-cyan-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;