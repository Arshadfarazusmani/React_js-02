import { Link } from 'react-router-dom';

const Header = () => {
  // Hardcoded colors from the logo for a cohesive look
  const espressoDark = '#332520';
  const cremeLight = '#F5E8DC';
  const caramelAccent = '#936E5A';

  return (
    <header
      className="flex justify-between items-center px-6 md:px-16 py-6 shadow-lg fixed w-full z-50 top-0 transition-shadow duration-500"
      style={{ backgroundColor: espressoDark }}
    >
      {/* Logo Section */}
      <div className="logo h-12 md:h-16 flex items-center">
        <Link 
          to="/" 
          className="text-3xl md:text-4xl font-extrabold tracking-wide transition-colors duration-300 ease-in-out"
          style={{ 
            color: cremeLight, 
            fontFamily: "'Noto Serif', serif", 
            letterSpacing: '0.05em' 
          }}
        >
          Chocafusion
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <ul className="flex items-center space-x-8 md:space-x-12">
          <li>
            <Link 
              to="/" 
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <span
                className="text-sm md:text-base font-light uppercase tracking-widest transition-colors duration-300 group-hover:text-caramel-accent"
                style={{ 
                  color: cremeLight, 
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link 
              to="/shop" 
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <span
                className="text-sm md:text-base font-light uppercase tracking-widest transition-colors duration-300 group-hover:text-caramel-accent"
                style={{ 
                  color: cremeLight, 
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Shop
              </span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <span
                className="text-sm md:text-base font-light uppercase tracking-widest transition-colors duration-300 group-hover:text-caramel-accent"
                style={{ 
                  color: cremeLight, 
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <span
                className="text-sm md:text-base font-light uppercase tracking-widest transition-colors duration-300 group-hover:text-caramel-accent"
                style={{ 
                  color: cremeLight, 
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <span
                className="text-sm md:text-base font-bold uppercase tracking-widest transition-colors duration-300"
                style={{ 
                  color: caramelAccent, 
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.1em' 
                }}
              >
                Cart
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



