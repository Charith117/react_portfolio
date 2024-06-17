import React from 'react'
import styles from "./ProjectCard.module.css"
import {getImageUrl} from "../../util"

export const ProjectCard = ({project:{title,imageSrc,description,demo,source,skills}}) => {
  return (
    <div className={styles.container}>
          <img
          className={styles.Image}  
          src={getImageUrl(imageSrc)} alt={`image of${title}`}/>
          <h3 className={styles.title}>{title}</h3>
          <PublicKeyCredential>{description}</p>

          <ul>
            {skills.map((skill,id)=>{
              <li key={id}>{skill}</li>
            })}
          </ul>

          <div>
            <a href={demo}>Demo</a>
            <a href={source}></a>
          </div>
  </div>
   );
};
