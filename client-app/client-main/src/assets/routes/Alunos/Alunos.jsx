import React from 'react'
import DefaultNavbar from '../../components/DefaultNavbar'
import ItemAluno from '../../components/Home/items/items/ItemAluno'
import { useState, useEffect } from 'react';
import api from '../../../services/api';


const Alunos = () => {

  const [alunos, setAlunos] = useState([]);

  async function getAlunosAll() {
    try {
      const { data } = await api.get('/alunos');
      console.log('Dados recebidos do backend:', data);
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar todos os alunos:', error.message);
    }
  }

async function deleteAluno(alunoId) {
  try {
    console.log('ID enviado para o backend:', alunoId);
    await api.delete(`/alunos/${alunoId}`); 
    await getAlunosAll();
    console.log('Aluno deletado com sucesso.');
  } catch (error) {
    console.error('Erro ao deletar aluno:', error.message);
    console.log('ID recebido pelo frontend:', alunoId);
  }
}

  useEffect(() => {
    getAlunosAll();
  }, []);
  return (
    <>
      <section className="alunos-aulas">
        <DefaultNavbar />
        {alunos.map((aluno) => (
          <ItemAluno
            key={aluno.matricula}
            aluno={aluno}
            onDelete={() => deleteAluno(aluno.matricula)}
          />
        ))}

      </section>
    </>
  );
};

export default Alunos;