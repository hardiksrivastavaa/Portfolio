// import React from "react";
// import profilePic from "/myself/profile.jpg";
// import { resumeLink } from "../utils/links";
// import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";

// const Hero = () => {
//   return (
//     <section
//       className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-20 w-full bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-900"
//       data-aos="fade-up"
//     >
//       {/* Background pastel blobs */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full blur-3xl top-10 left-20"></div>
//         <div className="absolute w-72 h-72 bg-purple-300/20 rounded-full blur-3xl bottom-10 right-20"></div>
//       </div>

//       {/* Left Text */}
//       <div className="text-center md:text-left max-w-xl space-y-6">
//         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//           Hi, I&apos;m{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
//             Hardik Srivastava
//           </span>{" "}
//           <span className="inline-block animate-wiggle">👋</span>
//         </h1>

//         <h2 className="text-lg md:text-xl font-medium text-gray-600">
//           <Typewriter
//             words={[
//               "Full-Stack Developer (MERN)",
//               "UI/UX Enthusiast",
//               "Cloud Explorer",
//               "Tech Learner",
//             ]}
//             loop
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={60}
//             delaySpeed={1500}
//           />
//         </h2>

//         {/* Buttons */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
//           <a
//             href="https://github.com/hardiksrivastavaa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all"
//           >
//             <FaGithub className="text-lg" />
//             GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/hardiksrivastavaa"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#0077b5] text-white hover:bg-[#0369a1] transition-all"
//           >
//             <FaLinkedin className="text-lg" />
//             LinkedIn
//           </a>

//           <a
//             href={resumeLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-all"
//           >
//             <FaDownload className="text-lg" />
//             Resume
//           </a>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="relative group">
//         <div className="w-44 h-44 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
//           <img
//             src={profilePic}
//             alt="Hardik Srivastava"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         {/* Pastel glow ring */}
//         <div className="absolute inset-0 rounded-full border-2 border-pink-300 opacity-0 group-hover:opacity-100 animate-pulse"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


































import React from "react";
import profilePic from "/myself/profile.jpg";
import { resumeLink } from "../utils/links";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 md:py-24 w-full"
      data-aos="fade-up"
    >
      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-xl space-y-6">
        {/* Intro */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-purple-700 drop-shadow-sm">
            Hardik Srivastava
          </span>{" "}
          <span className="inline-block animate-wiggle">👋</span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-lg md:text-xl text-purple-600 font-semibold min-h-[32px]">
          <Typewriter
            words={[
              "Full-Stack Developer (MERN)",
              "UI/UX Enthusiast",
              "Cloud Explorer",
              "Tech Learner",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <a
            href="https://github.com/hardiksrivastavaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition-all"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/hardiksrivastavaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>

          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 hover:scale-105 transition-all"
          >
            <FaDownload className="text-lg" />
            Resume
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative group">
        <div className="w-44 h-44 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <img
            src={profilePic}
            alt="Hardik Srivastava"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;