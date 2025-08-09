import React from "react";
import useAOS from "../hooks/useAOS";
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  useAOS();

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
        Skills & Tech Stack
      </h2>

      <div className="space-y-16">
        <SkillCategory
          title="🧠 Programming Languages"
          skills={[
            {
              icon: <FaJs />,
              label: "JavaScript",
              bg: "bg-yellow-100",
              hover: "hover:bg-yellow-200",
              color: "text-yellow-500",
            },
            {
              icon: <FaJava />,
              label: "Java",
              bg: "bg-red-100",
              hover: "hover:bg-red-200",
              color: "text-red-700",
            },
          ]}
        />

        <SkillCategory
          title="🎨 Frontend Development"
          skills={[
            {
              icon: <FaHtml5 />,
              label: "HTML",
              bg: "bg-orange-100",
              hover: "hover:bg-orange-200",
              color: "text-orange-600",
            },
            {
              icon: <FaCss3Alt />,
              label: "CSS",
              bg: "bg-blue-100",
              hover: "hover:bg-blue-200",
              color: "text-blue-600",
            },
            {
              icon: <FaBootstrap />,
              label: "Bootstrap",
              bg: "bg-purple-100",
              hover: "hover:bg-purple-200",
              color: "text-purple-700",
            },
            {
              icon: <SiTailwindcss />,
              label: "Tailwind CSS",
              bg: "bg-sky-100",
              hover: "hover:bg-sky-200",
              color: "text-sky-500",
            },
            {
              icon: <FaReact />,
              label: "React.js",
              bg: "bg-blue-100",
              hover: "hover:bg-blue-200",
              color: "text-blue-500",
            },
          ]}
        />

        <SkillCategory
          title="🛠️ Backend Development"
          skills={[
            {
              icon: <FaNodeJs />,
              label: "Node.js",
              bg: "bg-green-100",
              hover: "hover:bg-green-200",
              color: "text-green-600",
            },
            {
              icon: <SiExpress />,
              label: "Express.js",
              bg: "bg-gray-100",
              hover: "hover:bg-gray-200",
              color: "text-gray-800",
            },
          ]}
        />

        <SkillCategory
          title="📊 Databases"
          skills={[
            {
              icon: <SiMongodb />,
              label: "MongoDB",
              bg: "bg-green-100",
              hover: "hover:bg-green-200",
              color: "text-green-700",
            },
            {
              icon: <SiMysql />,
              label: "MySQL",
              bg: "bg-blue-100",
              hover: "hover:bg-blue-200",
              color: "text-blue-700",
            },
          ]}
        />

        <SkillCategory
          title="⚙️ Tools & Platforms"
          skills={[
            {
              icon: <FaGithub />,
              label: "GitHub",
              bg: "bg-gray-100",
              hover: "hover:bg-gray-200",
              color: "text-black",
            },
            {
              icon: <FaGitAlt />,
              label: "Git",
              bg: "bg-orange-100",
              hover: "hover:bg-orange-200",
              color: "text-orange-600",
            },
            {
              icon: <VscVscode />,
              label: "VS Code",
              bg: "bg-blue-100",
              hover: "hover:bg-blue-200",
              color: "text-blue-500",
            },
            {
              icon: <SiPostman />,
              label: "Postman",
              bg: "bg-orange-100",
              hover: "hover:bg-orange-200",
              color: "text-orange-500",
            },
            {
              icon: <SiCloudinary />,
              label: "Cloudinary",
              bg: "bg-indigo-100",
              hover: "hover:bg-indigo-200",
              color: "text-indigo-500",
            },
            {
              icon: <FaDatabase />,
              label: "MongoDB Atlas",
              bg: "bg-gray-100",
              hover: "hover:bg-gray-200",
              color: "text-gray-700",
            },
          ]}
        />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div data-aos="fade-up">
    <h3 className="text-2xl font-semibold mb-6 text-gray-900">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-5 rounded-3xl shadow-md border border-gray-200 transition transform hover:scale-105 ${skill.bg} ${skill.hover}`}
        >
          <span className={`text-3xl mb-2 ${skill.color}`}>{skill.icon}</span>
          <span className="text-sm font-medium text-gray-800">
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
