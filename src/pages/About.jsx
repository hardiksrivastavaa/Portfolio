import React from "react";
import useAOS from "../hooks/useAOS";

const About = () => {
  useAOS();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-gray-700 leading-relaxed text-lg">
        I'm a Computer Science & Engineering student from Raebareli, currently
        pursuing my diploma at <strong>Feroze Gandhi Polytechnic</strong>. I
        love crafting digital solutions that are functional, elegant, and
        helpful to real people.
        <br />
        <br />
        My passion lies in full-stack development — especially working with the{" "}
        <strong>MERN stack</strong>. I’ve built tools like a cloud file manager,
        a front page generator used by 1000+ students, and even an
        Airbnb-inspired full-stack rental platform.
        <br />
        <br />
        I'm also comfortable using platforms like{" "}
        <strong>Cloudinary, MongoDB Atlas, and GitHub</strong>, and I enjoy
        refining my skills through internships, real-world projects, and
        self-learning.
      </p>
    </div>
  );
};

export default About;
