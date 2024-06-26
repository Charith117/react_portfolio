import React from 'react'
import styles from "./ProjectCard.module.css"
import {getImageUrl} from "../../util"

export const ProjectCard = ({project:{title,imageSrc,description,demo,source,skills}}) => {
  return (
    <div className={styles.container}>
          <img
          className={styles.image}  
          src={getImageUrl(imageSrc)} alt={`image of${title}`}/>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>

          <ul className={styles.skills}>
            {skills.map((skill,id)=>{
              <li className={styles.skill} key={id}>{skill}</li>
            })}
          </ul>

          <div className={styles.links}>
            <a href={demo}className={styles.link}>Demo</a>
            <a href={source}className={styles.link}>demo</a>
          </div>
  </div>
   );
};
