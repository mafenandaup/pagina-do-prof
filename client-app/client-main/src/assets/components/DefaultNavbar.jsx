import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const DefaultNavbar = () => {
    return (
        <>
            <div className='nav-home'>
                
                <Link to="/home" className='link'>Aulas</Link>
                <Link to="/alunos" className='link' >Alunos</Link>
                <button>Inserir novo <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></button>
            </div>
        </>
    )
}

export default DefaultNavbar
