import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const DefaultNavbar = () => {
    return (
        <>
            <div className='nav-home'>
                
                <Link to="/" className='link'>Aulas</Link>
                <Link to="/alunos" className='link' >Alunos</Link>
                <motion.button className='additem-btn'whileHover={{scale: 1.06}}>Inserir novo      <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></motion.button>
            </div>
        </>
    )
}

export default DefaultNavbar
