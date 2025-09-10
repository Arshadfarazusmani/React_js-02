import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import HomePage from './components/Home.jsx'
import About from './components/About.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },

      {
        path:"/About",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
