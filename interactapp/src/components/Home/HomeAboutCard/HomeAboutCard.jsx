import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import svg from './Group 10.svg';
import image1 from './by.png'
import image2 from './2.svg'
import image3 from './3.svg'
import { CardMedia, Button, CardContent, CardActionArea, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { projectsList } from '../../../config/projectsData';
import { blogList } from '../../../config/blogData';
import {useEffect, useState} from 'react';
import ProjectCard from '../../ProjectsList/ProjectCard/ProjectCard';
import './style.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    neutral: {
      main:"#0c3c7c"
    },
    blue: {
      
    }
  }
});

const HomeAboutCard = () => {
    document.body.style.overflowX = "hidden"

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
        <div className="cont" style={{}}>
          <ThemeProvider theme={theme}>
            <Card className='card'
            style={{ height:windowSize.winHeight, width:windowSize.winWidth}}>
                <CardMedia className='imagee'
                    component="img"
                    image={image1}
                    style={{}}
                />
            </Card>
            <h1 className='interact' style={{color:'white', position:'absolute', top:0.50 * windowSize.winHeight, fontSize:95, fontWeight:700, lineHeight: 1}}>Interact<br/>Transilvania</h1>
            <h2 className='subtitle' style={{color:'white', position:'absolute',top:0.8 * windowSize.winHeight, fontSize:32, fontWeight:500, marginLeft:550}}>Service above self.</h2>
            <img className='background' src={svg} alt="" style={{ width: windowSize.winWidth, overflowX:'hidden'}}/>
            <div className='content' style={{position:'absolute', top:1.1*windowSize.winHeight}}>
              <div className='description' style={{width:700, marginLeft:10+"%", textAlign:'left'}}>
                <h2 className='about-heading' style={{fontWeight:600, fontSize:4+"vw", marginTop:15+"%"}}>Ce este Interact?</h2>
                <p className='about-interact' style={{fontSize:1.3+"vw", fontWeight:400, width:50+"vw"}}>Interact este o organizație non-guvernamentală și non-profit care țintește spre o lume mai bună. Valorile interactiene sunt reprezentate de UNITATE, DIVERSITATE, ONESTITATE, EMPATIE, INTEGRITATE si CREATIVITATE. 
                <br /><br />Clubul nostru de voluntariat, Interact Transilvania este adresat tinerilor dornici de a găsi soluții la problemele comunității noastre, prin intermediul propriilor pasiuni. Prin organizarea unor evenimente culturale în cadrul cărora vom promova creativitatea și spiritul de echipă, ne propunem îmbunătățirea relației actuale a comunității cu arta</p>
                {/* <Button variant='outlined' disableRipple='true' sx={{borderRadius:4, width:45 + "%", height:60}}><p >For Patients</p></Button> */}
                <Button variant='outlined' disableRipple='true' href="./about-us" style={{ borderRadius:50, height:50, color:'#01B4E7', borderColor:'#01B4E7', marginTop:+10}}><h2 className='about-button' style={{textTransform:'none', fontWeight:400, fontSize:1.3+"vw", fontFamily:'Fraunces'}}>Despre Interact Transilvania</h2></Button>

              </div>

              <div style={{width:100 + "vw", fontWeight:600, fontSize:60+"%", marginTop:20+"%"}}>
                <h1 className='blog-heading-home' style={{textAlign:"center", fontSize:3+"vw"}}>Blogul Interact Transilvania</h1>
                <p className='blog-content-home' style={{fontSize:1.2+"vw", textAlign:'center', marginRight:20+"%", marginLeft:20+"%"}}>Din dorința de a ne extinde poveștile și gândurile cu cei din jurul nostru am creat blogul Interact Transilvania, care are trei obiecte de interes: cultura, viața cotidiana și Interact Transilvania.</p>
                {/* <Card className='card'
                style={{ height:200, width:700}}>
                </Card> */}




              <div className='splitscreen-home' >
                          
                        
                <div className='left'>
                  <div className='container'>
                      <Card className='project-card'
                        style={{
                          borderRadius: 14,
                          display: 'flex',
                        }}>

                            <CardMedia
                            component="img"
                            image = {blogList[0].coverImg}
                            />
                      </Card>

                      <CardActionArea className='project-action' component={RouterLink} to={`/blog/1`} >

                      <Card className='project-name' >

                            <CardContent style={{marginTop:0.7+"vw"}}>
                                <Typography variant="h2" className='project-title' style={{lineHeight:1.2, fontSize:1.8+"vh", textAlign: "center"}}>
                                  {blogList[0].title}
                                </Typography>
                              </CardContent>

                      </Card>
                      </CardActionArea>

                  </div>
                  
                </div>


                <div className='right'>
                  <div className='container'>
                      <Card className='project-card'
                        style={{
                          borderRadius: 14,
                          display: 'flex',
                        }}>

                            <CardMedia
                            component="img"
                            image = {blogList[1].coverImg}
                            />
                      </Card>

                      <CardActionArea className='project-action' component={RouterLink} to={`/blog/2`}>

                      <Card className='project-name'>

                            <CardContent style={{marginTop:0.7+"vw"}}>
                                <Typography variant="h2" className='project-title' style={{lineHeight:1.2, fontSize:1.8+"vh", textAlign: "center"}}>
                                  {blogList[1].title}
                                </Typography>
                              </CardContent>

                      </Card>
                      </CardActionArea>

                  </div>
                </div>

                </div>


                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button className='more-button' variant="contained" href="./blog" color="neutral" style={{height:4+"vw", width:15+"vw", color:"#ffffff", borderRadius:50, display:'flex', justifyContent:'center', marginTop:-1.5+"%"}}><h2 className='more' style={{textTransform:'none', fontWeight:400, fontSize:1.2+"vw", fontFamily:'Fraunces'}}>Citeste mai mult</h2></Button>
                </div>

                <h1 className='blog-heading-home' style={{textAlign:"center", marginTop:15+"%", fontSize:3+"vw"}}>Proiectele noastre</h1>
                <p className='blog-content-home' style={{fontSize:1.2+"vw", textAlign:'center', marginRight:20+"%", marginLeft:20+"%"}}>Pentru a contribui la îmbunătățirea relației actuale a comunității cu arta pregătim <br /> evenimente în cadrul cărora promovăm creativitatea și spiritul de echipă.</p>
                


                <div className='splitscreen-home'>
                          
                        
                  <div className='left'>
                    <div className='container' >
                        <Card className='project-card'
                          style={{ 
                            borderRadius: 14,
                            display: 'flex',
                          }}>

                              <CardMedia
                              component="img"
                              image = {projectsList[0].coverImg}
                              />
                        </Card>

                        <CardActionArea className='project-action' component={RouterLink} to={`/projects/1`} >

                        <Card className='project-name'>

                              <CardContent style={{marginTop:0.7+"vw"}}>
                                  <Typography variant="h2" className='project-title' style={{lineHeight:1.2, fontSize:1.8+"vh", textAlign: "center"}}>
                                    {projectsList[0].title}
                                  </Typography>
                                </CardContent>

                        </Card>
                        </CardActionArea>

                    </div>
                    
                  </div>


                  <div className='right'>
                    <div className='container' >
                        <Card className='project-card'
                          style={{
                            borderRadius: 14,
                            display: 'flex'
                          }}>

                              <CardMedia
                              component="img"
                              image = {projectsList[1].coverImg}
                              />
                        </Card>

                        <CardActionArea className='project-action' component={RouterLink} to={`/projects/2`}>

                        <Card className='project-name'>

                              <CardContent style={{marginTop:0.7+"vw"}}>
                                  <Typography variant="h2" className='project-title' style={{lineHeight:1.2, fontSize:1.8+"vh", textAlign: "center"}}>
                                    {projectsList[1].title}
                                  </Typography>
                                </CardContent>

                        </Card>
                        </CardActionArea>

                    </div>
                  </div>


                </div>


                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button className='more-button' variant="contained" color="neutral" href="./projects" style={{height:4+"vw", width:15+"vw", color:"#ffffff", borderRadius:50, display:'flex', justifyContent:'center', marginTop:-1.5+"%"}}><h2 className='more' style={{textTransform:'none', fontWeight:400, fontSize:1.2+"vw", fontFamily:'Fraunces'}}>Afla mai mult</h2></Button>
                </div>
          </div>
                          
            {/* <img src={image3} alt="" style={{ width:windowSize.winWidth, marginTop:-55}}/> */}
            {/* <div className='splitscreen' style={{position:'absolute', top:2.2*windowSize.winHeight}}>
            
           
                <div className='left'>
                  <h2 style={{fontWeight:600, fontSize:38, textAlign:'center', color:'#ffffff'}}>Blog</h2>
                  <div className='container'>
                      <Card
                        style={{
                          borderRadius: 14,
                          display: 'flex',
                          height:400,
                          width:280
                        }}>

                            <CardMedia
                            component="img"
                            image = {blogList[0].coverImg}
                            />
                      </Card>

                      <CardActionArea className='project-action' component={RouterLink} to={`/blog/1`}>

                      <Card className='project-name'>

                            <CardContent style={{marginTop:5}}>
                                <Typography variant="h2" className='project-title' style={{lineHeight:1.2, fontSize:16, textAlign: "center"}}>
                                  {blogList[0].title}
                                </Typography>
                              </CardContent>

                      </Card>
                      </CardActionArea>

                  </div>
                  <div style={{display:'flex', justifyContent:'center'}}>
                    <Button variant="contained" color="neutral" style={{height:50, color:"#ffffff", borderRadius:50, display:'flex', justifyContent:'center'}}><h2 style={{textTransform:'none', fontWeight:400, fontSize:17, fontFamily:'Montserrat'}}>Cisteste mai mult</h2></Button>
                  </div>
                  
                </div>


                <div className='right'>
                  <h2 style={{fontWeight:600, fontSize:38, textAlign:'center', marginTop:-50, color:'#ffffff'}}>Proiecte</h2>
                  <div className='container'>
                      <Card
                        style={{
                          borderRadius: 14,
                          display: 'flex',
                          height:400,
                          width:280
                        }}>

                            <CardMedia
                            component="img"
                            image = {projectsList[0].coverImg}
                            />
                      </Card>

                      <CardActionArea className='project-action' component={RouterLink} to={`/projects/1`}>

                      <Card className='project-name'>

                            <CardContent style={{marginTop:5}}>
                                <Typography variant="h2" className='project-title' style={{lineHeight:1.2, fontSize:16, textAlign: "center"}}>
                                  {projectsList[0].title}
                                </Typography>
                              </CardContent>

                      </Card>
                      </CardActionArea>

                  </div>
                </div> */}
                 
              
            </div> 



            </ThemeProvider>
        </div>
    )
}

export default HomeAboutCard