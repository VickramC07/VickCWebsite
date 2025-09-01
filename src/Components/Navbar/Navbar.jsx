import './Navbar.css'
import logo from '../../assets/SYSC.png'

const Navbar = () => {
  return (
    <nav className='container'>
    <img src={logo} alt="" className='logo' /> 
    <ul>
         <li>Home</li>
         <li>About Me</li>
         <li>Projects</li>
         <li>Resume</li>
         <li><button className='btn'>Contact Me</button></li>
    </ul>
    </nav>
  )
}

export default Navbar
