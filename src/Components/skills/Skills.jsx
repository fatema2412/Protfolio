import React from 'react'
import './skills.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const css=`${import.meta.env.BASE_URL}/assets/skills/css.png`
const html=`${import.meta.env.BASE_URL}/assets/skills/html.png`
const javascript=`${import.meta.env.BASE_URL}/assets/skills/javascript.png`
const react =`${import.meta.env.BASE_URL}/assets/skills/react.png`
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="Skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Proficient in modern web technologies, including HTML, CSS, JavaScript, and React, with a strong focus on building responsive and interactive user interfaces.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRlH5x8oBQAqXxQBNwTIGAnoBBrjEWHP2pw&s' alt='redux' />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="css" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="html" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="js" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="react" />
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
