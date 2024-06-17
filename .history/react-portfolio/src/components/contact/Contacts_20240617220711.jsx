import React from 'react'
import {getImageUrl} from "../../util"
export const Contacts = () => {
  return (
    <footer>
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
            <img src={getImageUrl("contact/linklIcon.png")} alt="emial icon" />
            <a href="mailto:jayanithacharith7@gmail.com">jayanithacharith7@gmail.com</a>
        </li>
        <li>
            <img src={getImageUrl("contact/emailIcon.png")} alt="emial icon" />
            <a href="mailto:jayanithacharith7@gmail.com">jayanithacharith7@gmail.com</a>
        </li>
    </ul>
</footer>
  )
}
