import React from 'react'
import styles from "About.module.ss"
import {getImageUrl} from "..";

const About = () => {
  return (
    <section>
        <h2>about</h2>
        <div>
            <img src={getImageUrl("about/aboutI mage.png")} alt="mMe sitting with the laptop" />
        </div>
    </section>
  )
}

export default About