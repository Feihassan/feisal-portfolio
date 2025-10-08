import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-dark border-b border-primary/20 backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black gradient-text cursor-pointer"
        >
          Feisal.dev
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="relative text-gray-300 hover:text-primary transition-colors duration-300 font-medium group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          
          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-cyan-400 text-black px-6 py-2 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg glass border border-primary/30 hover:border-primary/50 transition-colors duration-300"
        >
          {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-dark border-t border-primary/20"
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
            onClick={() => setIsOpen(false)}
            className="inline-block bg-gradient-to-r from-primary to-cyan-400 text-black px-6 py-2 rounded-full font-bold mt-4"
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;