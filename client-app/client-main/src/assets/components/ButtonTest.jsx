import React from 'react'
import { Link } from 'react-router-dom'

const ButtonTest = () => {
    return (
        <div>
            <Link to="/alunos">
                <button>Para teste</button>
            </Link>
        </div>
    )
}

export default ButtonTest
