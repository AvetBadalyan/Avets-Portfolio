import { Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { particles } from "./helpers/particlesConfig";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Skills from "./Pages/Skills/Skills";

/* npm install react-router-dom sass react-vertical-timeline-component rc-progress react-tsparticles tsparticles react-simple-animate
 */

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* particles js */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particles}
      />
      {/* navbar components */}
      <Navbar />
      {/* main page content */}

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
