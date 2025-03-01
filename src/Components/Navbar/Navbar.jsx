import React, { useRef, useState } from 'react'
import './Navbar.css'
import { getImageUrl } from "../../utils";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const closeIcon=`${import.meta.env.BASE_URL}/assets/nav/closeIcon.png`
const menuIcon=`${import.meta.env.BASE_URL}/assets/nav/menuIcon.png`
const heroImage = `${import.meta.env.BASE_URL}/assets/home/heroImage.png`
const resumePdf = "/Protfolio/FatemaMenjarwala-FrontendDeveloper(React)-Ln4O.pdf";

// import heroImage from "../assets/home/heroImage.png";
// import


export default function Navbar() {
  const [menu,setMenu]=useState("home")
  const menuRef=useRef()
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={heroImage} alt='logo'/>
      <img src="https://img.icons8.com/?size=48&id=6uJdcB0tVRwZ&format=gif" onClick={openMenu} alt='menuIcone' className='nav-mob-open'/>
      <ul ref={menuRef}  className="nav-menu">
        <img src={closeIcon} onClick={closeMenu} alt="closeIcon" className="nav-mob-close" style={{backgroundColor:"blue"}} />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"? <img src="https://www.protaxaccounting.co.uk/wp-content/uploads/2015/03/Underline-5-Blue.png" style={{
        display: "block",
        width: "100%",
        height: "50px",
        marginTop: "-10px", // Adjust to bring it closer without shifting text
      }}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#AboutMe'><p onClick={()=>setMenu("AboutMe")}>About Me</p></AnchorLink>{menu=="About Me"? <img src="https://www.protaxaccounting.co.uk/wp-content/uploads/2015/03/Underline-5-Blue.png" style={{
        display: "block",
        width: "100%",
        height: "50px",
        marginTop: "-10px", // Adjust to bring it closer without shifting text
      }}/>:<></>} </li>
        <li><AnchorLink className='anchor-link'offset={50} href='#Skills'><p onClick={()=>setMenu("Skills")}>Skills</p></AnchorLink>{menu=="Skills"? <img src="https://www.protaxaccounting.co.uk/wp-content/uploads/2015/03/Underline-5-Blue.png" style={{
        display: "block",
        width: "100%",
        height: "50px",
        marginTop: "-10px", // Adjust to bring it closer without shifting text
      }}/>:<></>}</li>
        <li><AnchorLink className='anchor-link'offset={50} href='#Project'><p onClick={()=>setMenu("Project")}>Project</p></AnchorLink>{menu=="Project"? <img src="https://www.protaxaccounting.co.uk/wp-content/uploads/2015/03/Underline-5-Blue.png" style={{
        display: "block",
        width: "100%",
        height: "50px",
        marginTop: "-10px", // Adjust to bring it closer without shifting text
      }}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu=="Contact"? <img src="https://www.protaxaccounting.co.uk/wp-content/uploads/2015/03/Underline-5-Blue.png" style={{
        display: "block",
        width: "100%",
        height: "50px",
        marginTop: "-10px", // Adjust to bring it closer without shifting text
      }}/>:<></>}</li>

      </ul>
      <div className="nav-connect">
  <a href={resumePdf} download="Fatema_Menjarwala_Resume.pdf">
 Resume  </a>
  </div>
  </div>

  )
}
