import { Route, Routes } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Theme from "./Components/theme/Theme";
import { particles } from "./helpers/particlesConfig";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
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
      <Particles id="tsparticles" init={particlesInit} options={particles} />
      {/* navbar components */}
      <div className="app-navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}

      <div className="app-main-content-wrapper">
        <Theme />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
