import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Projects from "./components/projects/Projects"
import Services from "./components/services/Service"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
