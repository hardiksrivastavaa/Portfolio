import React from "react";
import useAOS from "../hooks/useAOS";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const About = () => {
  useAOS();

  return (
    <section className="max-w-4xl mx-auto py-16 px-6" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 relative">
        About Me
        <span className="block w-20 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-full mx-auto bg-white shadow-lg rounded-xl p-5 sm:p-6 md:p-8 leading-relaxed text-base sm:text-lg text-gray-700 space-y-6">
        <p>
          I&apos;m{" "}
          <span className="font-semibold text-gray-900">Hardik Srivastava</span>
          , a{" "}
          <span className="text-purple-600 font-medium">
            Full Stack MERN Developer
          </span>{" "}
          passionate about crafting scalable and user-centric web applications.
        </p>

        <p>
          I have hands-on experience in building responsive
          web applications using{" "}
          <strong>MongoDB, Express.js, React.js, and Node.js</strong>. Skilled
          in <strong>RESTful APIs</strong>, <strong>database management</strong>
          , and <strong>cloud integration</strong>. Strong problem-solving
          abilities and a collaborative mindset, seeking to apply technical
          expertise and drive results in a dynamic organization.
        </p>

        <p>
          I love solving real-world problems through clean, efficient code and
          working in fast-paced environments that encourage innovation and
          learning. My goal is to continuously improve as a developer while
          contributing to impactful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
