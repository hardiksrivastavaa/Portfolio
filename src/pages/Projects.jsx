import React from "react";
import useAOS from "../hooks/useAOS";
import projects from "../utils/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  useAOS();

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
        🚀 Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-purple-600 font-medium">
                <span className="font-semibold">Tech:</span>{" "}
                {project.tech.join(", ")}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
