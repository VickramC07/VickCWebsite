import './Resume.css'
import resumePDF from '../../assets/CHENNUPATI_VICKRAM_RESUME.pdf'

const Resume = () => {
  return (
        <div className = 'resume container'>
            <div className = 'resume-text'>
                <iframe src={resumePDF}></iframe>
            </div>
    </div>
  )
}

export default Resume
