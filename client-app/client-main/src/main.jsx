import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

import Home from './assets/routes/Home.jsx'
import OtherPage from './assets/routes/OtherPage.jsx'
import ErrorPage from './assets/routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/outrapagina",
        element: <OtherPage />
      },
      {
        path: "/home",
        element: <Home />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
