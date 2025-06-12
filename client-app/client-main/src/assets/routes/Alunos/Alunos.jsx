import React from 'react'
import DefaultNavbar from '../../components/DefaultNavbar'
import ItemAluno from '../../components/Home/items/items/ItemAluno'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../../services/api';
import PopUpAlunos from '../../components/Home/EditInfoPopup/PopUpAlunos';
import PopUpAulas from '../../components/Home/EditInfoPopup/PopUpAulas';

const Alunos = () => {
  const { aulaId } = useParams();
  console.log('aulaId capturado pelo useParams:', aulaId);// aulaId do item aula selecionado ao clicar
  const [alunos, setAlunos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // controla visibidade dos popups de edição
  const [selectedAluno, setSelectedAluno] = useState(null); // dados para o aluno selecionado para ser editada


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
  
  async function getAlunosAll() {
    try {
      const { data } = await api.get('/alunos');
      console.log('Dados recebidos do backend:', data);
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar todos os alunos:', error.message);
    }
  }

  const getAlunosFiltered = async (aulaId) => {
    try {
      const { data } = await api.get(`/aulas/${aulaId}/alunos`);
      console.log('Dados recebidos do backend:', data);
      setAlunos(data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error.message);
    }
  };

  async function updateAluno(updatedAluno) {
    try {
      await api.patch(`/alunos/${selectedAluno.alunoId}`, updatedAluno); // Atualize a rota corretamente
      setAlunos((prevAlunos) =>
        prevAlunos.map((aluno) =>
          aluno.alunoId === selectedAluno.alunoId
            ? { ...aluno, ...updatedAluno }
            : aluno
        )
      );
      console.log('Aluno atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error.message);
    }
  }


  function openForm(aluno) {
    console.log('Abrindo popup para o aluno:', aluno);
    setSelectedAluno(aluno);
    setIsPopupOpen(true);
  }

  function closeForm() {
    setSelectedAluno(null);
    setIsPopupOpen(false);
  }


  useEffect(() => {
    if (aulaId) {
      getAlunosFiltered(aulaId);
    } else {

      getAlunosAll();
    }
  }, [aulaId]);



  return (
    <>
      <section className="alunos-aulas">
        <DefaultNavbar />
        {alunos.map((aluno) => (
          <ItemAluno
            key={aluno.alunoId}
            aluno={aluno}
            onDelete={() => deleteAluno(aluno.alunoId)}
            onEdit={openForm}
            onClose={closeForm}
          />
        ))}
      </section>
      {isPopupOpen && (
        <PopUpAlunos
          aluno={selectedAluno}
          onClose={closeForm}
          onUpdate={updateAluno}
        />
      )}
    </>
  );
};

export default Alunos;