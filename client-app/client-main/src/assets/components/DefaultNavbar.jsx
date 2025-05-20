import React from 'react'
import { Link } from 'react-router-dom'

const DefaultNavbar = () => {
    return (
        <>
            <nav className='nav-homepage'>
                
                <Link to="/home" >Aulas</Link>
                <Link to="/alunos" >Alunos</Link>
                <Link to="/alunos" >alunos</Link>
            </nav>
        </>
    )
}

export default DefaultNavbar
