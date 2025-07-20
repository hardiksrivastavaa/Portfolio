import React from "react";
import useAOS from "../hooks/useAOS";

const Contact = () => {
  useAOS(); // Initialize AOS animations

  return (
    <section className="max-w-md mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-center text-gray-700 mb-6">
        Got an opportunity, feedback, or collaboration idea? Let's connect!
      </p>

      <form
        action="https://formspree.io/f/mnqeknbz"
        method="POST"
        className="space-y-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>

      <div
        className="mt-8 text-center text-sm text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        or reach me directly at <br />
        <strong>hardikfgp@gmail.com</strong>
        <br />
        <a
          href="https://linkedin.com/in/hardiksrivastavaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/hardiksrivastavaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
