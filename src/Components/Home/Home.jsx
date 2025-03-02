import React from 'react'
import './Home.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const resumePdf = "/FatemaMenjarwala-FrontendDeveloper(React)-upJd.pdf";
// FatemaMenjarwala-FrontendDeveloper(React)-upJd.pdf







// const aboutImage=`${import.meta.env.BASE_URL}/assets/home/aboutImage.png`;
const aboutImage = `${import.meta.env.BASE_URL}/assets/home/frontend-developer.png`;

export default function Home() {
  return (
    <div id ="home"className='Home'>
      <img src={aboutImage} alt='Profile Img'/>
      <h1><span>I'm Fatema Menjarwala </span>, Frontend Developer  </h1>
      <p>I have completed my Frontend Development Course from Masai School, Bangalore</p>
      <div className='home-action'>
      <div className="hero-resume">
  <a  style={{textDecoration:"none"}}href={resumePdf} download="Fatema_Menjarwala_Resume.pdf">
 Resume  </a>
 </div>

        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with Me </AnchorLink></div>
        {/* <div className="hero-resume">My Resume</div> */}
      </div>
    </div>
  )
}
