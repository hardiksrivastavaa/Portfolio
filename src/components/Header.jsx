import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/education", label: "Education" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 group"
          onClick={closeMenu}
        >
          <span className="text-2xl transition-transform group-hover:scale-110">
            💻
          </span>
          <span
            className={`text-lg md:text-xl font-bold tracking-wide transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            } group-hover:text-purple-500`}
          >
            Hardik Srivastava
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm md:text-base font-medium">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === path
                  ? "text-purple-500 after:w-full"
                  : scrolled
                  ? "text-gray-800 hover:text-purple-500"
                  : "text-white hover:text-purple-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-2xl focus:outline-none ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-sm overflow-hidden transition-all duration-300 shadow-lg ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="px-4 pt-4 pb-6 space-y-4 text-center text-sm font-medium">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`block transition-colors hover:text-purple-500 ${
                location.pathname === path
                  ? "text-purple-500 font-semibold"
                  : "text-gray-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
