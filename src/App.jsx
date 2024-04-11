import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Header from './sections/header/Header'
import Navbar from './sections/navbar/Navbar'
import Portfolio from './sections/portfolio/Portfolio'
import Skills from './sections/skills/Skills'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App