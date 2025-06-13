import React from 'react'
import "./popups.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { useState, useEffect } from 'react';

const PopUpAlunos = ({ aluno, onClose, onUpdate }) => {

    const [alunoData, setalunosData] = useState({
        nome: aluno?.nome || '',  // se os dados existem, serão autocompletados no forms. Caso contrário, o input estará em branco.
        email: aluno?.email || '',
        matricula: aluno?.matricula || '',
    });

    useEffect(() => {
        if (aluno) {
            setalunosData({ // se existe um aluno, os registros são configurados conforme o que é posto no input.
                nome: aluno.nome,
                email: aluno.email,
                matricula: aluno.matricula,
            });
        }
    }, [aluno]);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setalunosData((prevData) => ({ ...prevData, [name]: value }));
};


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!aluno.email.endsWith('@ucsal.edu.br')) {
            window.alert('O e-mail deve ser um endereço válido @ucsal.edu.br.');
            return;
        }

        window.alert('Aluno editado com sucesso!');

        await onUpdate(alunoData); // espera até que os alunos sejam atualizadas para fechar a aba.
        onClose();
    };
    
    return (
        <>
            <section className="popup-container" style={{ display: aluno ? 'block' : 'none' }} >
                <div className="title-container">
                    <h1>Editar aula</h1> <span className='closepopup' onClick={onClose}>X</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome do aluno</label>
                    <input type="text" name='nome'id='nome' value={alunoData.nome} onChange={handleInputChange} placeholder='EX: João da silva...' required />
                    <label htmlFor="email">Email do Aluno</label>
                    <input type="email" id="email" name='email' value={alunoData.email} onChange={handleInputChange} placeholder='fulanodetal.sobrenome@ucsal.edu.br' required />
                    <label htmlFor="class-date">ID da matéria correspondente</label>
                    <input type="text" name='matricula' id='matricula' value={alunoData.matricula} onChange={handleInputChange} placeholder='EX: 20239439053' />
                    <div className="btns-form">
                        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className='edit-btn' type="submit">Editar aluno</motion.button>
                        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className='delete-btn' type="reset" onClick={() => setalunosData({ nome: '', email: '', matricula: '' })} >Limpar campos</motion.button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default PopUpAlunos
