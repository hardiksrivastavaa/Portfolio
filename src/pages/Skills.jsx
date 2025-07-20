import React from "react";
import useAOS from "../hooks/useAOS";

const Skills = () => {
  useAOS();

  return (
    <section className="max-w-4xl mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">💻 Skills & Tech Stack</h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-800 text-lg list-disc list-inside">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Skills;
