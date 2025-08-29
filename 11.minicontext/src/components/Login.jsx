// import { useState , useContext } from "react";
// import React  from "react";
// import UserContext from "../context/User.context.js";


// function  Login (){

//     const [username,setUsername]= useState('')
//     const [Password, setPassword]= useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e)=>{
//         console.log("clicked");
        
    
//         setUser({username})


//     }
//     return(
//         <>

        

//         <div>

//             <h2>Login</h2>
//             <input   value={username} type="text" placeholder="Username"   onChange={(e)=>setUsername(e.target.value)}/>
//             <input  value={Password} type="text" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
//             <button onClick={handleSubmit}>Submit</button>
        


//         </div>


        
//         </>
//     )
// }

// export default Login


import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <div className="love-gradient flex items-center justify-center min-h-screen relative overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600&display=swap');

          body {
              font-family: 'Poppins', sans-serif;
              overflow: hidden; /* Prevent scrollbars from animation */
          }

          .love-gradient {
              background: linear-gradient(135deg, #FF6B6B, #F6A3B9, #FFC0CB, #FF8E71);
          }

          .card-bg {
              background: rgba(255, 255, 255, 0.9);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
          }

          /* Keyframes for the bubble animation */
          @keyframes bubble {
              0% {
                  transform: translateY(0) scale(0.5);
                  opacity: 0;
              }
              50% {
                  opacity: 1;
              }
              100% {
                  transform: translateY(-100vh) scale(1.5);
                  opacity: 0;
              }
          }
          
          .bubble {
              position: absolute;
              bottom: -100px;
              background-color: rgba(255, 255, 255, 0.5);
              border-radius: 50%;
              animation: bubble 10s infinite ease-in-out;
          }

          /* Specific bubble sizes and animations */
          .bubble-lg {
              width: 80px;
              height: 80px;
          }

          .bubble-md {
              width: 60px;
              height: 60px;
              animation-duration: 12s;
              animation-delay: 2s;
          }

          .bubble-sm {
              width: 40px;
              height: 40px;
              animation-duration: 15s;
              animation-delay: 4s;
          }

          /* Pulse animation for the heart icon */
          @keyframes pulse-heart {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
          }

          .animate-heart {
              animation: pulse-heart 1.5s infinite ease-in-out;
          }
        `}
      </style>

      {/* Bubbles Animation Background */}
      <div className="absolute inset-0 z-0">
        <div className="bubble bubble-lg left-[10%]"></div>
        <div className="bubble bubble-md left-[30%]" style={{ animationDelay: '3s' }}></div>
        <div className="bubble bubble-sm left-[50%]" style={{ animationDelay: '5s' }}></div>
        <div className="bubble bubble-lg left-[70%]" style={{ animationDelay: '7s' }}></div>
        <div className="bubble bubble-md left-[90%]" style={{ animationDelay: '9s' }}></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 p-8 md:p-12 rounded-3xl shadow-2xl card-bg w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105">
        
        {/* WOW Factor: Animated Heart Icon */}
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-[#FF6B6B] animate-heart" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-8 font-['Playfair_Display'] tracking-wide drop-shadow-sm">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 pl-14 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8E71] transition-all duration-300 ease-in-out shadow-inner text-gray-700 placeholder-gray-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
          </div>
          {/* <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 pl-14 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8E71] transition-all duration-300 ease-in-out shadow-inner text-gray-700 placeholder-gray-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9V5a3 3 0 00-6 0v4"></path></svg>
            </span>
          </div> */}
          
          <button 
            type="submit"
            className="w-full py-4 px-6 text-lg font-bold text-white rounded-full love-gradient shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#FFC0CB] focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-[#FF6B6B] font-semibold hover:underline transition-colors duration-300">Sign Up</a>
        </p>

      </div>
    </div>
  );
};

export default Login;
