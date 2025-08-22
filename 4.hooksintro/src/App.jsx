import './App.css'
import { useState } from 'react'



// Without any hook 

// function App() {
  

//   let counter= 15

//   const addValue= ()=>{
//     counter=counter+1
//     console.log("value added : ",counter);
    

//   }  

//   const removeValue= ()=>{
//     counter=counter-1
//     console.log("value removed :", counter);
    

//   }


//   return (
//     <>
//      <h1>Chai aur react</h1>
//      <h2>Counter value : {counter}</h2>

//      <button 
//      onClick={addValue}
//      >Add value</button>
//      <br />
//      <button 
//      onClick={
//       removeValue
//      }
//      >remove value</button>
//     </>
//   )
// / }

// export default App

// there is inconsistancy bitween UI and State -> State is changing but UI is not updating 
//  NO sync bitween UI and state 
// ui updation 



// With Hooks 
// React controls the ui updation 
// useState hook -> help in ui updation and statemanegement 

function App() {

  let [counter,setCounter]=useState(0)
  let [message,setMessage]=useState("")
  

  // let counter= 15

  const addValue= ()=>{
    if (counter>=15) {
      setMessage("Maximum value reached !!")
      return
      
    }
    counter=counter+1
    setCounter(counter)
    console.log("value added : ",counter);
    

  }  

  const removeValue= ()=>{
    if (counter<=0) {
      setMessage("Can't go below 0 ")
      return
      
    }

    if (counter>=0) {
      setMessage()
      return
      
    }
    counter=counter-1
    setCounter(counter)
    console.log("value removed :", counter);
    

  }


  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value : {counter}</h2>
     <h2>{message}</h2>

     <button 
     onClick={addValue}
     >Add value {counter}</button>
     <br />
     <button 
     onClick={
      removeValue
     }
     >remove value {counter}</button>

     <div>Footer : {counter}</div>
     <div>Footer : {counter}</div>
     
    </>
  )
}

export default App
