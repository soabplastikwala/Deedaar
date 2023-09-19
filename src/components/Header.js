import React, { useState } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);

  const linkStyle = {
    color: 'lightcoral',
    textDecoration: 'none',
    marginRight: '14px',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: 'red',
  };

  const handleMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredLinkIndex(null);
  };

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[180px]'>
          <img src={Logo} alt='' />
        </Link>

        <nav className='hidden lg:flex gap-x-14 font-semibold'>
          
            <Link
              to='/'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 0 ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
      

         
            <Link
              to='/about'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 1 ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              About
            </Link>
          
         

    
            <Link
              to='/portfolio'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 2 ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              Portfolio
            </Link>
         
          

        
            <Link
              to='/contact'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 3 ? linkHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </Link>
        
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
