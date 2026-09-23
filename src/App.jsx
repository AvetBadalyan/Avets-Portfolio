import { motion } from "framer-motion";
import { useEffect } from "react";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { useTheme } from "./context/theme-context.jsx";
import About from "./Pages/About/About";
import CurrentlyLearning from "./Pages/CurrentlyLearning/CurrentlyLearning";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Header from "./Pages/Header/Header";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skills from "./Pages/Skills/Skills";

const App = () => {
  const { themeClass } = useTheme();

  // Remove initial loader once app mounts
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.style.transition = "opacity 0.3s ease";
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 300);
    }
  }, []);

  return (
    <motion.main
      className={themeClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <CurrentlyLearning />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </motion.main>
  );
};

export default App;
