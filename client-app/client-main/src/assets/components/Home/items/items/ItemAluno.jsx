import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./items.css";


const ItemAluno = () => {
  return (
   <>
               <section className="item-container">
                   <figure className="icon"><FontAwesomeIcon icon={faUser} /></figure>
                   <div className="textbox">
                       <h1>Nome da aula</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   </div>
                   <div className="container-btns">
                       <button className="delete-btn"><FontAwesomeIcon icon={faTrash} /> Deletar aluno</button>
                       <button className="edit-btn"><FontAwesomeIcon icon={faPenToSquare}/> Editar aluno</button>
                   </div>
                   
               </section>
           </>
  )
}

export default ItemAluno
