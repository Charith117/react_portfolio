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
            projects.map((Project,id)=>{
              return <div>
                <img src={project.imageSrc} alt="" />
              </div>
            })

          }
        </div>
    </section>
  )
}
