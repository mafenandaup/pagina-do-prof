import React from 'react'
import api from '../../../services/api'
import DefaultNavbar from '../../components/DefaultNavbar'
import './Home.css'
import ItemAula from '../../components/Home/items/items/ItemAula'
import { useState, useEffect } from 'react';


const Home = () => {

    const [aulas, setAulas] = useState([]);
    
async function getAulas() {
  try {
    const { data } = await api.get('/aulas');
    console.log('Dados recebidos:', data);
    setAulas(data);
  } catch (error) {
    console.error('Erro ao buscar aulas:', error.message);
    console.error('Detalhes do erro:', error);
  }
}

  // Função para deletar uma aula
  async function deleteAula(aulaId) {
    try {
      await api.delete(`/aulas/${aulaId}`);
      setAulas(aulas.filter((aula) => aula.id !== aulaId)); // Atualiza a lista localmente
    } catch (error) {
      console.error('Erro ao deletar aula:', error);
    }
  }

useEffect(() => {
    getAulas();
  }, []);

  return (
    <>
      <section className="alunos-aulas">
        <DefaultNavbar />
        {aulas.map((aula) => (
         <ItemAula key={aula.id} aula={aula} />
        ))}
      </section>
    </>
  )
}

export default Home
