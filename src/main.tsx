import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./Components/About/About.tsx";
import Experience from "./Components/Experience/Experience.tsx";
import Projects from "./Components/Projects/Projects.tsx";
import Contact from "./Components/Contact/Contact.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </StrictMode>
);
