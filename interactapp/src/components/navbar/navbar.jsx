import React from 'react'
import { AppBar, Button, Tab, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import './style.css'
import logo from './logos (2).svg'

import { stack as Menu } from 'react-burger-menu';

const NavBar = () => {
  return (
    <AppBar position='fixed' style={{ background: '#ffffff', boxShadow: 'none', height:90}}>
        <Toolbar className='toolbar' color='#ffffff'>
          <a href="/"><img className='logo' src={logo} style={{height:60, justifyContent:'center', marginTop:15, marginLeft:4+"vw"}} /></a>
        
          <Stack direction='row' spacing={7} className='stack' style={{}}>
              <a className='tab' href='/about-us'>Despre noi</a>
              <a href="/projects" className='tab'>Proiecte</a>
              <a href="/blog" className='tab' style={{marginRight:4+"vw"}}>Blog</a>
          </Stack>


          <Menu right className="hamburger">
            <a className="menu-item" href="/about-us">
              Despre noi
            </a>
            <a className="menu-item" href="/projects">
              Proiecte
            </a>
            <a className="menu-item" href="/blog">
              Blog
            </a>
          </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar