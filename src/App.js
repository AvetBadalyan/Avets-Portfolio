import { Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { particles } from "./helpers/particlesConfig";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skills from "./Pages/Skills/Skills";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import Experience from "./Pages/Experience/Experience";
import { useState } from "react";

/* npm install react-router-dom sass react-vertical-timeline-component rc-progress react-tsparticles tsparticles react-simple-animate
 */

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* particles js */}
      <Particles id="tsparticles" init={particlesInit} options={particles} />
      {/* navbar components */}
      <div className="app-navbar-wrapper">
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </div>
      {/* main page content */}

      <div
        className={`app-main-content-wrapper ${
          isDarkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
