
import './App.css'
import Login from './components/Login'
import Profile from './components/profile.jsx'
import UserContextProvider from './context/userContext.provider.jsx'

function App() {
  


  return (
    
      <UserContextProvider>

         < Login/>
         <Profile/>

      </UserContextProvider>

     
      
      
  )
}

export default App
