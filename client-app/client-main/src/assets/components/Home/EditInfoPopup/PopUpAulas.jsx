import React from 'react'
import "./popups.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import api from '../../../../services/api';

const PopUpAulas = () => {

    // usar as chaves value tentando pegar os registros da aula em que cliquei.
    // em cada value, quero pegar o valor de cada aula mapeada na api.
    // quero fazer um método patch nesse popup, onde nem todas
    
  return (
      <>
    <section className="popup-container">
        <h1>Editar aula</h1>
        <form>
          <label htmlFor="materia">Nome da matéria</label>
          <input type="text" id='materia' value={'Programação web'} placeholder='EX: Programação Orientada a Objetos..' />
           <label htmlFor="topico">Tópico da matéria</label>
          <input type="text" id='topico' value={'Introdução ao Springboot'} placeholder='EX: Introdução ao Springboot..' />
           <label htmlFor="horario">Data da aula</label>
                  <input type="date" id='horario' placeholder='EX: Programação Orientada a Objetos..' />
                   <div className="btns-form">
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='edit-btn'  type="submit">Criar aula</motion.button>
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='delete-btn' type="reset" >Limpar campos</motion.button>
          </div>
        </form>
      </section>
      </>
  )
}

export default PopUpAulas
