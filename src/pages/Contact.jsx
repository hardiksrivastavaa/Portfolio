import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAOS from "../hooks/useAOS";

const Contact = () => {
  useAOS(); // AOS animations
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      subject: formRef.current.subject.value,
      message: formRef.current.message.value,
    };

    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbyZUETqhtg0i5vPMPo8FLZ_2pB2vdLZs0hMyetVEpZjx7qpRgGaoaLowMMcLpgBLG0CRw/exec";

      fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // won't give actual response
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Show toast regardless of fetch result (due to no-cors)
      toast.success("Message sent successfully! 🚀");

      // Optional: clear the form
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send. Try again later.");
    }
  };

  return (
    <section className="max-w-md mx-auto py-12 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-center text-gray-700 mb-6">
        Got an opportunity, feedback, or collaboration idea? Let's connect!
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
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
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
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
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
