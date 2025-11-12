// import React, { useState } from "react";
// import useAOS from "../hooks/useAOS";
// import projects from "../utils/projects";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const Projects = () => {
//   useAOS();
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <section className="py-20 px-6 max-w-7xl mx-auto" data-aos="fade-up">
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900 relative">
//         Projects
//         <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
//       </h2>

//       {/* Project Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             {/* Image */}
//             <div className="relative w-full aspect-video overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>

//             {/* Content */}
//             <div className="p-6 flex flex-col h-full">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
//                 {project.title}
//               </h3>

//               {/* Short Description */}
//               <p className="text-gray-600 text-sm mb-2 leading-relaxed line-clamp-3">
//                 {project.description}
//               </p>

//               {/* Read More + Buttons (together, no big gap) */}
//               <div className="flex flex-col gap-2 mb-4">
//                 <button
//                   onClick={() => setSelectedProject(project)}
//                   className="text-purple-600 text-sm font-medium hover:underline self-start"
//                 >
//                   Read More
//                 </button>
//                 <div className="flex gap-3">
//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
//                     >
//                       <FaExternalLinkAlt />
//                       Live
//                     </a>
//                   )}
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
//                     >
//                       <FaGithub />
//                       GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">
//           <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* Modal Content */}
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               {selectedProject.title}
//             </h3>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               {selectedProject.description}
//             </p>

//             {/* Tech Stack inside modal only */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {selectedProject.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-3">
//               {selectedProject.live && (
//                 <a
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition"
//                 >
//                   <FaExternalLinkAlt />
//                   Live
//                 </a>
//               )}
//               {selectedProject.github && (
//                 <a
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
//                 >
//                   <FaGithub />
//                   GitHub
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;



import React, { useState } from "react";
import useAOS from "../hooks/useAOS";
import projects from "../utils/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ limit }) => {
  useAOS();
  const [selectedProject, setSelectedProject] = useState(null);

  // choose displayed projects based on optional limit prop
  const displayedProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" data-aos="fade-up">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900 relative">
        {limit ? "Featured Projects" : "Projects"}
        <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProjects.map((project, index) => (
          <div
            key={project.title + index}
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

              {/* Short Description */}
              <p className="text-gray-600 text-sm mb-2 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Read More + Buttons (together, no big gap) */}
              <div className="flex flex-col gap-2 mb-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-purple-600 text-sm font-medium hover:underline self-start"
                >
                  Read More
                </button>
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All button shown when limited (e.g., on Home) */}
      {limit && projects.length > limit && (
        <div className="mt-10 text-center">
          <a
            href="/projects"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View All Projects →
          </a>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Tech Stack inside modal only */}
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

            {/* Buttons */}
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

