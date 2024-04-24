import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    // Cleanup
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []); 

  return (
    <nav>
      <div className="brand">Ecoyaan</div> {/* Brand Name */}
      {(toggleMenu || screenWidth > 757) && (
        <ul className="list">
          <li className="items"><Link to="/" className='items'>Home</Link></li>
          <li className="items"><Link to="/aboutus" className='items'>About Us</Link></li>
          <li className="items">Careers</li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn"><FontAwesomeIcon icon={faBars} /></button>
    
    </nav>
  );
}
