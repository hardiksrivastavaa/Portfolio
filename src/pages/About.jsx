import React from "react";
import useAOS from "../hooks/useAOS";

const About = () => {
  useAOS();

  return (
    <section
      className="max-w-4xl mx-auto py-16 px-6"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 relative">
        About Me
        <span className="block w-20 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 leading-relaxed text-lg text-gray-700">
        <p>
          I&apos;m <span className="font-semibold text-gray-900">Hardik Srivastava</span>, 
          a <span className="text-purple-600 font-medium">Full Stack MERN Developer</span> 
          skilled in <strong>MongoDB, Express.js, React.js, and Node.js</strong>. 
          I specialize in building responsive web applications, RESTful APIs, and 
          integrating cloud services like <strong>MongoDB Atlas</strong> and{" "}
          <strong>Cloudinary</strong>. With strong problem-solving abilities and a 
          collaborative mindset, I aim to apply my expertise and deliver impactful 
          solutions in dynamic organizations.
        </p>
      </div>
    </section>
  );
};

export default About;
