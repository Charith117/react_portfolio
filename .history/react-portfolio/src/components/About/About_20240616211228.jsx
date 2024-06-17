import React from 'react'

import {getImageUrl} from "../../util";

const About = () => {
  return (
    <section>
        <h2>about</h2>
        <div>
            <img src={getImageUrl("about/aboutImage.png")} alt="mMe sitting with the laptop" />
            <ul>
                <li> 
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with a passion for building responsive, scalable, and maintainable</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About