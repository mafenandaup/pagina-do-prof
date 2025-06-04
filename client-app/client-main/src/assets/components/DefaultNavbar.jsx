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
                
                <Link to="/"className={`link ${location.pathname === '/' ? 'active' : ''}`}><motion.h3 whileHover={{scale: 1.06}} whileTap={{scale:0.8}} >Aulas</motion.h3 ></Link>
                <Link to="/alunos" className={`link ${location.pathname === '/alunos' ? 'active' : ''}`} ><motion.h3 whileHover={{scale: 1.06}} whileTap={{scale:0.8}}>Alunos</motion.h3 ></Link>
                <Link to="/create"><motion.button className='additem-btn'whileHover={{scale: 1.06}} whileTap={{scale:1}}>Novo aluno/aula     <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></motion.button></Link>
            </div>
        </>
    )
}

export default DefaultNavbar
