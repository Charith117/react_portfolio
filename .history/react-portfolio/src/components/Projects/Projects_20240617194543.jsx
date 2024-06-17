import React from 'react'
import styles from "./Projects.module.css"
import{getImageUrl} from "../../util"
import Projects from "../../data/project.json"
export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
          {
            projects.map((project,id)=>{
              return <div key={id}>
                <img src={project.imageSrc} alt={`image of${project.title}`}/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul>
                  
                </ul>
              </div>
            })

          }
        </div>
    </section>
  )
}
