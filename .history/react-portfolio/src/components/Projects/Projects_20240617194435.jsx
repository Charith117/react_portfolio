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
                <img src={project.imageSrc} alt={`image${project.title}`}/>
              </div>
            })

          }
        </div>
    </section>
  )
}
