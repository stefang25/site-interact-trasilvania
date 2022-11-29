import React from 'react'
import './style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../navbar/logos (2).svg'

const Footer = () => {
  return (
    <div className="footer">

        <div>
          <img src={logo} alt="" className='interact-logo' style={{height:7+"vw"}} />
        </div>
      <div className='footer-topics'>
        
        <div>
          <h2 style={{marginRight:16 +"vw" }} className='topic'>Overview</h2>
          <a className='link' href='/blog'><p className='under-topics'>Interact blog</p></a>
          <a className='link' href='/projects'><p className='under-topics'>Proiectele noastre</p></a>
          <a className='link' href='/about-us'><p className='under-topics'>Despre noi</p></a>
        </div>
        <div>
          <h2 className='topic'>Contact</h2>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <InstagramIcon fontSize='small' style={{color: '#ffffff', marginTop:-1+"vh", marginRight:5}}/>
            <a className='under-topics' href="https://www.instagram.com/interacttransilvania/" style={{width:180, textDecoration: 'none', display:'inline-block'}}>interacttransilvania</a>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginTop:10}}>
            <FacebookIcon fontSize='small' style={{color: '#ffffff', marginTop:-1+"vh", marginRight:5}}/>
            <a className='under-topics' href="https://www.facebook.com/profile.php?id=100082214877631" style={{textDecoration: 'none', display:'inline-block', width:180}}>Interact Transilvania</a>
          </div>
          
          <p className='under-topics'></p>
        </div>

      </div>
      
    </div>
  )
}

export default Footer