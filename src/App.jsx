import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Hiring from './components/Hiring'
import Contact from './components/Contact'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Hiring />
        <Contact />
        <BookNow />
      </main>
      <Footer />
    </>
  )
}

export default App
