import React from 'react'
import './App.css'
import Blog from './views/Blog';
import Article from './views/Article/Article.jsx'
import Projects from './views/Projects'
import Project from './views/Project/Project';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import AboutUs from './views/AboutUs';

const App = () => {
  return (
    <div className='container'>
        <Router>
            <Routes>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog/:id' element={<Article/>} />
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/projects/:id' element={<Project/>} />
                <Route path='/about-us' element={<AboutUs/>}/>
            </Routes>
        </Router>
    </div>

  )
}

export default App