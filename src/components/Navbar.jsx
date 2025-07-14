// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 md:px-20 py-4 flex justify-between items-center border-b border-gray-800 shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">Feisal.dev</div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <ul className="hidden md:flex gap-8 text-sm font-medium">
  <li><a href="#home" className="hover:text-primary transition">Home</a></li>
    <li><a href="#about" className="hover:text-primary transition">About</a></li>
  <a href="#projects" className="hover:text-primary transition">Projects</a>
  <li><a href="#services" className="hover:text-primary transition">Services</a></li>
  <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
</ul>

      </ul>
    </nav>
  );
};

export default Navbar;
