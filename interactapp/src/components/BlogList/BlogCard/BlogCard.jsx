import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LoremIpsum } from "lorem-ipsum";
import { CardActionArea } from '@mui/material';
import './style.css'
import { Link as RouterLink } from 'react-router-dom';

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


const BlogCard = ({ 
  blog: {
    description,
    title,
    author,
    coverImg,
    landscapeImg,
    id,
    date
  },
}) => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <CardActionArea component={RouterLink} to={`/blog/${id}`} className='card-action'
        style={{
          display: 'flex',
          borderRadius: 14
        }}
        >
      <Card className='blog-card'
        style={{
          display: 'flex',
          borderRadius: 14
        }}>


            <CardMedia className='card-image'
            component="img"
            image = {coverImg}
            />

              <CardContent className='card-text'>
                
                <Typography variant="h1" className='blog-name' style={{ lineHeight:1, position:'relative', fontWeight:'bolder'}}>
                {lorem.generateSentences(1)}
                </Typography>
                <Typography className='blog-description'  variant='h3' style={{}}>
                  {lorem.generateSentences(20)}
                </Typography>
                <Typography variant='body2'className='blog-author' style={{ position: 'relative'}}>
                  written by {author}
                </Typography>
              </CardContent>

      </Card>
      </CardActionArea>
    </div>
  );
}


export default BlogCard

