import React from 'react'
import './CreateItem.css'
import FormAula from './FormAula'
import FormAluno from './FormAluno'
import ReturnHomeButton from '../../components/ErrorPage/ReturnHomeButton'
import api from '../../../services/api'


async function createAula(aula) {
  try {
    const aulaCriada = await api.post('/aulas', aula);
    console.log('Aula criada com sucesso:', aulaCriada.data);
    window.alert('aula criada com sucesso!')

  } catch (error) {
    console.error('Erro ao criar aula:', error);
  }
}

// id de aula pra teste 6848742fc68ed410799cfab6

async function createAluno(aluno) {
  try {
    const alunoCriado = await api.post('/alunos', aluno);
    console.log('Aluno criado com sucesso:', alunoCriado.data);
    window.alert('aluno criado com sucesso!')

  } catch (error) {
    console.error('Erro ao criar aluno:', error);
  }
}
const CreateItem = () => {
  return (
    <>
      <div className="page-display">
        <div className="forms-display">
          <FormAula onCreateAula={createAula} />
          <FormAluno onCreateAluno={createAluno} />
        </div>
        <ReturnHomeButton />
      </div>
    </>
  )
}

export default CreateItem
