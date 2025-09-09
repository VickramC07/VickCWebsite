import './Hero.css'
import dark_arrow from '../../assets/d_arrow.png'
import '../../Components/GradientText.css'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Vickram Chennupati</h1><p> Computer Science Student {" "}@{" "}
                  <span className="purdue-gradient-text">Purdue University</span><dl>West Lafayette, Indiana</dl>
                </p>
                <a href="#about"><button className='btn'>Next <img src={dark_arrow} alt=""/></button></a>
            </div>
        </div>
    )
}

export default Hero
