import React from 'react'
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({project:{title,imageSrc,description,demo,source}}) => {
  return (
    <div>
    {
      Project.map((project,id)=>{
        return <div key={id}>
          <img src={getImageUrl(imageSrc)} alt={`image of${title}`}/>
          <h3>{title}</h3>
          <p>{description}</p>

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
      })

    }
  </div>
   )
}
