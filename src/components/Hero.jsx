import React from "react";
import profilePic from "/myself/profile.jpg";
import { resumeLink } from "../utils/links";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 w-full"
      data-aos="fade-up"
    >
      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Hi, I'm <span className="text-purple-700">Hardik Srivastava</span>{" "}
          <span className="inline-block animate-wiggle">👋</span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-lg md:text-xl text-purple-600 font-semibold mb-6 min-h-[32px]">
          <Typewriter
            words={[
              "Full-Stack Developer (MERN)",
              "UI/UX Enthusiast",
              "Cloud Explorer",
              "Tech Learner",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="https://github.com/hardiksrivastavaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/hardiksrivastavaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href={resumeLink}
            target="_blank"
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-44 h-44 md:w-80 md:h-80 rounded-full overflow-hidden border-2 object-cover border-purple-600 shadow-xl">
        <img
          src={profilePic}
          alt="Hardik Srivastava"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
