import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import{addTodo}from '../features/todo/todoSlice.js'


function AddTodo() {

    const [ input, setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(event)=>{
        event.preventDefault()

    


        dispatch(addTodo(input))
        setInput('')
    }



  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>


    </div>
  )
}

export default AddTodo

// import React, { useState } from 'react';

// // ====================== AddTodo Component ======================

// function AddTodo({ onAddTodo }) {
//   const [input, setInput] = useState('');

//   const addTodoHandler = (event) => {
//     event.preventDefault();
//     if (input.trim() === '') {
//       return;
//     }
//     onAddTodo(input);
//     setInput('');
//   };

//   return (
//     <div className="flex justify-center mt-12">
//       <form onSubmit={addTodoHandler} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-2xl">
//         <input
//           type="text"
//           className="w-full md:w-auto flex-grow bg-gray-800 rounded-lg border border-gray-700 
//                      focus:border-purple-500 focus:ring-2 focus:ring-purple-900 
//                      text-base outline-none text-gray-100 py-3 px-4 leading-relaxed 
//                      transition-colors duration-200 ease-in-out placeholder-gray-400
//                      shadow-lg transform hover:scale-[1.01] transition-transform"
//           placeholder="What's your next task?"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full md:w-auto text-lg text-white font-semibold 
//                      bg-gradient-to-r from-purple-600 to-indigo-600 
//                      border-0 py-3 px-8 rounded-full shadow-lg
//                      hover:from-purple-700 hover:to-indigo-700 
//                      focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
//                      transform hover:scale-105 transition-transform duration-200"
//         >
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// }


// export default AddTodo


