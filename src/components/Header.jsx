import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-2xl">💻</span>
          <span className="text-xl font-bold tracking-wide">Hardik Srivastava</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition">About</Link>
          <Link to="/skills" className="hover:text-purple-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-purple-400 transition">Projects</Link>
          <Link to="/experience" className="hover:text-purple-400 transition">Experience</Link>
          <Link to="/education" className="hover:text-purple-400 transition">Education</Link>
          <Link to="/contact" className="hover:text-purple-400 transition">Contact</Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-4 pb-6 space-y-4 text-center text-sm font-medium shadow-lg">
          <Link to="/" onClick={closeMenu} className="block hover:text-purple-400">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-purple-400">About</Link>
          <Link to="/skills" onClick={closeMenu} className="block hover:text-purple-400">Skills</Link>
          <Link to="/projects" onClick={closeMenu} className="block hover:text-purple-400">Projects</Link>
          <Link to="/experience" onClick={closeMenu} className="block hover:text-purple-400">Experience</Link>
          <Link to="/education" onClick={closeMenu} className="block hover:text-purple-400">Education</Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-purple-400">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
