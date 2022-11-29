import React from 'react'
import AllProjects from '../components/ProjectsList/AllProjects/AllProjects';
import { projectsList } from '../config/projectsData';
import ProjectHeader from '../components/ProjectsList/ProjectHeader/ProjectHeader';
import image from './Group 11.svg'
import {useEffect, useState} from 'react';


const Projects = () => {
  return (
    <div>
      
      <ProjectHeader/>
       
        <AllProjects projects={projectsList} />

    </div>
  )
}

export default Projects