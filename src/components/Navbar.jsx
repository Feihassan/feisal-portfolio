// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure to install this

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-black text-white px-6 md:px-20 py-4 flex justify-between items-center border-b border-gray-800 shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-primary">Feisal.dev</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-primary transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile toggle) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black px-6 py-4 space-y-4 md:hidden border-t border-gray-800 z-40">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium hover:text-primary transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
