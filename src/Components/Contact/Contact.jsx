import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
// import blueClone from "../../assets/projects/blueClone.png";

const emailIcon = `${import.meta.env.BASE_URL}/assets/contact/emailIcon.png`;
const githubIcon =`${import.meta.env.BASE_URL}/assets/contact/githubIcon.png`
const linkedinIcon=`${import.meta.env.BASE_URL}/assets/contact/linkedinIcon.png`



export default function Contact() {
  return (

  <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:fatemamenjarwala1623@gmail.com" target="_blank" rel="noopener noreferrer">fatemamenjarwala1623@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/fatema-menjarwala-bb087b2b3/" target="_blank" rel="noopener noreferrer">Fatema-Menjarwala</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/fatema2412" target="_blank" rel="noopener noreferrer">fatema2412</a>
        </li>
      </ul>
    </footer>
  );
}
