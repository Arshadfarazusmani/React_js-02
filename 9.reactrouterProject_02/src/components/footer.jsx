import { Link, NavLink } from "react-router-dom";



const Footer = () => {
  const espressoDark = '#332520';
  const cremeLight = '#F5E8DC';
  const caramelAccent = '#936E5A';

  return (
    <footer
      className="flex flex-col items-center text-center px-6 md:px-16 py-12"
      style={{ backgroundColor: espressoDark, color: cremeLight }}
    >
      <div className="max-w-4xl mx-auto">
        <h3
          className="text-2xl md:text-3xl font-extrabold mb-4"
          style={{ 
            fontFamily: "'Noto Serif', serif", 
            color: cremeLight 
          }}
        >
          Chocafusion
        </h3>
        <p className="text-sm md:text-base font-light font-inter mb-6 leading-relaxed opacity-80 max-w-lg mx-auto">
          Crafting moments of pure indulgence. Join our journey where tradition meets innovation in every bite.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-creme-light hover:text-caramel-accent transition-colors duration-300">
            {/* Replace with social media icons */}
            <span className="text-xl">Facebook</span>
          </a>
          <a href="#" className="text-creme-light hover:text-caramel-accent transition-colors duration-300">
            <span className="text-xl">Instagram</span>
          </a>
          <a href="#" className="text-creme-light hover:text-caramel-accent transition-colors duration-300">
            <span className="text-xl">Twitter</span>
          </a>
        </div>
      </div>

      {/* Copyright Info */}
      <div className="pt-8 border-t border-stone-700 w-full mt-8">
        <p className="text-xs md:text-sm font-inter text-stone-400">
          © {new Date().getFullYear()} Chocafusion. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer