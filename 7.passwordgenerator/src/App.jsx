


import React, { useState, useEffect, useCallback, useRef } from 'react';

function App() {
  // State variables for the app's functionality
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [copied, setCopied] = useState(false);

  // useRef hook to reference the password input field for clipboard functionality
  const passwordRef = useRef(null);

  // Memoizes the password generation function to prevent unnecessary re-creations.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-.+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
  }, [password]);

  // useEffect hook to automatically generate a password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // useEffect to handle the 'Copied!' message timeout
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000); // Hide the message after 2 seconds
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    // Main container with a dark, ethereal background
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-950 font-inter text-slate-100 p-6 overflow-hidden">
      
      {/* Soft, animated background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2
                    bg-gradient-to-r from-sky-500/10 to-indigo-500/10 blur-3xl opacity-50 animate-pulse-slow"></div>

      {/* Main card component with a minimalist, floating aesthetic */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-md bg-slate-900/60 
                    border border-slate-700 shadow-xl shadow-white/5 
                    transform transition-all duration-500 hover:scale-[1.02] hover:shadow-white/20">
        
        <h1 className="text-4xl font-extrabold text-center mb-8 tracking-wide
                    bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
          GENERATE
        </h1>

        {/* Password input and copy button */}
        <div className="relative flex mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Your Secure Password"
            className="flex-1 w-full px-6 py-4 bg-slate-800/60 rounded-l-xl text-lg text-white
                      focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all duration-300
                      placeholder:text-slate-500"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="relative px-6 py-4 rounded-r-xl text-lg font-bold text-slate-900
                      bg-gradient-to-r from-slate-200 to-slate-400 hover:scale-105 transform
                      transition-all duration-300 overflow-hidden group"
          >
            {copied ? 'Copied!' : 'Copy'}
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Options and controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8 text-sm">
          
          {/* Length control */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer
                        focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <label className="min-w-[80px] text-right font-medium text-slate-300">
              Length: <span className="text-slate-400">{length}</span>
            </label>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="form-checkbox h-5 w-5 rounded text-indigo-400 bg-slate-700 border-slate-600
                          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
              <span className="ml-2 text-slate-300">Numbers</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="form-checkbox h-5 w-5 rounded text-indigo-400 bg-slate-700 border-slate-600
                          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
              <span className="ml-2 text-slate-300">Characters</span>
            </label>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
