import { useState } from "react";
import { Link } from "react-router-dom";
import useAOS from "../hooks/useAOS";
import projects from "../utils/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ limit }) => {
  useAOS();
  const [selectedProject, setSelectedProject] = useState(null);

  const displayedProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" data-aos="fade-up">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900 relative">
        {limit ? "Featured Projects" : "Projects"}
        <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {displayedProjects.map((project, index) => (
          <article
            key={project.title + index}
            className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            {/* Image Below Title */}
            <div className="relative w-full aspect-video overflow-hidden mt-4">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Title Block on Top */}
            <div className="p-5 pb-0 text-center">
              <h3 className="md:text-3xl text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-snug">
                {project.title}
              </h3>

              {project.subtitle && (
                <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-purple-500 transition-colors mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Content Below Image */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <p className="text-gray-500 text-sm md:text-base mb-1 leading-relaxed line-clamp-4 text-left md:text-left">
                {project.description}
              </p>

              {/* Actions */}
              <div className="mt-auto pt-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-purple-600 text-sm font-medium hover:underline self-center sm:self-start cursor-pointer"
                >
                  Read More
                </button>

                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
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
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View All Button */}
      {limit && projects.length > limit && (
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              aria-label="Close project modal"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
