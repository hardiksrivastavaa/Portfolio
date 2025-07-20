import React from "react";
import useAOS from "../hooks/useAOS";
import deltaCertificate from "../../public/certificates/mern.jpg";

const Education = () => {
  useAOS(); // Initialize AOS globally

  return (
    <section className="max-w-3xl mx-auto py-16 px-4" data-aos="fade-up">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">🎓 Education</h2>

      <div className="space-y-10">
        {/* Diploma */}
        <div
          className="border-l-4 border-purple-600 pl-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Diploma in Computer Science & Engineering
          </h3>
          <p className="text-gray-700">
            Feroze Gandhi Polytechnic, Raebareli <br />
            <span className="text-sm text-gray-600">
              Sept 2022 – July 2025
            </span>{" "}
            <br />
            <strong>Percentage:</strong> 80%
          </p>
        </div>

        {/* Intermediate */}
        <div
          className="border-l-4 border-purple-600 pl-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Intermediate (PCM)
          </h3>
          <p className="text-gray-700">
            Baishwara Inter College, Lalganj <br />
            <span className="text-sm text-gray-600">2022</span> <br />
            <strong>Percentage:</strong> 75.2%
          </p>
        </div>

        {/* High School */}
        <div
          className="border-l-4 border-purple-600 pl-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            High School
          </h3>
          <p className="text-gray-700">
            Alok Higher Secondary School, Lalganj <br />
            <span className="text-sm text-gray-600">2020</span> <br />
            <strong>Percentage:</strong> 85%
          </p>
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-3xl font-bold text-center mt-16 mb-10">
        📜 Certifications
      </h2>

      <div
        className=""
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Certification Details */}
          <div className="flex-1 text-gray-700 border-l-4 border-purple-600 pl-5">
            <h3 className="text-lg font-semibold mb-1">
              Full Stack Web Development – MERN
            </h3>
            Apna College · Issued Jan 2025 <br />
            Credential ID:{" "}
            <a
              href="https://mycourse.app/K5pfH6VAYPodRZ4DA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline hover:text-purple-900 transition"
            >
              659e5afc7fa67ec97205fc76
            </a>
          </div>

          {/* Certificate Image */}
          <div className="w-full md:w-60 border rounded-lg overflow-hidden shadow">
            <img
              src={deltaCertificate}
              alt="Full Stack MERN Certificate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
