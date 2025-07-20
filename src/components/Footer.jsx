import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white w-full mt-auto">

    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center gap-2 text-center">

      {/* Social Icons */}
      {/* <div className="flex gap-5 text-xl">

        <a href="https://github.com/hardiksrivastavaa" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/hardiksrivastavaa" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" >
          <FaLinkedin />
        </a>
        <a href="mailto:hardikfgp@gmail.com" className="hover:text-purple-400 transition" >
          <FaEnvelope />
        </a>

      </div> */}

      {/* Copyright */}

      <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Hardik Srivastava. All rights reserved.</p>

    </div>
  </footer>
);

export default Footer;
