import { lazy, Suspense, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { useTheme } from "./context/use-theme";
import Header from "./Pages/Header/Header";

// Above-the-fold (Navbar + Header) loads eagerly. Everything below the fold is
// code-split so it doesn't block first paint or inflate the initial JS bundle —
// the chunks download while the user reads the hero.
const About = lazy(() => import("./Pages/About/About"));
const Education = lazy(() => import("./Pages/Education/Education"));
const Skills = lazy(() => import("./Pages/Skills/Skills"));
const CurrentlyLearning = lazy(
  () => import("./Pages/CurrentlyLearning/CurrentlyLearning"),
);
const Experience = lazy(() => import("./Pages/Experience/Experience"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("./Components/contact/Contact"));
const Footer = lazy(() => import("./Components/footer/Footer"));

const App = () => {
  const { themeClass } = useTheme();

  // Fade out and remove the static HTML loader once React has mounted.
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.transition = "opacity 0.3s ease";
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 300);
    }
  }, []);

  return (
    <main id="main-content" className={themeClass}>
      <Navbar />
      <Header />
      <Suspense fallback={null}>
        <About />
        <Education />
        <Skills />
        <CurrentlyLearning />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
