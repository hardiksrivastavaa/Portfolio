import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAOS from "../hooks/useAOS";
import contactInfo from "../utils/contactInfo";

const Contact = () => {
  useAOS();
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
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyZUETqhtg0i5vPMPo8FLZ_2pB2vdLZs0hMyetVEpZjx7qpRgGaoaLowMMcLpgBLG0CRw/exec";

      fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Message sent successfully! 🚀");
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send. Try again later.");
    }
  };

  return (
    <section
      className="max-w-lg mx-auto py-16 px-6"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-gray-900 relative">
        Contact Me
        <span className="block w-20 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Description */}
      <p className="text-center text-gray-700 mb-8">
        Got an opportunity, feedback, or collaboration idea? Let’s connect!
      </p>

      {/* Form */}
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
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <input
          type="text"
          name="subject"
          placeholder="Your Subject"
          required
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full border border-gray-300 p-3 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div
        className="mt-8 text-center text-sm text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        or reach me directly at <br />
        <strong>{contactInfo.email}</strong>
        <div className="mt-2 space-x-3">
          {contactInfo.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
