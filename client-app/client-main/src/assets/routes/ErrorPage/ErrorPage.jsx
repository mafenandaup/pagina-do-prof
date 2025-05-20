import React from 'react'
import './ErrorPage.css'
import ReturnHomeButton from '../../components/ErrorPage/ReturnHomeButton'


const ErrorPage = () => {
  return (
    <section className='error-section' >

      <h1>404</h1>
      <p>A página que você está buscando não existe ¯\_(ツ)_/¯  </p>
      <ReturnHomeButton />

    </section>
  )
}

export default ErrorPage
