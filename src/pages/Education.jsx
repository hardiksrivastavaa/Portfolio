import React from "react";
import useAOS from "../hooks/useAOS";
import mernCert from "/certificates/mern.jpg";

const Education = () => {
  useAOS();

  const educationData = [
    {
      title: "Diploma in Computer Science & Engineering",
      institution: "Feroze Gandhi Polytechnic, Raebareli",
      duration: "Sept 2022 – July 2025",
      percentage: "80%",
    },
    {
      title: "Intermediate (PCM)",
      institution: "Baishwara Inter College, Lalganj",
      duration: "2022",
      percentage: "75.2%",
    },
    {
      title: "High School",
      institution: "Alok Higher Secondary School, Lalganj",
      duration: "2020",
      percentage: "85%",
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development – MERN",
      issuer: "Apna College",
      issued: "Jan 2025",
      credentialId: "659e5afc7fa67ec97205fc76",
      credentialUrl: "https://mycourse.app/K5pfH6VAYPodRZ4DA",
      image: mernCert,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-16 px-6" data-aos="fade-up">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 relative">
        Education
        <span className="block w-20 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            {/* Dot on timeline */}
            <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow"></div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.title}
            </h3>
            <p className="text-sm text-purple-600 font-medium">
              {edu.institution}
            </p>

            {/* Meta Info */}
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Duration:</strong> {edu.duration}
              </p>
              <p>
                <strong>Percentage:</strong> {edu.percentage}
              </p>
            </div>
          </div>
        ))}

        {/* Certifications */}
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100 * (educationData.length + index + 1)}
          >
            {/* Dot */}
            <div className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow"></div>

            <h3 className="text-xl font-semibold text-gray-900">
              {cert.title}
            </h3>
            <p className="text-sm text-purple-600 font-medium">
              {cert.issuer}
            </p>

            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Issued:</strong> {cert.issued}
              </p>
              <p>
                <strong>Credential ID:</strong>{" "}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900 transition"
                >
                  {cert.credentialId}
                </a>
              </p>
            </div>

            {cert.image && (
              <div className="mt-4 w-full md:w-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
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

export default Education;
