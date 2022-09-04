import React from 'react'
import AllProjects from '../components/ProjectsList/AllProjects/AllProjects';
import { projectsList } from '../config/projectsData';
import ProjectHeader from '../components/ProjectsList/ProjectHeader/ProjectHeader';


const Projects = () => {
  return (
    <div>
      <ProjectHeader/>
       
        <AllProjects projects={projectsList} />

    </div>
  )
}

export default Projects