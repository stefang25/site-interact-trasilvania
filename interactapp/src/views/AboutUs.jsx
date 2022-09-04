import React from 'react'
import TeamHeader from '../components/Team/TeamHeader/TeamHeader'
import TeamMembers from '../components/Team/TeamMembers/TeamMembers'
import { membersList } from '../config/members' 

const AboutUs = () => {
  return (
    <div>
        <TeamHeader/>
        <TeamMembers teamMembers={membersList} />
    </div>
  )
}

export default AboutUs