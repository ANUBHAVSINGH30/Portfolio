import Hero from "./components/Hero"
import About from "./components/About";
import Experience from "./components/WorkExperience";
import DotBackground from "./components/DotBackground";
import Education from "./components/Education"
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills /> 
      {/* // <Projects />
      // <Skills />
      // <Contact /> */}
      
      {/* Bottom dots for entire page */}
      <DotBackground position="bottom" />
    </div>
  );
}