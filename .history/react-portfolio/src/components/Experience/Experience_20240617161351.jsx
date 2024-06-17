import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import styles from "./Experience.module.css"
import { getImageUrl } from '../../util'
const Experience = () => {
  return (

    <section is='experience'>
        <h2>Experience</h2>
        <div>
            <div>
              { skills.map((skill, id)=>{
                    return (
                    <div key={id}>
                                <div><img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                
                                </div>
                                <p>{skill.title}</p>
                         </div>
                        
                         );
               })}
            </div> 
            <ul>
                {
                    history.map((historyItem,id)=>{
                        return <li key={id}>
                                <img src={getImageUrl(historyItem.imageSrc)}
                                alt={`${historyItem.organisation}Logo`} />

                                <div>
                                    <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((ecperience))}
                                    </ul>
                                </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Experience