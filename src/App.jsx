import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import MagicBento from './Components/MagicBento'
import Projects from './Components/Projects/Projects'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
        <section id="hero" data-theme="heroTheme">
        <Hero/>
        </section>
        <section id="about" data-theme="aboutTheme">
        <MagicBento 
          textAutoHide={false}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="144, 238, 144"
        />
        </section>
        <section id="projects" data-theme="projectsTheme">
        <Projects/>
        </section>
        <section id="resume" data-theme="resumeTheme">
        <Resume/>
        </section>
        <section id="contact" data-theme="contactTheme">
        <Contact/>
        </section>
    </div>
  )
}

export default App
