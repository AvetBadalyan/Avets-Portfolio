import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { useTheme } from './context/theme-context.jsx'
import About from './Pages/About/About'
import Education from './Pages/Education/Education'
import Experience from './Pages/Experience/Experience'
import Header from './Pages/Header/Header'
import Portfolio from './Pages/Portfolio/Portfolio'
import Skills from './Pages/Skills/Skills'
import Theme from './theme/Theme.jsx'

const App = () => {
	const { themeState } = useTheme()

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
	)
}

export default App
