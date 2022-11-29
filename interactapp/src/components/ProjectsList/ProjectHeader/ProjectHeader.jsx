import React from 'react'
import './style.css'
import image from '../../../views/Group 11.svg'
import {useEffect, useState} from 'react';

const ProjectHeader = () => {
  
    

  const [windowSize, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  useEffect(() => {

    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);


  return (
    <div style={{backgroundImage: `url(${image})`}}>

        <h1 style={{marginTop:200}} className='header' >Proiectele noastre</h1>
        <p className='description'>Pentru a contribui la îmbunătățirea relației actuale a comunității cu arta pregătim evenimente în cadrul cărora promovăm creativitatea și spiritul de echipă.</p>

    </div>
  )
}

export default ProjectHeader