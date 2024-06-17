import React from 'react'
import styles from "./Experience.module.css"
import { getImageUrl } from '../../util'
const Experience = () => {
  return (

    <section is='experience'>
        <h2>Experience</h2>
        <div>
            <div>
                <img src={getImageUrl('google.png')} alt="Google" />
            </div>
        </div>
    </section>
  )
}

export default Experience