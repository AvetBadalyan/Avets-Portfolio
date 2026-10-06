import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { useTheme } from "./context/use-theme";
import Header from "./Pages/Header/Header";

// Above-the-fold (Navbar + Header) loads eagerly. Everything below the fold is
// code-split and loads when the user scrolls past the hero or follows an anchor.
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

const hasSectionTarget = () =>
  Boolean(window.location.hash) &&
  !["#header", "#main-content"].includes(window.location.hash);

function BelowFold() {
  useEffect(() => {
    if (hasSectionTarget()) {
      document
        .getElementById(window.location.hash.slice(1))
        ?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <>
      <About />
      <Education />
      <Skills />
      <CurrentlyLearning />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}

const App = () => {
  const { themeClass } = useTheme();
  const sectionsTrigger = useRef(null);
  const [showSections, setShowSections] = useState(hasSectionTarget);

  useEffect(() => {
    if (showSections) return;
    const revealTarget = () => {
      if (hasSectionTarget()) setShowSections(true);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.intersectionRatio > 0)) {
          setShowSections(true);
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(sectionsTrigger.current);
    window.addEventListener("hashchange", revealTarget);
    revealTarget();
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", revealTarget);
    };
  }, [showSections]);

  // Fade out and remove the static HTML loader once React has mounted.
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.transition = "opacity 0.3s ease";
      loader.style.opacity = "0";
      const timer = setTimeout(() => loader.remove(), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className={`portfolio-app ${themeClass}`}>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Header />
        <Suspense fallback={null}>{showSections && <BelowFold />}</Suspense>
        <div
          ref={sectionsTrigger}
          aria-hidden="true"
          hidden={showSections}
          style={{ height: "1px" }}
        />
      </main>
      <Suspense fallback={null}>{showSections && <Footer />}</Suspense>
    </div>
  );
};

export default App;
