import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./items.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const ItemAluno = ({ aluno, onDelete, onEdit }) => {
    return (
        <>
            <section className="item-container">
                <figure className="icon"><FontAwesomeIcon icon={faUser} /></figure>
                <div className="textbox">
                    <h1>{aluno.nome} - {aluno.email}</h1>
                    <p>(Matrícula : {aluno.matricula})</p>
                </div>
                <div className="container-btns">
                    <motion.button whileHover={{ scale: 1.08 }} className="delete-btn" onClick={(e) => {
                        e.stopPropagation();
                        console.log('Clique no botão de deletar aluno com ID:', aluno.id); // Adicione este log
                        onDelete();
                    }}
                    ><FontAwesomeIcon icon={faTrash} /> Deletar aluno</motion.button>
                    <motion.button whileHover={{ scale: 1.08 }} className="edit-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit();
                        }}
                    ><FontAwesomeIcon icon={faPenToSquare} /> Editar aluno</motion.button>
                </div>

            </section>
        </>
    )
}

export default ItemAluno
