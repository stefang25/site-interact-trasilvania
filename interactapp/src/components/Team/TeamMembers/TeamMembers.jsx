import React from 'react'
import MemberCard from '../MemberCard/MemberCard'
import './style.css'

const TeamMembers = ({teamMembers}) => {
  return (
    <div className='members-list'>
        {teamMembers.map((member) => (
            <MemberCard member={member}/>
        ))}
    </div>
  )
}

export default TeamMembers