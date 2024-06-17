import React from 'react'
import styles from "./Projects.module.css"
import Project from "../../data/project.json"
import ProjectCard from "./ProjectCard"


export const Projects = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div>
          {p\Project.map((project,id)=>{
            return <ProjectCard key={id} project={project}/>;
          })}
        </div>
    </section>
  )
}
