import Theme from "./theme/Theme.jsx";
import { useTheme } from "./context/theme-context.js";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

const App = () => {
  const { themeState } = useTheme();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Theme />
    </main>
  );
};

export default App;
