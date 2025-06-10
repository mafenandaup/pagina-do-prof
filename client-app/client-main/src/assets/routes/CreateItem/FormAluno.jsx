import React from 'react'
import './CreateItem.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { useState } from 'react'

const FormAluno = ({ onCreateAluno }) => {

  const [aluno, setAluno] = useState({
    nome: '',
    email: '',
    aulaId: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); //mesma coisa dos métodos em formAula

    // obrigatório preencher todos os campos
       if (!aluno.nome || !aluno.aulaId || !aluno.email) {
      window.alert('Por favor, preencha todos os campos.');
      return;
    }

    // validação de email
    if (!aluno.email.endsWith('@ucsal.edu.br')) {
      window.alert('O e-mail deve ser um endereço válido @ucsal.edu.br.');
      return;
    }

    onCreateAluno(aluno);
    setAluno({ nome: '', email: '', aulaId: '' }); // limpa campos pós envio
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAluno({ ...aluno, [id]: value });
  };

  return (
    <>
      <section className="main-container">
        <h1>Novo aluno</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome do aluno</label>
          <input type="text" id='nome' value={aluno.nome} onChange={handleChange} placeholder='EX: João da silva...' />
          <label htmlFor="email">Email do Aluno</label>
          <input type="email" id="email" value={aluno.email} onChange={handleChange} placeholder='fulanodetal.sobrenome@ucsal.edu.br' />
          <label htmlFor="class-date">ID da matéria correspondente</label>
          <input type="text" id='aulaId' value={aluno.aulaId} onChange={handleChange} placeholder='EX: 20239439053' />
          <div className="btns-form">
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className='edit-btn' type="submit">Criar aluno</motion.button>
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className='delete-btn' type="reset">Limpar campos</motion.button>
          </div>
        </form>
      </section>
    </>
  )
}

export default FormAluno
