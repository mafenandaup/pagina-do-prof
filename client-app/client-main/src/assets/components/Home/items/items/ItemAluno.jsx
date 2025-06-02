import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./items.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"


const ItemAluno = () => {
  return (
   <>
               <section className="item-container">
                   <figure className="icon"><FontAwesomeIcon icon={faUser} /></figure>
                   <div className="textbox">
                       <h1>Nome do aluno - matricula do aluno</h1>
                       <p>aula do aluno</p>
                   </div>
                   <div className="container-btns">
                       <motion.button whileHover={{scale: 1.08}}  className="delete-btn"><FontAwesomeIcon icon={faTrash} /> Deletar aluno</motion.button>
                       <motion.button whileHover={{scale: 1.08}} className="edit-btn"><FontAwesomeIcon icon={faPenToSquare}/> Editar aluno</motion.button>
                   </div>
                   
               </section>
           </>
  )
}

export default ItemAluno
