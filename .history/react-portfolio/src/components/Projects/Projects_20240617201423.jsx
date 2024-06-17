import React from 'react'
import styles from "./Projects.module.css"
import Project from "../../data/project.json"

import projectCard from "./ProjectCard"


export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
          {Project.map((project,id)=>{
            return <ProjectCard key={id} project={project}/>;
          })}
        </div>
    </section>
  )
}
