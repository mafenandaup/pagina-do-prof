import React from 'react'
import { Link } from 'react-router-dom'

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
