import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children : [

      {
        path:"",
        element: <Home/>
      },

      {
        path:"/About",
        element: <About/>
      },
      {
        path:"/Contact",
        element: <Contact/>
      },

      {
        path:"/user/:id",
        element: <User/>
      
      }
      
      
    ]

    


  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
