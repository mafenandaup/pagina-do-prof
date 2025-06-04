import React from 'react'
import DefaultNavbar from '../../components/DefaultNavbar'
import ItemAluno from '../../components/Home/items/items/ItemAluno'

const Alunos = () => {
  return (
    <>
      <section className="alunos-aulas">
        <DefaultNavbar />
        <ItemAluno />
      </section>
    </>
  )
}

export default Alunos
