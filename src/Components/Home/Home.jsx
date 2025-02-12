import React from 'react'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const aboutImage="/assets/home/aboutImage.png";
export default function Home() {
  return (
    <div id ="home"className='Home'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RbrPwU5HxqkakRGDM-d30_VUH-fKLyJMUQ&s" alt='Profile Img'/>
      <h1><span>I'm Fatema Menjarwala </span>, Frontend Developer  </h1>
      <p>I have completed my Frontend Development Course from Masai School, Bangalore</p>
      <div className='home-action'>
      <div className="hero-resume">
  <a  style={{textDecoration:"none"}}href="/FatemaMenjarwala-FrontendDeveloper(React).pdf" download="Fatema_Menjarwala_Resume.pdf">
 Resume  </a>
 </div>

        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with Me </AnchorLink></div>
        {/* <div className="hero-resume">My Resume</div> */}
      </div>
    </div>
  )
}
