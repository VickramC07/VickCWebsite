import './Navbar.css'
import logo from '../../assets/SYSC.png'
import useThemeFromSections from '../../Components/useThemeFromSections'

const Navbar = () => {
  const theme = useThemeFromSections(); // 👈 get current theme
  return (
    <nav className='container'>
    <img src={logo} alt="" className='logo' /> 
    <ul>
         <li><a href="#hero"><button className={`btn btn-clear ${theme === 'heroTheme' ? 'btn-hero' : ''}`}>Home</button></a></li>
         <li><a href="#about"><button className={`btn btn-clear ${theme === 'aboutTheme' ? 'btn-about' : ''}`}>About Me</button></a></li>
         <li><a href="#projects"><button className={`btn btn-clear ${theme === 'projectsTheme' ? 'btn-projects' : ''}`}>Projects</button></a></li>
         <li><a href="#resume"><button className={`btn btn-clear ${theme === 'resumeTheme' ? 'btn-projects' : ''}`}>Resume</button></a></li>
         <li><a href="#contact"><button className='btn'>Contact Me</button></a></li>
    </ul>
    </nav>
  )
}

export default Navbar

