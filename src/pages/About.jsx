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

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 leading-relaxed text-lg text-gray-700 space-y-6">
        <p>
          I&apos;m <span className="font-semibold text-gray-900">Hardik Srivastava</span>, 
          a web developer from <span className="text-purple-600 font-medium">Raebareli, Uttar Pradesh</span> 
          with a passion for building impactful and user-friendly digital experiences.
        </p>

        <p>
          I specialize in full-stack development using the{" "}
          <strong>MERN stack (MongoDB, Express.js, React.js, Node.js)</strong> 
          and core technologies like <strong>HTML, CSS, and JavaScript</strong>. 
          I enjoy crafting clean, responsive UIs with{" "}
          <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>, while 
          also developing robust backend systems to bring ideas to life.
        </p>

        <p>
          My portfolio includes real-world projects like a{" "}
          <em>cloud file manager</em>, a{" "}
          <em>front-page generator used by over 1000 students</em>, 
          and an <em>Airbnb-inspired rental platform</em>. 
          These experiences have sharpened both my technical skills and my 
          problem-solving mindset.
        </p>

        <p>
          I&apos;m familiar with modern tools and platforms such as{" "}
          <strong>Git, GitHub, Vercel</strong> for deployment,{" "}
          <strong>Cloudinary</strong> for media handling, and{" "}
          <strong>MongoDB Atlas</strong> for cloud database hosting.
        </p>

        <p>
          I&apos;m currently open to <span className="font-semibold">internship</span> 
          and <span className="font-semibold">entry-level</span> opportunities 
          where I can contribute, learn from experienced teams, and grow in 
          a collaborative, fast-paced environment.
        </p>
      </div>
    </section>
  );
};

export default About;
