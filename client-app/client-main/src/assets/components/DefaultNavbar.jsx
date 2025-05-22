import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const DefaultNavbar = () => {
    return (
        <>
            <nav className='nav-home'>
                
                <Link to="/home" className='link'>Aulas</Link>
                <Link to="/alunos" className='link' >Alunos</Link>
                <button>Inserir novo <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></button>
            </nav>
        </>
    )
}

export default DefaultNavbar
