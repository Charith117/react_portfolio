import React from 'react'
import styles from "./Projects.module.css"
import{getImageUrl} from "../../util"
import Project from "../../data/project.json"
export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
          {
            project.map({Project,id})

          }
        </div>
    </section>
  )
}
