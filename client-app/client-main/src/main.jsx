import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './assets/routes/Home/Home.jsx'
import Alunos from './assets/routes/Alunos/Alunos.jsx'
import ErrorPage from './assets/routes/ErrorPage/ErrorPage.jsx'
import CreateItem from './assets/routes/CreateItem/CreateItem.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "/alunos",
        element: <Alunos />,
      },
        {
        path: "/create",
        element: <CreateItem />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


export default router;

