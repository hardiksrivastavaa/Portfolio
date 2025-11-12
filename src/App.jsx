
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages

import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

// Layout
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop behavior="smooth" />
      <Routes>
        {/* Layout Route wraps all other pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
