import React from 'react'
import "./popups.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { useState, useEffect } from 'react';

const PopUpAulas = ({aula, onClose , onUpdate}) => {

    const [aulaData, setAulasData] = useState({
    materia: aula?.materia || '',  // se os dados existem, serão autocompletados no forms. Caso contrário, o input estará em branco.
    topico: aula?.topico || '',
    horario: aula?.horario || '',
  });
    
    useEffect(() => {
    if (aula) {
      setAulasData({ // se existe uma aula, os registros são configurados conforme o que é posto no input.
        materia: aula.materia,
        topico: aula.topico,
        horario: aula.horario,
      });
    }
  }, [aula]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAulasData({ ...aulaData, [id]: value }); 
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      window.alert('Aula editada com sucesso!')
    await onUpdate(aulaData); // espera até que as aulas sejam atualizadas para fechar a aba.
    onClose();
    };
    
  return (
      <>
          <section className="popup-container" style={{ display: aula ? 'block' : 'none' }} >
              <div className="title-container">
                  <h1>Editar aula</h1> <span className='closepopup' onClick={onClose}>X</span>
              </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="materia">Nome da matéria</label>
          <input type="text" id='materia' value={aulaData.materia} onChange={handleInputChange} placeholder='EX: Programação Orientada a Objetos..' required />
           <label htmlFor="topico">Tópico da matéria</label>
          <input type="text" id='topico' value={aulaData.topico} onChange={handleInputChange} placeholder='EX: Introdução ao Springboot..' required />
           <label htmlFor="horario">Data da aula</label>
                  <input type="date" id='horario' value={aulaData.horario} onChange={handleInputChange} placeholder='EX: Programação Orientada a Objetos..' />
                   <div className="btns-form">
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='edit-btn'  type="submit" >Editar aula</motion.button>
            <motion.button whileHover={{scale:1.08}} whileTap={{scale:1}} className='delete-btn' type="reset" onClick={() => setAulasData({ materia: '', topico: '', horario: '' })} >Limpar campos</motion.button>
          </div>
        </form>
      </section>
      </>
  )
}

export default PopUpAulas
