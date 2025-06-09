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

async function deleteAula(aulaId) {
  try {
    console.log('ID enviado para o backend:', aulaId);
    await api.delete(`/aulas/${aulaId}`);
    setAulas(aulas.filter((aula) => aula.id !== aulaId));
    console.log('Aula deletada com sucesso.');
  } catch (error) {
    console.error('Erro ao deletar aula:', error);
    console.log('ID recebido pelo frontend:', aulaId);
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
          <ItemAula key={aula.id} aula={aula}
            onDelete={() => deleteAula(aula.id)}
          />
        ))}
      </section>
    </>
  )
}

export default Home
