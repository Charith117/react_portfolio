import React from 'react'
import styles from "About.module.ss"
import {getImageUrl} from"../../util";

const About = () => {
  return (
    <section>
        <h2>about</h2>
        <div>
            <img src={getImageUrl("about/aboutmage.png")} alt="mMe sitting with the laptop" />
        </div>
    </section>
  )
}

export default About