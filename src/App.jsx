

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import AIChat from "./components/AIChat";
function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-gray-900
        dark:bg-gray-950
        dark:text-white
        transition-colors
        duration-500
      "
    >
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      <AIChat />
    </div>
  );
}

export default App;





/*function App() {
  return (
    <h1 className="text-5xl font-bold text-blue-600">
      Tailwind Works 🚀
    </h1>
  );
}

export default App;*/