import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const HomeProjectHeader = () => {
    return (
        <div>
                {/* aici vine imagine si logo */}
                <Link to="/projects">
                    <Button variant="contained">Vezi proiectele noastre</Button>
                </Link>
                <Link to="/blog">
                    <Button variant="contained">Vezi blogul nostru</Button>
                </Link>
        </div>
    )
}

export default HomeProjectHeader
