import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./items.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const ItemAula = () => {
    return (
        <>
            <section className="item-container">
                <figure className="icon"><FontAwesomeIcon icon={faBook} /></figure>
                <div className="textbox">
                    <h1>Nome da aula</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="container-btns">
                    <motion.button whileHover={{scale: 1.08}} className="delete-btn"><FontAwesomeIcon icon={faTrash} /> Deletar aula</motion.button>
                    <motion.button whileHover={{scale: 1.08}} className="edit-btn"><FontAwesomeIcon icon={faPenToSquare}/> Editar aula</motion.button>
                </div>
                
            </section>
        </>
    )
}

export default ItemAula
