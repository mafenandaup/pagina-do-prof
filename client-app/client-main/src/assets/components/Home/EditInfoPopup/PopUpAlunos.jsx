import React from 'react'
import "./popups.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import api from '../../../../services/api';

const PopUpAlunos = () => {
  return (
      <>
        <section className="popup-container">
         <h1>Edit aluno</h1>
                <form>
                  <label htmlFor="nome">Nome do aluno</label>
                  <input type="text" id='nome' value={'nome random'}  placeholder='EX: João da silva...' required />
                  <label htmlFor="email">Email do Aluno</label>
                  <input type="email" id="email"  placeholder='fulanodetal.sobrenome@ucsal.edu.br' required/>
                  <label htmlFor="class-date">ID da matéria correspondente</label>
                  <input type="text" id='aulaId'  placeholder='EX: 20239439053' />
                  <div className="btns-form">
                    <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className='edit-btn' type="submit">Criar aluno</motion.button>
                    <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className='delete-btn' type="reset">Limpar campos</motion.button>
                  </div>
                </form>
      </section>
      </>
  )
}

export default PopUpAlunos
