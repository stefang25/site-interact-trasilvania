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
    <div style={{marginTop:160}}>
      <p className='publishing-date'>Publicat in data de {blog?.date}</p>
      <h1 className='title-article' style={{marginRight:10+"%", marginLeft:10+"%", color: "#112035", textAlign:'center'}}>{blog?.title}</h1>
      <p className='subtitle-article' style={{textAlign:'center'}}>{blog?.subtitle}</p>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <Card className='image-card' >
            <CardMedia className='card-img' component="img" image={blog?.landscapeImg}/>
        </Card>
      </div>
      <h3 className='article'>{blog?.paragraph1} <br /></h3>
      <h3 className='article'>{blog?.paragraph2} <br /></h3>
      <h3 className='article'>{blog?.paragraph3} <br /></h3>
      <h3 className='article'>{blog?.paragraph4} <br /></h3>
      <h3 className='article' >{blog?.paragraph5} <br /></h3>
      <h3 className='article' >{blog?.paragraph6}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph7}</h3>
      <h3 className='article' >{blog?.paragraph8}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph9}</h3>
      <h3 className='article' >{blog?.paragraph10}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph11}</h3>
      <h3 className='article' >{blog?.paragraph12}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph13}</h3>
      <h3 className='article'>{blog?.paragraph14}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph15}</h3>
      <h3 className='article' >{blog?.paragraph16}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph17}</h3>
      <h3 className='article'>{blog?.paragraph18}</h3>
      <h3 className='article' style={{fontSize:24, fontWeight:500}}>{blog?.paragraph19}</h3>
      <h3 className='article' >{blog?.paragraph20}</h3>

      
    </div>
  )
};

export default Article;
