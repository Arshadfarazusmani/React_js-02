// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';

// 1. Create the Theme Context
const ThemeContext = createContext(null);

// 2. Create the Theme Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. The Toggle Button component that uses the context
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
      <span className="text-gray-600 dark:text-gray-300">Toggle Theme</span>
      <label htmlFor="theme-toggle" className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="theme-toggle"
          className="sr-only peer"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

// 4. The Product Card component that uses the context for styling
const ProductCard = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === 'dark';
  const cardBgColor = isDark ? '#262626' : '#FFFFFF';
  const titleColor = isDark ? '#F5F5F5' : '#171717';
  const priceColor = isDark ? '#FACC15' : '#3B82F6';
  const textColor = isDark ? '#A3A3A3' : '#6B7280';
  const buttonBgColor = isDark ? '#171717' : '#3B82F6';
  const buttonTextColor = isDark ? '#F5F5F5' : '#FFFFFF';

  return (
    <div 
      className="max-w-xs mx-auto my-10 rounded-2xl shadow-xl overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: cardBgColor }}
    >
      <div className="w-full h-64 overflow-hidden flex items-center justify-center">
        <img src="https://placehold.co/400x300/F5E8DC/332520?text=Apple+Watch" alt="Apple Watch" className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h2 
          className="text-xl font-bold mb-2"
          style={{ color: titleColor }}
        >
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h2>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {'★'.repeat(4)}{'☆'.repeat(1)}
          </div>
          <span className="ml-2 text-sm" style={{ color: textColor }}>4.0</span>
        </div>
        <div className="flex justify-between items-center">
          <span 
            className="text-2xl font-bold"
            style={{ color: priceColor }}
          >
            $599
          </span>
          <button 
            className="px-4 py-2 text-white font-medium rounded-full transition-colors duration-300"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

// 5. The Main App component that provides the theme
const App = () => {
  const { theme } = useContext(ThemeContext);

  const mainBg = theme === 'dark' ? '#171717' : '#F5F5F5';
  const mainTextColor = theme === 'dark' ? '#F5F5F5' : '#171717';

  return (
    <div style={{ backgroundColor: mainBg, color: mainTextColor }} className="min-h-screen relative p-4">
      <ThemeToggleButton />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ProductCard />
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
