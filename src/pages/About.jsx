import React from "react";
import useAOS from "../hooks/useAOS";

const About = () => {
  useAOS();

  return (
    <div className="max-w-3xl mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-gray-700 leading-relaxed text-lg">
        I'm Hardik Srivastava, a web developer from Raebareli, Uttar Pradesh, with a strong passion for building impactful and user-friendly digital experiences.
        <br />
        <br />
        I specialize in full-stack development using the <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>, along with core technologies like <strong>HTML, CSS, and JavaScript</strong>. I enjoy crafting clean, responsive UIs with <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>, and building robust backend systems to bring ideas to life.
        <br />
        <br />
        I’ve worked on real-world projects including a cloud file manager, a front-page generator used by over 1000 students, and an Airbnb-inspired full-stack rental platform — all of which sharpened my technical skills and problem-solving mindset.
        <br />
        <br />
        I’m also experienced with modern development tools and platforms like <strong>Git, GitHub, Vercel</strong> for deployment, <strong>Cloudinary</strong> for media handling, and <strong>MongoDB Atlas</strong> for cloud database hosting.
        <br />
        <br />
        I'm currently open to internship and entry-level opportunities where I can contribute, learn from experienced teams, and grow in a collaborative and fast-paced environment.
      </p>
    </div>
  );
};

export default About;