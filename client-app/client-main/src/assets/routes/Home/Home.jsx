import React from 'react'

import DefaultNavbar from '../../components/DefaultNavbar'
import './Home.css'
import ItemAula from '../../components/Home/items/items/ItemAula'

const Home = () => {
  return (
    <>
      <section className="alunos-aulas">
        <DefaultNavbar />
        <ItemAula />
      </section>
    </>
  )
}

export default Home
