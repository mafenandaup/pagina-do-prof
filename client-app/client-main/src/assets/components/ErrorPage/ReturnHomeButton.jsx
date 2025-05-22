import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const ReturnHomeButton = () => {
    return (
        <>
            <Link to="/home">
                <motion.button className='return-home-btn' whileHover={{scale: 1.1}}>Voltar ao Início <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></motion.button>
            </Link>
        </>
    )
}

export default ReturnHomeButton
