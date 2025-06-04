import React from 'react'
import './CreateItem.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const FormAula = () => {
  return (
    <>
      <section className="main-container">
        <h1>Nova aula</h1>
        <form action="">
          <label htmlFor="class-name">Nome da matéria</label>
          <input type="text" id='class-name' placeholder='EX: Programação Orientada a Objetos..' />
           <label htmlFor="class-topic">Tópico da matéria</label>
          <input type="text" id='class-topic' placeholder='EX: Introdução ao Springboot..' />
           <label htmlFor="class-date">Data da aula</label>
          <input type="date" id='class-date' placeholder='EX: Programação Orientada a Objetos..' />
          <div className="btns-form">
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='edit-btn'  type="submit">Criar aula</motion.button>
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='delete-btn' type="reset">Limpar campos</motion.button>
          </div>
        </form>
      </section>
    </>
  )
}

export default FormAula
