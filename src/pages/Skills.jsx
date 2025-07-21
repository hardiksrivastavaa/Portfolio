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
    <section className="max-w-4xl mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10 text-center">
        💻 Skills & Tech Stack
      </h2>

      <div className="space-y-10 text-gray-800">
        <SkillCategory
          title="🧠 Programming Languages"
          skills={[
            {
              icon: <FaJs />,
              label: "JavaScript",
              color: "bg-yellow-100 hover:bg-yellow-200",
              iconColor: "text-yellow-500",
            },
            {
              icon: <FaJava />,
              label: "Java",
              color: "bg-red-100 hover:bg-red-200",
              iconColor: "text-red-700",
            },
          ]}
        />

        <SkillCategory
          title="🎨 Frontend Development"
          skills={[
            {
              icon: <FaHtml5 />,
              label: "HTML",
              color: "bg-orange-100 hover:bg-orange-200",
              iconColor: "text-orange-600",
            },
            {
              icon: <FaCss3Alt />,
              label: "CSS",
              color: "bg-blue-100 hover:bg-blue-200",
              iconColor: "text-blue-600",
            },
            {
              icon: <FaBootstrap />,
              label: "Bootstrap",
              color: "bg-purple-100 hover:bg-purple-200",
              iconColor: "text-purple-700",
            },
            {
              icon: <SiTailwindcss />,
              label: "Tailwind CSS",
              color: "bg-sky-100 hover:bg-sky-200",
              iconColor: "text-sky-500",
            },
            {
              icon: <FaReact />,
              label: "React.js",
              color: "bg-blue-100 hover:bg-blue-200",
              iconColor: "text-blue-500",
            },
          ]}
        />

        <SkillCategory
          title="🛠️ Backend Development"
          skills={[
            {
              icon: <FaNodeJs />,
              label: "Node.js",
              color: "bg-green-100 hover:bg-green-200",
              iconColor: "text-green-600",
            },
            {
              icon: <SiExpress />,
              label: "Express.js",
              color: "bg-gray-100 hover:bg-gray-200",
              iconColor: "text-gray-800",
            },
          ]}
        />

        <SkillCategory
          title="📊 Databases"
          skills={[
            {
              icon: <SiMongodb />,
              label: "MongoDB",
              color: "bg-green-100 hover:bg-green-200",
              iconColor: "text-green-700",
            },
            {
              icon: <SiMysql />,
              label: "MySQL",
              color: "bg-blue-100 hover:bg-blue-200",
              iconColor: "text-blue-700",
            },
          ]}
        />

        <SkillCategory
          title="⚙️ Tools & Platforms"
          skills={[
            {
              icon: <FaGithub />,
              label: "GitHub",
              color: "bg-gray-100 hover:bg-gray-200",
              iconColor: "text-black",
            },
            {
              icon: <FaGitAlt />,
              label: "Git",
              color: "bg-orange-100 hover:bg-orange-200",
              iconColor: "text-orange-600",
            },
            {
              icon: <VscVscode />,
              label: "VS Code",
              color: "bg-blue-100 hover:bg-blue-200",
              iconColor: "text-blue-500",
            },
            {
              icon: <SiPostman />,
              label: "Postman",
              color: "bg-orange-100 hover:bg-orange-200",
              iconColor: "text-orange-500",
            },
            {
              icon: <SiCloudinary />,
              label: "Cloudinary",
              color: "bg-indigo-100 hover:bg-indigo-200",
              iconColor: "text-indigo-500",
            },
            {
              icon: <FaDatabase />,
              label: "MongoDB Atlas",
              color: "bg-gray-100 hover:bg-gray-200",
              iconColor: "text-gray-700",
            },
          ]}
        />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition ${skill.color}`}
        >
          <span className={`text-xl ${skill.iconColor}`}>{skill.icon}</span>
          <span className="text-sm font-medium">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
