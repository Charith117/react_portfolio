import React from 'react'
import styles from "./Projects.module.css"
import{getImageUrl} from "../../util"
import Project from "../../data/project.json"
import ProjectCard from ""
export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
          {project.map((project,id)=>{
            return <ProjectCard key={id} project={project}/>;
          })}
        </div>
    </section>
  )
}
