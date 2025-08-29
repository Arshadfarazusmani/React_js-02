
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/User.ContextProvider'


function App() {
  
  return (
    <UserContextProvider>

      <Login/>

      <Profile/>
      
      


    </UserContextProvider>
  )
}

export default App
