import React from 'react'
import './CreateItem.css'
import FormAula from './FormAula'
import FormAluno from './FormAluno'
import ReturnHomeButton from '../../components/ErrorPage/ReturnHomeButton'

const CreateItem = () => {
  return (
    <>
      <div className="page-display">
        <div className="forms-display">
          <FormAula />
          <FormAluno />
        </div>
        <ReturnHomeButton />
      </div>
    </>
  )
}

export default CreateItem
