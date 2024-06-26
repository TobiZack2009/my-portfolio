import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Testimonials from "./components/testemonials";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" style={{scrollBehavior:"smooth"}}>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}