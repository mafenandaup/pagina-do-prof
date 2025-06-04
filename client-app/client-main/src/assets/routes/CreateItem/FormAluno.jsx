import React from 'react'
import './CreateItem.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const FormAluno = () => {
  return (
    <>
       <section className="main-container">
        <h1>Novo aluno</h1>
        <form action="">
          <label htmlFor="student-name">Nome do aluno</label>
          <input type="text" id='student-name' placeholder='EX: João da silva...' />
           <label htmlFor="student-email">Email do Aluno</label>
         <input type="email" name="student-email" id="student-email" placeholder='fulanodetal.sobrenome@ucsal.edu.br'/>
           <label htmlFor="class-date">ID da matéria correspondente</label>
          <input type="text" id='class-date' placeholder='EX: 20239439053' />
          <div className="btns-form">
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='edit-btn'  type="submit">Criar aluno</motion.button>
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='delete-btn' type="reset">Limpar campos</motion.button>
          </div>
        </form>
      </section>
    </>
  )
}

export default FormAluno
