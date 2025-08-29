// import React,{useContext} from "react";
// import UserContext from "../context/User.context";


// function Profile (){

//     const {User}=useContext(UserContext)

//     if(!User){
//         return(

//             <>
//             <span>Pleaase login</span>
//             </>
//         )
//     }

//     return(

//         <>


//         <h1>Welcome {User.username}</h1>

        
//         </>
//     )


// }

// export default Profile

import React, { useContext } from 'react';
import UserContext from "../context/User.context.js";

const Profile = () => {
  const { User, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
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

      {/* Profile Card */}
      <div className="relative z-10 p-8 md:p-12 rounded-3xl shadow-2xl card-bg w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105">

        {!User ? (
          <>
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-[#FF6B6B] animate-heart" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-8 font-['Playfair_Display'] tracking-wide drop-shadow-sm">
              اوہ!
            </h2>
            <p className="text-xl text-gray-700">برائے مہربانی اپنا پروفائل دیکھنے کے لیے لاگ ان کریں۔</p>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-[#FF6B6B] animate-heart" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-8 font-['Playfair_Display'] tracking-wide drop-shadow-sm">
              خوش آمدید!
            </h2>
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              {User.username}
            </p>
            {/* <button
              onClick={handleLogout}
              className="w-full py-4 px-6 text-lg font-bold text-white rounded-full love-gradient shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#FFC0CB] focus:ring-opacity-50"
            >
              لاگ آؤٹ
            </button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
