import React from 'react'
import { LoremIpsum } from "lorem-ipsum";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 5,
      min: 2
    }
  });

const ProjectCard = ({
  project: {
    description,
    title,
    coverImg,
    id
  }
}) => {
  return (
    <div className='container'>
    <Card className='project-card'
      style={{
        borderRadius: 14,
        display: 'flex',
      }}>

          <CardMedia className='image'
          component="img"
          image = {coverImg}
          />
    </Card>

    <CardActionArea className='project-action' component={RouterLink} to={`/projects/${id}`}>

    <Card className='project-name'>

          <CardContent style={{marginTop:5}}>
              <Typography variant="h6" className='project-title' style={{lineHeight:1.2, fontWeight:'bolder', fontSize:16, textAlign: "center"}}>
                {lorem.generateSentences(1)}
              </Typography>
            </CardContent>

    </Card>
    </CardActionArea>

    </div>
  )
}

export default ProjectCard