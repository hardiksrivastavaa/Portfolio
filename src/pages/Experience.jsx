import React from "react";
import useAOS from "../hooks/useAOS";
import experiences from "../utils/experiences";

const Experience = () => {
  useAOS();

  return (
    <section
      className="max-w-4xl mx-auto py-16 px-6"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 relative">
        Experience
        <span className="block w-20 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            {/* Dot on timeline */}
            <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow"></div>

            {/* Title & Role */}
            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
            {exp.role && (
              <p className="text-sm text-purple-600 font-medium">{exp.role}</p>
            )}

            {/* Meta Info */}
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Duration:</strong> {exp.duration}
              </p>
              {exp.type && (
                <p>
                  <strong>Type:</strong> {exp.type}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-700 leading-relaxed">
              {exp.description}
            </p>

            {/* Certificate / Image */}
            {exp.image && (
              <div className="mt-4 w-full md:w-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={exp.image}
                  alt={`${exp.title} Certificate`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
