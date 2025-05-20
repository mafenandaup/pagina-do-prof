import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ReturnHomeButton = () => {
    return (
        <>
            <Link to="/alunos">
                <button>Voltar ao Início</button>
            </Link>
        </>
    )
}

export default ReturnHomeButton
