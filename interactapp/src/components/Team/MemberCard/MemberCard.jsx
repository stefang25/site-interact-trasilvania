import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom'
import './style.css'

const MemberCard = ({
    member: {
        name,
        role,
        image,
        id,
        instagram,
        instagramLink
    }
}) => {
  return (
    <div style={{textAlign: 'center', marginRight:20, marginLeft:20, marginTop:20}}>
        <Card className='member'>
            <CardMedia className='member-img'
            component="img"
            image = {image}
            />
        </Card>
        <div style={{textAlign: 'center'}}>
          <h3>{name}</h3>
          <div style={{}}>
            <InstagramIcon style={{color: '#D41367', marginBottom:-7, marginRight:5}}/>
            <a href={instagramLink} style={{textDecoration: 'none', color: '#33495f', display:'inline-block'}}>{instagram}</a>
          </div>
        </div>
    </div>
  )
}

export default MemberCard