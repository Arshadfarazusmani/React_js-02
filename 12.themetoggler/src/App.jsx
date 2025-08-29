import { ThemeContextProvider } from './contexts/theme.js'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import ThemeBtn from './components/theamebtn.jsx'
import Card from './components/card.jsx'


function App() {
  const [themeMode,setTheme]=useState("Light")

  const lightTheme=()=>{
    // if(themeMode==="Light"){
    //   return 
    // }

    setTheme("Dark")



  }
  const darkTheme=()=>{
    // if(themeMode==="Dark"){
    //   return 
    // }

    setTheme("Light")



  }


  // Actual change in theame mode 

  useEffect(()=>{

    document.querySelector('html').classList.remove("Light","Dark")
    document.querySelector('html').classList.add(themeMode)


  },[themeMode])

  return (
    <>

    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                      <ThemeBtn></ThemeBtn>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       

                       <Card></Card>
                    </div>
                </div>
            </div>

</ThemeContextProvider>


    </>
  )
}

export default App
