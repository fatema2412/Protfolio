import React from 'react'
import './About.css'
const aboutImage = `${import.meta.env.BASE_URL}/assets/about/MyImg.png`;

export default function About() {
  return (
    <div id='AboutMe' className='about'>
      <div className="about-title">      <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={aboutImage} alt='My pic' />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Done Bachelor of Commerce from M.P Shah  Commerce College.
               Quick learner and an aspiring  Frontend developer.</p>
            <p>I love to work on exciting projects that test what I've learnt,
           whilst being exposed to the power and potential of the ever-evolving 
      technologies around us. Looking forward to applying and enhancing my skills 
      and knowledge as a developer. </p>

          </div>

        </div>
      </div>
    </div>

  )
}
