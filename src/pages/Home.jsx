import React from "react";
import useAOS from "../hooks/useAOS";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "../components/Hero";

const Home = () => {
  useAOS();

  return (
    <main className="scroll-smooth text-gray-800 font-[Poppins]">
      {/* Section: Hero */}
      <section className="min-h-screen bg-white flex items-center">
        <Hero />
      </section>

      {/* Section: About */}
      <section className="min-h-screen bg-gray-200 flex items-center">
        <About />
      </section>

      {/* Section: Experience */}
      <section className="min-h-screen bg-white flex items-center">
        <Experience />
      </section>

      {/* Section: Projects */}
      <section className="min-h-screen bg-gray-200 flex items-center">
        <Projects limit={3} />
      </section>

      {/* Section: Skills */}
      <section className="min-h-screen bg-white flex items-center">
        <Skills />
      </section>

      {/* Section: Education */}
      <section className="min-h-screen bg-gray-200 flex items-center">
        <Education />
      </section>

      {/* Section: Contact */}
      <section className="min-h-screen bg-white flex items-center">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
