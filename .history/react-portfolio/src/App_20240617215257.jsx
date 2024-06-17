import styles from "./App.module.css"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { COntact } from "./components/contact/COntact"
function App() {


  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <COntact
      </div>
    </>
  )
}

export default App
