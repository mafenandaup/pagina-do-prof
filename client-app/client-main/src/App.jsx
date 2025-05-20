
import './App.css'

import { Outlet } from 'react-router-dom'
import ButtonTest from './assets/components/ButtonTest'

function App() {

  return (
    <>
      <div>
        <ButtonTest/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
