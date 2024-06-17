import React from 'react'
import styles from "About.module.ss"
import {getImageUrl} from"../../util";

const About = () => {
  return (
    <section>
        <h2>about</h2>
        <div>
            <img src={getImageUrl)} alt="" />
        </div>
    </section>
  )
}

export default About