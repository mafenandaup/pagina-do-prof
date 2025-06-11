import React from 'react'
import './CreateItem.css'
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const FormAula = ({ onCreateAula }) => {
  
  const [aula, setAula] = useState({
    materia: '',
    topico: '',
    horario: '',
  });

   const handleSubmit = (e) => {
    e.preventDefault(); // previne o navegador de recarregar a página (que é o que acontece quando não existem funções associadas ao input de tipo submit)
  
       if (!aula.materia || !aula.materia || !aula.horario) {
      window.alert('Por favor, preencha todos os campos.');
      return;
     }
     
     onCreateAula(aula); // usa o método via prop
     setAula({ materia: '', topico: '', horario: '' }); // limpa campos pós envio
  };

  const handleChange = (e) => { // atualiza dinamicamente o campo aula enquanto a mudança é feita
    const { id, value } = e.target; //objetivo do elemento DOM que disparou o evento
    setAula({ ...aula, [id]: value }); //atualiza o estado aula com o novo valor
  };

  return (
    <>
      <section className="main-container">
        <h1>Nova aula</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="materia">Nome da matéria</label>
          <input type="text" id='materia' value={aula.materia} onChange={handleChange} placeholder='EX: Programação Orientada a Objetos..' required/>
           <label htmlFor="topico">Tópico da matéria</label>
          <input type="text" id='topico' value={aula.topico} onChange={handleChange} placeholder='EX: Introdução ao Springboot..' required/>
           <label htmlFor="horario">Data da aula</label>
          <input type="date" id='horario' value={aula.horario} onChange={handleChange} placeholder='EX: Programação Orientada a Objetos..' required />
          <div className="btns-form">
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='edit-btn'  type="submit">Criar aula</motion.button>
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='delete-btn' type="reset" onClick={() => setAula({ materia: '', topico: '', horario: '' })}>Limpar campos</motion.button>
          </div>
        </form>
      </section>
    </>
  )
}

export default FormAula
