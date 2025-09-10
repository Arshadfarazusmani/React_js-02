import React from 'react'
import { Link, NavLink } from 'react-router-dom';




const HomePage = () => {
const cremeLight = '#F5E8DC';
const caramelAccent = '#936E5A';

  return (
    <main style={{ backgroundColor: '#211815' }} className="min-h-screen pt-32 text-center text-creme-light flex flex-col items-center justify-center font-inter px-4 md:px-0">
      <h1 
        style={{ color: cremeLight }} 
        className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter"
      >
        Where Chocolate <span style={{ color: caramelAccent }}>Meets</span> Art
      </h1>
      <p 
        style={{ color: cremeLight }}
        className="mt-6 md:mt-8 text-xl md:text-2xl max-w-2xl font-light leading-relaxed"
      >
        Discover our curated collection of artisanal chocolates, each crafted with a passion for flavor and a commitment to quality. Indulge in an experience of pure elegance.
      </p>
      <Link 
        to="/shop" 
        className="mt-12 px-8 py-4 uppercase font-bold text-lg rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        style={{ 
          backgroundColor: caramelAccent, 
          color: cremeLight 
        }}
      >
        Explore Our Collection
      </Link>
    </main>
  );
};



export default HomePage
