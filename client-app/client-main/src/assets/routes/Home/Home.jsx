import React from 'react'
import api from '../../../services/api'
import DefaultNavbar from '../../components/DefaultNavbar'
import './Home.css'
import ItemAula from '../../components/Home/items/items/ItemAula'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom' // importa o useNavigate para a navegação filtrada ao clicar em cada aula
import PopUpAulas from '../../components/Home/EditInfoPopup/PopUpAulas'
import { Link } from 'react-router-dom'



const Home = () => {

  const [aulas, setAulas] = useState([]);
   const navigate = useNavigate();
const [isPopupOpen, setIsPopupOpen] = useState(false); // controla visibidade dos popups de edição
const [selectedAula, setSelectedAula] = useState(null); // dados para a aula selecionada para ser editada


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

async function updateAula(updatedAula) {
  try {
    await api.patch(`/aulas/${selectedAula.id}`, updatedAula);
    setAulas((prevAulas) =>
      prevAulas.map((aula) =>
        aula.id === selectedAula.id ? { ...aula, ...updatedAula } : aula
      )
    );
    console.log('Aula atualizada com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar aula:', error);
  }
}

function openForm(aula) {
  setSelectedAula(aula);
  setIsPopupOpen(true);

}

function closeForm() {
  setSelectedAula(null);
  setIsPopupOpen(false);
}


useEffect(() => {
  getAulas();
}, []);

return (
  <>
    <section className="alunos-aulas">
      <DefaultNavbar />
      {aulas.map((aula) => (
        <ItemAula
          key={aula.id}
          aula={aula}
          onEdit={openForm}
          onDelete={() => deleteAula(aula.id)}
          onClick={() => navigate(`/aulas/${aula.id}/alunos`)}
          onClose={closeForm}
        />
      ))}
    </section>
    {isPopupOpen && (
      <PopUpAulas
        aula={selectedAula}
        onClose={closeForm}
        onUpdate={updateAula}
      />
    )}
  </>
)
}

export default Home
