import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Hiring from './components/Hiring'
import Contact from './components/Contact'
import BookNow from './components/BookNow'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
          }
        />
        <Route
          path="/thank-you"
          element={
            <>
              <ThankYou />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
