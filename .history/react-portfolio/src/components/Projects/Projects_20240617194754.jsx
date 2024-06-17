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
                  {project.skills.map((skill,id)=>{
                    <li key={id}>{skill}</li>
                  })}
                </ul>

                <div>
                  <a href={project.demo}>Demo</a>
                  <a href={project.sourse}></a>
                </div>
              </div>
            })

          }
        </div>
    </section>
  )
}
