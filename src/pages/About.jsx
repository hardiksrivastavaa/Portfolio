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
          Hi, I&apos;m <span className="font-semibold text-gray-900">Hardik Srivastava</span>, 
          a <span className="text-purple-600 font-medium">Full Stack MERN Developer</span> 
          from Raebareli, Uttar Pradesh with a strong foundation in{" "}
          <strong>JavaScript, Java, and the MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>. 
          I enjoy building scalable web apps with clean, responsive UIs and robust backends.
        </p>

        <p>
          I&apos;ve gained practical industry and cloud experience through{" "}
          <strong>Google Arcade Facilitator Program</strong>, where I completed{" "}
          420+ hands-on labs on Google Cloud Platform and achieved{" "}
          <em>Legend Tier</em>, and at{" "}
          <strong>Softpro India Pvt. Ltd.</strong>, where I trained in{" "}
          <em>Core/Advanced Java and Spring Boot</em> while developing a client-side{" "}
          Online Test Portal.
        </p>

        <p>
          My projects include{" "}
          <em>Wanderlust – a full-stack Airbnb replica</em>,{" "}
          <em>UserDrive – a cloud file storage app</em>, and{" "}
          <em>Front Page Generator – used by 1000+ diploma students</em>. 
          These experiences honed my skills in{" "}
          <strong>authentication, REST APIs, cloud integration (MongoDB Atlas, Cloudinary),</strong> 
          and following <strong>MVC architecture</strong>.
        </p>

        <p>
          I work with tools like <strong>Git, GitHub, Postman, VS Code, Vercel</strong> 
          and technologies like <strong>Tailwind CSS, Bootstrap, EJS, JWT, Passport.js, OAuth</strong>. 
          My focus is on writing clean, maintainable code and delivering real-world impact.
        </p>

        <p>
          I&apos;m looking for <span className="font-semibold">internship</span> 
          and <span className="font-semibold">entry-level opportunities</span> 
          where I can apply my technical expertise, collaborate with teams, and 
          continue growing in a fast-paced environment.
        </p>
      </div>
    </section>
  );
};

export default About;
