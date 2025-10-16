import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
      // offset: 0
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
