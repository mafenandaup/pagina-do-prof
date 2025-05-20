import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

import Home from './assets/routes/Home.jsx'
import OtherPage from './assets/routes/OtherPage.jsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/outrapagina",
    element: <OtherPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
