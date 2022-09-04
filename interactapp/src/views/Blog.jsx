import React from 'react';
import { blogList } from '../config/blogData';
import Blogs from '../components/BlogList/Blogs';
import BlogHeader from '../components/BlogList/BlogHeader/BlogHeader';

const Blog = () => {
  return (
    <div>
      <BlogHeader/>
        
        <Blogs blogs={blogList}/>

    </div>

  )
}

export default Blog