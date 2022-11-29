import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { LoremIpsum } from "lorem-ipsum";
import { projectsList } from '../../config/projectsData';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import './style.css';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});


const Project = () => {


    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        let project = projectsList.find((project) => project.id === parseInt(id));
        if (project) {
        setProject(project);
        }
    }, []);
  return (


      <div className='splitscreen'>
          <div className='left-project'>
            <h1 className='project-tag'>{project?.title}</h1>

            <div style={{display: 'flex'}}>
              <LocationOnOutlinedIcon className='icon' />
              <p className='about'>{project?.location}</p>
            </div>

            <div style={{marginTop: -10, display: 'flex'}}>
              <CalendarMonthOutlinedIcon  className='icon'/>
              <p className='about'>{project?.dateTime}</p>
            </div>

            <div>
              <h2 className='field' >Descriere:</h2>
              <h3 style={{textAlign:'justify'}} >{project?.description}</h3>
              <h2 className='field' >Scopul proiectului:</h2>
              <h3 style={{textAlign:'justify'}}>{project?.vision}</h3>
            </div>
          </div>

          <div className='right-project'>
            <div>
              {project?.landscapeImages.map(image => (
                <img src={image} className='project-image'/>
              ))}
          </div>
          </div>
      </div>
  )
}

export default Project