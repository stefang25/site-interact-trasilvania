import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/blogData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { LoremIpsum } from "lorem-ipsum";
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

const Article = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div style={{}}>
      <p className='publishing-date'>Published on {blog?.date}</p>
      <h1 className='title'>{blog?.title}</h1>
      <p className='subtitle' style={{textAlign:'center', fontSize:17, marginTop:-15}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <Card className='image-card' >
            <CardMedia className='card-img' component="img" image={blog?.landscapeImg}/>
        </Card>
      </div>
      <h3 className='article' style={{textAlign:'center'}}>{lorem.generateParagraphs(10)}</h3>
      
    </div>
  )
};

export default Article;
