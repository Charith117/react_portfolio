import React from 'react'
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({project:{title,imageSrc,description,demo,}}) => {
  return (
    <div>
    {
      Project.map((project,id)=>{
        return <div key={id}>
          <img src={getImageUrl(project.imageSrc)} alt={`image of${project.title}`}/>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul>
            {project.skills.map((skill,id)=>{
              <li key={id}>{skill}</li>
            })}
          </ul>

          <div>
            <a href={project.demo}>Demo</a>
            <a href={project.source}></a>
          </div>
        </div>
      })

    }
  </div>
   )
}
