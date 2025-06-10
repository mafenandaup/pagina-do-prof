import React from 'react'
import DefaultNavbar from '../../components/DefaultNavbar'
import ItemAluno from '../../components/Home/items/items/ItemAluno'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../../services/api';


const Alunos = () => {

  const { aulaId } = useParams();
  const [alunos, setAlunos] = useState([]);

    useEffect(() => {
      async function getAlunos() {
      try {
        const { data } = await api.get(`/aulas/${aulaId}/alunos`); // Chama o endpoint
        setAlunos(data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error.message);
      }
    }

    getAlunos();
  }, [aulaId]);

  return (
    <>
      <section className="alunos-aulas">
        <DefaultNavbar />
        {alunos.map((aluno) => (
          <ItemAluno key={aluno.id} aluno={aluno} />
        ))}
      </section>
    </>
  );
};

export default Alunos;