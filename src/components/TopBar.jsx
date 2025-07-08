import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation items with their paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Team', path: '/OurTeam' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <style>
        {`
          .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 5%;
            background-color: #fff;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            height:5rem;
            z-index: 1000;
            transition: all 0.4s ease;
            box-sizing: border-box;
          }
          
          .top-bar.scrolled {
            padding: 0.8rem 5%;
            background-color: #44c2c7;
          }
          
          .logo-container {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            height: 40px;
          }
          
          .logo-img {
            height: 100%;
            max-width: 180px;
            object-fit: contain;
            transition: all 0.3s ease;
          }
          
          .scrolled .logo-img {
            filter: brightness(0) invert(1);
          }
          
          .nav-container {
            display: flex;
            gap: 1.8rem;
            overflow-x: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
            padding: 0 0.5rem;
          }
          
          .nav-container::-webkit-scrollbar {
            display: none;
          }
          
          .nav-item {
            position: relative;
            font-weight: 500;
            color: #333;
            text-transform: capitalize;
            transition: all 0.3s ease;
            padding: 0.5rem 0;
            white-space: nowrap;
            flex-shrink: 0;
            text-decoration: none;
          }
          
          .scrolled .nav-item {
            color: rgba(255, 255, 255, 0.85);
          }
          
          .nav-item:hover {
            color: #44c2c7;
          }
          
          .scrolled .nav-item:hover {
            color: white;
          }
          
          .nav-item.active {
            color: #44c2c7;
            font-weight: 600;
          }
          
          .scrolled .nav-item.active {
            color: white;
          }
          
          .underline {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #44c2c7;
            transition: width 0.3s ease;
          }
          
          .scrolled .underline {
            background-color: white;
          }
          
          .nav-item:hover .underline,
          .nav-item.active .underline {
            width: 100%;
          }
          
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .top-bar {
            animation: slideDown 0.5s ease-out forwards;
          }
          
          /* Mobile menu button */
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #44c2c7;
            z-index: 1001;
          }
          
          .scrolled .mobile-menu-btn {
            color: white;
          }
          
          /* Mobile menu overlay */
          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 998;
            display: none;
          }
          
          .mobile-menu-overlay.visible {
            display: block;
          }
          
          /* Responsive adjustments */
          @media (max-width: 768px) {
            .nav-container {
              position: fixed;
              top: 0;
              right: ${mobileMenuOpen ? '0' : '-100%'};
              height: 100vh;
              width: 70%;
              background: white;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              padding-top: 5rem;
              gap: 2rem;
              transition: right 0.4s ease;
              z-index: 999;
              box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            }
            
            .scrolled .nav-container {
              background: #44c2c7;
            }
            
            .mobile-menu-btn {
              display: block;
            }
            
            .mobile-menu-overlay.visible {
              display: block;
            }
            
            .top-bar {
              padding: 1rem 5%;
            }
            
            .top-bar.scrolled {
              padding: 0.7rem 5%;
            }
          }
          
          @media (max-width: 480px) {
            .nav-container {
              width: 85%;
            }
          }
        `}
      </style>

      <header className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <NavLink to="/">
            <img 
              src="/Cera logo.png" 
              alt="CERA Medical Logo" 
              className="logo-img" 
            />
          </NavLink>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <div 
          className={`mobile-menu-overlay ${mobileMenuOpen ? 'visible' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <nav className={`nav-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
              onClick={() => {
                if (isMobile) {
                  setMobileMenuOpen(false);
                }
              }}
            >
              {item.name}
              <span className="underline"></span>
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  );
};

export default TopBar;