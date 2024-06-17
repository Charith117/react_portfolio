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
                    <img src={getImageUrl("about/aboutImage.png")} alt="cursor icon" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About