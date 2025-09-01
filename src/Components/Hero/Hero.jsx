import './Hero.css'
import dark_arrow from '../../assets/d_arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Vickram Chennupati</h1>
                <p>Computer Science Student @ Purdue University--West Lafayette</p>
                <button className='btn'>Explore <img src={dark_arrow} alt=""/></button>
            </div>
        </div>
    )
}

export default Hero
