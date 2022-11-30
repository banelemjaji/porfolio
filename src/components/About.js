import React from 'react'
import Me from './images/Banele.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <img src={Me} alt='banele'/>
            <div className='col-2'>
                <h2>About Me</h2>
                <span className='line'></span>
                <p>Hey SovTech, I'm a final year student, completing my Diploma in Information Technology. I enjoy gaming, soccer and listening to music when I'm not busy debugging code.</p>

            </div>
        </div>

    </div>
  )
}


export default About