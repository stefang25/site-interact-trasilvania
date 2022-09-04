import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './style.css'

const AllProjects = ({projects}) => {
  return (
    <div className='listOfProjects'>
        {projects.map((project) => (

        <ProjectCard project={project} />
        
        ))}
    </div>
  )
}

export default AllProjects