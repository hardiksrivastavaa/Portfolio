import React from "react";
import useAOS from "../hooks/useAOS";
import projects from "../utils/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  useAOS();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" data-aos="fade-up">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900 relative">
        Projects
        <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack as badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository of ${project.title}`}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
