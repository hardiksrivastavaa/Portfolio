import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
      <Link
        to="/"
        className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </section>
  );
};

export default Error;
