import React from "react";
import useAOS from "../hooks/useAOS";
import experiences from "../utils/experiences";

const Experience = () => {
  useAOS(); // Initialize AOS once

  return (
    <section className="max-w-3xl mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`border-l-4 pl-4 ${exp.borderColor}`}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-700">
              {exp.role && (
                <>
                  <strong>Role:</strong> {exp.role}
                  <br />
                </>
              )}
              <strong>Duration:</strong> {exp.duration}
              <br />
              {exp.location && (
                <>
                  <strong>Location:</strong> {exp.location}
                  <br />
                </>
              )}
              {exp.type && (
                <>
                  <strong>Type:</strong> {exp.type}
                </>
              )}
            </p>
            <p className="mt-2 text-sm text-gray-600">{exp.description}</p>
            {exp.image && (
              <div className="mt-4 w-full md:w-64 rounded shadow border overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title + " Certificate"}
                  className="w-full h-auto object-cover"
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
