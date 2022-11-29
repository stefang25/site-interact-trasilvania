import React from 'react'
import Navbar from './components/navbar/navbar'
import './App.css'
import Blog from './views/Blog';
import Article from './views/Article/Article.jsx'
import Projects from './views/Projects'
import Project from './views/Project/Project';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import AboutUs from './views/AboutUs';
import Home from './views/Home';
import Footer from './components/footer/Footer'


const App = () => {
  return (<>
    <Navbar/>
    
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<Article/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/:id' element={<Project/>} />
        <Route path='/about-us' element={<AboutUs/>}/>
      </Routes>
    </div>
    <Footer style={{position:'absolute', top:0, bottom:0}}/>
  </>)

  
}

export default App