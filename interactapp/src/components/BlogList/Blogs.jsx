import React from 'react'
import BlogCard from './BlogCard/BlogCard'
import { blogList } from '../../config/blogData'

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className='listOfBlogs' style={{justifyContent:'center'}}>
          {blogs.map((blog) => (

          <BlogCard blog={blog} key={blog.id} />
          
          ))}
      </div>
        
    </>
  )
}

export default Blogs