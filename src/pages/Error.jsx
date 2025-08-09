import React from "react";
import { Link } from "react-router-dom";
import useAOS from "../hooks/useAOS";

const Error = () => {
  useAOS();

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4"
      data-aos="fade-up"
    >
      <h1 className="text-7xl font-extrabold text-purple-600 mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-transform transform hover:scale-[1.05]"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default Error;
