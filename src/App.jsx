//import { useEffect, useState } from "react";

//import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FeaturedProject from "./components/FeaturedProject";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import Github from "./components/Github";
import SEO from "./components/SEO";
import AIChat from "./components/AIChat";

function App() {

return (

<>
<SEO />
<Navbar />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<FeaturedProject />
<Certifications />
<Blog />
<Contact />
<Footer />
<AIChat />

</>

);

}
export default App;