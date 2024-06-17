import React from 'react'
import {getImageUrl} from "../../util"
import styles from "./Conatct"
export const Contacts = () => {
  return (
    <footer className={styles.container}>
    <div>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul>
        <li>
            <img src={getImageUrl("contact/emailIcon.png")} alt="emial icon" />
            <a href="mailto:jayanithacharith7@gmail.com">jayanithacharith7@gmail.com</a>
        </li>
        <li>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linked icon" />
            <a href="https://www.linkedin.com/myname">Linkedin.myname</a>
        </li>
        <li>
            <img src={getImageUrl("contact/githubIcon.png")} alt="emial icon" />
            <a href="https://github.com/Charith117">github.com/Charith117</a>
        </li>
    </ul>
</footer>
  )
}
