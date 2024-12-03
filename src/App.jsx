import './App.css'
import { Navbar, Line } from './components'
import { Home, About, Skill, Experience, Contact } from './sections'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Line />
      <About />
      <Skill />
      <Experience />
      <Contact />
    </>
  )
}

export default App
