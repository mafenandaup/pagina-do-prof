import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./items.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const ItemAula = ({ aula , onDelete , onEdit }) => { //props p. funções e assimilação de dados.

    return (
        <>
            <motion.section  whileHover={{ scale: 1.02 }}   whileTap={{scale: 1}} className="item-container">
                <figure className="icon"><FontAwesomeIcon icon={faBook} /></figure>
                <div className="textbox">
                    <h1>{aula.materia} - {new Date(aula.horario).toLocaleDateString()}</h1>
                    <p>{aula.topico}</p>
                </div>
                <div className="container-btns">
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{scale: 0.9}}
                        className="delete-btn"
                        onClick={onDelete}
                    >
                        <FontAwesomeIcon icon={faTrash} /> Deletar aula
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{scale: 0.9}}
                        className="edit-btn"
                        onClick={onDelete}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} /> Editar aula
                    </motion.button>
                </div>
            </motion.section>
        </>
    )
}

export default ItemAula
